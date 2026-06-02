import { useEffect, useState } from "react";
import type {
  PortfolioProgress,
  SectionKey,
  UnlockLevel,
} from "../types/portfolio";

const STORAGE_KEY = "thisisme-progress";
const initialProgress: PortfolioProgress = {
  level: 0,
  visitedSection: {
    intro: true,
    about: false,
    projects: false,
    skills: false,
    mission: false,
    contact: false,
  },
};

function loadProgress() {
  try {
    const savedProgress = localStorage.getItem(STORAGE_KEY);
    // if no localstorage is set
    if (!savedProgress) {
      return initialProgress;
    }

    const parsedProgress = JSON.parse(savedProgress);

    return parsedProgress;
  } catch (e) {
    return initialProgress;
  }
}

export function usePortFolioProgress() {
  const [progress, setProgress] = useState<PortfolioProgress>(() =>
    loadProgress(),
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  function unlockLevel(nextLevel: UnlockLevel) {
    setProgress((prev) => {
      if (prev.level >= nextLevel) {
        return prev;
      }
      return { ...prev, level: nextLevel };
    });
  }

  function visitSection(section: SectionKey) {
    setProgress((prev) => {
      return {
        ...prev,
        visitedSection: { ...prev.visitedSection, [section]: true },
      };
    });
  }

  function skipToFullPortfolio() {
    setProgress({
      level: 4,
      visitedSection: {
        intro: true,
        about: true,
        projects: true,
        skills: true,
        mission: true,
        contact: true,
      },
    });
  }

  return {
    progress,
    level: progress.level,
    unlockLevel,
    visitSection,
    skipToFullPortfolio,
  };
}
