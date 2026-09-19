import { Job } from "./types";

export const JOBS: Job[] = [
  {
    mono: "QM",
    company: "QuoteMedia",
    role: "AI Engineering Lead",
    dates: "Mar 2026 — Present",
    start: "2026-03",
    logo: "/images/jobs/quotemedia_logo.jpeg",
    summary:
      "Leading AI governance and adoption across engineering. Building production MCP tooling, agentic automation, and customer-facing AI agents end to end, alongside data pipelines for the new Logos API and the external API documentation centre.",
    bullets: [
      "Built a governance framework, technical documentation, and QA testing infrastructure (MCP server hardening, regression testing), and bi-weekly demos to standardize policy-aligned AI tool adoption across 15 engineering teams.",
      "Building a market data MCP enabling AI agents to orchestrate market data APIs and return formatted results for web or chat, built for bank clients to power trading chatbots and OAuth-based Claude account access; in hardening for production.",
      "Identified high-friction engineering workflows and shipped 20+ agentic automation solutions end-to-end, reducing manual effort by ~5 hours/week per engineer; solutions spanned automated testing acceleration, code review tooling.",
      "Built skills and MCP tools that route customer support and sales inquiries to the correct escalation path, cutting investigation time from 1-2 days to a few hours and shifting technical staff from diagnosis to fixing.",
      "Designed, developed, and deployed 4 AI agents to production and led 3 customer-facing agents through full SDLC using TypeScript and MCP, covering requirements, REST API design, automated testing, and post-release monitoring.",
      "Building data pipelines for QuoteMedia's new Logos API.",
      "Building the API help documentation centre in Vue.js (Nuxt.js, PostgreSQL/Prisma, REST, Docker), evolving the internal docs PoC into an external platform covering all services; owning the full stack from data loading to app development and new features, including dynamic Swagger-driven automatic parameter loading.",
    ],
    tags: ["LLM Systems", "RAG", "Governance", "Next.js", "MCP", "Agents", "Data Pipelines", "Vue.js"],
  },
  {
    mono: "QM",
    company: "QuoteMedia",
    role: "Software Engineer",
    dates: "Jun 2025 — Feb 2026",
    start: "2025-06",
    logo: "/images/jobs/quotemedia_logo.jpeg",
    summary:
      "Built backend systems, ETL pipelines and internal MCP tooling that cut manual effort and query latency across the market-data platform.",
    bullets: [
      "Built and operated Dockerized internal MCP servers using FastMCP, automating usage reports, cutting manual effort by 80%.",
      "Self-directed a 0→1 API documentation platform PoC (Nuxt.js, PostgreSQL/Prisma, REST endpoints, Docker), later adopted as the single source of truth for client and internal docs.",
      "Developed new Java Spring Boot APIs, combining DuckDB and S3, reducing data-heavy query latency from 40s to 10s.",
      "Designed and implemented ETL pipelines from Oracle to PostgreSQL, improving production query performance by 30%.",
      "Owned batch ETL from Oracle to AWS S3 using Apache Airflow, to support low-latency analytical queries (<2s) using DuckDB.",
    ],
    tags: ["Python", "Data Pipelines", "Airflow", "APIs", "Full-Stack", "MCP", "Docker", "ETL"],
  },
  {
    mono: "VT",
    company: "VanTech Medical",
    role: "Augmented Reality Developer",
    dates: "Sep 2023 — Apr 2024",
    start: "2023-09",
    logo: "/images/jobs/vantech_med_logo.jpeg",
    summary:
      "Built vein imagery in augmented reality, projecting onto the correct anatomical position in real time, as part of a mixed-reality headset product for healthcare procedures.",
    bullets: [
      "Worked directly with the client to design a UI and software integration bringing hardware, software and design together into a seamless mixed-reality headset experience for healthcare professionals.",
      "Developed AR vein visualisation in Unity, registering the projection to the correct anatomical position on the patient in real time, using OpenXR so the app stayed compatible across different headset models.",
      "Integrated Lidar and infrared sensor input with a custom ML model, processing sensor data and visualizing it in 3D through the AR environment, with the model run and data managed on Google Cloud Platform.",
      "Delivered a functional, intuitive interface that improved clinical workflow and reduced procedural complexity, gaining hands-on experience across AR, ML and medical device integration.",
    ],
    tags: ["Unity", "ARKit / OpenXR", "ML", "GCP"],
  },
  {
    mono: "QM",
    company: "QuoteMedia",
    role: "Data Engineer / Software Developer Intern",
    dates: "May 2022 — Apr 2023, May 2024 — Aug 2024",
    start: "2024-05",
    logo: "/images/jobs/quotemedia_logo.jpeg",
    summary:
      "Data pipelines and backend services for market-data delivery, plus the performance testing and observability that came with them.",
    bullets: [
      "Developed a data pipeline using SQL, Python and Apache Airflow, resulting in a 20x aggregation speedup for analytic queries.",
      "Built and maintained backend services and REST APIs (Java, Spring Boot, SQL) used in high-traffic market-data delivery.",
      "Optimized query performance 10x by migrating legacy databases from Oracle to PostgreSQL and tuning the schema.",
      "Created a performance testing pipeline (Vegeta and Airflow) and observability dashboards (InfluxDB/Grafana) to shorten feedback loops and improve deployment confidence.",
    ],
    tags: ["Java", "Spring Boot", "Airflow", "PostgreSQL"],
  },
  {
    mono: "PC",
    company: "ProCogia",
    role: "R Developer Intern (AI Integration)",
    dates: "May 2023 — Sep 2023",
    start: "2023-05",
    logo: "/images/jobs/procogia.jpeg",
    summary:
      "Integrated the OpenAI API into an R package to speed up debugging and analysis in data-driven projects.",
    bullets: [
      "Developed an R package integrating the OpenAI ChatGPT API to analyze and debug R scripts in under 5 seconds, increasing efficiency in developing data-driven projects.",
      "Engineered system prompts and conversational memory to improve AI response consistency by 90+% across diverse use cases.",
    ],
    tags: ["R", "OpenAI API", "LLM Integration"],
  },
];

export function getJobsByRecency(): Job[] {
  return [...JOBS].sort((a, b) => b.start.localeCompare(a.start));
}
