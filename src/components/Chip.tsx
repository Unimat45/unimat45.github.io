import type React from "react";

import { cn } from "../lib/utils";

interface Props {
    isSelected?: boolean;
    onSelected?: () => void;
    label: string;
}

export const Chip: React.FC<Props> = ({ label, onSelected, isSelected }) => {
    return (
        <button
            onClick={onSelected}
            className={cn(
                "cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                isSelected
                    ? "bg-linear-to-r from-cyan-500 to-emerald-500 text-white shadow-lg shadow-cyan-500/50"
                    : "border border-gray-700 bg-gray-800/50 text-gray-300 hover:border-cyan-500/50",
            )}
        >
            {label}
        </button>
    );
};
