import { db } from "~/server/db";
import type { MetadataRoute } from "next";

const BASE_URL = "https://unimat45.github.io";

async function sitemap() : Promise<MetadataRoute.Sitemap> {
    const projects = await db.projet.findMany();

    const projectPaths = projects.map(p => ({
        url: `${BASE_URL}/projects/${p.slug}`,
        lastModified: new Date(),
        changeFrequency: "yearly",
    })) satisfies MetadataRoute.Sitemap;

    return [
        {
            url: `${BASE_URL}/`,
            lastModified: new Date(),
            changeFrequency: "yearly",
        },
        {
            url: `${BASE_URL}/projects`,
            lastModified: new Date(),
            changeFrequency: "yearly",
        },
        {
            url: `${BASE_URL}/contact`,
            lastModified: new Date(),
            changeFrequency: "yearly",
        },
        {
            url: `${BASE_URL}/CV-MathieuDery.pdf`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            alternates: {
                languages: {
                    en: `${BASE_URL}/CV-MathieuDery-en.pdf`,
                    fr: `${BASE_URL}/CV-MathieuDery.pdf`,
                },
            },
        },
        ...projectPaths,
    ];
}

const urls = await sitemap();

const urlset = urls.map(u => {
    const alternates = Object.entries(u.alternates?.languages ?? {}).map(([ key, value ]) =>
        `<xhtml:link rel="alternate" hreflang="${key}" href="${value}" />`);

    return `
    <url>
        <loc>${u.url}</loc>
        <lastmod>${(u.lastModified as Date).toISOString()}</lastmod>
        <changefreq>${u.changeFrequency}</changefreq>
        ${alternates.join("\n\t")}
    </url>`;
});

const map = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urlset.join("\n")}
`;

const f = Bun.file("./public/sitemap.xml");
await f.write(map);
