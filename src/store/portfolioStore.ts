import { create } from "zustand";
import { persist } from "zustand/middleware";

export type UnlockLevel = 0 | 1 | 2 | 3 | 4;

export type SectionKey =
  | "home"
  | "about"
  | "projects"
  | "skills"
  | "mission"
  | "contact";

type PortfolioState = {
  level: UnlockLevel;
  visitedSections: Record<SectionKey, boolean>;

  unlockLevel: (nextLevel: UnlockLevel) => void;
  visitSection: (section: SectionKey) => void;
  skipToFullPortfolio: () => void;
  resetProgress: () => void;
};

const initialVisitedSections: Record<SectionKey, boolean> = {
  home: true,
  about: false,
  projects: false,
  skills: false,
  mission: false,
  contact: false,
};

export const usePortfolioStore = create<PortfolioState>()(
  persist(
    (set) => ({
      level: 0,

      visitedSections: initialVisitedSections,

      unlockLevel: (nextLevel) =>
        set((state) => {
          if (nextLevel <= state.level) {
            return state;
          }

          return { level: nextLevel };
        }),

      visitSection: (section) =>
        set((state) => ({
          visitedSections: { ...state.visitedSections, [section]: true },
        })),

      skipToFullPortfolio: () =>
        set({
          level: 4,
          visitedSections: {
            home: true,
            about: true,
            projects: true,
            skills: true,
            mission: true,
            contact: true,
          },
        }),

      resetProgress: () =>
        set({ level: 0, visitedSections: initialVisitedSections }),
    }),
    { name: "takaki-os-progress" },
  ),
);
