import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Calcul à la journée près l'age d'une date
 * @param annee Année
 * @param mois Mois
 * @param jour Jours du mois
 * @returns Un age en année entre ajourd'hui et la date entrée
 */
export function getAge(annee: number, mois: number, jour: number) {
    const birthday = new Date(annee, mois - 1, jour);
    const now = new Date();

    const age = now.getFullYear() - birthday.getFullYear();
    const monthDiff = now.getMonth() - birthday.getMonth();

    return monthDiff < 0 ||
        (monthDiff === 0 && now.getDate() - birthday.getDate() < 0)
        ? age - 1
        : age;
}

export const applyIndex = (n: number) =>
    ({ "--index": n + "" } as Record<string, string>);
