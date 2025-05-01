import Link from 'next/link';
import { prisma } from '@/lib/db';
import { formatDate } from '@/lib/utils';
import { JoinPodButton } from '@/components/join-pod-button';

export default async function PublicPodsPage() {
    // Get the current player ID (would come from auth in a real app)
    // For now we'll use a sample player ID or the first player in the DB
    let currentPlayer = await prisma.player.findFirst();

    if (!currentPlayer) {
        return (
            <div className="space-y-6">
                <h1 className="text-3xl font-bold tracking-tight">Public Pods</h1>
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

    // Get all public pods
    const publicPods = await prisma.pod.findMany({
        where: {
            isPublic: true,
            // Exclude pods the player is already a member of
            NOT: {
                players: {
                    some: {
                        playerId: currentPlayer.id
                    }
                }
            }
        },
        include: {
            players: {
                include: {
                    player: true
                }
            },
            _count: {
                select: {
                    games: true
                }
            }
        },
        orderBy: {
            createdAt: 'desc'
        }
    });

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Public Pods</h1>
                    <p className="text-muted-foreground">
                        Discover and join public pods from the community
                    </p>
                </div>
                <Link
                    href="/dashboard/pods"
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                    My Pods
                </Link>
            </div>

            {publicPods.length === 0 ? (
                <div className="bg-white p-8 rounded-lg border shadow-sm text-center">
                    <h2 className="text-xl font-bold mb-2">No Public Pods Available</h2>
                    <p className="text-muted-foreground mb-4">
                        There are currently no public pods available to join.
                    </p>
                    <Link
                        href="/dashboard/pods/new"
                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md bg-purple-600 text-white hover:bg-purple-700"
                    >
                        Create a Pod
                    </Link>
                </div>
            ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {publicPods.map((pod) => (
                        <div
                            key={pod.id}
                            className="bg-white p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow flex flex-col"
                        >
                            <h2 className="text-xl font-bold mb-1">{pod.name}</h2>
                            {pod.description && (
                                <p className="text-sm text-muted-foreground mb-4">{pod.description}</p>
                            )}
                            <div className="text-sm mb-4">
                                <p><span className="font-medium">Players:</span> {pod.players.length}</p>
                                <p><span className="font-medium">Games:</span> {pod._count.games}</p>
                                <p><span className="font-medium">Created:</span> {formatDate(pod.createdAt)}</p>
                            </div>
                            <div className="mb-4">
                                <div className="flex flex-wrap gap-1">
                                    {pod.players.slice(0, 4).map((playerPod) => (
                                        <span key={playerPod.id} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                                            {playerPod.player.name}
                                            {playerPod.role === "ADMIN" && (
                                                <span className="ml-1 text-xs text-purple-600">(Admin)</span>
                                            )}
                                        </span>
                                    ))}
                                    {pod.players.length > 4 && (
                                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                            +{pod.players.length - 4} more
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className="mt-auto">
                                <JoinPodButton
                                    podId={pod.id}
                                    playerId={currentPlayer.id}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
} 