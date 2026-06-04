import { Link, Outlet } from "react-router";
import { usePortfolioStore } from "../store/portfolioStore";
import { levelThemes } from "../styles/levelThemes";

function Header() {
  const level = usePortfolioStore((state) => state.level);
  const theme = levelThemes[level];
  if (level === 0) {
    return (
      <>
        <header className="legacy-html">
          <div>It's Takaki</div>
          <nav>
            <Link to="/about">about me </Link>{" "}
            <Link to="/projects">projects </Link>{" "}
            <Link to="/skills">skills </Link>{" "}
            <Link to="/mission">My goal </Link>{" "}
            <Link to="/contact">Contact me </Link>{" "}
          </nav>
        </header>
        <Outlet />
      </>
    );
  }

  return (
    <>
      <header className={theme.nav}>
        <div className="mx-auto flex max-w-300 items-center justify-between gap-6 px-6 py-4">
          <Link to="/" className="font-bold tracking-tight">
            Takaki OS
          </Link>

          <nav className="flex gap-4 text-sm">
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/skills">Skill Map</Link>
            <Link to="/mission">Mission</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          {/* <div className="hidden w-40 md:block">
            <p className="mb-1 text-xs opacity-60">{percentage}%</p>
            <div className={theme.progressTrack}>
              <div
                className={theme.progressFill}
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div> */}
        </div>
      </header>

      <div className={theme.container}>
        <Outlet />
      </div>
    </>
  );
}

export default Header;
