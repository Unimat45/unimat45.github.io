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
            type="button"
            onClick={onSelected}
            aria-pressed={isSelected}
            className={cn(
                "cursor-pointer rounded-full border px-4 py-1.5 font-mono text-xs font-medium transition-colors duration-300",
                isSelected ? "border-ink bg-ink text-bg" : "border-line text-ink-2 hover:border-ink-3 hover:text-ink",
            )}
        >
            {label}
        </button>
    );
};
