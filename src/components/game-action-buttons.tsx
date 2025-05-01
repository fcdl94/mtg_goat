'use client';

import Link from 'next/link';
import { useState } from 'react';

interface GameActionButtonsProps {
    gameId: string;
}

export function GameActionButtons({ gameId }: GameActionButtonsProps) {
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        if (confirm('Are you sure you want to delete this game? This action cannot be undone.')) {
            setIsDeleting(true);
            try {
                // In a real implementation, you would call an API endpoint to delete the game
                // await fetch(`/api/games/${gameId}`, { method: 'DELETE' });
                // For now, we'll just show an alert
                alert('Delete functionality would be implemented here');
            } catch (error) {
                console.error('Failed to delete game:', error);
                alert('Failed to delete game');
            } finally {
                setIsDeleting(false);
            }
        }
    };

    return (
        <>
            <Link
                href={`/dashboard/games/${gameId}/edit`}
                className="text-amber-600 hover:text-amber-800 mr-4"
            >
                Edit
            </Link>
            <button
                className="text-red-600 hover:text-red-800"
                onClick={handleDelete}
                disabled={isDeleting}
            >
                {isDeleting ? 'Deleting...' : 'Delete'}
            </button>
        </>
    );
} 