"use client";

import * as React from "react"
import { ToastContext, type Toast } from "./toast"

export function useToast() {
    const context = React.useContext(ToastContext)

    if (!context) {
        throw new Error("useToast must be used within a ToastProvider")
    }

    return {
        toast: (props: Omit<Toast, "id">) => {
            context.addToast(props as Toast)
        },
        dismiss: (id: string) => context.removeToast(id),
    }
} 