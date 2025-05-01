import Link from 'next/link';
import { ChevronLeft, Globe, Lock, Plus, UserPlus, Users } from 'lucide-react';
import { prisma } from '@/lib/db';
import { formatDate } from '@/lib/utils';
import { InvitePlayerButton } from '@/components/invite-player-button';
import { notFound } from 'next/navigation';

interface PodDetailPageProps {
    params: {
        id: string;
    };
}

export default async function PodDetailPage({ params }: PodDetailPageProps) {
    // Get pod details
    const pod = await prisma.pod.findUnique({
        where: { id: params.id },
        include: {
            players: {
                include: {
                    player: true,
                },
                orderBy: {
                    player: {
                        name: 'asc',
                    },
                },
            },
            games: {
                include: {
                    players: {
                        include: {
                            player: true,
                        },
                    },
                    decks: {
                        include: {
                            deck: true,
                        },
                    },
                },
                orderBy: {
                    playedAt: 'desc',
                },
            },
            invites: {
                where: {
                    status: 'PENDING',
                },
                include: {
                    player: true,
                    sender: true,
                },
            },
        },
    });

    if (!pod) {
        notFound();
    }

    // Get current player (would come from auth in a real app)
    const currentPlayer = await prisma.player.findFirst();

    if (!currentPlayer) {
        return (
            <div className="space-y-6">
                <h1 className="text-3xl font-bold tracking-tight">Pod Detail</h1>
                <div className="bg-white p-8 rounded-lg border shadow-sm text-center">
                    <p className="text-lg mb-4">You need to create a player account first.</p>
                    <Link
                        href="/dashboard/players/new"
                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700"
                    >
                        Create Player
                    </Link>
                </div>
            </div>
        );
    }

    // Check if current player is a member of the pod
    const currentPlayerPod = pod.players.find((pp) => pp.playerId === currentPlayer.id);

    if (!currentPlayerPod) {
        return (
            <div className="space-y-6">
                <div className="flex items-center gap-2">
                    <Link href="/dashboard/pods" className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground">
                        <ChevronLeft className="h-4 w-4" />
                        Back to Pods
                    </Link>
                </div>
                <div className="bg-white p-8 rounded-lg border shadow-sm text-center">
                    <h2 className="text-xl font-bold mb-2">Not a Pod Member</h2>
                    <p className="text-muted-foreground mb-4">
                        You don't have access to this pod because you're not a member.
                    </p>
                    <Link
                        href="/dashboard/pods"
                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md bg-purple-600 text-white hover:bg-purple-700"
                    >
                        Return to My Pods
                    </Link>
                </div>
            </div>
        );
    }

    // Check if current player is an admin
    const isAdmin = currentPlayerPod.role === 'ADMIN';

    // Get players not in the pod (for invites)
    const playersNotInPod = isAdmin ? await prisma.player.findMany({
        where: {
            NOT: {
                pods: {
                    some: {
                        podId: pod.id,
                    },
                },
            },
            // Also exclude players with pending invites
            AND: {
                NOT: {
                    invites: {
                        some: {
                            podId: pod.id,
                            status: 'PENDING',
                        },
                    },
                },
            },
        },
        orderBy: {
            name: 'asc',
        },
    }) : [];

    return (
        <div className="space-y-8">
            <div className="flex items-center gap-2">
                <Link href="/dashboard/pods" className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground">
                    <ChevronLeft className="h-4 w-4" />
                    Back to Pods
                </Link>
            </div>

            <div className="bg-white rounded-lg border shadow-md p-6">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <div className="flex items-center gap-2">
                            <h1 className="text-3xl font-bold tracking-tight">{pod.name}</h1>
                            {pod.isPublic ? (
                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                    <Globe className="h-3 w-3 mr-1" />
                                    Public
                                </span>
                            ) : (
                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                    <Lock className="h-3 w-3 mr-1" />
                                    Private
                                </span>
                            )}
                        </div>
                        {pod.description && (
                            <p className="text-gray-600 mt-2">{pod.description}</p>
                        )}
                        <p className="text-sm text-gray-500 mt-2">Created: {formatDate(pod.createdAt)}</p>
                    </div>
                    {isAdmin && (
                        <Link
                            href={`/dashboard/pods/${pod.id}/edit`}
                            className="inline-flex items-center justify-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-md bg-white hover:bg-gray-50"
                        >
                            Edit Pod
                        </Link>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="md:col-span-1">
                        <div className="bg-gray-50 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-bold flex items-center gap-1">
                                    <Users className="h-4 w-4" />
                                    Pod Members ({pod.players.length})
                                </h3>
                                {isAdmin && playersNotInPod.length > 0 && (
                                    <InvitePlayerButton
                                        podId={pod.id}
                                        senderId={currentPlayer.id}
                                        players={playersNotInPod}
                                    />
                                )}
                            </div>
                            <div className="space-y-2 max-h-72 overflow-y-auto pr-2">
                                {pod.players.map((playerPod) => (
                                    <div key={playerPod.id} className="flex items-center justify-between p-2 bg-white rounded-md shadow-sm">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center text-white text-xs font-bold">
                                                {playerPod.player.name.charAt(0).toUpperCase()}
                                            </div>
                                            <div>
                                                <div className="font-medium">{playerPod.player.name}</div>
                                                {playerPod.role === 'ADMIN' && (
                                                    <div className="text-xs text-purple-600">Admin</div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {pod.invites.length > 0 && isAdmin && (
                                <div className="mt-4">
                                    <h4 className="text-sm font-medium mb-2 text-gray-500">Pending Invites ({pod.invites.length})</h4>
                                    <div className="space-y-2">
                                        {pod.invites.map((invite) => (
                                            <div key={invite.id} className="flex items-center justify-between p-2 bg-gray-100 rounded-md">
                                                <div className="flex items-center gap-2">
                                                    <UserPlus className="h-4 w-4 text-gray-400" />
                                                    <div className="text-sm">{invite.player.name}</div>
                                                </div>
                                                <div className="text-xs text-gray-500">Pending</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <div className="bg-gray-50 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-bold">Pod Games ({pod.games.length})</h3>
                                <Link
                                    href={`/dashboard/games/new?podId=${pod.id}`}
                                    className="inline-flex items-center justify-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md bg-amber-600 text-white hover:bg-amber-700"
                                >
                                    <Plus className="h-4 w-4 mr-1" />
                                    Record Game
                                </Link>
                            </div>

                            {pod.games.length === 0 ? (
                                <div className="bg-white p-6 rounded-md text-center">
                                    <p className="mb-4">No games have been played in this pod yet.</p>
                                    <Link
                                        href={`/dashboard/games/new?podId=${pod.id}`}
                                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md bg-amber-600 text-white hover:bg-amber-700"
                                    >
                                        <Plus className="h-4 w-4 mr-1" />
                                        Record First Game
                                    </Link>
                                </div>
                            ) : (
                                <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                                    {pod.games.map((game) => {
                                        // Find winning deck
                                        const winningDeck = game.decks.find(deck => deck.isWinner);

                                        return (
                                            <Link
                                                key={game.id}
                                                href={`/dashboard/games/${game.id}`}
                                                className="block p-4 bg-white rounded-md shadow-sm hover:shadow transition-shadow"
                                            >
                                                <div className="flex justify-between items-center mb-2">
                                                    <h4 className="font-medium">{formatDate(game.playedAt)}</h4>
                                                    <span className="text-xs text-gray-500">{game.players.length} players</span>
                                                </div>

                                                {winningDeck && (
                                                    <div className="flex items-center mb-2">
                                                        <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full mr-2" />
                                                        <span className="font-medium text-sm">
                                                            Winner: {winningDeck.deck.name} ({winningDeck.deck.commanderName})
                                                        </span>
                                                    </div>
                                                )}

                                                <div className="flex flex-wrap gap-1 mt-2">
                                                    {game.players.map((gamePlayer) => (
                                                        <span
                                                            key={gamePlayer.id}
                                                            className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                                                        >
                                                            {gamePlayer.player.name}
                                                        </span>
                                                    ))}
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 