import { projects } from "./src/assets/projects";

const BASE_URL = "https://unimat45.github.io";

function sitemap(locale: "fr" | "en") {
    const projectPaths = projects.map((p) => ({
        url: `/${locale}/projects/${p.slug}`,
        lastModified: new Date(),
        changeFrequency: "yearly",
    }));

    return [
        {
            url: `/${locale}`,
            lastModified: new Date(),
            changeFrequency: "yearly",
        },
        {
            url: `/${locale}/projects`,
            lastModified: new Date(),
            changeFrequency: "yearly",
        },
        {
            url: `/${locale}/contact`,
            lastModified: new Date(),
            changeFrequency: "yearly",
        },
        // {
        //     url: `${BASE_URL}/CV-MathieuDery.pdf`,
        //     lastModified: new Date(),
        //     changeFrequency: "yearly",
        //     alternates: {
        //         languages: {
        //             en: `${BASE_URL}/CV-MathieuDery-en.pdf`,
        //             fr: `${BASE_URL}/CV-MathieuDery.pdf`,
        //         },
        //     },
        // },
        ...projectPaths,
    ];
}

const urls = [...sitemap("fr"), ...sitemap("en")];

const urlset = urls.map((u) => {
    const url = new URL(u.url, BASE_URL);

    return `\t<url>
        <loc>${url}</loc>
        <lastmod>${(u.lastModified as Date).toISOString()}</lastmod>
        <changefreq>${u.changeFrequency}</changefreq>
    </url>`;
});

const map = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlset.join("\n")}
</urlset>
`;

await Bun.write("./public/sitemap.xml", map);
