import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

import { useMobile } from "../hooks/useMobile";

type ProjectCarouselProps = { slug: string; nbr_images: number };

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ slug, nbr_images }) => {
    const isMobile = useMobile();
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);

    const picturePrefix = isMobile ? "mobile" : "desktop";

    return (
        <div ref={emblaRef} className="h-full w-full overflow-hidden">
            <div className="flex h-full w-full">
                {Array.from({ length: nbr_images }).map((_, i) => (
                    <div key={`${slug}_${i}`} className="min-w-0 flex-[0_0_100%]">
                        <img
                            className="h-full w-full object-scale-down"
                            src={`/images/projets/${slug}/${picturePrefix}_${i}.webp`}
                            alt={slug}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export { ProjectCarousel };
