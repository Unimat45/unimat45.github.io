import Link from "next/link";
import Image from "next/image";
import { applyIndex } from "~/lib/utils";
import { type Projet } from "@prisma/client";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

type ProjectCardProps = Pick<Projet, "title" | "slug"> & { index: number };

const ProjectCard: React.FC<ProjectCardProps> = ({ title, slug, index }) => {
    return (
        <Link
            href={`/projects/${slug}`}
            style={applyIndex(index)}
            className="popup hover:scale-105 transition-transform duration-300 flex-auto"
        >
            <Card>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <Image
                        className="w-[200px] h-[200px] mx-auto"
                        src={`/images/projets/${slug}/logo.webp`}
                        alt={title}
                        width={200}
                        height={200}
                    />
                </CardContent>
            </Card>
        </Link>
    );
};

export default ProjectCard;
