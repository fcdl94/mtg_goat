import Link from 'next/link';
import { Users, BookOpen, Award, Grid, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Players', href: '/dashboard/players', icon: Users },
    { name: 'Decks', href: '/dashboard/decks', icon: BookOpen },
    { name: 'Pods', href: '/dashboard/pods', icon: Grid },
    { name: 'Games', href: '/dashboard/games', icon: Award },
];

export function NavBar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white">
            <div className="container flex h-16 items-center">
                <Link href="/dashboard" className="flex items-center gap-2">
                    <span className="font-bold text-xl">MTG Goat</span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                'text-sm font-medium flex items-center gap-1 transition-colors hover:text-primary',
                                'text-muted-foreground'
                            )}
                        >
                            <item.icon className="h-4 w-4" />
                            <span className="hidden sm:inline">{item.name}</span>
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
} 