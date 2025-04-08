import { Projet } from "@prisma/client";
import { GetStaticProps } from "next";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import { ProjectCard } from "~/components";
import { db } from "~/server/db";

type IndexProps = Readonly<{ projects: Projet[]; }>;

const Index: React.FC<IndexProps> = ({ projects }) => {
    const { t } = useTranslation("projects");

    return <>
        <Head>
            <title>{`${t("title")} | Mathieu Déry`}</title>
            <meta key="description" name="description" content={t("description")} />
            <meta key="og:title" property="og:title" content={t("title")} />
            <meta key="og:description" property="og:description" content={t("description")} />
            <meta key="twitter:title" name="twitter:title" content={t("title")} />
            <meta key="twitter:description" name="twitter:description" content={t("description")} />
        </Head>
        <section className="px-4 md:p-0">
            <h1 className="text-4xl p-4 mt-4 capitalize">{t("title")}</h1>
            <div className="flex justify-center items-center">
                <div className="flex flex-wrap gap-4 p-4 md:my-auto">
                    {projects.map((p, i) => (
                        <ProjectCard key={p.slug} index={i} {...p} />
                    ))}
                </div>
            </div>
        </section>
    </>;
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
    const projects = await db.projet.findMany({
        select: {
            title: true,
            slug: true,
        },
    });

    return {
        props: {
            projects,
        },
    };
};
