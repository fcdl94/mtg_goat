import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { prisma } from '@/lib/db';

export default async function NewPodPage() {
    const players = await prisma.player.findMany({
        orderBy: { name: 'asc' }
    });

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-2">
                <Link href="/dashboard/pods" className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground">
                    <ChevronLeft className="h-4 w-4" />
                    Back to Pods
                </Link>
            </div>

            <div>
                <h1 className="text-3xl font-bold tracking-tight">Create Pod</h1>
                <p className="text-muted-foreground">
                    Create a new Commander playgroup pod
                </p>
            </div>

            <div className="bg-white p-6 rounded-lg border shadow-sm">
                {players.length === 0 ? (
                    <div className="text-center py-8">
                        <h3 className="text-lg font-medium mb-2">No Players Available</h3>
                        <p className="text-muted-foreground mb-4">
                            You need to add at least one player before creating a pod.
                        </p>
                        <Link
                            href="/dashboard/players/new"
                            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700"
                        >
                            Add Player First
                        </Link>
                    </div>
                ) : (
                    <form className="space-y-4" action="/api/pods" method="POST">
                        <div className="space-y-2">
                            <label htmlFor="name" className="block text-sm font-medium">
                                Pod Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                placeholder="Enter pod name"
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
                                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                placeholder="Enter pod description"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium mb-1">
                                Select Players
                            </label>
                            <div className="max-h-60 overflow-y-auto border border-gray-300 rounded-md p-2">
                                {players.map((player) => (
                                    <div key={player.id} className="flex items-center mb-2 last:mb-0">
                                        <input
                                            type="checkbox"
                                            id={`player-${player.id}`}
                                            name="playerIds"
                                            value={player.id}
                                            className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                                        />
                                        <label htmlFor={`player-${player.id}`} className="ml-2 block text-sm text-gray-900">
                                            {player.name}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-end gap-2">
                            <Link
                                href="/dashboard/pods"
                                className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md bg-white hover:bg-gray-50"
                            >
                                Cancel
                            </Link>
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                            >
                                Create Pod
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
} 