export const tags = [
    "TypeScript",
    "Rust",
    "C/C++",
    "C#",
    "Java",
    "WebAssembly",
    "Flutter",
    "React",
    "Angular",
    "ASP.NET",
    "Firebase",
    "Svelte",
    "WebSocket",
] as const;
export type Tag = (typeof tags)[number];

/** Where each project sits in the stack, from the browser (0) down to the hardware. */
export const layers = {
    browser: { fr: "Navigateur", en: "Browser" },
    desktop: { fr: "Bureau", en: "Desktop" },
    wasm: { fr: "WebAssembly", en: "WebAssembly" },
    system: { fr: "Système", en: "System" },
    network: { fr: "Réseau", en: "Network" },
    hardware: { fr: "Matériel", en: "Hardware" },
} as const;
export type Layer = keyof typeof layers;

export type Project = {
    title: string;
    slug: string;
    /** One or two sentences for the homepage and the project cards. */
    summary_fr: string;
    summary_en: string;
    description_fr: string;
    description_en: string;
    /** 0 for the browser, negative going down the stack; the homepage lists projects by depth. */
    depth: number;
    layer: Layer;
    nbr_images: number;
    tags: Tag[];
} & (
    | {
          link_demo: string;
          has_demo: true;
          has_code: false;
      }
    | {
          link_code: string;
          has_code: true;
          has_demo: false;
      }
    | {
          link_demo: string;
          link_code: string;
          has_code: true;
          has_demo: true;
      }
);

