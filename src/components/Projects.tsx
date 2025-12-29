import { useMemo, useState } from "react";

import { projects, type Tag, tags } from "../assets/projects";
import { Chip } from "./Chip";
import { ProjectCard } from "./ProjectCard";

type ProjectsProps = { locale: string };

const Projects: React.FC<ProjectsProps> = ({ locale }) => {
    const [selected, setSelected] = useState<Tag | "All">("All");
    const usedTags = useMemo<(Tag | "All")[]>(
        () => ["All", ...tags.filter((t) => projects.some((p) => p.tags.includes(t)))],
        [tags, projects],
    );

    const filteredProjects = selected === "All" ? projects : projects.filter((p) => p.tags.includes(selected));

    return (
        <>
            <section className="flex h-fit flex-wrap gap-2">
                {usedTags.map((t) => (
                    <Chip key={t} label={t} isSelected={selected === t} onSelected={() => setSelected(t)} />
                ))}
            </section>

            <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.map((p, i) => (
                    <ProjectCard key={p.slug} index={i} project={p} locale={locale} />
                ))}
            </section>
        </>
    );
};

export { Projects };
