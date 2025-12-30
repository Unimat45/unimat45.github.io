import { useEffect, useState } from "react";

export function useMobile() {
    const [isSmallScreen, setSmallScreen] = useState(true);

    useEffect(() => {
        const check = () => {
            setSmallScreen(!matchMedia("(min-width: 768px)").matches);
        };
        check();
        window.addEventListener("resize", check);

        return () => window.removeEventListener("resize", check);
    }, []);

    return isSmallScreen;
}
