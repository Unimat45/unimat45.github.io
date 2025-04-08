"use client";
import { createContext, useContext, useEffect, useState } from "react";

interface ScreenContextProps { isSmallScreen: boolean; }

const ScreenContext = createContext<ScreenContextProps>({ isSmallScreen: true });

export const ScreenProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [ isSmallScreen, setSmallScreen ] = useState(true);

    useEffect(() => {
        const check = () => {
            setSmallScreen(!matchMedia("(min-width: 768px)").matches);
        };
        check();
        window.addEventListener("resize", check);

        return () => window.removeEventListener("resize", check);
    }, [ ]);

    return <ScreenContext.Provider value={{ isSmallScreen }}>
        {children}
    </ScreenContext.Provider>;
};

export const useScreen = () => useContext(ScreenContext);
