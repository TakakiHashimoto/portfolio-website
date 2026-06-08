export type SkillRegion = {
  region: string;
  description: string;
  skills: string[];
};

export const skillRegions: SkillRegion[] = [
  {
    region: "Frontend Region",
    description: "Building interfaces, interactions, and user experiences.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Tailwind",
      "Nextjs",
    ],
  },
  {
    region: "Backend Region",
    description:
      "Designing APIs, data flow, authentication, and business logic.",
    skills: ["Node.js", "Express", "Supabase", "PostgreSQL", "MongoDB", "Auth"],
  },
  {
    region: "Systems Region",
    description:
      "Understanding computers, networks, Linux, and infrastructure.",
    skills: ["Linux", "Networking", "CCNA", "LPIC-1", "LPIC-2"],
  },
  {
    region: "Engineering Mindset",
    description: "Thinking beyond code and toward production-ready systems.",
    skills: [
      "Debugging",
      "Architecture",
      "Error handling",
      "Data modeling",
      "Atomicity",
      "Idempotency",
    ],
  },
];
