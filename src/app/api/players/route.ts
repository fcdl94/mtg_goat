import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const name = formData.get('name') as string;

        if (!name) {
            return NextResponse.json(
                { error: 'Player name is required' },
                { status: 400 }
            );
        }

        const player = await prisma.player.create({
            data: {
                name,
            },
        });

        return NextResponse.redirect(new URL('/dashboard/players', request.url));
    } catch (error) {
        console.error('Error creating player:', error);
        return NextResponse.json(
            { error: 'An error occurred while creating the player' },
            { status: 500 }
        );
    }
} 