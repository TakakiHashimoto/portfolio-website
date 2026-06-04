import { Link } from "react-router";
import { usePortfolioStore } from "../store/portfolioStore";

type Theme = {
  container: string;
  panel: string;
  heading: string;
  body: string;
  label: string;
  buttonPrimary: string;
  buttonSecondary: string;
  card: string;
  badge: string;
  progressTrack: string;
  progressFill: string;
  nav: string;
};

type Props = { theme: Theme };

function About({ theme }: Props) {
  const unLockLevel = usePortfolioStore((state) => state.unlockLevel);
  const visitSection = usePortfolioStore((state) => state.visitSection);

  function handleClick() {
    unLockLevel(2);
    visitSection("projects");
  }

  return (
    <main className={`${theme.container}`}>
      <section className={theme.panel}>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <div className="mt-3 flex items-center gap-3">
              <span
                className="material-symbols-outlined text-[24px]"
                data-icon="memory"
              >
                memory
              </span>
              <h1 className={theme.heading}>About Me</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-2 space-y-4">
                <p className={theme.body}>
                  I am Takaki, a full-stack engineering student currently
                  navigating the intersection of low-level systems and modern
                  web architecture. My focus lies in understanding the "how"
                  behind the "what"—deconstructing complex frameworks to their
                  bare-metal foundations.
                </p>
                <p className={theme.body}>
                  Currently exploring: Rust for systems programming, distributed
                  network protocols, and the evolution of interface design from
                  terminal-based workflows to high-fidelity immersive
                  environments.
                </p>
              </div>
              <div
                className={`${theme.card} aspect-square overflow-hidden p-0`}
              >
                <img
                  className="w-full h-full object-cover grayscale contrast-125 opacity-70"
                  data-alt="A macro close-up of a vintage computer circuit board with visible traces and solder points. The lighting is cold and industrial, casting long shadows that emphasize the physical texture of the hardware. The color palette is restricted to metallic grays and muted blues, evoking a technical and academic atmosphere consistent with level one initialization."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuChNK1twH39eYB-PGtQjIwcZWjC-xlY-Ih2xqwrK_XAiG36fJLqiUIN0XBNaAGrYGkh9Sf1lfZLTbixv7ImmLMcd7k3JrbcNiJp08ibtjdfNa-JDODeqlJ2_yLTuDYqUxFK_Xm3qwkUgh0rKFoqJ5qdMqos6jZRLziIUSA9z7fOAKFzfy8BdkHeGt5v5MWy8QUjxioQPi7T-silLnhgFaosQZEKFzfj41GX7qRVihEoMpyTcWVhqOXVfZCaADkgWeHQ6RQF2A8YsZFB"
                />
              </div>
            </div>
            <div className="pt-8 border-t border-outline-variant/20 flex justify-between items-center">
              <div className="flex gap-4">
                <div className="px-3 py-1 bg-surface-container dark:bg-surface-variant/10 border border-outline-variant text-mono-label text-[10px] uppercase">
                  Node.js
                </div>
                <div className="px-3 py-1 bg-surface-container dark:bg-surface-variant/10 border border-outline-variant text-mono-label text-[10px] uppercase">
                  PostgreSQL
                </div>
                <div className="px-3 py-1 bg-surface-container dark:bg-surface-variant/10 border border-outline-variant text-mono-label text-[10px] uppercase">
                  Systems
                </div>
              </div>
              <Link
                onClick={handleClick}
                to="/projects"
                className={`${theme.buttonPrimary} inline-flex items-center justify-center gap-2 group`}
              >
                <span>[Unlock Projects]</span>
                <span
                  className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform"
                  data-icon="lock_open"
                >
                  lock_open
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
