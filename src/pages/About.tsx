import { useEffect } from "react";
import { usePortFolioProgress } from "../hooks/usePortfolioProgress";

function About() {
  const { unlockLevel, visitSection } = usePortFolioProgress();
  useEffect(() => {
    visitSection("about");
    unlockLevel(1);
  }, []);

  return <div>About</div>;
}

export default About;
