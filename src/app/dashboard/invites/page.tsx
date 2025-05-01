import Link from 'next/link';
import { prisma } from '@/lib/db';
import { formatDate } from '@/lib/utils';
import { CheckCircle2, ChevronLeft, SendHorizontal, XCircle } from 'lucide-react';
import { InviteActions } from '@/components/invite-actions';
import { EmptyState } from '@/components/empty-state';

export default async function InvitesPage() {
    // Get current player (would come from auth in a real app)
    const player = await prisma.player.findFirst();

    if (!player) {
        return (
            <div className="space-y-6">
                <h1 className="text-3xl font-bold tracking-tight">Pod Invites</h1>
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

    // Get pending invites for the player
    const pendingInvites = await prisma.podInvite.findMany({
        where: {
            playerId: player.id,
            status: 'PENDING',
        },
        include: {
            pod: true,
            sender: true,
        },
        orderBy: {
            createdAt: 'desc',
        },
    });

    // Get past invites (accepted or rejected)
    const pastInvites = await prisma.podInvite.findMany({
        where: {
            playerId: player.id,
            status: {
                in: ['ACCEPTED', 'REJECTED'],
            },
        },
        include: {
            pod: true,
            sender: true,
        },
        orderBy: {
            updatedAt: 'desc',
        },
        take: 10, // Limit to last 10
    });

    return (
        <div className="space-y-8">
            <div className="flex items-center gap-2">
                <Link href="/dashboard" className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground">
                    <ChevronLeft className="h-4 w-4" />
                    Back to Dashboard
                </Link>
            </div>

            <div>
                <h1 className="text-3xl font-bold tracking-tight mb-4">Pod Invites</h1>
                <p className="text-muted-foreground mb-8">
                    View and manage your pod invitations
                </p>

                <div className="space-y-8">
                    <div className="bg-white rounded-lg border shadow-md overflow-hidden">
                        <div className="p-4 sm:p-6 border-b">
                            <h2 className="text-xl font-semibold">Pending Invites</h2>
                            <p className="text-sm text-muted-foreground mt-1">
                                Invitations that are waiting for your response
                            </p>
                        </div>

                        {pendingInvites.length === 0 ? (
                            <EmptyState
                                icon={<SendHorizontal className="h-8 w-8" />}
                                title="No pending invites"
                                description="You don't have any pending pod invitations right now."
                                action={
                                    <Link
                                        href="/dashboard/pods"
                                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md bg-purple-600 text-white hover:bg-purple-700"
                                    >
                                        Browse Public Pods
                                    </Link>
                                }
                            />
                        ) : (
                            <div className="divide-y">
                                {pendingInvites.map((invite) => (
                                    <div key={invite.id} className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <h3 className="font-medium">{invite.pod.name}</h3>
                                                {invite.pod.isPublic ? (
                                                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                        Public
                                                    </span>
                                                ) : (
                                                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                                        Private
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-sm text-gray-500 mt-1">
                                                Invited by {invite.sender.name} on {formatDate(invite.createdAt)}
                                            </p>
                                            {invite.pod.description && (
                                                <p className="text-sm mt-2">{invite.pod.description}</p>
                                            )}
                                        </div>
                                        <InviteActions inviteId={invite.id} />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {pastInvites.length > 0 && (
                        <div className="bg-white rounded-lg border shadow-md overflow-hidden">
                            <div className="p-4 sm:p-6 border-b">
                                <h2 className="text-xl font-semibold">Past Invites</h2>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Your previously responded invitations
                                </p>
                            </div>

                            <div className="divide-y">
                                {pastInvites.map((invite) => (
                                    <div key={invite.id} className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <h3 className="font-medium">{invite.pod.name}</h3>
                                                {invite.status === 'ACCEPTED' ? (
                                                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                        <CheckCircle2 className="h-3 w-3 mr-1" />
                                                        Accepted
                                                    </span>
                                                ) : (
                                                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                                        <XCircle className="h-3 w-3 mr-1" />
                                                        Declined
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-sm text-gray-500 mt-1">
                                                Invited by {invite.sender.name} • Responded on {formatDate(invite.updatedAt)}
                                            </p>
                                        </div>
                                        {invite.status === 'ACCEPTED' && (
                                            <Link
                                                href={`/dashboard/pods/${invite.podId}`}
                                                className="inline-flex items-center justify-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md bg-purple-600 text-white hover:bg-purple-700"
                                            >
                                                View Pod
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
} 