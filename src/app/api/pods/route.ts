import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const name = formData.get('name') as string;
        const description = formData.get('description') as string | null;

        // Handle multi-select checkboxes - FormData returns only the first value for a key by default
        // We need to get all values for the playerIds key
        const playerIds = formData.getAll('playerIds') as string[];

        if (!name) {
            return NextResponse.json(
                { error: 'Pod name is required' },
                { status: 400 }
            );
        }

        if (playerIds.length === 0) {
            return NextResponse.json(
                { error: 'At least one player must be selected' },
                { status: 400 }
            );
        }

        // Create the pod and associate it with the selected players
        const pod = await prisma.pod.create({
            data: {
                name,
                description,
                players: {
                    create: playerIds.map(playerId => ({
                        player: {
                            connect: { id: playerId }
                        }
                    }))
                }
            },
        });

        return NextResponse.redirect(new URL('/dashboard/pods', request.url));
    } catch (error) {
        console.error('Error creating pod:', error);
        return NextResponse.json(
            { error: 'An error occurred while creating the pod' },
            { status: 500 }
        );
    }
} 