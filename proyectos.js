const myProjects = [
    {
        id: "tfg-pandemic",
        title: "Pandemic War",
        role: "Lead Gameplay & Systems Programmer",
        year: "2026",
        technologies: ["Unity 6", "C#", "Netcode for GameObjects", "Unity Relay", "Eller's Algorithm", "NavMesh"],
        short_description: "A 3D cooperative survival FPS featuring procedural level generation and robust multiplayer architecture.",
        image_fallback: "assets/img-tfg.jpg",
        video_hover: "./assets/PandemicWar.mp4",
        detailed_description: `
            <p><strong>Pandemic War</strong> is a 3D cooperative survival FPS built in Unity 6. Set in a post-apocalyptic military base, the game challenges players to survive scaling waves of infected agents while solving complex environmental puzzles to assemble a technological relic known as the Spear.</p>
            
            <p>As the Lead Programmer, I was responsible for the core software architecture and gameplay loops. My focus was on delivering a AAA-like technical foundation within an indie scope. Key technical achievements include:</p>
            
            <ul>
                <li><strong>Multiplayer Architecture:</strong> Engineered an authoritative server topology using Netcode for GameObjects integrated seamlessly with Unity Relay services, ensuring precise network synchronization for player economies and environmental states.</li>
                <li><strong>Procedural Generation:</strong> Implemented Eller's Algorithm to dynamically generate a "perfect labyrinth" at runtime. This ensures infinite replayability while maintaining strict performance optimizations.</li>
                <li><strong>Advanced Systems & AI:</strong> Developed a scalable AI ecosystem capable of managing up to 24 simultaneous enemies using optimized NavMesh querying. Additionally, I programmed a procedural gunplay system featuring hit-scan raycast ballistics with penetration, dynamic recoil, and procedural ADS (Aim Down Sights).</li>
                <li><strong>Decoupled Quest Manager:</strong> Designed a centralized Singleton-based manager to handle a mixed narrative timeline, combining fixed milestones with randomized logic steps without hard-coupling the systems.</li>
            </ul>
            
            <p>Future iterations of the project are focused on expanding accessibility, specifically aiming at a mobile platform deployment and the implementation of missing sound effects to finalize the acoustic landscape.</p>
        `
    },
    {
        id: "comando-pinguino",
        title: "Comando Pingüino",
        role: "Co-Lead Programmer",
        year: "2024",
        technologies: ["Unity 3D", "C#", "A* Pathfinding", "Finite State Machine (FSM)", "AI Sensors"],
        short_description: "A 3D stealth and strategy game featuring a custom-built Object-Oriented Finite State Machine and A* pathfinding for dynamic NPC coordination.",
        image_fallback: "assets/img-pinguino.jpg",
        video_hover: "./assets/pinguinosdemadagascar.mp4",
        detailed_description: `
            <p><strong>Comando Pingüino</strong> is a 3D stealth and strategy game where the player takes the role of an intelligent penguin escaping a military base (Area 51) to reach Antarctica. The game features a dynamic environment where enemies react to visual and auditory stimuli, utilizing a strict stealth mechanic where being caught resets the progression.</p>
            
            <p>As Co-Lead Programmer, I focused entirely on engineering the Artificial Intelligence architecture and the NPC coordination networks. Key technical implementations include:</p>
            
            <ul>
                <li><strong>Custom FSM Architecture:</strong> Engineered an object-oriented Finite State Machine (FSM) utilizing a base <code>State</code> class and a <code>StateMachine</code> controller to govern complex, decoupled behaviors for various NPCs, including guards, dogs, security cameras, and genetically modified chickens.</li>
                <li><strong>A* Pathfinding & Custom NavGraph:</strong> Designed a custom waypoint graph system using <code>LineCast</code> to calculate node connectivity while masking out environmental obstacles. I implemented the A* algorithm from scratch for real-time optimal route calculation, utilizing Euclidean distance as a heuristic.</li>
                <li><strong>Sensory Perception Systems:</strong> Programmed distinct perception mechanics for each enemy type. This included vision cones factoring in angle, distance, and raycasting for line-of-sight checks, alongside hearing radii triggered by dynamic noise mechanics dependent on player movement speed and floor surfaces (e.g., asphalt).</li>
                <li><strong>NPC Coordination Network:</strong> Created an alert broadcasting system using <code>Physics.OverlapSphere</code>. This allowed stationary units (cameras and chickens) to seamlessly communicate with patrolling guards within a specified radius, automatically transitioning their states via event triggers to investigate the player's last known location.</li>
            </ul>
        `
    },
    {
        id: "katan-hex-domination",
        title: "Katan Hex Domination",
        role: "Gameplay Programmer",
        year: "2024",
        technologies: ["Unity 3D", "C#", "Hexagonal Grid Math", "GOAP (AI)", "FSM"],
        short_description: "A 3D turn-based strategy game inspired by Catan and Civilization. Focused on hexagonal grid interactions, unit lifecycle, and action execution.",
        image_fallback: "assets/img-katan.jpg",
        video_hover: "./assets/katan.mp4",
        detailed_description: `
            <p><strong>Katan Hex Domination</strong> is a 3D turn-based strategy and resource management game[cite: 1, 2]. Competing players race to accumulate 10 victory points through territorial expansion, resource gathering, and military superiority on a procedurally handled hexagonal map[cite: 2, 3].</p>
            
            <p>As a Gameplay Programmer, my primary focus was bridging the gap between the player's inputs, the hexagonal coordinate system, and the unit execution logic. The project featured a sophisticated AI system designed by the team, blending a Finite State Machine (for high-level aggressive/defensive stances) with Goal-Oriented Action Planning (GOAP) for executing complex construction and combat sequences.</p>
            
            <p>My specific technical contributions included:</p>
            
            <ul>
                <li><strong>Unit Lifecycle & Architecture:</strong> Engineered the base attributes, health, and combat resolution systems for a diverse roster of units (Settlers, Knights, Artillery, Cavalry) and structures (Villages, Cities)[cite: 3, 4, 5, 6]. Implemented the logic for specific abilities, such as the military units' "Plunder" action, which temporarily disables resource tile yields[cite: 5, 6, 7].</li>
                <li><strong>Hexagonal Grid Interaction:</strong> Programmed the raycasting and selection controllers necessary for players to interact with the 3D hexagonal grid[cite: 8, 9]. This included mapping 2D mouse inputs to 3D grid coordinates, validating unit movement ranges, and confirming legal attack/build targets.</li>
                <li><strong>Resource & Economy Management:</strong> Developed the back-end logic for the gathering phase, calculating resource yields based on village/city adjacencies to specific hexagonal tile types (Wood, Stone, Wheat, Clay, Sheep) at the start of each turn[cite: 8, 10, 11].</li>
                <li><strong>System Integration:</strong> Ensured the unit action systems seamlessly interfaced with the GOAP AI controllers, providing clean APIs so the AI could instantiate units, issue movement commands via A*, and trigger combat state changes based on its calculated priorities[cite: 8].</li>
            </ul>
        `
    },
    {
        id: "nn-combat-bot",
        title: "Neural Network Combat Bot",
        role: "AI & Machine Learning Programmer",
        year: "2026",
        technologies: ["Neural Networks", "Machine Learning", "C#", "Unity"],
        short_description: "Developed a neural network-driven AI agent capable of autonomous combat behaviors within a classified shooter environment.",
        image_fallback: "assets/img-mlbot.jpg",
        video_hover: "./assets//BotFPS.mp4",
        detailed_description: `
            <p><strong>Neural Network Combat Bot</strong> is an advanced Artificial Intelligence project focused on machine learning and autonomous agent behavior.</p>
            
            <p>Integrated within a larger, confidential shooter project provided by external collaborators, my core responsibility was exclusively the design, training, and implementation of the neural network model that drives the enemy bot's decision-making process.</p>
            
            <p>My specific technical contributions included:</p>
            
            <ul>
                <li><strong>Neural Network Architecture:</strong> Designed and trained a custom neural network to evaluate combat scenarios in real-time, allowing the agent to adapt dynamically to the player's actions without relying on traditional hard-coded state machines.</li>
                <li><strong>System Integration:</strong> Successfully bridged the trained machine learning model with the existing game engine architecture, ensuring seamless data flow between the game state observations and the AI's decision matrix.</li>
                <li><strong>Behavioral Refinement:</strong> Translated complex numerical outputs from the neural network into fluid, realistic combat actions (such as aiming, shooting, and evasion), greatly enhancing the unpredictability and challenge of the AI.</li>
                <li><strong>Confidential Workflow:</strong> Operated within a restricted collaborative framework, successfully integrating external assets and core mechanics while maintaining strict project confidentiality.</li>
            </ul>
        `
    },
    {
        id: "villores-project",
        title: "El Bruixot de Villores", // Puedes cambiar el título si el juego tenía un nombre final distinto
        role: "Lead Programmer",
        year: "2025",
        technologies: ["Unity 2D", "C#", "GameManager Architecture", "Dialogue Systems", "Level Design"],
        short_description: "Lead Programmer for a collaborative game, responsible for the core architecture, scene management, and a custom side-scrolling minigame.",
        image_fallback: "assets/img-villores.jpg",
        video_hover: "./assets/videopromocionalBruixotDeVilloresYT.mp4",
        detailed_description: `
            <p>Developed during my third year of university, this collaborative project represents my first major experience leading the technical development of a team-based game.</p>
            
            <p>As the Lead Programmer, my primary responsibility was building the foundational architecture that allowed the rest of the team's mechanics and narrative elements to function cohesively. My technical contributions included:</p>
            
            <ul>
                <li><strong>Core Architecture:</strong> Engineered the central GameManager to control game states, handle logic flow, and maintain data consistency across the entire application.</li>
                <li><strong>Scene Management:</strong> Programmed a robust scene transition system utilizing trigger detections and synchronized animations to ensure smooth, polished loading phases between different areas of the game.</li>
                <li><strong>Narrative Tools:</strong> Developed a custom, scalable Dialogue System from scratch to manage NPC interactions and seamlessly deliver the game's story to the player.</li>
                <li><strong>Side-Scrolling Minigame:</strong> Designed and programmed a custom "Jetpack Joyride-style" auto-runner segment. Unlike procedural endless runners, I implemented a meticulously handcrafted, fixed-path level design. The system required programming precise collision detection and movement patterns, challenging the player to collect traditional items ("botijos") while dodging specific enemy hazards, such as demons and temptress projectiles.</li>
            </ul>
        `
    }
];
