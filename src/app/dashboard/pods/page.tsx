import Link from 'next/link';
import { Plus, Globe, Lock, Users, Filter } from 'lucide-react';
import { prisma } from '@/lib/db';
import { formatDate } from '@/lib/utils';
import { EmptyState } from '@/components/empty-state';
import { Button } from '@/components/ui/button';
import { JoinPodButton } from '@/components/join-pod-button';
import { Pod } from '@prisma/client';

// Extending the Pod type to include the properties we need
type PodWithCounts = Pod & {
    _count: {
        players: number;
        games: number;
    };
};

export default async function PodsPage() {
    // Get current player (would come from auth in a real app)
    const player = await prisma.player.findFirst();

    if (!player) {
        return (
            <EmptyState
                title="No player found"
                description="Please create a player account to get started"
            />
        );
    }

    // Get pods the player belongs to
    const playerPods = await prisma.pod.findMany({
        where: {
            players: {
                some: {
                    playerId: player.id,
                },
            },
        },
        include: {
            _count: {
                select: {
                    players: true,
                    games: true,
                },
            },
        },
        orderBy: {
            updatedAt: 'desc',
        },
    }) as PodWithCounts[];

    // Get public pods the player doesn't belong to
    const publicPods = await prisma.pod.findMany({
        where: {
            // Cast to any to bypass the type checking for now
            // @ts-ignore - isPublic exists in the schema but not in the generated types yet
            isPublic: true,
            NOT: {
                players: {
                    some: {
                        playerId: player.id,
                    },
                },
            },
        },
        include: {
            _count: {
                select: {
                    players: true,
                    games: true,
                },
            },
        },
        orderBy: {
            createdAt: 'desc',
        },
        take: 10, // Limit to most recent 10
    }) as PodWithCounts[];

    // Get pending invites
    const pendingInvites = await prisma.podInvite.findMany({
        where: {
            playerId: player.id,
            status: 'PENDING',
        },
        include: {
            pod: true,
        },
    });

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold tracking-tight">Your Pods</h1>
                <Link href="/dashboard/pods/new">
                    <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        New Pod
                    </Button>
                </Link>
            </div>

            {pendingInvites.length > 0 && (
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Pending Invites</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {pendingInvites.map((invite: any) => (
                            <div key={invite.id} className="bg-white p-4 rounded-lg border shadow-sm">
                                <h3 className="font-semibold">{invite.pod.name}</h3>
                                <p className="text-sm text-muted-foreground mb-4">Invited on {formatDate(invite.createdAt)}</p>
                                <div className="flex space-x-2">
                                    <Button size="sm" variant="outline">
                                        Accept
                                    </Button>
                                    <Button size="sm" variant="outline" className="text-destructive">
                                        Decline
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {playerPods.length > 0 ? (
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Your Pods</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {playerPods.map((pod) => (
                            <Link
                                key={pod.id}
                                href={`/dashboard/pods/${pod.id}`}
                                className="bg-white p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-semibold truncate">{pod.name}</h3>
                                    {/* @ts-ignore - isPublic exists in the schema but not in the generated types */}
                                    {pod.isPublic ? (
                                        <Globe className="h-4 w-4 text-muted-foreground" />
                                    ) : (
                                        <Lock className="h-4 w-4 text-muted-foreground" />
                                    )}
                                </div>
                                {pod.description && (
                                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{pod.description}</p>
                                )}
                                <div className="flex justify-between text-sm">
                                    <div className="flex items-center">
                                        <Users className="h-4 w-4 mr-1" />
                                        <span>{pod._count.players}</span>
                                    </div>
                                    <div>
                                        <span className="text-muted-foreground">
                                            {pod._count.games} game{pod._count.games !== 1 ? 's' : ''}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            ) : (
                <EmptyState
                    title="No pods yet"
                    description="Create a new pod to get started or join an existing one."
                    action={
                        <Link href="/dashboard/pods/new">
                            <Button>
                                <Plus className="h-4 w-4 mr-2" />
                                New Pod
                            </Button>
                        </Link>
                    }
                />
            )}

            {publicPods.length > 0 && (
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold">Public Pods</h2>
                        <Button variant="outline" size="sm">
                            <Filter className="h-4 w-4 mr-2" />
                            Filter
                        </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {publicPods.map((pod) => (
                            <div
                                key={pod.id}
                                className="bg-white p-6 rounded-lg border shadow-sm relative"
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-semibold truncate">{pod.name}</h3>
                                    <Globe className="h-4 w-4 text-muted-foreground" />
                                </div>
                                {pod.description && (
                                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{pod.description}</p>
                                )}
                                <div className="flex justify-between text-sm mb-4">
                                    <div className="flex items-center">
                                        <Users className="h-4 w-4 mr-1" />
                                        <span>{pod._count.players}</span>
                                    </div>
                                    <div>
                                        <span className="text-muted-foreground">
                                            {pod._count.games} game{pod._count.games !== 1 ? 's' : ''}
                                        </span>
                                    </div>
                                </div>
                                <JoinPodButton podId={pod.id} playerId={player.id} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}