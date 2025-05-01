"use client";

import { useState } from "react";
import { Check, ChevronDown, UserPlus, X } from "lucide-react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from "@/components/ui/popover";
import { Player } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

interface InvitePlayerButtonProps {
    podId: string;
    senderId: string;
    players: Player[];
}

export function InvitePlayerButton({ podId, senderId, players }: InvitePlayerButtonProps) {
    const [open, setOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();
    const router = useRouter();

    // Filter players based on search term
    const filteredPlayers = players.filter(player =>
        player.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    async function invitePlayer(playerId: string) {
        setLoading(true);
        try {
            const response = await fetch("/api/invites", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    podId,
                    playerId,
                    senderId,
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to send invite");
            }

            toast({
                title: "Invite sent",
                description: "The player has been invited to join your pod",
                duration: 3000,
            });

            // Refresh the page to update the pending invites list
            router.refresh();
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to send invite",
                variant: "destructive",
                duration: 3000,
            });
        } finally {
            setLoading(false);
            setOpen(false);
        }
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <UserPlus className="h-4 w-4" />
                    Invite
                    <ChevronDown className="h-3 w-3 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-72 p-3" align="end">
                <div className="space-y-3">
                    <h3 className="font-medium">Invite Players</h3>
                    <Input
                        placeholder="Search players..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="h-8"
                    />
                    <div className="max-h-56 overflow-y-auto space-y-1">
                        {filteredPlayers.length === 0 ? (
                            <div className="text-sm text-gray-500 py-2 text-center">
                                No players found
                            </div>
                        ) : (
                            filteredPlayers.map((player) => (
                                <div
                                    key={player.id}
                                    className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-md"
                                >
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center text-white text-xs font-bold">
                                            {player.name.charAt(0).toUpperCase()}
                                        </div>
                                        <span className="text-sm">{player.name}</span>
                                    </div>
                                    <button
                                        onClick={() => invitePlayer(player.id)}
                                        disabled={loading}
                                        className="text-blue-600 hover:text-blue-800"
                                    >
                                        <UserPlus className="h-4 w-4" />
                                    </button>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
} 