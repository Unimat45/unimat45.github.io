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
    wasm: { fr: "WebAssembly", en: "WebAssembly" },
    backend: { fr: "Back-end", en: "Backend" },
    plugin: { fr: "Extension", en: "Plugin" },
    network: { fr: "Réseau", en: "Network" },
    daemon: { fr: "Service", en: "Daemon" },
    system: { fr: "Système", en: "System" },
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
        title: "mcsd",
        slug: "mcsd",
        depth: -4,
        layer: "daemon",
        summary_fr:
            "Un démon à la pm2 pour les serveurs Minecraft, en Rust : il télécharge le jar et le bon Java, surveille chaque serveur et diffuse sa console dans un tableau de bord web.",
        summary_en:
            "A pm2-style daemon for Minecraft servers, in Rust: it downloads the jar and the right Java, supervises each server and streams its console to a web dashboard.",
        description_fr:
            "Un démon à la pm2, pensé pour les serveurs Minecraft. Une seule commande crée un serveur Paper, Vanilla ou Fabric : mcsd télécharge le jar et vérifie sa somme de contrôle, trouve la version de Java qui convient à la version de Minecraft (ou télécharge Eclipse Temurin) et accepte l’EULA. Il surveille ensuite chaque serveur : état, joueurs, CPU et mémoire, redémarrage après un plantage avec un délai croissant, et un arrêt propre qui laisse les mondes se sauvegarder. Tout se pilote en ligne de commande ou depuis un tableau de bord SvelteKit intégré au binaire, qui diffuse la console par WebSocket. Le démon est écrit en Rust avec tokio et axum, et se distribue en un seul binaire pour Windows, Linux et macOS, qui s’installe comme service système.",
        description_en:
            "A pm2-style daemon, built for Minecraft servers. One command creates a Paper, Vanilla or Fabric server: mcsd downloads the jar and verifies its checksum, finds the Java version that suits the Minecraft version (or downloads Eclipse Temurin), and accepts the EULA. It then supervises each server: state, players, CPU and memory, restarts after a crash with a growing delay, and a clean stop that lets the worlds save. Everything is driven from the command line or from a SvelteKit dashboard embedded in the binary, which streams the console over WebSocket. The daemon is written in Rust with tokio and axum, and ships as a single binary for Windows, Linux and macOS that installs as a system service.",
        link_code: "https://github.com/Unimat45/mcsd",
        tags: ["Rust", "Svelte", "TypeScript", "WebSocket"],
        has_code: true,
        has_demo: false,
    },
    {
        title: "CoordonatesPlugin",
        slug: "coordonates_plugin",
        depth: -2,
        layer: "plugin",
        summary_fr:
            "Un plugin Spigot et Paper pour partager sa position et sauvegarder des coordonnées nommées, de Minecraft 1.8 à 26.x.",
        summary_en:
            "A Spigot and Paper plugin to share your position and save named coordinates, from Minecraft 1.8 to 26.x.",
        description_fr:
            "Un plugin pour serveurs Spigot et Paper qui aide à se souvenir des endroits importants. /coord annonce sa position à tout le serveur, /save-coord sauvegarde sa position et son monde sous un nom, /show-coord affiche ses endroits sauvegardés (à soi seulement) et /delete-coord en retire un. Réutiliser un nom demande d’abord une confirmation. Chaque commande a sa propre permission, et les coordonnées sont gardées dans un fichier YAML écrit après chaque changement. Le même jar fonctionne sur toutes les versions, de 1.8 à 26.x : la compilation vérifie le plugin contre chaque API Spigot prise en charge, et les tests s’exécutent contre la plus ancienne et la plus récente.",
        description_en:
            "A plugin for Spigot and Paper servers that helps you remember the places that matter. /coord broadcasts your position to the whole server, /save-coord saves your position and world under a name, /show-coord lists your saved spots (to you only) and /delete-coord removes one. Reusing a name asks for confirmation first. Each command has its own permission, and the coordinates are kept in a YAML file written after every change. The same jar runs on every version from 1.8 to 26.x: the build checks the plugin against each supported Spigot API, and the tests run against both the oldest and the newest.",
        link_code: "https://github.com/Unimat45/CoordonatesPlugin",
        tags: ["Java"],
        has_code: true,
        has_demo: false,
    },
    {
        title: "RCON",
        slug: "rcon",
        depth: -3,
        layer: "network",
        summary_fr:
            "Un client RCON pour Minecraft écrit en C, en ligne de commande ou avec une interface Qt, qui parle le protocole directement sur TCP/IP.",
        summary_en:
            "A Minecraft RCON client written in C, on the command line or with a Qt interface, speaking the protocol straight over TCP/IP.",
        description_fr:
            "Cette application a un seul but précis : effectuer la gestion d’un serveur minecraft à distance au travers des commandes déjà intégrées du serveur. Bien que ce programme semble très simpliste, le format utilisé pour transmettre les messages au serveur rend le processus plus compliqué. Ce programme s’occupe de lire la commande entrée par l’utilisateur, de les convertir au bon format et de communiquer avec le serveur au travers d’une connexion TCP/IP. Pareillement, à la réception d’un message du serveur, le programme déchiffre les octets et affiche la chaine de caractères dans la console. Très pratique pour gérer plusieurs serveurs. Le client existe en deux versions : un outil en ligne de commande et une interface graphique Qt.",
        description_en:
            "This application has one specific purpose: to manage a Minecraft server remotely using the server's already integrated commands. Although this program seems very simplistic, the format used to transmit messages to the server makes the process more complicated. This program takes care of reading the command entered by the user, converting them to the correct format and communicating with the server through a TCP/IP connection. Similarly, when receiving a message from the server, the program decrypts the bytes and displays the character string in the console. Very practical for managing multiple servers. The client comes in two versions: a command-line tool and a Qt graphical interface.",
        link_code: "https://github.com/Unimat45/Rcon.git",
        tags: ["C/C++"],
        has_code: true,
        has_demo: false,
    },
    {
        title: "pport",
        slug: "pport",
        depth: -6,
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
        tags: ["C/C++", "TypeScript", "WebSocket"],
        has_code: true,
        has_demo: false,
    },
    {
        title: "OrangeAuth",
        slug: "orange_auth",
        depth: -1,
        layer: "backend",
        summary_fr:
            "Un middleware d’authentification pour Node.js et TypeScript, indépendant du framework, bâti sur des fournisseurs et des stratégies de session interchangeables. Publié sur npm.",
        summary_en:
            "A framework-agnostic authentication middleware for Node.js and TypeScript, built on swappable providers and session strategies. Published on npm.",
        description_fr:
            "Une couche d’authentification modulaire pour les API, indépendante du framework web. La connexion passe par des fournisseurs (des identifiants locaux pour l’instant, OAuth est prévu), et une stratégie décide comment la session est créée, vérifiée et sérialisée, par exemple en JWT dans un cookie sécurisé. CreateAuth retourne un gestionnaire de requêtes standard, monté sur /api/auth au moyen d’un adaptateur (Express, par exemple), et une fonction getSession pour lire la session n’importe où dans l’application. Fournisseurs et stratégies sont des interfaces : on peut écrire les siens. Écrit en TypeScript et publié sur npm sous le nom orange-auth, le projet est encore jeune et expérimental.",
        description_en:
            "A modular authentication layer for APIs, independent of the web framework. Logging in goes through providers (local credentials for now, OAuth is planned), and a strategy decides how the session is created, verified and serialized, for example as a JWT in a secure cookie. CreateAuth returns a standard request handler, mounted on /api/auth through an adapter (Express, for example), and a getSession function to read the session anywhere in the app. Providers and strategies are interfaces: you can write your own. Written in TypeScript and published on npm as orange-auth, the project is still young and experimental.",
        link_code: "https://github.com/Unimat45/OrangeAuth",
        tags: ["TypeScript"],
        has_code: true,
        has_demo: false,
    },
    {
        title: "Crosshair",
        slug: "crosshair",
        depth: -5,
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
        tags: ["C/C++"],
        has_code: true,
        has_demo: false,
    },
    {
        title: "Pong",
        slug: "pong",
        depth: 0,
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
        tags: ["C/C++", "WebAssembly"],
        has_code: true,
        has_demo: true,
    },
];
