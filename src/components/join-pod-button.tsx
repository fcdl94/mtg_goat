"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, UserPlus } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

interface JoinPodButtonProps {
    podId: string;
    playerId: string;
}

export function JoinPodButton({ podId, playerId }: JoinPodButtonProps) {
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();
    const router = useRouter();

    async function handleJoin() {
        setLoading(true);
        try {
            // Create a pod player relationship directly (for public pods)
            const response = await fetch("/api/pods/join", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    podId,
                    playerId,
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to join pod");
            }

            toast({
                title: "Success",
                description: "You have joined the pod",
                duration: 3000,
            });

            // Navigate to the pod page
            router.push(`/dashboard/pods/${podId}`);
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to join pod",
                variant: "destructive",
                duration: 3000,
            });
        } finally {
            setLoading(false);
        }
    }

    return (
        <Button
            onClick={handleJoin}
            disabled={loading}
            className="w-full bg-purple-600 hover:bg-purple-700"
        >
            {loading ? (
                <Loader2 className="h-4 w-4 animate-spin mr-1" />
            ) : (
                <UserPlus className="h-4 w-4 mr-1" />
            )}
            Join Pod
        </Button>
    );
} 