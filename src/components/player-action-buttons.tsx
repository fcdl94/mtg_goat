'use client';

import Link from 'next/link';
import { useState } from 'react';

interface PlayerActionButtonsProps {
    playerId: string;
}

export function PlayerActionButtons({ playerId }: PlayerActionButtonsProps) {
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        if (confirm('Are you sure you want to delete this player? This action cannot be undone.')) {
            setIsDeleting(true);
            try {
                // In a real implementation, you would call an API endpoint to delete the player
                // await fetch(`/api/players/${playerId}`, { method: 'DELETE' });
                // For now, we'll just show an alert
                alert('Delete functionality would be implemented here');
            } catch (error) {
                console.error('Failed to delete player:', error);
                alert('Failed to delete player');
            } finally {
                setIsDeleting(false);
            }
        }
    };

    return (
        <>
            <Link
                href={`/dashboard/players/${playerId}/edit`}
                className="text-blue-600 hover:text-blue-800 mr-4"
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