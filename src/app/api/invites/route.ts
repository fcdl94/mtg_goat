import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

// POST /api/invites - Create a new invite
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { podId, playerId, senderId } = body;

        // Validate required fields
        if (!podId || !playerId || !senderId) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Check if pod exists
        const pod = await prisma.pod.findUnique({
            where: { id: podId },
            include: {
                players: true,
            },
        });

        if (!pod) {
            return NextResponse.json(
                { error: "Pod not found" },
                { status: 404 }
            );
        }

        // Check if sender is an admin of the pod
        const senderPlayerPod = pod.players.find(
            (pp) => pp.playerId === senderId && pp.role === "ADMIN"
        );

        if (!senderPlayerPod) {
            return NextResponse.json(
                { error: "Only pod admins can send invites" },
                { status: 403 }
            );
        }

        // Check if player is already in the pod
        const isPlayerInPod = pod.players.some((pp) => pp.playerId === playerId);

        if (isPlayerInPod) {
            return NextResponse.json(
                { error: "Player is already in the pod" },
                { status: 400 }
            );
        }

        // Check if an invite already exists
        const existingInvite = await prisma.podInvite.findFirst({
            where: {
                podId,
                playerId,
                status: "PENDING",
            },
        });

        if (existingInvite) {
            return NextResponse.json(
                { error: "An invite has already been sent to this player" },
                { status: 400 }
            );
        }

        // Create the invite
        const invite = await prisma.podInvite.create({
            data: {
                pod: { connect: { id: podId } },
                player: { connect: { id: playerId } },
                sender: { connect: { id: senderId } },
                status: "PENDING",
            },
        });

        return NextResponse.json(invite, { status: 201 });
    } catch (error) {
        console.error("Error creating invite:", error);
        return NextResponse.json(
            { error: "Failed to create invite" },
            { status: 500 }
        );
    }
}

// PUT /api/invites/:id - Update an invite (accept/reject)
export async function PUT(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const body = await request.json();
        const { status } = body;
        const url = new URL(request.url);
        const id = url.pathname.split("/").pop();

        if (!id) {
            return NextResponse.json(
                { error: "Invite ID is required" },
                { status: 400 }
            );
        }

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
            await prisma.podPlayer.create({
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