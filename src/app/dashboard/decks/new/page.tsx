import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { prisma } from '@/lib/db';

export default async function NewDeckPage() {
    const players = await prisma.player.findMany({
        orderBy: { name: 'asc' }
    });

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-2">
                <Link href="/dashboard/decks" className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground">
                    <ChevronLeft className="h-4 w-4" />
                    Back to Decks
                </Link>
            </div>

            <div>
                <h1 className="text-3xl font-bold tracking-tight">Add Deck</h1>
                <p className="text-muted-foreground">
                    Add a new Commander deck to your playgroup
                </p>
            </div>

            <div className="bg-white p-6 rounded-lg border shadow-sm">
                {players.length === 0 ? (
                    <div className="text-center py-8">
                        <h3 className="text-lg font-medium mb-2">No Players Available</h3>
                        <p className="text-muted-foreground mb-4">
                            You need to add at least one player before adding a deck.
                        </p>
                        <Link
                            href="/dashboard/players/new"
                            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700"
                        >
                            Add Player First
                        </Link>
                    </div>
                ) : (
                    <form className="space-y-4" action="/api/decks" method="POST">
                        <div className="space-y-2">
                            <label htmlFor="name" className="block text-sm font-medium">
                                Deck Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                placeholder="Enter deck name"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="commanderName" className="block text-sm font-medium">
                                Commander Name
                            </label>
                            <input
                                type="text"
                                id="commanderName"
                                name="commanderName"
                                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                placeholder="Enter commander name"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="description" className="block text-sm font-medium">
                                Description (Optional)
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                rows={3}
                                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                placeholder="Enter deck description"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="playerId" className="block text-sm font-medium">
                                Player
                            </label>
                            <select
                                id="playerId"
                                name="playerId"
                                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                required
                            >
                                <option value="">Select a player</option>
                                {players.map((player) => (
                                    <option key={player.id} value={player.id}>
                                        {player.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="flex justify-end gap-2">
                            <Link
                                href="/dashboard/decks"
                                className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md bg-white hover:bg-gray-50"
                            >
                                Cancel
                            </Link>
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                            >
                                Add Deck
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
} 