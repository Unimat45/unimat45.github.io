import { ExternalLink, Github } from "lucide-react";
import type React from "react";

import type { Project } from "../assets/projects";

interface Props {
    index: number;
    locale: string;
    project: Project;
}

export const ProjectCard: React.FC<Props> = ({ index, locale, project }) => {
    return (
        <div
            className="group relative cursor-pointer overflow-hidden rounded-xl border border-gray-700/50 bg-gray-800/30 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20"
            style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
            }}
        >
            <div className="absolute top-0 right-0 -z-10 size-50 overflow-hidden opacity-25">
                <img
                    src={`/images/projets/${project.slug}/logo.webp`}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-r from-gray-800 to-transparent"></div>
            </div>

            <a href={`/${locale}/projects/${project.slug}`} className="block p-6 pb-0">
                <h3 className="mb-2 text-2xl font-bold text-white transition-colors group-hover:text-cyan-400">
                    {project.title}
                </h3>
                <p className="mb-4 line-clamp-3 text-gray-400">
                    {locale === "fr" ? project.description_fr : project.description_en}
                </p>

                <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </a>

            <div className="p-6 pt-0">
                <div className="flex space-x-3 border-t border-gray-700/50 pt-4">
                    {project.has_demo && (
                        <a
                            href={project.link_demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-1 items-center justify-center space-x-2 rounded-lg bg-linear-to-r from-cyan-500 to-emerald-500 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
                        >
                            <ExternalLink size={16} />
                            <span>Demo</span>
                        </a>
                    )}
                    {project.has_code && (
                        <a
                            href={project.link_code}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-1 items-center justify-center space-x-2 rounded-lg bg-gray-700/50 px-4 py-2 text-sm font-semibold text-gray-300 transition-all duration-300 hover:bg-gray-700"
                        >
                            <Github size={16} />
                            <span>Code</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};
