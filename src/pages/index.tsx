import Image from "next/image";
import { getAge } from "~/lib/utils";
import { useTranslation } from "react-i18next";
import { Separator } from "~/components/ui/separator";

import Face from "~/assets/face.png";
import Head from "next/head";

type IndexProps = unknown;

const Index: React.FC<IndexProps> = () => {
    const { t } = useTranslation("index");

    return (
        <>
            <Head>
                <title>{`${t("title")} | Mathieu Déry`}</title>
                <meta key="description" name="description" content={t("description")} />
                <meta key="og:title" property="og:title" content={t("title")} />
                <meta key="og:description" property="og:description" content={t("description")} />
                <meta key="twitter:title" name="twitter:title" content={t("title")} />
                <meta key="twitter:description" name="twitter:description" content={t("description")} />
            </Head>
            <section className="h-full grid md:grid-cols-[1fr_auto_1fr]">
                <div className="z-10 mb-16 self-end md:self-center px-4 overflow-hidden">
                    <div className="animate-left">
                        <h1 className="text-3xl">{t("hello")}</h1>
                        <h2>{t("text", { age: getAge(2003, 5, 22) })}</h2>
                    </div>
                </div>
                <div className="pb-4 hidden md:block">
                    <Separator orientation="vertical" />
                </div>
                <div className="absolute h-[90%] md:static md:h-auto self-end md:ml-4 overflow-hidden">
                    <Image
                        className="h-full mix-blend-difference object-cover animate-right grayscale drop-shadow-lg drop-shadow-secondary-foreground"
                        src={Face}
                        alt={t("portraitAlt")}
                    />
                </div>
            </section>
        </>
    );
};

export default Index;
