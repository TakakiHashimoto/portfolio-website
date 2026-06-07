import { Link } from "react-router";
import { skillRegions } from "../data/skills";
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

function Skills({ theme }: Props) {
  const unlockLevel = usePortfolioStore((state) => state.unlockLevel);
  const visitSection = usePortfolioStore((state) => state.visitSection);

  function handleClick() {
    unlockLevel(3);
    visitSection("projects");
  }

  return (
    <main className={theme.container}>
      <section className={theme.panel}>
        <p className={theme.label}>Region unlocked: Growth Forest</p>
        <h1 className={`${theme.heading} mt-3`}>Skill Map</h1>
        <p className={`${theme.body} mt-6 max-w-2xl`}>
          I think of skills as connected regions, not isolated technologies.
          Frontend, backend, systems, and engineering mindset all support each
          other.
        </p>

        <div className="mt-10 grid gap-7 lg:grid-cols-2">
          {skillRegions.map((region) => (
            <article key={region.region} className={`${theme.card} min-h-[260px]`}>
              <h2 className="text-2xl font-bold">{region.region}</h2>
              <p className={`${theme.body} mt-3`}>
                {region.description}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                {region.skills.map((skill) => (
                  <span key={skill} className={theme.badge}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <Link
          onClick={handleClick}
          to="/projects"
          className={`${theme.buttonPrimary} mt-8 inline-flex`}
        >
          Enter Engineering City
        </Link>
      </section>
    </main>
  );
}

export default Skills;
