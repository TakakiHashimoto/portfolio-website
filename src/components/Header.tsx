import { Link, Outlet } from "react-router";
import { usePortfolioStore } from "../store/portfolioStore";
import { levelThemes } from "../styles/levelThemes";
import { mapRegions } from "../data/mapRegions";

function Header() {
  const level = usePortfolioStore((state) => state.level);
  const resetProgress = usePortfolioStore((state) => state.resetProgress);
  const theme = levelThemes[level];
  const percentage = (level / 4) * 100;
  const isFinalLevel = level === 4;

  if (level === 0) {
    return <Outlet />;
  }

  if (isFinalLevel) {
    return (
      <>
        <header className={theme.nav}>
          <nav className="flex max-w-[calc(100vw-2rem)] items-center gap-1 overflow-x-auto p-1.5">
            {mapRegions.map((region) => (
              <Link
                key={region.id}
                to={region.route}
                className="shrink-0 rounded-full px-3 py-2 font-mono text-xs uppercase tracking-[0.14em] text-white/65 transition hover:bg-white/[0.07] hover:text-[#8be9ff] md:px-4"
              >
                {region.shortName}
              </Link>
            ))}
            <span className="mx-1 h-4 w-px shrink-0 bg-white/10" />
            <button
              onClick={resetProgress}
              className="shrink-0 rounded-full px-3 py-2 font-mono text-xs uppercase tracking-[0.14em] text-rose-300/70 transition hover:bg-rose-400/10 hover:text-rose-200 md:px-4"
            >
              Reset
            </button>
          </nav>
        </header>
        <Outlet />
      </>
    );
  }

  return (
    <>
      <header className={theme.nav}>
        <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
          <div>
            <Link to="/" className="font-bold tracking-tight">
              Map of Me
            </Link>

            <p className={theme.label}>Map restoration: {percentage}%</p>
          </div>

          <nav className="flex flex-wrap items-center gap-4 text-base">
            {mapRegions.map((region) => {
              const unlocked = level >= region.requiredLevel;

              if (!unlocked) {
                return (
                  <span
                    key={region.id}
                    className="cursor-not-allowed opacity-35"
                    title="Locked region"
                  >
                    {region.shortName} locked
                  </span>
                );
              }

              return (
                <Link
                  key={region.id}
                  to={region.route}
                  className="transition hover:opacity-70"
                >
                  {region.shortName}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden w-28 lg:block">
              <div className={theme.progressTrack}>
                <div
                  className={theme.progressFill}
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>

            <button onClick={resetProgress} className={theme.buttonSecondary}>
              Reset
            </button>
          </div>
        </div>
      </header>

      <Outlet />
    </>
  );
}

export default Header;
