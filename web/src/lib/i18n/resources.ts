import Face from "../../assets/face.webp";

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

            skip: "Aller au contenu",
            navLabel: "Navigation principale",
            navHome: "Accueil",
            navProjects: "Projets",
            navContact: "Contact",
            switchLang: "Switch to English",
            footerLabel: "Pied de page",
            demo: "Démo",
            code: "Code",

            boardEyebrow: "Fond de la pile",
            boardTitle: "Un projet en tête?",
            boardText:
                "Un site, une application ou quelque chose de plus près du métal : écrivez-moi, je réponds en quelques jours.",
            boardCta: "Écrivez-moi",

            pin: "Broche",
            lights: "Lumières",
            lightsOn: "allumées",
            lightsOff: "éteintes",
            pool: "Piscine",
            poolOn: "pompe en marche",
            poolOff: "pompe arrêtée",
            pportConnector: "Connecteur du port parallèle",
            pportLog: "Commandes envoyées",
            pportNote: "Simulation : seules les lumières sont vraiment branchées. Les broches 4 à 9 sont libres.",
        },
        index: {
            title: "Accueil",
            description:
                "Mathieu Dery, développeur full stack : des applications web évolutives, et plus bas dans la pile jusqu'au port parallèle.",
            image: "",
            imageAlt: "Portrait de Mathieu Dery",

            eyebrow: "Mathieu Dery · Développeur full stack",
            headline: "Des pixels",
            headlineTo: "aux",
            headlinePins: "broches",
            lede: "Je conçois des applications web évolutives. Et quand la curiosité l'emporte, je descends plus bas dans la pile : applications de bureau en Rust, C++ compilé en WebAssembly, sockets TCP, jusqu'au port parallèle qui éteint le moteur de ma piscine la nuit.",
            cta: "Parlons de votre projet",
            down: "Descendre dans la pile",

            factYears: "ans d'expérience",
            factProjects: "projets complétés",
            factClients: "clients satisfaits",

            stackEyebrow: "Projets",
            stackTitle: "La pile, de haut en bas.",
            stackText: "Du navigateur jusqu'au matériel : chaque projet descend d'un cran.",
            stackAll: "Tous les projets",
        },
        projects: {
            title: "Mes Projets",
            description: "Vitrine de mes derniers travaux et réalisations créatives",
            image: "",

            back: "Retour aux projets",
            filterAll: "Tous",

            overview: "Description",
            tech: "Technologies",

            link_one: "Lien du projets",
            link_other: "Liens du projets",

            link_demo: "Voir la démo",
            link_code: "Voir le code source",
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

            skip: "Skip to content",
            navLabel: "Main navigation",
            navHome: "Home",
            navProjects: "Projects",
            navContact: "Contact",
            switchLang: "Passer au français",
            footerLabel: "Footer",
            demo: "Demo",
            code: "Code",

            boardEyebrow: "Bottom of the stack",
            boardTitle: "Got a project in mind?",
            boardText: "A website, an app, or something closer to the metal: write to me, I reply within a few days.",
            boardCta: "Write to me",

            pin: "Pin",
            lights: "Lights",
            lightsOn: "on",
            lightsOff: "off",
            pool: "Pool",
            poolOn: "pump running",
            poolOff: "pump off",
            pportConnector: "Parallel port connector",
            pportLog: "Commands sent",
            pportNote: "Simulation: only the lights are actually wired up. Pins 4 to 9 are free.",
        },
        index: {
            title: "Home",
            description:
                "Mathieu Dery, full stack developer: scalable web applications, and further down the stack all the way to the parallel port.",
            image: "",
            imageAlt: "Portrait of Mathieu Dery",

            eyebrow: "Mathieu Dery · Full stack developer",
            headline: "From pixels",
            headlineTo: "to",
            headlinePins: "pins",
            lede: "I build scalable web applications. And when curiosity wins, I go further down the stack: desktop apps in Rust, C++ compiled to WebAssembly, raw TCP sockets, all the way to the parallel port that switches my pool pump off at night.",
            cta: "Let's talk about your project",
            down: "Go down the stack",

            factYears: "years of experience",
            factProjects: "projects completed",
            factClients: "happy clients",

            stackEyebrow: "Projects",
            stackTitle: "The stack, top to bottom.",
            stackText: "From the browser down to the hardware: each project goes one level deeper.",
            stackAll: "All projects",
        },
        projects: {
            title: "My Projects",
            description: "A showcase of my latest work and creative endeavors",
            image: "",

            back: "Back to Projects",
            filterAll: "All",

            overview: "Overview",
            tech: "Technologies",

            link_one: "Project link",
            link_other: "Project links",

            link_demo: "View Live Demo",
            link_code: "View Source Code",
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
