import Link from 'next/link';
import { Plus } from 'lucide-react';
import { prisma } from '@/lib/db';
import { calculateWinRate } from '@/lib/utils';
import { PlayerActionButtons } from '@/components/player-action-buttons';

export default async function PlayersPage() {
    const players = await prisma.player.findMany({
        include: {
            decks: true,
            games: {
                include: {
                    game: {
                        include: {
                            decks: true
                        }
                    }
                }
            }
        },
        orderBy: {
            name: 'asc'
        }
    });

    const playersWithStats = players.map(player => {
        const totalGames = player.games.length;

        // Count games where one of the player's decks won
        const gamesWon = player.games.filter(gamePlayer => {
            const playerDeckIds = player.decks.map(deck => deck.id);
            return gamePlayer.game.decks.some(gameDeck =>
                playerDeckIds.includes(gameDeck.deckId) && gameDeck.isWinner
            );
        }).length;

        return {
            ...player,
            totalGames,
            gamesWon,
            winRate: calculateWinRate(gamesWon, totalGames)
        };
    });

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Players</h1>
                    <p className="text-muted-foreground">
                        Manage players in your Commander playgroup
                    </p>
                </div>
                <Link
                    href="/dashboard/players/new"
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    <Plus className="h-4 w-4 mr-1" />
                    Add Player
                </Link>
            </div>

            {playersWithStats.length === 0 ? (
                <div className="bg-white p-8 rounded-lg border shadow-sm text-center">
                    <h2 className="text-xl font-bold mb-2">No Players Yet</h2>
                    <p className="text-muted-foreground mb-4">
                        Start by adding players to your Commander playgroup.
                    </p>
                    <Link
                        href="/dashboard/players/new"
                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700"
                    >
                        <Plus className="h-4 w-4 mr-1" />
                        Add First Player
                    </Link>
                </div>
            ) : (
                <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Decks
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Games
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Wins
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Win Rate
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {playersWithStats.map((player) => (
                                    <tr key={player.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            <Link href={`/dashboard/players/${player.id}`} className="text-blue-600 hover:text-blue-800">
                                                {player.name}
                                            </Link>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {player.decks.length}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {player.totalGames}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {player.gamesWon}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {player.winRate}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <PlayerActionButtons playerId={player.id} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
} 