/*
  Warnings:

  - You are about to drop the column `winnerId` on the `Game` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "PodRole" AS ENUM ('ADMIN', 'MEMBER');

-- CreateEnum
CREATE TYPE "InviteStatus" AS ENUM ('PENDING', 'ACCEPTED', 'DECLINED');

-- DropForeignKey
ALTER TABLE "Deck" DROP CONSTRAINT "Deck_playerId_fkey";

-- AlterTable
ALTER TABLE "Deck" ADD COLUMN     "guestName" TEXT,
ADD COLUMN     "isGuest" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "playerId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Game" DROP COLUMN "winnerId",
ADD COLUMN     "createdById" TEXT,
ADD COLUMN     "notes" TEXT;

-- AlterTable
ALTER TABLE "GameDeck" ADD COLUMN     "playerId" TEXT;

-- AlterTable
ALTER TABLE "PlayerPod" ADD COLUMN     "role" "PodRole" NOT NULL DEFAULT 'MEMBER';

-- AlterTable
ALTER TABLE "Pod" ADD COLUMN     "isPublic" BOOLEAN NOT NULL DEFAULT true;

-- CreateTable
CREATE TABLE "PodInvite" (
    "id" TEXT NOT NULL,
    "podId" TEXT NOT NULL,
    "playerId" TEXT NOT NULL,
    "senderId" TEXT NOT NULL,
    "status" "InviteStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PodInvite_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PodInvite_podId_playerId_key" ON "PodInvite"("podId", "playerId");

-- AddForeignKey
ALTER TABLE "Deck" ADD CONSTRAINT "Deck_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PodInvite" ADD CONSTRAINT "PodInvite_podId_fkey" FOREIGN KEY ("podId") REFERENCES "Pod"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PodInvite" ADD CONSTRAINT "PodInvite_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PodInvite" ADD CONSTRAINT "PodInvite_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "Player"("id") ON DELETE CASCADE ON UPDATE CASCADE;
