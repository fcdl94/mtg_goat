import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const podId = formData.get('podId') as string;
        const playedAt = formData.get('playedAt') as string;
        const winnerId = formData.get('winnerId') as string || null;

        // Get all selected players
        const playerIds = formData.getAll('playerIds') as string[];

        if (!podId || !playedAt || playerIds.length === 0) {
            return NextResponse.json(
                { error: 'Pod, date, and at least one player are required' },
                { status: 400 }
            );
        }

        // Build deck selections - each player should have selected one deck
        const deckSelections: { playerId: string; deckId: string }[] = [];

        for (const playerId of playerIds) {
            const deckId = formData.get(`deck-${playerId}`) as string | null;

            if (deckId) {
                deckSelections.push({ playerId, deckId });
            } else {
                // If a player was selected but no deck was chosen, show an error
                return NextResponse.json(
                    { error: `Please select a deck for each player` },
                    { status: 400 }
                );
            }
        }

        // Create the game with all required relationships
        const game = await prisma.game.create({
            data: {
                podId,
                playedAt: new Date(playedAt),
                winnerId,
                players: {
                    create: playerIds.map(playerId => ({
                        player: {
                            connect: { id: playerId }
                        }
                    }))
                },
                decks: {
                    create: deckSelections.map(({ deckId }) => ({
                        deck: {
                            connect: { id: deckId }
                        },
                        isWinner: winnerId ?
                            // Find the winning deck - check if its owner is the winner
                            deckSelections.find(
                                selection => selection.deckId === deckId && selection.playerId === winnerId
                            ) != null : false
                    }))
                }
            },
        });

        return NextResponse.redirect(new URL('/dashboard/games', request.url));
    } catch (error) {
        console.error('Error creating game:', error);
        return NextResponse.json(
            { error: 'An error occurred while recording the game' },
            { status: 500 }
        );
    }
} 