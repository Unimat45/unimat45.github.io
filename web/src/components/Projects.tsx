import { useMemo, useState } from "react";

import { projects, type Tag, tags } from "../assets/projects";
import { Chip } from "./Chip";
import { ProjectCard, type Thumb } from "./ProjectCard";

type ProjectsProps = {
    locale: "fr" | "en";
    labels: { all: string; demo: string; code: string };
    /** Thumbnails by project slug, resized by the page at build time. */
    thumbs: Record<string, Thumb>;
};

const Projects: React.FC<ProjectsProps> = ({ locale, labels, thumbs }) => {
    const [selected, setSelected] = useState<Tag | "All">("All");
    const usedTags = useMemo<(Tag | "All")[]>(
        () => ["All", ...tags.filter((t) => projects.some((p) => p.tags.includes(t)))],
        [],
    );

    const filteredProjects = selected === "All" ? projects : projects.filter((p) => p.tags.includes(selected));

    return (
        <>
            <section className="mb-8 flex h-fit flex-wrap gap-2">
                {usedTags.map((t) => (
                    <Chip
                        key={t}
                        label={t === "All" ? labels.all : t}
                        isSelected={selected === t}
                        onSelected={() => setSelected(t)}
                    />
                ))}
            </section>

            <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.map((p, i) => (
                    <ProjectCard
                        key={p.slug}
                        index={i}
                        project={p}
                        thumb={thumbs[p.slug]}
                        locale={locale}
                        labels={labels}
                    />
                ))}
            </section>
        </>
    );
};

export { Projects };
