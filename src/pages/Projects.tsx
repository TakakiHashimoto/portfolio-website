import { Link } from "react-router";
import { projects } from "../data/projects";
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

function Projects({ theme }: Props) {
  const unlockLevel = usePortfolioStore((state) => state.unlockLevel);
  const visitSection = usePortfolioStore((state) => state.visitSection);

  function handleClick() {
    unlockLevel(4);
    visitSection("mission");
    visitSection("contact");
  }

  return (
    <main className={theme.container}>
      <section className={theme.panel}>
        <p className={theme.label}>Region unlocked: Projects</p>
        <h1 className={`${theme.heading} mt-3 pb-4`}>Projects</h1>
        <p className={`${theme.body} mt-6 max-w-2xl`}>
          These projects are artifacts from my engineering journey. Each one
          represents a different part of full-stack development: UI,
          authentication, data flow, APIs, and production thinking.
        </p>

        <div className="mt-10 grid gap-7 md:grid-cols-2 ">
          {projects.map((project) => (
            <Link
              to={project.to}
              key={project.id}
              className={`${theme.card} flex min-h-140 flex-col`}
              target="_blank"
            >
              <p className={theme.label}>{project.type}</p>
              <h2 className="mt-3 text-2xl font-bold">{project.title}</h2>
              <p className={`${theme.body} mt-3`}>{project.description}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                {project.stack.map((tech) => (
                  <span key={tech} className={theme.badge}>
                    {tech}
                  </span>
                ))}
              </div>
              <ul className={`${theme.body} mt-auto space-y-3 pt-8`}>
                {project.lessons.slice(0, 5).map((lesson) => (
                  <li key={lesson}>- {lesson}</li>
                ))}
              </ul>
            </Link>
          ))}
        </div>

        <Link
          onClick={handleClick}
          to="/mission"
          className={`${theme.buttonPrimary} mt-8 inline-flex`}
        >
          Unlock final version
        </Link>
      </section>
    </main>
  );
}

export default Projects;
