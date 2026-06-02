export type UnlockLevel = 0 | 1 | 2 | 3 | 4;

export type SectionKey =
  | "intro"
  | "about"
  | "projects"
  | "skills"
  | "mission"
  | "contact";

export type PortfolioProgress = {
  level: UnlockLevel;
  visitedSection: Record<SectionKey, boolean>;
};
