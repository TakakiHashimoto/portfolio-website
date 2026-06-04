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

function Projects({ theme }: Props) {
  return <div>Projects</div>;
}

export default Projects;
