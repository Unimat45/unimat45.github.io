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
            description: "Vous avez un projet en tête? Contactez moi!",
            image: "",

            pageTitle: "Restons en Contact",

            info: "Information de Contact",
            email: "Courriel",
            phone: "Téléphone",
            subtitle: "Écris-moi",
            footer: "Je suis toujours prêt à discuter de nouveaux projets, d'idées créatives ou d'opportunité de faire partie de votre vision. N'hésitez pas à me contacter directement, où à l'aide du formulaire.",

            sendMsg: "Envoyer un message",
            yourName: "Votre nom",
            yourEmail: "Votre courriel",
            yourMessage: "Votre message",
            yourMessagePlaceholder: "Parlez-moi de votre projet...",
            send: "Envoyer",
            sendSuccess: "Votre message à bien été envoyé. Je vous répondrait d'ici quelques jours",
            sendErr: "Il y a eu une erreur lors de l'envoi de votre message. Veuillez réessayer plus tard",

            requiredErr: "{{field}} est requis",
            formatErr: "{{field}} n'est pas du bon format",
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
            description: "Have a project in mind? Let's talk about it",
            image: "",

            pageTitle: "Stay in Touch",

            info: "Contact Information",
            email: "Email",
            phone: "Phone",
            subtitle: "Let's Connect",
            footer: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through the form or contact me directly.",

            sendMsg: "Send a Message",
            yourName: "Your Name",
            yourEmail: "Your Email",
            yourMessage: "Your Message",
            yourMessagePlaceholder: "Tell me about your project...",
            send: "Send",
            sendSuccess: "Your message has been sent. I will answer you in the upcoming days",
            sendErr: "An error has occurred while sending your message. Please, try again later",

            requiredErr: "{{field}} is required",
            formatErr: "{{field}} is invalid",
        },
    },
});

export const resources = { fr, en };
