import { ChatScript } from "./types";

export const SCRIPTS: ChatScript[] = [
  {
    q: "What does Gaurab actually build?",
    a: "He's AI Engineering Lead at QuoteMedia, building AI products end to end, plus internal AI integration and governance. Building across the stack from data pipelines, backend systems, and full-stack apps.",
    cites: ["experience.md", "quotemedia"],
  },
  {
    q: "Show me his best personal AI project.",
    a: "A medical RAG chatbot: the Gale Encyclopedia of Medicine embedded with all-MiniLM-L6-v2 into Pinecone, answered by Gemini 2.0 Flash, with the top 3 sources cited on every reply.",
    cites: ["medical-rag", "pinecone", "langchain"],
  },
  {
    q: "What's the stack?",
    a: "Python and TypeScript mostly, but also Flask, LangChain, React and Next.js, Unity for the AR work, R when the data is genomic.",
    cites: ["projects.md"],
  },
];
