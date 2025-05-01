import Link from 'next/link';
import { Users, BookOpen, Grid, Award } from 'lucide-react';
import { prisma } from '@/lib/db';

export default async function DashboardPage() {
    // In a real app, we'd fetch this data from the database
    // For now, we'll use mock counts
    const playerCount = await prisma.player.count();
    const deckCount = await prisma.deck.count();
    const podCount = await prisma.pod.count();
    const gameCount = await prisma.game.count();

    const stats = [
        {
            name: 'Players',
            value: playerCount,
            href: '/dashboard/players',
            icon: Users,
            color: 'bg-blue-50 text-blue-500',
        },
        {
            name: 'Decks',
            value: deckCount,
            href: '/dashboard/decks',
            icon: BookOpen,
            color: 'bg-green-50 text-green-500',
        },
        {
            name: 'Pods',
            value: podCount,
            href: '/dashboard/pods',
            icon: Grid,
            color: 'bg-purple-50 text-purple-500',
        },
        {
            name: 'Games',
            value: gameCount,
            href: '/dashboard/games',
            icon: Award,
            color: 'bg-amber-50 text-amber-500',
        },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                <p className="text-muted-foreground">
                    Overview of your Magic: The Gathering Commander statistics
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                    <Link
                        key={stat.name}
                        href={stat.href}
                        className="block p-6 bg-white rounded-lg border shadow-sm hover:shadow transition-shadow"
                    >
                        <div className="flex justify-between items-center mb-4">
                            <div className={`p-2 rounded-full ${stat.color}`}>
                                <stat.icon className="h-5 w-5" />
                            </div>
                            <span className="text-4xl font-bold">{stat.value}</span>
                        </div>
                        <h3 className="font-medium">{stat.name}</h3>
                    </Link>
                ))}
            </div>

            <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h2 className="text-xl font-bold mb-4">Getting Started</h2>
                <p className="mb-4">
                    Track your Magic: The Gathering Commander games to see player and deck statistics.
                    Add your playgroup's players, decks, and create pods to start tracking game results.
                </p>
                <div className="grid gap-2 md:grid-cols-3">
                    <Link
                        href="/dashboard/players/new"
                        className="inline-flex items-center justify-center bg-blue-50 text-blue-600 p-3 rounded-md font-medium hover:bg-blue-100"
                    >
                        <Users className="h-5 w-5 mr-2" />
                        Add Players
                    </Link>
                    <Link
                        href="/dashboard/decks/new"
                        className="inline-flex items-center justify-center bg-green-50 text-green-600 p-3 rounded-md font-medium hover:bg-green-100"
                    >
                        <BookOpen className="h-5 w-5 mr-2" />
                        Add Decks
                    </Link>
                    <Link
                        href="/dashboard/games/new"
                        className="inline-flex items-center justify-center bg-amber-50 text-amber-600 p-3 rounded-md font-medium hover:bg-amber-100"
                    >
                        <Award className="h-5 w-5 mr-2" />
                        Record Game
                    </Link>
                </div>
            </div>
        </div>
    );
} 