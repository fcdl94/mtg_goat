import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const name = formData.get('name') as string;
        const commanderName = formData.get('commanderName') as string;
        const description = formData.get('description') as string | null;
        const playerId = formData.get('playerId') as string;

        if (!name || !commanderName || !playerId) {
            return NextResponse.json(
                { error: 'Name, commander name, and player are required' },
                { status: 400 }
            );
        }

        const deck = await prisma.deck.create({
            data: {
                name,
                commanderName,
                description,
                playerId,
            },
        });

        return NextResponse.redirect(new URL('/dashboard/decks', request.url));
    } catch (error) {
        console.error('Error creating deck:', error);
        return NextResponse.json(
            { error: 'An error occurred while creating the deck' },
            { status: 500 }
        );
    }
} 