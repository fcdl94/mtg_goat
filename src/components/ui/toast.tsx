"use client";

import * as React from "react"
import { cn } from "@/lib/utils"

const ToastContext = React.createContext<{
    toasts: Toast[];
    addToast: (toast: Toast) => void;
    removeToast: (id: string) => void;
}>({
    toasts: [],
    addToast: () => { },
    removeToast: () => { },
});

export interface Toast {
    id: string;
    title?: string;
    description?: string;
    duration?: number;
    variant?: "default" | "destructive";
}

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
    const [toasts, setToasts] = React.useState<Toast[]>([]);

    const addToast = React.useCallback((toast: Omit<Toast, "id">) => {
        const id = Math.random().toString(36).substring(2, 9);
        setToasts((prev) => [...prev, { ...toast, id }]);

        if (toast.duration !== Infinity) {
            setTimeout(() => {
                setToasts((prev) => prev.filter((t) => t.id !== id));
            }, toast.duration || 3000);
        }
    }, []);

    const removeToast = React.useCallback((id: string) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, []);

    return (
        <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
            {children}
            <ToastContainer />
        </ToastContext.Provider>
    );
};

const ToastContainer = () => {
    const { toasts, removeToast } = React.useContext(ToastContext);

    if (toasts.length === 0) return null;

    return (
        <div className="fixed bottom-0 right-0 z-50 flex flex-col p-4 gap-2 max-w-md w-full">
            {toasts.map((toast) => (
                <div
                    key={toast.id}
                    className={cn(
                        "relative bg-white text-foreground shadow-lg rounded-lg p-4 flex flex-col gap-1 border",
                        {
                            "bg-destructive text-destructive-foreground": toast.variant === "destructive",
                        }
                    )}
                >
                    {toast.title && <div className="font-semibold">{toast.title}</div>}
                    {toast.description && <div className="text-sm">{toast.description}</div>}
                    <button
                        onClick={() => removeToast(toast.id)}
                        className="absolute top-2 right-2 opacity-70 hover:opacity-100"
                    >
                        ×
                    </button>
                </div>
            ))}
        </div>
    );
};

export { ToastProvider, ToastContext };

export function Toast({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
                className
            )}
            {...props}
        />
    )
}

export function ToastTitle({
    className,
    ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h2
            className={cn("text-sm font-semibold", className)}
            {...props}
        />
    )
}

export function ToastDescription({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn("text-sm opacity-90", className)}
            {...props}
        />
    )
} 