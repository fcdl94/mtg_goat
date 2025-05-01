import Link from 'next/link';
import { Users, BookOpen, Grid, Award, TrendingUp, BarChart3 } from 'lucide-react';
import { prisma } from '@/lib/db';

export default async function DashboardPage() {
    // Fetch data from the database
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
            gradient: 'from-blue-500 to-indigo-600',
            textColor: 'text-blue-500',
            bgLight: 'bg-blue-50',
            animation: 'animate-fade-in-1'
        },
        {
            name: 'Decks',
            value: deckCount,
            href: '/dashboard/decks',
            icon: BookOpen,
            gradient: 'from-emerald-500 to-green-500',
            textColor: 'text-emerald-500',
            bgLight: 'bg-emerald-50',
            animation: 'animate-fade-in-2'
        },
        {
            name: 'Pods',
            value: podCount,
            href: '/dashboard/pods',
            icon: Grid,
            gradient: 'from-violet-500 to-purple-600',
            textColor: 'text-violet-500',
            bgLight: 'bg-violet-50',
            animation: 'animate-fade-in-3'
        },
        {
            name: 'Games',
            value: gameCount,
            href: '/dashboard/games',
            icon: Award,
            gradient: 'from-amber-400 to-orange-500',
            textColor: 'text-amber-500',
            bgLight: 'bg-amber-50',
            animation: 'animate-fade-in-4'
        },
    ];

    // Dummy data for visualization
    const recentWinners = [
        { name: "Player 1", wins: 3, color: "bg-emerald-500" },
        { name: "Player 2", wins: 5, color: "bg-blue-500" },
        { name: "Player 3", wins: 2, color: "bg-purple-500" },
        { name: "Player 4", wins: 4, color: "bg-amber-500" },
    ];

    return (
        <div className="space-y-8">
            <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white shadow-lg">
                <div className="relative z-10">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Welcome to MTG Goat</h1>
                    <p className="text-blue-100 max-w-2xl">
                        Track your Magic: The Gathering Commander games, monitor win rates, and keep your playgroup balanced.
                    </p>
                </div>
                <div className="absolute right-0 bottom-0 opacity-10">
                    <svg className="w-64 h-64" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => (
                    <Link
                        key={stat.name}
                        href={stat.href}
                        className={`group overflow-hidden block p-6 bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${stat.animation}`}
                    >
                        <div className="flex justify-between items-center mb-4">
                            <div className={`p-3 rounded-lg ${stat.bgLight}`}>
                                <stat.icon className={`h-7 w-7 ${stat.textColor}`} />
                            </div>
                            <span className={`text-5xl font-bold gradient-text ${stat.gradient}`}>
                                {stat.value}
                            </span>
                        </div>
                        <h3 className={`font-semibold text-lg ${stat.textColor}`}>{stat.name}</h3>
                    </Link>
                ))}
            </div>

            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-md">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-bold flex items-center gap-2">
                            <TrendingUp className="h-5 w-5 text-emerald-500" />
                            Win Rate Overview
                        </h2>
                    </div>

                    <div className="space-y-4 mt-6">
                        {recentWinners.map((player, index) => (
                            <div key={index} className="flex items-center">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${player.color}`}>
                                    {player.name.charAt(0)}
                                </div>
                                <div className="ml-3 flex-grow">
                                    <div className="flex justify-between mb-1">
                                        <span className="font-medium">{player.name}</span>
                                        <span className="text-gray-500 text-sm">{player.wins} wins</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className={`${player.color} h-2 rounded-full`} style={{ width: `${(player.wins / 5) * 100}%` }}></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-md">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-bold flex items-center gap-2">
                            <BarChart3 className="h-5 w-5 text-blue-500" />
                            Getting Started
                        </h2>
                    </div>
                    <p className="mb-6 text-gray-600">
                        Track your Magic: The Gathering Commander games to see player and deck statistics.
                        Add your playgroup's players, decks, and create pods to start tracking game results.
                    </p>
                    <div className="grid gap-3 md:grid-cols-3">
                        <Link
                            href="/dashboard/players/new"
                            className="group flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 text-blue-600 p-4 rounded-xl font-medium transition-colors"
                        >
                            <Users className="h-8 w-8 mb-2 group-hover:scale-110 transition-transform" />
                            <span className="text-center">Add Players</span>
                        </Link>
                        <Link
                            href="/dashboard/decks/new"
                            className="group flex flex-col items-center justify-center bg-gradient-to-b from-emerald-50 to-emerald-100 hover:from-emerald-100 hover:to-emerald-200 text-emerald-600 p-4 rounded-xl font-medium transition-colors"
                        >
                            <BookOpen className="h-8 w-8 mb-2 group-hover:scale-110 transition-transform" />
                            <span className="text-center">Add Decks</span>
                        </Link>
                        <Link
                            href="/dashboard/games/new"
                            className="group flex flex-col items-center justify-center bg-gradient-to-b from-amber-50 to-amber-100 hover:from-amber-100 hover:to-amber-200 text-amber-600 p-4 rounded-xl font-medium transition-colors"
                        >
                            <Award className="h-8 w-8 mb-2 group-hover:scale-110 transition-transform" />
                            <span className="text-center">Record Game</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
} 