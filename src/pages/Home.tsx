import { Link } from "react-router";
import { usePortfolioStore } from "../store/portfolioStore";

type Theme = {
  panel: string;
  heading: string;
  body: string;
  label: string;
  buttonPrimary: string;
  buttonSecondary: string;
};

type Props = { theme: Theme };

function Home({ theme }: Props) {
  const isLegacy = theme.panel === "";
  const unLockLevel = usePortfolioStore((state) => state.unlockLevel);
  const visitSection = usePortfolioStore((state) => state.visitSection);

  function handleClick() {
    unLockLevel(1);
    visitSection("about");
  }

  if (isLegacy) {
    return (
      <main>
        <h1>Takaki's Portfolio</h1>

        <p>
          <Link onClick={handleClick} to="/about">
            Begin Journey
          </Link>
        </p>

        <p>
          <br />
          Projects: locked
          <br />
          Skills: locked
          <br />
          Mission: locked
          <br />
          Contact: locked
        </p>
      </main>
    );
  }
  return (
    <main className="legacy-html">
      <h1>Takaki's Portfolio</h1>
    </main>
  );
}

export default Home;
