import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

// PUT /api/pods/:id - Update a pod
export async function PUT(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const { id } = params;
        const body = await request.json();
        const { name, description, isPublic, creatorId } = body;

        // Validate required fields
        if (!name || typeof isPublic !== "boolean") {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Get the pod
        const pod = await prisma.pod.findUnique({
            where: { id },
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

        // Check if requester is an admin
        const isAdmin = pod.players.some(
            (pp) => pp.playerId === creatorId && pp.role === "ADMIN"
        );

        if (!isAdmin) {
            return NextResponse.json(
                { error: "Only pod admins can update a pod" },
                { status: 403 }
            );
        }

        // Update the pod
        const updatedPod = await prisma.pod.update({
            where: { id },
            data: {
                name,
                description: description || null,
                isPublic,
            },
        });

        return NextResponse.json(updatedPod);
    } catch (error) {
        console.error("Error updating pod:", error);
        return NextResponse.json(
            { error: "Failed to update pod" },
            { status: 500 }
        );
    }
} 