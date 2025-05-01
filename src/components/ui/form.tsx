"use client";

import * as React from "react"
import { useFormContext, Controller, FieldValues, ControllerProps, FieldPath } from "react-hook-form"
import { cn } from "@/lib/utils"

export const Form = React.forwardRef<
    HTMLFormElement,
    React.FormHTMLAttributes<HTMLFormElement> & {
        onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    }
>(({ className, onSubmit, children, ...props }, ref) => {
    return (
        <form
            ref={ref}
            onSubmit={onSubmit}
            className={cn("space-y-6", className)}
            {...props}
        >
            {children}
        </form>
    )
})
Form.displayName = "Form"

export const FormField = <
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
    name,
    control,
    render,
}: {
    name: TName;
    control: any;
    render: ControllerProps<TFieldValues, TName>["render"];
}) => {
    return (
        <Controller
            name={name}
            control={control}
            render={render}
        />
    );
};

export const FormItem = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & {
        className?: string;
    }
>(({ className, ...props }, ref) => {
    return (
        <div ref={ref} className={cn("space-y-2", className)} {...props} />
    )
})
FormItem.displayName = "FormItem"

export const FormLabel = React.forwardRef<
    HTMLLabelElement,
    React.LabelHTMLAttributes<HTMLLabelElement> & {
        className?: string;
    }
>(({ className, ...props }, ref) => {
    return (
        <label
            ref={ref}
            className={cn(
                "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                className
            )}
            {...props}
        />
    )
})
FormLabel.displayName = "FormLabel"

export const FormControl = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & {
        className?: string;
    }
>(({ className, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={cn("mt-2", className)}
            {...props}
        />
    )
})
FormControl.displayName = "FormControl"

export const FormDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement> & {
        className?: string;
    }
>(({ className, ...props }, ref) => {
    return (
        <p
            ref={ref}
            className={cn("text-sm text-gray-500", className)}
            {...props}
        />
    )
})
FormDescription.displayName = "FormDescription"

export const FormMessage = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement> & {
        className?: string;
        name?: string;
    }
>(({ className, children, name, ...props }, ref) => {
    const context = useFormContext();
    const errorMessage = name
        ? context?.formState?.errors[name]?.message as string
        : undefined;

    if (!errorMessage && !children) {
        return null;
    }

    return (
        <p
            ref={ref}
            className={cn("text-sm font-medium text-red-500", className)}
            {...props}
        >
            {children || errorMessage}
        </p>
    )
})
FormMessage.displayName = "FormMessage" 