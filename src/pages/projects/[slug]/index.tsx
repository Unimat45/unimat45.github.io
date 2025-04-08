import Link from "next/link";
import Image from "next/image";
import { db } from "~/server/db";
import { useScreen } from "~/contexts";
import { type Projet } from "@prisma/client";
import Autoplay from "embla-carousel-autoplay";
import { useTranslation } from "react-i18next";
import { Button } from "~/components/ui/button";
import { GetStaticPaths, GetStaticProps } from "next";
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbSeparator,
    BreadcrumbLink,
    BreadcrumbPage,
} from "~/components/ui/breadcrumb";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "~/components/ui/carousel";
import Head from "next/head";

type ProjectPageProps = Readonly<Projet>;

const ProjectPage: React.FC<ProjectPageProps> = ({
    title,
    link,
    description_fr,
    description_en,
    nbr_images,
    slug,
}) => {
    const { isSmallScreen } = useScreen();
    const { t, i18n } = useTranslation("projects");

    const imgType = isSmallScreen ? "mobile" : "desktop";
    const [imgWidth, imgHeight] = isSmallScreen ? [300, 450] : [1024, 450];
    const description = i18n.language === "fr" ? description_fr : description_en;

    return (
        <>
            <Head>
                <title>{`${title} | Mathieu Déry`}</title>
                <meta key="description" name="description" content={description} />
                <meta key="og:title" property="og:title" content={title} />
                <meta key="og:description" property="og:description" content={description} />
                <meta key="og:image" property="og:image" content={`https://unimat45.github.io/images/projets/${slug}/logo.webp`} />
                <meta key="twitter:title" name="twitter:title" content={title} />
                <meta key="twitter:description" name="twitter:description" content={description} />
                <meta key="twitter:image" property="twitter:image" content={`https://unimat45.github.io/images/projets/${slug}/logo.webp`} />
            </Head>
            <section className="px-4 md:p-0">
                <Breadcrumb className="p-4">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href="/projects">{t("title")}</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>{title}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <section className="p-4 grid gap-2">
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                        <h1 className="text-4xl uppercase flex gap-4">
                            <Image
                                className="w-10 h-10"
                                src={`/images/projets/${slug}/logo.webp`}
                                alt={title}
                                width={200}
                                height={200}
                            />
                            {title}
                        </h1>
                        <Link target="_blank" href={link}>
                            <Button className="cursor-pointer">
                                {t("projectLink")}
                            </Button>
                        </Link>
                    </div>
                    <p className="md:ml-14 mb-4">{description}</p>
                    <Carousel
                        plugins={[Autoplay({ delay: 5000 })]}
                        opts={{ loop: true }}
                        className="w-full max-w-[80%] md:max-w-[90%] mx-auto"
                    >
                        <CarouselContent>
                            {Array.from({ length: nbr_images }).map((_, i) => (
                                <CarouselItem key={i}>
                                    <Image
                                        className="w-full h-full rounded-lg object-cover"
                                        src={`/images/projets/${slug}/${imgType}_${i}.webp`}
                                        alt={title}
                                        width={imgWidth}
                                        height={imgHeight}
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        {nbr_images > 1 && <CarouselPrevious />}
                        {nbr_images > 1 && <CarouselNext />}
                    </Carousel>
                </section>
            </section>
        </>
    );
};

export default ProjectPage;

export const getStaticPaths: GetStaticPaths = async () => {
    const projects = await db.projet.findMany({ select: { slug: true } });
    return {
        paths: projects.map(p => ({ params: { slug: p.slug } })),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const slug = params?.slug as string | null;

    if (slug == null) {
        return {
            notFound: true,
        };
    }

    const project = await db.projet.findFirst({
        select: {
            title: true,
            slug: true,
            nbr_images: true,
            link: true,
            description_en: true,
            description_fr: true,
        },
        where: { slug },
    });


    return {
        props: {
            ...project,
        },
    };
};
