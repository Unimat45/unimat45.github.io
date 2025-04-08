import "~/styles/globals.css";

import i18n from "~/i18n";
import Head from "next/head";
import { Layout } from "~/components";
import type { AppProps } from "next/app";
import { ScreenProvider } from "~/contexts";
import { Work_Sans } from "next/font/google";
import { I18nextProvider } from "react-i18next";

const workSans = Work_Sans({
    subsets: ["latin"],
    variable: "--font-work-sans",
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Mathieu Déry</title>
                <meta key="description" name="description" content="Mathieu Déry" />
                <meta key="keywords" name="keywords" content="developer,programmer,C,C++,React,Typescript" />
                <link rel="canonical" href="https://unimat45.github.io" />
                <link rel="apple-touch-icon-precomposed" href="/apple-touch-icon.png" />
                <meta name="msapplication-TileColor" content="#232323" />
                <meta name="msapplication-TileImage" content="/apple-touch-icon.png" />
                <meta key="og:title" property="og:title" content="Mathieu Déry" />
                <meta key="og:description" property="og:description" content="Mathieu Déry" />
                <meta key="og:image" property="og:image" content="https://unimat45.github.io/favicon.png" />
                <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
                <meta key="twitter:title" name="twitter:title" content="Mathieu Déry" />
                <meta key="twitter:description" name="twitter:description" content="Mathieu Déry" />
                <meta key="twitter:image" name="twitter:image" content="https://unimat45.github.io/favicon.png" />
            </Head>
            <I18nextProvider i18n={i18n}>
                <ScreenProvider>
                    <Layout className={workSans.className}>
                        <Component {...pageProps} />
                    </Layout>
                </ScreenProvider>
            </I18nextProvider>
        </>
    );
}
