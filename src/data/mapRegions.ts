import type { SectionKey, UnlockLevel } from "../store/portfolioStore";

export type MapRegion = {
  id: SectionKey;
  name: string;
  shortName: string;
  route: string;
  requiredLevel: UnlockLevel;
  description: string;
};

export const mapRegions: MapRegion[] = [
  {
    id: "home",
    name: "Origin",
    shortName: "Origin",
    route: "/",
    requiredLevel: 0,
    description: "The raw beginning. No polish, only the first signal.",
  },
  {
    id: "about",
    name: "About Me",
    shortName: "About",
    route: "/about",
    requiredLevel: 1,
    description: "My story, foundation, and reason for becoming an engineer.",
  },
  {
    id: "skills",
    name: "Skills",
    shortName: "Skills",
    route: "/skills",
    requiredLevel: 2,
    description: "My learning path, technical growth, and skill regions.",
  },
  {
    id: "projects",
    name: "Projects",
    shortName: "Projects",
    route: "/projects",
    requiredLevel: 3,
    description: "Real projects, architecture, and production thinking.",
  },
  {
    id: "mission",
    name: "Missions",
    shortName: "Mission",
    route: "/mission",
    requiredLevel: 4,
    description: "My values, mission, contact links, and fully unlocked form.",
  },
];
