import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default function NewPlayerPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center gap-2">
                <Link href="/dashboard/players" className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground">
                    <ChevronLeft className="h-4 w-4" />
                    Back to Players
                </Link>
            </div>

            <div>
                <h1 className="text-3xl font-bold tracking-tight">Add Player</h1>
                <p className="text-muted-foreground">
                    Add a new player to your Commander playgroup
                </p>
            </div>

            <div className="bg-white p-6 rounded-lg border shadow-sm">
                <form className="space-y-4" action="/api/players" method="POST">
                    <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium">
                            Player Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter player name"
                            required
                        />
                    </div>

                    <div className="flex justify-end gap-2">
                        <Link
                            href="/dashboard/players"
                            className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md bg-white hover:bg-gray-50"
                        >
                            Cancel
                        </Link>
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Add Player
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
} 