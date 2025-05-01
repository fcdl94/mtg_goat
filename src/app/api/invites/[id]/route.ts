import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

// PUT /api/invites/:id - Update an invite (accept/reject)
export async function PUT(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const { id } = params;
        const body = await request.json();
        const { status } = body;

        // Validate status
        if (!status || !["ACCEPTED", "REJECTED"].includes(status)) {
            return NextResponse.json(
                { error: "Invalid status" },
                { status: 400 }
            );
        }

        // Get the invite
        const invite = await prisma.podInvite.findUnique({
            where: { id },
            include: {
                pod: true,
            },
        });

        if (!invite) {
            return NextResponse.json(
                { error: "Invite not found" },
                { status: 404 }
            );
        }

        // Check if invite is already resolved
        if (invite.status !== "PENDING") {
            return NextResponse.json(
                { error: "Invite has already been resolved" },
                { status: 400 }
            );
        }

        // Update the invite status
        const updatedInvite = await prisma.podInvite.update({
            where: { id },
            data: { status },
        });

        // If accepted, add player to the pod
        if (status === "ACCEPTED") {
            await prisma.playerPod.create({
                data: {
                    pod: { connect: { id: invite.podId } },
                    player: { connect: { id: invite.playerId } },
                    role: "MEMBER",
                },
            });
        }

        return NextResponse.json(updatedInvite);
    } catch (error) {
        console.error("Error updating invite:", error);
        return NextResponse.json(
            { error: "Failed to update invite" },
            { status: 500 }
        );
    }
} 