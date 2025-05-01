import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { podId, playerId } = body;

        // Validate required fields
        if (!podId || !playerId) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Check if pod exists and is public
        const pod = await prisma.pod.findUnique({
            where: { id: podId },
        });

        if (!pod) {
            return NextResponse.json(
                { error: 'Pod not found' },
                { status: 404 }
            );
        }

        if (!pod.isPublic) {
            return NextResponse.json(
                { error: 'Cannot directly join a private pod' },
                { status: 403 }
            );
        }

        // Check if player is already in the pod
        const existingPlayerPod = await prisma.playerPod.findFirst({
            where: {
                podId,
                playerId,
            },
        });

        if (existingPlayerPod) {
            return NextResponse.json(
                { error: 'Player is already a member of this pod' },
                { status: 400 }
            );
        }

        // Create the pod player relationship
        const playerPod = await prisma.playerPod.create({
            data: {
                pod: { connect: { id: podId } },
                player: { connect: { id: playerId } },
                role: 'MEMBER',
            },
        });

        return NextResponse.json(
            {
                message: 'Successfully joined the pod',
                playerPod
            },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error joining pod:', error);
        return NextResponse.json(
            { error: 'Failed to join pod' },
            { status: 500 }
        );
    }
} 