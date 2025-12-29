import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/* SHADCN UTILS */

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
