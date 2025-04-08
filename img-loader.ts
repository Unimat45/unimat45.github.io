interface loaderProps {
    src: string;
    width: number;
}

export default function imgLoader({ src, width }: loaderProps) {
    return width ? src : src;
}
