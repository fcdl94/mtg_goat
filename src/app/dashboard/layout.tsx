'use client';

import { NavBar } from '@/components/nav-bar';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <NavBar />
            <main className="flex-1 container py-8 px-4 sm:px-6">
                {children}
            </main>
            <footer className="mt-12 border-t bg-white py-8">
                <div className="container px-4 sm:px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="mb-4 md:mb-0">
                            <p className="text-sm text-gray-500 mb-1">
                                &copy; {new Date().getFullYear()} MTG Goat - Track your Commander playgroup
                            </p>
                            <p className="text-xs text-gray-400">
                                Made with ❤️ for Magic: The Gathering players
                            </p>
                        </div>
                        <div className="flex space-x-4">
                            <a href="/dashboard" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">Dashboard</a>
                            <a href="/dashboard/players" className="text-sm text-gray-500 hover:text-indigo-600 transition-colors">Players</a>
                            <a href="/dashboard/decks" className="text-sm text-gray-500 hover:text-emerald-600 transition-colors">Decks</a>
                            <a href="/dashboard/games" className="text-sm text-gray-500 hover:text-amber-600 transition-colors">Games</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
} 