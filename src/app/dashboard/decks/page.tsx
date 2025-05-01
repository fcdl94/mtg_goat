import Link from 'next/link';
import { Plus } from 'lucide-react';
import { prisma } from '@/lib/db';
import { calculateWinRate } from '@/lib/utils';

export default async function DecksPage() {
    const decks = await prisma.deck.findMany({
        include: {
            player: true,
            games: {
                include: {
                    game: true
                }
            }
        },
        orderBy: {
            name: 'asc'
        }
    });

    const decksWithStats = decks.map(deck => {
        const totalGames = deck.games.length;
        const gamesWon = deck.games.filter(gameDeck => gameDeck.isWinner).length;

        return {
            ...deck,
            totalGames,
            gamesWon,
            winRate: calculateWinRate(gamesWon, totalGames)
        };
    });

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Decks</h1>
                    <p className="text-muted-foreground">
                        Manage Commander decks in your playgroup
                    </p>
                </div>
                <Link
                    href="/dashboard/decks/new"
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                    <Plus className="h-4 w-4 mr-1" />
                    Add Deck
                </Link>
            </div>

            {decksWithStats.length === 0 ? (
                <div className="bg-white p-8 rounded-lg border shadow-sm text-center">
                    <h2 className="text-xl font-bold mb-2">No Decks Yet</h2>
                    <p className="text-muted-foreground mb-4">
                        Start by adding Commander decks to your playgroup.
                    </p>
                    <Link
                        href="/dashboard/decks/new"
                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md bg-green-600 text-white hover:bg-green-700"
                    >
                        <Plus className="h-4 w-4 mr-1" />
                        Add First Deck
                    </Link>
                </div>
            ) : (
                <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Deck Name
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Commander
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Player
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
                                {decksWithStats.map((deck) => (
                                    <tr key={deck.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            <Link href={`/dashboard/decks/${deck.id}`} className="text-green-600 hover:text-green-800">
                                                {deck.name}
                                            </Link>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {deck.commanderName}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <Link href={`/dashboard/players/${deck.playerId}`} className="text-blue-600 hover:text-blue-800">
                                                {deck.player.name}
                                            </Link>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {deck.totalGames}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {deck.gamesWon}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {deck.winRate}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <Link
                                                href={`/dashboard/decks/${deck.id}/edit`}
                                                className="text-green-600 hover:text-green-800 mr-4"
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
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
} 