import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { prisma } from '@/lib/db';
import { PodForm } from '@/components/pod-form';
import { notFound } from 'next/navigation';

interface EditPodPageProps {
    params: {
        id: string;
    };
}

export default async function EditPodPage({ params }: EditPodPageProps) {
    // Get current player (would come from auth in a real app)
    const player = await prisma.player.findFirst();

    if (!player) {
        return (
            <div className="space-y-6">
                <h1 className="text-3xl font-bold tracking-tight">Edit Pod</h1>
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

    // Get the pod
    const pod = await prisma.pod.findUnique({
        where: { id: params.id },
        include: {
            players: true,
        },
    });

    if (!pod) {
        notFound();
    }

    // Check if current player is an admin of the pod
    const isAdmin = pod.players.some(
        (pp) => pp.playerId === player.id && pp.role === "ADMIN"
    );

    if (!isAdmin) {
        return (
            <div className="space-y-6">
                <div className="flex items-center gap-2">
                    <Link href={`/dashboard/pods/${pod.id}`} className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground">
                        <ChevronLeft className="h-4 w-4" />
                        Back to Pod
                    </Link>
                </div>
                <div className="bg-white p-8 rounded-lg border shadow-sm text-center">
                    <h2 className="text-xl font-bold mb-2">Not Authorized</h2>
                    <p className="text-muted-foreground mb-4">
                        You don't have permission to edit this pod.
                    </p>
                    <Link
                        href={`/dashboard/pods/${pod.id}`}
                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md bg-purple-600 text-white hover:bg-purple-700"
                    >
                        Return to Pod
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            <div className="flex items-center gap-2">
                <Link href={`/dashboard/pods/${pod.id}`} className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground">
                    <ChevronLeft className="h-4 w-4" />
                    Back to Pod
                </Link>
            </div>

            <div>
                <h1 className="text-3xl font-bold tracking-tight mb-4">Edit Pod</h1>
                <p className="text-muted-foreground mb-8">
                    Update your pod's information
                </p>

                <div className="bg-white rounded-lg border shadow-md overflow-hidden">
                    <div className="p-4 sm:p-6 border-b">
                        <h2 className="text-xl font-semibold">Pod Details</h2>
                        <p className="text-sm text-muted-foreground mt-1">
                            Update the information for your pod
                        </p>
                    </div>
                    <div className="p-4 sm:p-6">
                        <PodForm
                            playerId={player.id}
                            podId={pod.id}
                            defaultValues={{
                                name: pod.name,
                                description: pod.description || "",
                                isPublic: pod.isPublic ? "true" : "false",
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
} 