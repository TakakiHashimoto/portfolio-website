import { Link } from "react-router";
import { mapRegions } from "../data/mapRegions";
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
};

type Props = { theme: Theme };

function Home({ theme }: Props) {
  const level = usePortfolioStore((state) => state.level);
  const unlockLevel = usePortfolioStore((state) => state.unlockLevel);
  const visitSection = usePortfolioStore((state) => state.visitSection);
  const skipToFullPortfolio = usePortfolioStore(
    (state) => state.skipToFullPortfolio,
  );
  const isLegacy = theme.panel === "";

  function handleBeginJourney() {
    unlockLevel(1);
    visitSection("about");
  }

  if (isLegacy) {
    return (
      <main className="legacy-html">
        <h1>Takaki's Portfolio</h1>
        <h2>A map of my engineering journey.</h2>

        <p>
          This website starts unfinished. Explore each region to restore the
          full interface.
        </p>

        <p>
          <Link onClick={handleBeginJourney} to="/about">
            Enter the Map
          </Link>
        </p>

        <p>
          <button onClick={skipToFullPortfolio}>Skip to Full Portfolio</button>
        </p>

        <h3>World Map</h3>

        <ul>
          {mapRegions.map((region) => {
            const unlocked = level >= region.requiredLevel;

            return (
              <li key={region.id}>
                {unlocked ? (
                  <Link to={region.route}>{region.name}</Link>
                ) : (
                  <span>{region.name}: locked</span>
                )}
              </li>
            );
          })}
        </ul>
      </main>
    );
  }

  if (level === 4) {
    return (
      <main className={theme.container}>
        <section className="mx-auto mb-32 max-w-5xl text-center md:mb-48">
          <p className="mb-8 inline-flex rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 font-mono text-xs uppercase tracking-[0.3em] text-[#8be9ff]/80 backdrop-blur-xl">
            Observatory terminal v4.0
          </p>
          <h1 className="bg-gradient-to-br from-[#cfbcff] via-white to-[#8be9ff] bg-clip-text text-7xl font-extrabold leading-[0.98] tracking-[-0.065em] text-transparent md:text-9xl">
            Final Observatory.
            <br />
            The full map restored.
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-xl font-light leading-relaxed text-[#cbc4d2] md:text-2xl">
            The completed view of my engineering journey, connecting the
            foundations I learned, the systems I built, and the mission guiding
            what comes next.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/projects" className={theme.buttonSecondary}>
              Explore systems
            </Link>
            <Link to="/contact" className={theme.buttonPrimary}>
              Open uplink
            </Link>
          </div>
        </section>

        <section>
          <div className="mb-14 text-center">
            <p className={theme.label}>The developer continuum</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
              Every region is online.
            </h2>
          </div>

          <div className="relative grid gap-7 md:grid-cols-6">
            <div className="pointer-events-none absolute left-[8%] right-[8%] top-1/2 hidden h-px bg-gradient-to-r from-transparent via-[#8be9ff]/30 to-transparent md:block" />
            {mapRegions.map((region, index) => (
              <Link
                key={region.id}
                to={region.route}
                className={`${theme.card} relative overflow-hidden md:col-span-2 ${
                  index === 3 ? "md:col-start-2" : ""
                } ${index === 4 ? "border-[#8be9ff]/30" : ""}`}
              >
                <span className="mb-8 block font-mono text-xs uppercase tracking-[0.25em] text-[#8be9ff]/60">
                  Node 0{index + 1} / online
                </span>
                <h3 className="text-2xl font-semibold tracking-tight text-white">
                  {region.name}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[#cbc4d2]/65">
                  {region.description}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#8be9ff]">
                  Access node <span aria-hidden="true">-&gt;</span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-32 max-w-5xl rounded-[2.5rem] border border-white/[0.08] bg-white/[0.04] px-8 py-16 text-center shadow-[inset_0_0_30px_rgba(255,255,255,0.025),0_30px_100px_rgba(0,0,0,0.3)] backdrop-blur-2xl md:mt-48 md:px-16">
          <p className={theme.label}>The vision</p>
          <blockquote className="mt-8 text-4xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-6xl">
            Build with enough clarity that complexity becomes useful.
          </blockquote>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.24em] text-[#cbc4d2]/50">
            System architect // Takaki
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className={theme.container}>
      <section className={theme.panel}>
        <p className={theme.label}>Developer map</p>
        <h1 className={theme.heading}>Takaki's Portfolio</h1>

        <p className={`${theme.body} mt-6 max-w-2xl`}>
          This portfolio is a map of my growth. Each unlocked region reveals a
          different part of me: origin, foundation, skills, projects, and
          mission.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {mapRegions.map((region) => {
            const unlocked = level >= region.requiredLevel;

            return (
              <div
                key={region.id}
                className={`${theme.card} flex min-h-[300px] flex-col ${
                  unlocked ? "" : "opacity-40 grayscale"
                }`}
              >
                <p className={theme.label}>Level {region.requiredLevel}</p>
                <h2 className="mt-2 text-xl font-bold">{region.name}</h2>
                <p className={`${theme.body} mt-3`}>
                  {region.description}
                </p>

                <div className="mt-auto pt-8">
                  {unlocked ? (
                    <Link to={region.route} className={theme.buttonSecondary}>
                      Enter
                    </Link>
                  ) : (
                    <span className={theme.badge}>Locked</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {level === 0 ? (
          <Link
            onClick={handleBeginJourney}
            to="/about"
            className={`${theme.buttonPrimary} mt-8 inline-flex`}
          >
            Enter the Map
          </Link>
        ) : null}

        <button
          onClick={skipToFullPortfolio}
          className={`${theme.buttonSecondary} mt-8 ml-3`}
        >
          Skip to Full Portfolio
        </button>
      </section>
    </main>
  );
}

export default Home;
