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
};

type Props = { theme: Theme };

function Mission({ theme }: Props) {
  const level = usePortfolioStore((state) => state.level);

  if (level === 4) {
    return (
      <main className={theme.container}>
        <section className="mx-auto max-w-5xl py-12 text-center md:py-24">
          <p className={theme.label}>Final observatory / The vision</p>
          <h1 className={`${theme.heading} mx-auto mt-8 max-w-4xl`}>
            Technology is mere a tool to make a better world.
          </h1>
          <p className="mx-auto mt-10 max-w-3xl text-xl font-light leading-relaxed text-[#cbc4d2] md:text-2xl">
            I build to understand systems deeply, then turn that understanding
            into tools that make difficult things clearer and more accessible.
            With the engineering skills I learn I want to make a better world
            and make poeple happy. That's my goal.
          </p>
        </section>

        <section className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-3">
          {[
            [
              "01 / Understand",
              "Learn beneath the abstraction until the system makes sense.",
            ],
            [
              "02 / Engineer",
              "Translate that understanding into reliable, useful products.",
            ],
            [
              "03 / Enable",
              "Create opportunities for people whose potential is still buried.",
            ],
          ].map(([label, copy]) => (
            <article key={label} className={`${theme.card} min-h-75`}>
              <p className={theme.label}>{label}</p>
              <p className="mt-8 text-2xl leading-relaxed text-white">{copy}</p>
            </article>
          ))}
        </section>

        <section className="mx-auto mt-24 max-w-5xl rounded-[2.5rem] border border-white/8 bg-white/4 p-10 text-center backdrop-blur-2xl md:p-20">
          <blockquote className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-6xl">
            I want to build products that help people unlock their potential.
          </blockquote>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/projects" className={theme.buttonSecondary}>
              View systems
            </Link>
            <Link to="/contact" className={theme.buttonPrimary}>
              Open contact
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className={theme.container}>
      <section className={theme.panel}>
        <p className={theme.label}>
          Final Observatory unlocked / Full map restored
        </p>
        <h1 className={`${theme.heading} mt-3`}>Why I Build</h1>

        <div className={`${theme.body} mt-8 max-w-3xl space-y-5`}>
          <p>
            I build software because I want to understand systems deeply and use
            that understanding to create tools that are genuinely useful.
          </p>
          <p>
            My long-term mission is connected to education. I believe there are
            many buried geniuses who never get the right opportunity, guidance,
            or access to learning.
          </p>
          <p>
            I want to become strong enough as an engineer to build products that
            help people unlock their potential.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/projects" className={theme.buttonSecondary}>
            View Projects
          </Link>
          <Link to="/contact" className={theme.buttonPrimary}>
            Contact Me
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Mission;
