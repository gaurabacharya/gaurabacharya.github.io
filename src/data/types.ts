export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectSection {
  h: string;
  p: string;
}

export interface Project {
  id: string;
  rank: string;
  mono: string;
  title: string;
  meta: string;
  short: string;
  tags: string[];
  stack: string[];
  links: ProjectLink[];
  sections: ProjectSection[];
  image?: string;
}

export interface Job {
  mono: string;
  company: string;
  role: string;
  dates: string;
  start: string;
  summary: string;
  bullets: string[];
  tags: string[];
  logo?: string;
}

export interface Social {
  mono: string;
  label: string;
  display: string;
  href: string;
}

export interface ChatScript {
  q: string;
  a: string;
  cites: string[];
}
