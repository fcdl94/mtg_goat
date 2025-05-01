'use client';

import Link from 'next/link';
import { Users, BookOpen, Award, Grid, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
    { name: 'Dashboard', href: '/dashboard', icon: Home, color: 'text-blue-500 hover:text-blue-700' },
    { name: 'Players', href: '/dashboard/players', icon: Users, color: 'text-indigo-500 hover:text-indigo-700' },
    { name: 'Decks', href: '/dashboard/decks', icon: BookOpen, color: 'text-emerald-500 hover:text-emerald-700' },
    { name: 'Pods', href: '/dashboard/pods', icon: Grid, color: 'text-violet-500 hover:text-violet-700' },
    { name: 'Games', href: '/dashboard/games', icon: Award, color: 'text-amber-500 hover:text-amber-700' },
];

export function NavBar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b backdrop-blur-md bg-white/90">
            <div className="container flex h-16 items-center">
                <Link href="/dashboard" className="flex items-center gap-2 group">
                    <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-105">
                        <Award className="h-6 w-6" />
                    </div>
                    <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">MTG Goat</span>
                </Link>
                <nav className="ml-auto">
                    <ul className="flex gap-1 sm:gap-2">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className={cn(
                                        'flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-gray-100',
                                        item.color
                                    )}
                                >
                                    <item.icon className="h-4 w-4" />
                                    <span className="hidden sm:inline">{item.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="ml-4 flex items-center gap-2">
                    <button
                        className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        title="Profile"
                    >
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white text-xs font-bold">
                            N
                        </div>
                    </button>
                </div>
            </div>
        </header>
    );
} 