import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "sonner";

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

const unlockMessages: Record<
  Exclude<UnlockLevel, 0>,
  { title: string; description: string }
> = {
  1: {
    title: "About me unlocked",
    description: "The first region of the developer map is now available.",
  },
  2: {
    title: "Skill page unlocked",
    description: "Your path through the skill regions has opened.",
  },
  3: {
    title: "Projects page unlocked",
    description:
      "Project systems and engineering artifacts are now accessible.",
  },
  4: {
    title: "Final Version unlocked",
    description: "The full developer map has been restored.",
  },
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

          if (nextLevel === 0) {
            return state;
          }

          const message = unlockMessages[nextLevel];
          toast.success(message.title, { description: message.description });

          return { level: nextLevel };
        }),

      visitSection: (section) =>
        set((state) => ({
          visitedSections: { ...state.visitedSections, [section]: true },
        })),

      skipToFullPortfolio: () =>
        set((state) => {
          if (state.level < 4) {
            toast.success("Full portfolio unlocked", {
              description:
                "All regions are online. Welcome to the Final Observatory.",
            });
          }

          return {
            level: 4,
            visitedSections: {
              home: true,
              about: true,
              projects: true,
              skills: true,
              mission: true,
              contact: true,
            },
          };
        }),

      resetProgress: () =>
        set({ level: 0, visitedSections: initialVisitedSections }),
    }),
    { name: "takaki-os-progress" },
  ),
);
