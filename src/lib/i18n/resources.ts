import Face from "../../assets/face.png";

type i18n = {
    translation: {
        global: {
            title: string;
            description: string;
            image: string;
        };
        [page: string]: {
            title: string;
            description: string;
            image: string;
            [key: string]: string;
        };
    };
};

function defineLocale<T extends i18n>(locale: T) {
    return locale;
}

const fr = defineLocale({
    translation: {
        global: {
            title: "{{title}} | Mathieu Dery",
            description: "Portfolio de Mathieu Dery",
            image: Face.src,
        },
        index: {
            title: "Accueil",
            description:
                "Je conçois des expériences digitales raffinées où l'innovation technologique rencontre la précision du design. Expert en création d'applications web scalables, je transforme le code en outils inspirants.",
            image: "",
            imageAlt: "Photo de moi",

            hello: "Bonjour, je suis",
            jobTitle: "Développeur Full Stack & Solutionneur de Problèmes créatif",

            github: "Voir ma page Github",
            email: "Me contacter",

            projects: "Projets Complétés",
            clients: "Clients Contents",
            exp: "Années d'Expérience",
            satisfaction: "Satisfaction Clientèle",
        },
        projects: {
            title: "Mes Projets",
            description: "Vitrine de mes derniers travaux et réalisations créatives",
            image: "",
        },
        contact: {
            title: "Contacter",
            description: "",
            image: "",
        },
    },
});

const en = defineLocale({
    translation: {
        global: {
            title: "{{title}} | Mathieu Dery",
            description: "Mathieu Dery's portfolio",
            image: Face.src,
        },
        index: {
            title: "Home",
            description:
                "I craft elegant digital experiences that blend cutting-edge technology with pixel-perfect design. Specializing in building scalable web applications that don't just work, they inspire",
            image: "",
            imageAlt: "Picture of me",

            hello: "Hello, I'm",
            jobTitle: "Full Stack Developer & Creative problem solver",

            github: "See my Github page",
            email: "Contact me",

            projects: "Projects completed",
            clients: "Happy Clients",
            exp: "Years of Experience",
            satisfaction: "Client Satisfaction",
        },
        projects: {
            title: "My Projects",
            description: "A showcase of my latest work and creative endeavors",
            image: "",
        },
        contact: {
            title: "Contact",
            description: "",
            image: "",
        },
    },
});

export const resources = { fr, en };
