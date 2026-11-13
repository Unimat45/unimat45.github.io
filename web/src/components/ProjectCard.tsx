import { ArrowUpRight } from "lucide-react";
import type React from "react";

import { layers, type Project } from "../assets/projects";

interface Props {
    index: number;
    locale: "fr" | "en";
    project: Project;
    labels: { demo: string; code: string };
}

const linkClass =
    "inline-flex items-center gap-1 py-1 font-mono text-[0.8rem] font-medium underline decoration-line decoration-[1.5px] underline-offset-[0.3em] transition-colors hover:text-accent hover:decoration-accent-strong";

export const ProjectCard: React.FC<Props> = ({ index, locale, project, labels }) => {
    const depth = project.depth === 0 ? "0" : `−${Math.abs(project.depth)}`;

    return (
        <article
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-22px_rgb(15_31_25/0.5)]"
            style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
            }}
        >
            <div className="aspect-[1024/450] overflow-hidden border-b border-line">
                <img
                    src={`/images/projets/${project.slug}/thumb.webp`}
                    width={720}
                    height={316}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
            </div>

            <div className="flex flex-1 flex-col p-6">
                <p className="font-mono text-xs font-medium tracking-[0.09em] text-ink-3 uppercase">
                    {depth} · {layers[project.layer][locale]}
                </p>
                <h3 className="mt-2 text-2xl leading-tight font-bold tracking-tight [font-stretch:90%]">
                    <a
                        href={`/${locale}/projects/${project.slug}`}
                        className="transition-colors after:absolute after:inset-0 group-hover:text-accent"
                    >
                        {project.title}
                    </a>
                </h3>
                <p className="mt-2 text-ink-2">{locale === "fr" ? project.summary_fr : project.summary_en}</p>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                        <li
                            key={tag}
                            className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[0.72rem] text-ink-2"
                        >
                            {tag}
                        </li>
                    ))}
                </ul>

                <div className="relative z-10 mt-auto flex w-fit gap-5 pt-5">
                    {project.has_demo && (
                        <a href={project.link_demo} target="_blank" rel="noopener noreferrer" className={linkClass}>
                            {labels.demo}
                            <ArrowUpRight size={13} aria-hidden="true" />
                        </a>
                    )}
                    {project.has_code && (
                        <a href={project.link_code} target="_blank" rel="noopener noreferrer" className={linkClass}>
                            {labels.code}
                            <ArrowUpRight size={13} aria-hidden="true" />
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
};
