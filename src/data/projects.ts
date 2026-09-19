import { Project } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "rag",
    rank: "01",
    mono: "RAG",
    title: "Medical RAG Chatbot",
    meta: "Full-stack · 2025",
    image: "/images/projects/MedicalRAGIcon.png",
    short:
      "Full-stack medical Q&A chatbot pairing Retrieval-Augmented Generation with Gemini, citing its sources on every answer.",
    tags: ["RAG", "Next.js", "Gemini"],
    stack: [
      "Python",
      "Flask",
      "LangChain",
      "Pinecone",
      "Gemini 2.0 Flash",
      "Next.js",
      "TypeScript",
      "Tailwind",
    ],
    links: [
      { label: "Backend repo", href: "https://github.com/gaurabacharya/Medical-RAG-Chatbot" },
      { label: "Frontend repo", href: "https://github.com/gaurabacharya/medical-chatbot-frontend" },
      { label: "Demo video", href: "https://youtu.be/-NcgFqA0GN8" },
    ],
    sections: [
      {
        h: "Overview",
        p: "A sophisticated medical information retrieval and question-answering system spanning two repositories that work together as one product: a RAG-based Flask API and a Next.js chat frontend. RAG produces more accurate responses than the base LLM alone by supplying context from a vectorized database that can be refreshed with newer data — which cuts hallucinations — while a system prompt keeps answers consistent, and citations to the top 3 sources that provided the context are included in every response.",
      },
      {
        h: "Backend",
        p: "The source data is the Gale Encyclopedia of Medicine, split and embedded using the all-MiniLM-L6-v2 model from Hugging Face and stored in Pinecone. LangChain builds the documents, splits them, constructs the retrieval chain that pulls context out of Pinecone, and applies the prompt to gemini-2.0-flash. The repo exposes a backend API endpoint built with Flask for consumption by a separate, purpose-built frontend.",
      },
      {
        h: "Frontend",
        p: "A modern, user-friendly chatbot interface — first designed as wireframes in Figma, then implemented in React and TypeScript with Next.js and Tailwind CSS: a real-time chat interface with suggested medical questions and a responsive layout. It talks to the backend over a single POST /api/chat contract — a msg field in, an answer field out — so the API can be swapped or hosted independently.",
      },
      {
        h: "What I learned",
        p: "How much of RAG quality is upstream of the model: chunking strategy, embedding choice and index hygiene moved answer quality far more than prompt tweaking did. Also the value of treating the API contract as the product boundary, which let the UI and the retrieval stack evolve separately.",
      },
    ],
  },
  {
    id: "snkr",
    rank: "02",
    mono: "SNK",
    title: "SNKRView — Sneaker Recognition",
    meta: "iOS · On-device ML · Hackathon winner",
    image: "/images/projects/SneakerViewIcon.png",
    short:
      "iOS app with a trained image-classification model that identifies the model of Jordan sneakers from a photo, running entirely on device.",
    tags: ["Swift", "TensorFlow Lite", "TinyML"],
    stack: ["Swift", "XCode", "TensorFlow Lite", "Rune", "Flutter", "Python"],
    links: [
      { label: "GitHub", href: "https://github.com/gaurabacharya/SnkrView" },
      { label: "Devpost", href: "https://devpost.com/software/snkrview" },
      { label: "YouTube demo", href: "https://www.youtube.com/embed/1pvxpE0J9TI" },
    ],
    sections: [
      {
        h: "Overview",
        p: "Sneakers are more than just footwear — they tell a story about who we are and what we value. Inspired by that, I built SNKRView with two friends at a hackathon to help sneaker enthusiasts better exchange information about their shoes: take or upload a photo, and on-device machine learning identifies the model. It won the sponsor prize from HOT-G for taking a project end to end — training our own model and shipping an app that runs it on device in a tiny ML container.",
      },
      {
        h: "Implementation",
        p: "We began by scraping Bing for images of Jordans 1–12 and compiling them into a dataset. Using TensorFlow Lite, we trained a pre-processed model on that dataset, which became the core of a Rune pipeline that processes images and outputs sneaker model predictions. The mobile app itself was built in Swift in XCode for iOS, with the ML pipeline integrated through Flutter and the encoded Rune pipeline bundled into the iOS build.",
      },
      {
        h: "Challenges We Faced",
        p: "Building a dataset large enough for accuracy but small enough to train efficiently inside a hackathon window. Working with the Rune infrastructure, which we were initially unfamiliar with, meant a learning curve while building the pipeline. Deploying that pipeline onto Flutter and integrating it with the iOS app added technical hurdles, since both the tools and the infrastructure were new to us — and, of course, the sleep deprivation.",
      },
      {
        h: "What I Learned",
        p: "Hands-on experience scraping and compiling datasets, training models with TensorFlow Lite, and integrating a machine learning pipeline into a mobile app. Working with Rune, Swift and XCode opened up mobile development workflows and transfer learning, and Flutter turned out to be the bridge between the model and the app.",
      },
    ],
  },
  {
    id: "kirc",
    rank: "03",
    mono: "KIRC",
    title: "Kidney Cancer Genomic Analysis",
    meta: "Computational genomics · UBC BMEG 310",
    image: "/images/projects/KidneyGenomicsIcon.png",
    short:
      "Multi-omic analysis of kidney renal clear cell carcinoma in R — survival analysis, mutation burden, and patient clustering across clinical, mutation and RNA-seq data.",
    tags: ["R", "Genomics"],
    stack: ["R", "R Markdown", "survival / survminer", "dplyr", "ggplot2", "hclust"],
    links: [{ label: "GitHub", href: "https://github.com/gaurabacharya/BMEG310-FinalProject" }],
    sections: [
      {
        h: "Overview",
        p: "A final project for UBC's BMEG 310 (computational genomics) analyzing multi-omic cancer data for kidney renal clear cell carcinoma (KIRC). It integrated three data sources per patient — clinical records, somatic mutation calls, and RNA-seq gene expression — reconciling patient IDs across all three to build one common cohort for analysis. Group 31: Monesha Basker, Gaurab Acharya, Ellie Smith.",
      },
      {
        h: "Data Processing",
        p: "Patient identifiers differed in format across the clinical, mutation (TCGA barcode) and RNA-seq (dot-separated) datasets, so all three ID formats were normalized and intersected. That common patient set filtered and joined every downstream analysis, keeping comparisons like-for-like.",
      },
      {
        h: "Mutation Analysis",
        p: "Mutation records were filtered to non-synonymous variants — missense, nonsense, and frameshift insertions and deletions — and the count per patient computed and visualized. A gene-by-patient mutation matrix identified the top 20 most frequently mutated genes, and hierarchical clustering (Ward and Ward.D2 linkage on a binary distance matrix) grouped patients by mutation profile; the resulting clusters were compared against age, sex and race.",
      },
      {
        h: "Clinical & Survival Analysis",
        p: "Clinical status fields (OS, DSS, DFS, PFS), originally encoded as strings like \"1:DECEASED\", were converted to numeric indicators for modelling. Using survival and survminer, Kaplan-Meier curves were generated and compared across tumour stage, sex, genetic ancestry and race for each endpoint, with p-values and risk tables on every plot.",
      },
    ],
  },
  {
    id: "posture",
    rank: "04",
    mono: "POS",
    title: "Posture Position Corrector",
    meta: "React Native · Wearables",
    image: "/images/projects/PostureIcon.png",
    short:
      "App connected to an accelerometer and gyroscope that tracks posture data and supports posture-correction physiotherapy.",
    tags: ["React Native", "ML"],
    stack: ["React Native", "Gyroscope API", "EMG sensors", "Machine learning"],
    links: [
      {
        label: "Project doc",
        href: "https://docs.google.com/document/d/1wqURLYpwPPxl070JBkCJEHmEAi8TemNHIeQxOn5lNls/edit",
      },
    ],
    sections: [
      {
        h: "Overview",
        p: "A multidisciplinary UBC project — Engineering, Medicine and Business — aimed at creating context-appropriate solutions for posture correction through the use of innovative technology, supporting physiotherapy through real-time posture tracking. Connected to a hardware accelerometer and gyroscope, the app lets users track posture and notifies them when a deviation is detected.",
      },
      {
        h: "Research and Development",
        p: "EMG sensor data identified the muscle groups critical to maintaining posture — rectus abdominis, external obliques, erector spinae — which guided the monitoring algorithm. A detailed exercise test procedure produced baseline muscle-activation and posture data, which set the thresholds the app notifies on, alongside testing of electrode placement and signal processing.",
      },
      {
        h: "Implementation",
        p: "Built in React Native for cross-platform reach and connected to a gyroscope API for live tracking, with correction algorithms detecting 5° changes in posture and alerting the user. A machine learning model trained on posture data handled real-time classification, and per-user calibration tailored the feedback to individual posture habits.",
      },
      {
        h: "What I Learned",
        p: "How to combine gyroscopic data with machine learning to create a real-time posture correction tool, and how to balance user-friendliness with the technical constraints of the system. Working across engineering, kinesiology and business also sharpened multidisciplinary collaboration and iterative, user-feedback-driven testing.",
      },
    ],
  },
  {
    id: "udp",
    rank: "05",
    mono: "UDP",
    title: "Reliable Data Transfer over UDP",
    meta: "Systems · C",
    image: "/images/projects/tcpIcon.png",
    short:
      "Send/receive algorithms in C implementing the congestion and flow control mechanisms of TCP on top of UDP sockets.",
    tags: ["C", "Networking"],
    stack: ["C", "UDP sockets", "Selective Repeat ARQ", "TCP Tahoe / Reno"],
    links: [{ label: "GitHub", href: "https://github.com/gaurabacharya/Reliable-Data-Transfer-Protocol" }],
    sections: [
      {
        h: "Overview",
        p: "UDP is fast but has no built-in delivery guarantees, ordering or error checking. This protocol layers congestion control and flow control on top of it to transmit files reliably — packet acknowledgment, retransmission of lost packets, and congestion control creating a reliable flow over an unreliable channel.",
      },
      {
        h: "Implementation",
        p: "Sender and receiver were both written in C. The sender (rsend) splits files into chunks and pushes them through UDP sockets behind a sliding window that caps unacknowledged packets, with Selective Repeat ARQ handling losses through selective retransmission and congestion control inspired by TCP Tahoe and Reno adjusting the send rate. The receiver (rrecv) buffers incoming packets in its own sliding window and acknowledges back, and checksums verify every packet's integrity.",
      },
      {
        h: "What I Learned",
        p: "How reliable communication is actually constructed on an unreliable transport: sliding windows, Selective Repeat, and how Tahoe and Reno dynamically respond to congestion. Testing under dropped packets and varying bandwidth made the tradeoff between flow control and congestion control concrete.",
      },
    ],
  },
  {
    id: "routing",
    rank: "06",
    mono: "RTE",
    title: "Distance Vector & Link State Routing",
    meta: "Systems · Python",
    image: "/images/projects/routingIcon.png",
    short:
      "Distance vector and link state routing algorithms in Python that update routing tables from a network topology and find the shortest path.",
    tags: ["Python", "Algorithms"],
    stack: ["Python", "Bellman-Ford", "Link state", "Bash"],
    links: [{ label: "GitHub", href: "https://github.com/gaurabacharya/routing-protocols" }],
    sections: [
      {
        h: "Overview",
        p: "An implementation of the two routing algorithms that determine the shortest path for data across a network. Distance vector routing uses Bellman-Ford to update tables from the distance and direction to neighbouring nodes; link state routing has every node maintain a complete view of the topology. Both were tested under changing network conditions to compare efficiency and reliability.",
      },
      {
        h: "Implementation",
        p: "Written in Python with a clear structure per protocol, each runnable from a bash script (./dvr.sh, ./lsr.sh). In distance vector, each node keeps a routing table with its neighbours plus functions to add, remove and update; run_bellman_ford loops nodes to compute shortest paths and a controller function manages reading topologies, messages and topology changes. In link state, nodes exchange topology updates and get_hops resolves the sequence of nodes a packet must traverse to reach its destination.",
      },
      {
        h: "What I Learned",
        p: "How two algorithms solve the same problem in opposite ways — neighbour-to-neighbour gossip versus a global map — and what each costs in convergence and scalability when the topology changes underneath them, along with the tradeoffs of handling packet loss and bandwidth constraints in real time.",
      },
    ],
  },
  {
    id: "scope",
    rank: "07",
    mono: "MIC",
    title: "Portable Microscope for Sickle Cell Detection",
    meta: "Biomedical design · UBC",
    image: "/images/projects/portableMicroscope.png",
    short:
      "Low-cost portable microscope designed for rural villages to detect sickle cell disease, built in a UBC Biomedical Engineering design course.",
    tags: ["Hardware", "ML"],
    stack: ["3D printing", "SolidWorks", "Open-source imaging", "Machine learning"],
    links: [{ label: "Drive folder", href: "https://drive.google.com/drive/folders/1yIii4rAHC-gkH9jlfYuOjSyKMKUHGYRx" }],
    sections: [
      {
        h: "Overview",
        p: "A low-cost, durable, portable microscope for rural and resource-limited areas, aimed at detecting diseases like sickle cell anemia in places such as Dang Gadhawa, Nepal. The client needed something transportable and usable by minimally trained healthcare workers — affordable, easy to maintain, and accurate enough to be diagnostically useful.",
      },
      {
        h: "Engineering Design Process",
        p: "We ran a needs assessment with the client, identified key stakeholders — technicians, patients, healthcare workers — and generated multiple concepts weighted on portability, ease of use and durability. The selected design used commonly available materials plus open-source image analysis software, and was tested continuously to confirm it survived transport and worked in low-resource settings, with stakeholder feedback refining power limitations and maintenance procedures.",
      },
      {
        h: "Tools and Implementation",
        p: "Built from inexpensive, accessible components including 3D-printed parts that cut manufacturing cost and made repairs feasible, with a basic light source, standard objective lenses and a stage taking common slides. A machine learning algorithm running on minimal, open-source hardware helped automate identification of blood abnormalities including sickle cell traits.",
      },
      {
        h: "Impact and What We Learned",
        p: "The project improved access to critical diagnostic tools in rural communities, and its open-source nature made the microscope adaptable to diagnostic purposes beyond sickle cell detection. It reinforced how much collaborative, multidisciplinary design work depends on balancing technical requirements with cost, usability and durability.",
      },
    ],
  },
  {
    id: "vaccine",
    rank: "08",
    mono: "VAX",
    title: "COVID-19 Vaccine Transport Container",
    meta: "Thermal design · Arduino",
    image: "/images/projects/vaccineContainer.png",
    short:
      "Container designed to transport COVID-19 vaccine vials safely and securely, holding temperature while optimizing shipment space.",
    tags: ["Hardware", "Arduino"],
    stack: ["SolidWorks", "Arduino", "Carbon fibre", "Aluminium alloy", "GPS"],
    links: [{ label: "Drive folder", href: "https://drive.google.com/drive/folders/1RCCPHMlABJgFEeQnmxyYh_EGZDQgqp2l" }],
    sections: [
      {
        h: "Overview",
        p: "A low-cost thermal shipping container built to keep vaccines between -60°C and -80°C for up to 35 days using dry ice and integrated temperature monitoring — aimed at the cold-chain problem in low-resource distribution settings during the COVID-19 pandemic.",
      },
      {
        h: "Engineering Design Process",
        p: "Requirements came out of client work: stable internal temperature, integrated GPS tracking, and minimal temperature swing when opened. The container was designed lightweight and compact within a 400 × 400 × 560 mm envelope, with dry-ice refilling built into the concept and an Arduino sensor system logging temperature and alerting users past critical thresholds — refined with input from healthcare workers and vaccine distribution professionals.",
      },
      {
        h: "Tools and Implementation",
        p: "A carbon fibre outer box for insulation and durability, aluminium alloy inner container and drawers for thermal conductivity, and multiple dry-ice compartments distributing cooling evenly. Rechargeable batteries powered the monitoring system for up to 35 days, and a UI surfaced live temperature data alongside GPS location in transit.",
      },
      {
        h: "Impact and What We Learned",
        p: "The design contributed to addressing vaccine spoilage and distribution challenges in low-resource areas, reducing the need for constant manual monitoring. It reinforced the value of interdisciplinary collaboration — combining thermal engineering with digital solutions like GPS and temperature logging — and deepened an understanding of cold-chain logistics.",
      },
    ],
  },
  {
    id: "nba",
    rank: "09",
    mono: "NBA",
    title: "NBA Statistic Data Analysis",
    meta: "Data · Python + R Shiny",
    image: "/images/projects/NBAStatsIcon.png",
    short:
      "Scraped and analyzed NBA statistics to surface the top five players per stat category, with an R Shiny web app to explore them.",
    tags: ["Python", "R Shiny"],
    stack: ["Python", "BeautifulSoup", "R", "R Shiny", "Dropbase"],
    links: [
      { label: "Visualizer repo", href: "https://github.com/gaurabacharya/HTN-NBA-Stat-Visualizer" },
      { label: "Webapp repo", href: "https://github.com/gaurabacharya/NBA-Stats-Webapp" },
      { label: "Live app", href: "https://gacharya.shinyapps.io/R-shiny-app/" },
    ],
    sections: [
      {
        h: "Overview",
        p: "A tool for exploring NBA player statistics across three seasons, scraped from Basketball Reference. The web app filters by season and stat category to surface the top five players in points, rebounds, assists and more.",
      },
      {
        h: "Implementation",
        p: "Python with BeautifulSoup handled scraping; cleaned data was stored as CSVs, uploaded to Dropbase and served as JSON through its API. Python classes and methods identified the top five players per category for each of the three seasons, and an R Shiny app provided a responsive nav bar and dropdowns driving a table that updates live on selection.",
      },
      {
        h: "What I Learned",
        p: "Scraping and cleaning at volume, using an API layer to keep data access uniform, and building interactive, responsive UI in R Shiny — plus how much of a data product is really data processing and how APIs can handle data updates in real time.",
      },
    ],
  },
  {
    id: "flappy",
    rank: "10",
    mono: "GME",
    title: "Flappy Beard Arcade Game",
    meta: "Python · Pygame",
    image: "/images/projects/gameIcon.png",
    short:
      "A Flappy Bird remix starring James Harden dodging shaving razors — built to learn object-oriented programming properly.",
    tags: ["Python", "Pygame"],
    stack: ["Python 3", "Pygame", "OOP"],
    links: [{ label: "GitHub", href: "https://github.com/gaurabacharya/Flappy-Beard" }],
    sections: [
      {
        h: "Overview",
        p: "A fun and creative remix of Flappy Bird in Python and Pygame: instead of a bird, you fly a bearded James Harden through a gauntlet of razors. Hit one and the game ends with a comically clean-shaven Harden, your score displayed, and a space-bar restart.",
      },
      {
        h: "Implementation",
        p: "Written in Python 3 with Pygame and driven from the keyboard — up arrow to jump, game over on collision with a razor, the floor, or flying off the top of the screen. Scores are tracked per session, and the code is structured in an object-oriented style covering player movement, obstacle generation and collision detection.",
      },
      {
        h: "What I Learned",
        p: "Structuring a game with classes made state manageable — game loops, event handling, collision detection, and transitions between play and game-over screens. The session-only high score is the obvious next thing to persist.",
      },
    ],
  },
];
