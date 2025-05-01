'use client';

import Link from 'next/link';
import { useState } from 'react';

interface DeckActionButtonsProps {
    deckId: string;
}

export function DeckActionButtons({ deckId }: DeckActionButtonsProps) {
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        if (confirm('Are you sure you want to delete this deck? This action cannot be undone.')) {
            setIsDeleting(true);
            try {
                // In a real implementation, you would call an API endpoint to delete the deck
                // await fetch(`/api/decks/${deckId}`, { method: 'DELETE' });
                // For now, we'll just show an alert
                alert('Delete functionality would be implemented here');
            } catch (error) {
                console.error('Failed to delete deck:', error);
                alert('Failed to delete deck');
            } finally {
                setIsDeleting(false);
            }
        }
    };

    return (
        <>
            <Link
                href={`/dashboard/decks/${deckId}/edit`}
                className="text-green-600 hover:text-green-800 mr-4"
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