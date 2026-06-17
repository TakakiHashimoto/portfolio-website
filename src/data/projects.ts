export type Project = {
  id: string;
  title: string;
  type: string;
  stack: string[];
  description: string;
  lessons: string[];
  githubUrl?: string;
  liveUrl?: string;
  to: string;
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
    to: "https://github.com/TakakiHashimoto/expense_tracker",
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
    to: "https://github.com/Cornerstone-CICCC/react-js-midterm-project-takakialone/tree/feature/takaki",
  },
  {
    id: "file-storage-app",
    title: "VaultBox",
    type: "Full-stack cloud file storage app",
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Cloudinary",
      "Vercel",
      "Render",
    ],
    description:
      "A Google Drive-inspired file storage app with authentication, nested folder navigation, file uploads, search, sorting, rename, move, delete, and Cloudinary-backed file access through a stable backend API.",
    lessons: [
      "Designing frontend/backend contracts",
      "Handling file uploads with FormData",
      "Modeling nested folders in a database",
      "Displaying folders recursively on sidebar",
      "Separating file metadata in PostgreSQL from file bytes in Cloudinary",
    ],
    githubUrl:
      "https://github.com/TakakiHashimoto/file-storage-app/tree/main/react-js-final-project-takaki-taisei",
    liveUrl: "https://valut-app-green.vercel.app/dashboard",
    to: "/projects/file-storage-app",
  },
];
