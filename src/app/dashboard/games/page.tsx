import Link from 'next/link';
import { Plus } from 'lucide-react';
import { prisma } from '@/lib/db';
import { formatDate } from '@/lib/utils';

export default async function GamesPage() {
    const games = await prisma.game.findMany({
        include: {
            pod: true,
            players: {
                include: {
                    player: true
                }
            },
            decks: {
                include: {
                    deck: true
                }
            }
        },
        orderBy: {
            playedAt: 'desc'
        }
    });

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Games</h1>
                    <p className="text-muted-foreground">
                        Manage your Commander games
                    </p>
                </div>
                <Link
                    href="/dashboard/games/new"
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md bg-amber-600 text-white hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                >
                    <Plus className="h-4 w-4 mr-1" />
                    Record Game
                </Link>
            </div>

            {games.length === 0 ? (
                <div className="bg-white p-8 rounded-lg border shadow-sm text-center">
                    <h2 className="text-xl font-bold mb-2">No Games Recorded</h2>
                    <p className="text-muted-foreground mb-4">
                        Record your first Commander game to start tracking stats.
                    </p>
                    <Link
                        href="/dashboard/games/new"
                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md bg-amber-600 text-white hover:bg-amber-700"
                    >
                        <Plus className="h-4 w-4 mr-1" />
                        Record First Game
                    </Link>
                </div>
            ) : (
                <div className="bg-white rounded-lg border shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Date
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Pod
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Players
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Winner
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {games.map((game) => {
                                    // Find the winning deck
                                    const winningDeck = game.decks.find(deck => deck.isWinner);
                                    const winningPlayer = winningDeck ?
                                        game.players.find(gp => gp.playerId === winningDeck.deck.playerId)?.player : null;

                                    return (
                                        <tr key={game.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <Link href={`/dashboard/games/${game.id}`} className="text-amber-600 hover:text-amber-800">
                                                    {formatDate(game.playedAt)}
                                                </Link>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <Link href={`/dashboard/pods/${game.podId}`} className="text-purple-600 hover:text-purple-800">
                                                    {game.pod.name}
                                                </Link>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-500">
                                                <div className="flex flex-wrap gap-1">
                                                    {game.players.map((gamePlayer) => (
                                                        <span key={gamePlayer.id} className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                            {gamePlayer.player.name}
                                                        </span>
                                                    ))}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {winningPlayer ? (
                                                    <div className="flex items-center">
                                                        <div className="h-2 w-2 bg-green-500 rounded-full mr-2" />
                                                        <span className="font-medium">{winningPlayer.name}</span>
                                                        {winningDeck && (
                                                            <span className="ml-1 text-xs text-gray-500">
                                                                ({winningDeck.deck.commanderName})
                                                            </span>
                                                        )}
                                                    </div>
                                                ) : (
                                                    <span className="text-gray-400 italic">No winner</span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <Link
                                                    href={`/dashboard/games/${game.id}/edit`}
                                                    className="text-amber-600 hover:text-amber-800 mr-4"
                                                >
                                                    Edit
                                                </Link>
                                                <button
                                                    className="text-red-600 hover:text-red-800"
                                                    // In a real app, this would open a confirmation dialog
                                                    onClick={() => { }}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
} 