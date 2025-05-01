import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatDate(date: Date): string {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
}

export function calculateWinRate(wins: number, totalGames: number): string {
    if (totalGames === 0) return '0%';
    return `${Math.round((wins / totalGames) * 100)}%`;
} 