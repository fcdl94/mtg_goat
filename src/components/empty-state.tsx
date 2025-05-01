import { ReactNode } from "react";

interface EmptyStateProps {
    icon?: ReactNode;
    title: string;
    description: string;
    action?: ReactNode;
}

export function EmptyState({
    icon,
    title,
    description,
    action,
}: EmptyStateProps) {
    return (
        <div className="flex flex-col items-center justify-center py-12 px-4 text-center bg-gray-50">
            {icon && (
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-400 mb-4">
                    {icon}
                </div>
            )}
            <h3 className="text-lg font-medium">{title}</h3>
            <p className="mt-2 text-sm text-gray-500 max-w-sm mx-auto">
                {description}
            </p>
            {action && <div className="mt-6">{action}</div>}
        </div>
    );
} 