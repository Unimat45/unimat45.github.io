import Link from "next/link";
import { applyIndex } from "~/lib/utils";
import { useTranslation } from "react-i18next";
import { Email, Telephone, ContactForm } from "~/components";
import Head from "next/head";

type PageProps = unknown;

const Contact: React.FC<PageProps> = () => {
    const { t } = useTranslation("contact");

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
            <section className=" h-full flex flex-col justify-center">
                <div className="p-4 mt-4">
                    <div style={applyIndex(0)} className="md:max-w-2/3 mx-auto space-y-4 popup">
                        <h1 className="text-3xl md:text-4xl">{t("contactInfo")}</h1>
                        <Link
                            href="mailto:mathieu.dery@bananastreaming.ca"
                            className="flex items-center gap-4 w-fit"
                        >
                            <div className="w-14">
                                <Email />
                            </div>
                            mathieu.dery@bananastreaming.ca
                        </Link>
                        <Link href="tel:+18195003463" className="flex items-center gap-4 w-fit">
                            <div className="w-14">
                                <Telephone />
                            </div>(819) 500-3463
                        </Link>
                    </div>
                </div>
                <div className="p-4 mt-4">
                    <ContactForm />
                </div>
            </section>
        </>
    );
};

export default Contact;
