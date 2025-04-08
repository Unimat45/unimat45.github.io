import Link from "next/link";
import { Github } from "../icons";
import i18n, { type Locale } from "~/i18n";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectGroup,
    SelectItem,
} from "~/components/ui/select";
import { useEffect, useState } from "react";

type FooterProps = unknown;

const Footer: React.FC<FooterProps> = () => {
    const [ locale, setLocale ] = useState(i18n.language);

    const handleChangeLocale = (newLocale: Locale) => {
        setLocale(newLocale);
    };

    useEffect(() => {
        void i18n.changeLanguage(locale);
    }, [ locale ]);

    return (
        <div className="flex justify-between items-center p-4">
            <Link
                className="w-[100px] fill-foreground hover:scale-105 transition-transform duration-300"
                target="_blank"
                href="https://github.com/unimat45"
            >
                <Github />
            </Link>

            <Select value={locale} onValueChange={handleChangeLocale}>
                <SelectTrigger className="cursor-pointer">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem className="cursor-pointer" value="fr">
                            Français
                        </SelectItem>
                        <SelectItem className="cursor-pointer" value="en">
                            English
                        </SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
};

export default Footer;
