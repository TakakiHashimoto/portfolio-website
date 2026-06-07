import { Link } from "react-router";
import { usePortfolioStore } from "../store/portfolioStore";

type Theme = {
  container: string;
  panel: string;
  heading: string;
  body: string;
  label: string;
  buttonPrimary: string;
  card: string;
  badge: string;
};

type Props = { theme: Theme };

function About({ theme }: Props) {
  const unlockLevel = usePortfolioStore((state) => state.unlockLevel);
  const visitSection = usePortfolioStore((state) => state.visitSection);

  function handleClick() {
    unlockLevel(2);
    visitSection("skills");
  }

  return (
    <main className={theme.container}>
      <section className={theme.panel}>
        <div className="flex flex-col gap-8">
          <div>
            <p className={theme.label}>Region unlocked: Foundation Village</p>

            <div className="mt-3 flex items-center gap-3">
              <span className="material-symbols-outlined text-[24px]">
                memory
              </span>
              <h1 className={theme.heading}>About Me</h1>
            </div>
          </div>

          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3">
            <div className="space-y-4 md:col-span-2">
              <p className={theme.body}>
                I am Takaki, a full-stack engineering student currently
                navigating the intersection of low-level systems and modern web
                architecture.
              </p>
              <p className={theme.body}>
                My focus lies in understanding the "how" behind the "what" -
                deconstructing complex frameworks down to their foundations
                instead of only copying patterns.
              </p>
              <p className={theme.body}>
                This portfolio is designed as an evolving map. As you move
                forward, each region reveals a different part of my growth as an
                engineer.
              </p>
            </div>

            <div className={`${theme.card} aspect-square overflow-hidden p-0`}>
              <img
                className="h-full w-full object-cover grayscale contrast-125 opacity-70"
                alt="A macro close-up of a vintage computer circuit board."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuChNK1twH39eYB-PGtQjIwcZWjC-xlY-Ih2xqwrK_XAiG36fJLqiUIN0XBNaAGrYGkh9Sf1lfZLTbixv7ImmLMcd7k3JrbcNiJp08ibtjdfNa-JDODeqlJ2_yLTuDYqUxFK_Xm3qwkUgh0rKFoqJ5qdMqos6jZRLziIUSA9z7fOAKFzfy8BdkHeGt5v5MWy8QUjxioQPi7T-silLnhgFaosQZEKFzfj41GX7qRVihEoMpyTcWVhqOXVfZCaADkgWeHQ6RQF2A8YsZFB"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 border-t border-current/15 pt-8 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-3">
              <span className={theme.badge}>Curiosity</span>
              <span className={theme.badge}>Discipline</span>
              <span className={theme.badge}>Systems Thinking</span>
            </div>

            <Link
              onClick={handleClick}
              to="/skills"
              className={`${theme.buttonPrimary} group inline-flex items-center justify-center gap-2`}
            >
              <span>Continue to Growth Forest</span>
              <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">
                forest
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
