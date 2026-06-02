export type Project = {
  id: string;
  title: string;
  type: string;
  stack: string[];
  description: string;
  lessons: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    type: "Full-stack finance app",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Plaid"],
    description:
      "A production-minded personal finance app with bank connection, transaction syncing, dashboard aggregation, and URL-based filtering.",
    lessons: [
      "Auth and protected routes",
      "External API integration",
      "Database relationships",
      "Error-state design",
      "Production data flow",
    ],
  },
  {
    id: "mern-shop",
    title: "MERN Online Shop",
    type: "E-commerce application",
    stack: ["React", "Node.js", "Express", "MongoDB", "TypeScript"],
    description:
      "An online shop with role-based access where users can browse and checkout while sellers can manage products.",
    lessons: [
      "Role-based authorization",
      "REST API design",
      "Order creation",
      "Stock validation",
      "Frontend/backend contracts",
    ],
  },
  {
    id: "movie-tracker",
    title: "Movie Tracker",
    type: "Movie discovery app",
    stack: [
      "React",
      "TypeScript",
      "React Query",
      "Tailwind",
      "TMDB API",
      "Node.js",
      "Express",
    ],
    description:
      "A personalized movie and TV discovery application using external APIs, search, protected dashboard flows, and dynamic detail pages.",
    lessons: [
      "API fetching",
      "Search and filters",
      "Client-side routing",
      "Auth flow",
      "Reusable components",
    ],
  },
];
