"use client";

import * as React from "react"
import { cn } from "@/lib/utils"

interface PopoverProps {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    children: React.ReactNode;
}

export function Popover({ open, onOpenChange, children }: PopoverProps) {
    const [isOpen, setIsOpen] = React.useState(open || false);

    React.useEffect(() => {
        if (open !== undefined) {
            setIsOpen(open);
        }
    }, [open]);

    const handleOpenChange = (value: boolean) => {
        setIsOpen(value);
        onOpenChange?.(value);
    };

    return (
        <div className="relative inline-block">
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child) && child.type === PopoverTrigger) {
                    return React.cloneElement(child as React.ReactElement<any>, {
                        onClick: () => handleOpenChange(!isOpen),
                    });
                }
                if (React.isValidElement(child) && child.type === PopoverContent) {
                    return isOpen ? child : null;
                }
                return child;
            })}
        </div>
    );
}

interface PopoverTriggerProps {
    asChild?: boolean;
    children: React.ReactNode;
    onClick?: () => void;
}

export function PopoverTrigger({ asChild, children, onClick }: PopoverTriggerProps) {
    if (asChild && React.isValidElement(children)) {
        return React.cloneElement(children as React.ReactElement<any>, {
            onClick: (e: React.MouseEvent) => {
                onClick?.();
                (children as React.ReactElement<any>).props.onClick?.(e);
            },
        });
    }

    return (
        <button type="button" onClick={onClick}>
            {children}
        </button>
    );
}

interface PopoverContentProps {
    align?: "start" | "center" | "end";
    className?: string;
    children: React.ReactNode;
}

export function PopoverContent({ align = "center", className, children }: PopoverContentProps) {
    return (
        <div
            className={cn(
                "z-50 absolute mt-2 bg-white rounded-md border shadow-md p-4 w-72",
                {
                    "left-0": align === "start",
                    "left-1/2 -translate-x-1/2": align === "center",
                    "right-0": align === "end",
                },
                className
            )}
        >
            {children}
        </div>
    );
} 