"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

interface InviteActionsProps {
    inviteId: string;
}

export function InviteActions({ inviteId }: InviteActionsProps) {
    const [loading, setLoading] = useState<"accept" | "reject" | null>(null);
    const { toast } = useToast();
    const router = useRouter();

    async function handleResponse(status: "ACCEPTED" | "REJECTED") {
        setLoading(status === "ACCEPTED" ? "accept" : "reject");
        try {
            const response = await fetch(`/api/invites/${inviteId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ status }),
            });

            if (!response.ok) {
                throw new Error(`Failed to ${status.toLowerCase()} invite`);
            }

            toast({
                title: status === "ACCEPTED" ? "Invite accepted" : "Invite declined",
                description: status === "ACCEPTED"
                    ? "You have joined the pod"
                    : "The invite has been declined",
                duration: 3000,
            });

            // Refresh the page to update the list
            router.refresh();
        } catch (error) {
            toast({
                title: "Error",
                description: `Failed to ${status.toLowerCase()} invite`,
                variant: "destructive",
                duration: 3000,
            });
        } finally {
            setLoading(null);
        }
    }

    return (
        <div className="flex items-center gap-2">
            <Button
                variant="default"
                size="sm"
                className="bg-green-600 hover:bg-green-700"
                onClick={() => handleResponse("ACCEPTED")}
                disabled={loading !== null}
            >
                {loading === "accept" ? (
                    <Loader2 className="h-4 w-4 animate-spin mr-1" />
                ) : (
                    <CheckCircle2 className="h-4 w-4 mr-1" />
                )}
                Accept
            </Button>
            <Button
                variant="outline"
                size="sm"
                className="border-red-600 text-red-600 hover:bg-red-50"
                onClick={() => handleResponse("REJECTED")}
                disabled={loading !== null}
            >
                {loading === "reject" ? (
                    <Loader2 className="h-4 w-4 animate-spin mr-1" />
                ) : (
                    <XCircle className="h-4 w-4 mr-1" />
                )}
                Decline
            </Button>
        </div>
    );
} 