"use client";

import * as React from "react"
import { cn } from "@/lib/utils"

interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    className?: string;
}

const RadioGroupContext = React.createContext<{
    value?: string;
    onValueChange?: (value: string) => void;
}>({});

export function RadioGroup({
    defaultValue,
    value,
    onValueChange,
    className,
    children,
    ...props
}: RadioGroupProps) {
    const [selectedValue, setSelectedValue] = React.useState(value || defaultValue);

    React.useEffect(() => {
        if (value !== undefined) {
            setSelectedValue(value);
        }
    }, [value]);

    const handleValueChange = (newValue: string) => {
        if (value === undefined) {
            setSelectedValue(newValue);
        }
        onValueChange?.(newValue);
    };

    return (
        <RadioGroupContext.Provider value={{ value: selectedValue, onValueChange: handleValueChange }}>
            <div className={cn("flex flex-col space-y-2", className)} {...props}>
                {children}
            </div>
        </RadioGroupContext.Provider>
    );
}

interface RadioGroupItemProps extends React.InputHTMLAttributes<HTMLInputElement> {
    value: string;
    className?: string;
}

export function RadioGroupItem({
    value,
    className,
    ...props
}: RadioGroupItemProps) {
    const { value: groupValue, onValueChange } = React.useContext(RadioGroupContext);

    return (
        <label className="flex items-center space-x-2 cursor-pointer">
            <input
                type="radio"
                className={cn(
                    "h-4 w-4 text-primary border-gray-300 focus:ring-primary",
                    className
                )}
                checked={value === groupValue}
                onChange={() => onValueChange?.(value)}
                value={value}
                {...props}
            />
        </label>
    );
} 