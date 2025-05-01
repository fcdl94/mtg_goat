import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, description, isPublic, creatorId } = body;

        // Validate required fields
        if (!name || typeof isPublic !== "boolean" || !creatorId) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Create the pod
        const pod = await prisma.pod.create({
            data: {
                name,
                description: description || null,
                isPublic,
                // Also create the pod member record for the creator as an admin
                players: {
                    create: {
                        player: { connect: { id: creatorId } },
                        role: "ADMIN",
                    },
                },
            },
            include: {
                players: {
                    include: {
                        player: true,
                    },
                },
            },
        });

        return NextResponse.json(pod, { status: 201 });
    } catch (error) {
        console.error("Error creating pod:", error);
        return NextResponse.json(
            { error: "Failed to create pod" },
            { status: 500 }
        );
    }
} 