export const projects: Project[] = [
    {
        title: "Banana Streaming",
        slug: "banana_streaming",
        depth: 0,
        layer: "browser",
        summary_fr:
            "Un site de streaming de films et de séries, avec recherche par genre, reprise de lecture et enchaînement automatique des épisodes.",
        summary_en:
            "A streaming site for movies and series, with search by genre, resume where you left off and automatic next-episode prompts.",
        description_fr:
            "Écrit en React, ce site web permet d'écouter une variété de films et séries en quelques cliques, que se soit sur ordinateur ou mobile. À la première visite, on peut y voir tous les films et séries disponibles, classés par genre (Ex: Action, Comédie, etc) chacun dans leur caroussel respectif. Une page de recherche est aussi disponible pour trouver facilement une vidéo soit par nom ou par genre. L'application intègre aussi quelques fonctionnalitées de comfort d'utilisation, par exemple: Une section pour continuer l'écoute d'un film qui n'a pas été terminé, un bouton qui s'affiche vers la fin d'un épisode pour écouter le prochain épisode.",
        description_en:
            "Written in React, this website allows you to listen to a variety of films and series in just a few clicks, whether on computer or mobile. On the first visit, you can see all the films and series available, classified by genre (Ex: Action, Comedy, etc.) each in their respective carousel. A search page is also available to easily find a video either by name or genre. The application also includes some user-friendly features, for example: A section to continue listening to a film that has not been finished, a button that appears towards the end of an episode to listen the next episode.",
        link_demo: "https://www.bananastreaming.ca",
        nbr_images: 4,
        tags: ["TypeScript", "React"],
        has_code: false,
        has_demo: true,
    },
    {
        title: "pport",
        slug: "pport",
        depth: -5,
        layer: "hardware",
        summary_fr:
            "Un serveur en C qui pilote les lignes de données du port parallèle par WebSocket. Chez moi, il éteint le moteur de la piscine la nuit.",
        summary_en:
            "A C server that drives the parallel port's data lines over WebSocket. At my place, it switches the pool pump off at night.",
        description_fr:
            "Bien que peu impressionnante visuellement, cette application permet de gérer la ligne de donnée du port parallèle d'un ordinateur à l'aide de commande simple. Celle-ci vient en deux parties: le serveur, celui qui recoit et traite la commande envoyée, et le client, qui, dans ce cas, est une application web hébergée seulement sur un réseau local. Bien que le serveur soit écrit en C, le client peut être reconstruit dans n'importe quelle langue de programmation, puisque la connexion au serveur se fait avec un WebSocket. Les commandes ont été créées pour être intuitives et suivent toujours ce format: INSTRUCTION LIGNE ÉTAT. Par exemple, pour allumer la troisième ligne, on utiliserait “SET PIN 3 HIGH”. L'utilisation de ce programme peut varier grandement d'une personne à l'autre, je l'utilise personnellement pour éteindre mon monteur à piscine pendant la nuit.",
        description_en:
            "Although not visually impressive, this application allows you to manage the data line of a computer's parallel port using a simple command. This comes in two parts: the server, the one that receives and processes the sent command, and the client, which, in this case, is a web application hosted only on a local network. Although the server is written in C, the client can be rebuilt in any programming language, since the connection to the server is made through WebSockets. The commands were created to be intuitive and always follow this basis: STATUS LINE INSTRUCTION. For example, to turn on the third line, we would use “SET PIN 3 HIGH”. The use of this program can vary greatly from person to person, I personally use it to turn off my pool installer at night.",
        link_code: "https://github.com/Unimat45/pport.git",
        nbr_images: 1,
        tags: ["C/C++", "TypeScript", "WebSocket"],
        has_code: true,
        has_demo: false,
    },
    {
        title: "Password Patch",
        slug: "password_patch",
        depth: -1,
        layer: "desktop",
        summary_fr:
            "Un gestionnaire de mots de passe de bureau, bilingue, avec export et import JSON. Interface en React, cœur en Rust avec Tauri.",
        summary_en:
            "A bilingual desktop password manager with JSON export and import. React interface, Rust core, built with Tauri.",
        description_fr:
            'Une application de bureau qui s’occupe de sauvegarder vos mots de passe de manière sécurisés, tout en ayant une interface graphique simple et élégante. L’application inclut une fonction pour changer la langue de l’interface, soit en anglais ou en français, ainsi que l’option d’exporter les mots de passe enregistrés au format JSON comme sauvegarde et reimporter ce même fichier. Le programme permet à l’utilisateur de sauvegarder une étiquette (Ex. : Twitter, Facebook, etc.), un nom d’utilisateur ou courriel, une manière d’identifier rapidement les informations importantes ainsi qu’un mot de passe qui sera chiffré à l’aide d’un algorithme personnalisé. Cette application même a été écrite en partie en JavaScript à l\'aide des framework "React", ainsi qu\'en Rust avec le framework "Tauri".',
        description_en:
            "A desktop application that takes care of saving your passwords securely, while having a simple and elegant graphical interface. The application includes a function to change the interface language, either to English or French, as well as the option to export passwords saved in JSON format as a backup and reimport this same file. The program allows the user to save a label (Ex.: Twitter, Facebook, etc.), a username or email, a way to quickly identify important information as well as a password which will be encrypted using a custom algorithm. This very application was written partly in JavaScript using the React framework, as well as in Rust with the Tauri framework.",
        link_code: "https://github.com/Unimat45/PasswordPatch.git",
        nbr_images: 2,
        tags: ["Rust", "TypeScript", "React"],
        has_code: true,
        has_demo: false,
    },
    {
        title: "Pong",
        slug: "pong",
        depth: -2,
        layer: "wasm",
        summary_fr:
            "Le classique, écrit en C++ avec SDL2, puis compilé en WebAssembly pour se jouer directement dans le navigateur.",
        summary_en:
            "The classic, written in C++ with SDL2, then compiled to WebAssembly so it plays right in the browser.",
        description_fr:
            "Bien que le jeu de “pong” est l’un des plus vieux jeu vidéo comercialisé, son charme et sa simplicité permettent de garder l’attention des joueurs. Plusieurs personnes se sont tentés à reconstruire cet icône du jeux interactif, et beacoup lui ajoute une touche de personnalisation cosmétique pour rendre l’interface plus atrayante. Cette version ci reste plus originelle à sa source, mais, par contre, offre la possibilité d’être joué dans un navigateur web ou nativement sur un ordinateur. Écrit en C++ et en utilisant la librairie de graphisme “SDL2”, on peut utiliser un compileur permettant convertir ce programme en WebAssembly. Bien sûr, on peut toujours le compiler d’une manière plus classique et y jouer en tant qu’application de bureau.",
        description_en:
            "Although the game of “pong” is one of the oldest commercialized video games, its charm and simplicity keep players’ attention. Several people have attempted to rebuild this interactive gaming icon, and many have added a touch of cosmetic customization to make the interface more attractive. This version remains more original to its source, but, on the other hand, offers the possibility of being played in a web browser or natively on a computer. Written in C++ and using the “SDL2” graphics library, you can use a compiler to convert this program into WebAssembly. Of course, you can always compile it in a more traditional way and play it as a desktop application.",
        link_demo: "/pong.html",
        link_code: "https://github.com/unimat45/pong.git",
        nbr_images: 1,
        tags: ["C/C++", "WebAssembly"],
        has_code: true,
        has_demo: true,
    },
    {
        title: "Crosshair",
        slug: "crosshair",
        depth: -3,
        layer: "system",
        summary_fr:
            "Un réticule dessiné au centre de l'écran avec l'API Windows, repositionnable au clavier et configurable par un script Lua.",
        summary_en:
            "A crosshair drawn at the centre of the screen through the Windows API, moved with hotkeys and configured by a Lua script.",
        description_fr:
            "Pratique pour les jeux de tirs, cette application dessine un petit réticule au centre de votre écran principal dans le but d’aider à la précision de ces jeux. Malgré que cette application soit écrite en C++, elle est offerte seulement sur les machines Windows, vu qu’elle utilise l’API Windows pour créer une fenêtre et dessiner à l’intérieur. Le réticule peut s’adapter aux différents jeux : à l’aide d’une combinaison de touches, il est possible de changer l’endroit du dessin afin d’accommoder tous les jeux. Un fichier de configuration est aussi disponible pour automatiser le placement du réticule au lancement d’une application. Ce fichier de configuration est un script lua.",
        description_en:
            "Practical for shooting games, this application draws a small crosshair in the center of your main screen in order to help with the precision of these games. Although this application is written in C++, it is only available on Windows machines, since it uses the Windows API to create a window and draw inside it. The reticle can be adapted to different games: using a key combination, it is possible to change the location of the drawing in order to accommodate all games. A configuration file is also available to automate the placement of the reticle when launching an application. This configuration file is a lua script.",
        link_code: "https://github.com/Unimat45/Crosshair.git",
        nbr_images: 3,
        tags: ["C/C++"],
        has_code: true,
        has_demo: false,
    },
    {
        title: "RCON",
        slug: "rcon",
        depth: -4,
        layer: "network",
        summary_fr:
            "Un client en ligne de commande qui administre un serveur Minecraft à distance, en parlant le protocole RCON directement sur TCP/IP.",
        summary_en:
            "A command-line client that manages a Minecraft server remotely by speaking the RCON protocol straight over TCP/IP.",
        description_fr:
            "Cette application a un seul but précis : effectuer la gestion d’un serveur minecraft à distance au travers des commandes déjà intégrées du serveur. Bien que ce programme semble très simpliste, le format utilisé pour transmettre les messages au serveur rend le processus plus compliqué. Ce programme s’occupe de lire la commande entrée par l’utilisateur, de les convertir au bon format et de communiquer avec le serveur au travers d’une connexion TCP/IP. Pareillement, à la réception d’un message du serveur, le programme déchiffre les octets et affiche la chaine de caractères dans la console. Très pratique pour gérer plusieurs serveurs.",
        description_en:
            "This application has one specific purpose: to manage a Minecraft server remotely using the server's already integrated commands. Although this program seems very simplistic, the format used to transmit messages to the server makes the process more complicated. This program takes care of reading the command entered by the user, converting them to the correct format and communicating with the server through a TCP/IP connection. Similarly, when receiving a message from the server, the program decrypts the bytes and displays the character string in the console. Very practical for managing multiple servers.",
        link_code: "https://github.com/Unimat45/Rcon.git",
        nbr_images: 1,
        tags: ["C/C++"],
        has_code: true,
        has_demo: false,
    },
];
