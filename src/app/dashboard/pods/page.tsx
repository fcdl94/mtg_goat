import Link from 'next/link';
import { Plus } from 'lucide-react';
import { prisma } from '@/lib/db';
import { formatDate } from '@/lib/utils';

export default async function PodsPage() {
    const pods = await prisma.pod.findMany({
        include: {
            players: {
                include: {
                    player: true
                }
            },
            games: true
        },
        orderBy: {
            name: 'asc'
        }
    });

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Pods</h1>
                    <p className="text-muted-foreground">
                        Manage Commander playgroups
                    </p>
                </div>
                <Link
                    href="/dashboard/pods/new"
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                    <Plus className="h-4 w-4 mr-1" />
                    Add Pod
                </Link>
            </div>

            {pods.length === 0 ? (
                <div className="bg-white p-8 rounded-lg border shadow-sm text-center">
                    <h2 className="text-xl font-bold mb-2">No Pods Yet</h2>
                    <p className="text-muted-foreground mb-4">
                        Create a pod to organize your Commander playgroup.
                    </p>
                    <Link
                        href="/dashboard/pods/new"
                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md bg-purple-600 text-white hover:bg-purple-700"
                    >
                        <Plus className="h-4 w-4 mr-1" />
                        Create First Pod
                    </Link>
                </div>
            ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {pods.map((pod) => (
                        <Link
                            key={pod.id}
                            href={`/dashboard/pods/${pod.id}`}
                            className="bg-white p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow flex flex-col"
                        >
                            <h2 className="text-xl font-bold mb-1">{pod.name}</h2>
                            {pod.description && (
                                <p className="text-sm text-muted-foreground mb-4">{pod.description}</p>
                            )}
                            <div className="text-sm mb-4">
                                <p><span className="font-medium">Players:</span> {pod.players.length}</p>
                                <p><span className="font-medium">Games:</span> {pod.games.length}</p>
                                <p><span className="font-medium">Created:</span> {formatDate(pod.createdAt)}</p>
                            </div>
                            <div className="mt-auto">
                                <div className="flex flex-wrap gap-1">
                                    {pod.players.slice(0, 4).map((playerPod) => (
                                        <span key={playerPod.id} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                                            {playerPod.player.name}
                                        </span>
                                    ))}
                                    {pod.players.length > 4 && (
                                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                            +{pod.players.length - 4} more
                                        </span>
                                    )}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}