"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

// Schema for pod validation
const podSchema = z.object({
    name: z.string().min(3, "Pod name must be at least 3 characters").max(50, "Pod name must be at most 50 characters"),
    description: z.string().max(250, "Description must be at most 250 characters").optional(),
    isPublic: z.enum(["true", "false"]),
});

type PodFormValues = z.infer<typeof podSchema>;

interface PodFormProps {
    playerId: string;
    defaultValues?: {
        name: string;
        description?: string;
        isPublic: string;
    };
    podId?: string;
}

export function PodForm({ playerId, defaultValues, podId }: PodFormProps) {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { toast } = useToast();
    const isEditing = !!podId;

    // Initialize the form with default values or new values
    const form = useForm<PodFormValues>({
        resolver: zodResolver(podSchema),
        defaultValues: defaultValues || {
            name: "",
            description: "",
            isPublic: "true",
        },
    });

    async function onSubmit(data: PodFormValues) {
        setLoading(true);
        try {
            const endpoint = isEditing ? `/api/pods/${podId}` : "/api/pods";
            const method = isEditing ? "PUT" : "POST";

            const response = await fetch(endpoint, {
                method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...data,
                    isPublic: data.isPublic === "true",
                    creatorId: playerId,
                }),
            });

            if (!response.ok) {
                throw new Error(`Failed to ${isEditing ? "update" : "create"} pod`);
            }

            const result = await response.json();

            toast({
                title: isEditing ? "Pod updated" : "Pod created",
                description: isEditing
                    ? "The pod has been updated successfully"
                    : "The pod has been created successfully",
                duration: 3000,
            });

            // Navigate to the pod page
            router.push(`/dashboard/pods/${isEditing ? podId : result.id}`);
            router.refresh();
        } catch (error) {
            toast({
                title: "Error",
                description: `Failed to ${isEditing ? "update" : "create"} pod`,
                variant: "destructive",
                duration: 3000,
            });
        } finally {
            setLoading(false);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Pod Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter pod name" {...field} />
                            </FormControl>
                            <FormDescription>
                                Choose a name for your Commander playgroup
                            </FormDescription>
                            <FormMessage name="name" />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description (Optional)</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Enter a description for your pod"
                                    className="resize-none"
                                    {...field}
                                    value={field.value || ""}
                                />
                            </FormControl>
                            <FormDescription>
                                Describe your pod's purpose or any other important information
                            </FormDescription>
                            <FormMessage name="description" />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="isPublic"
                    render={({ field }) => (
                        <FormItem className="space-y-3">
                            <FormLabel>Pod Visibility</FormLabel>
                            <FormControl>
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="true" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Public (Anyone can join)
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="false" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                            Private (Invitation only)
                                        </FormLabel>
                                    </FormItem>
                                </RadioGroup>
                            </FormControl>
                            <FormDescription>
                                Public pods will be visible to everyone. Private pods require an invitation to join.
                            </FormDescription>
                            <FormMessage name="isPublic" />
                        </FormItem>
                    )}
                />

                <div className="flex justify-end gap-2 pt-4">
                    <Button type="button" variant="outline" asChild>
                        <Link href={podId ? `/dashboard/pods/${podId}` : "/dashboard/pods"}>
                            Cancel
                        </Link>
                    </Button>
                    <Button type="submit" disabled={loading} className="bg-purple-600 hover:bg-purple-700">
                        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        {isEditing ? "Update Pod" : "Create Pod"}
                    </Button>
                </div>
            </form>
        </Form>
    );
} 