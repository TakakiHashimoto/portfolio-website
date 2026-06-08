import { usePortfolioStore } from "../store/portfolioStore";
import { Mail } from "lucide-react";
import githubIcon from "../assets/githubicon.svg";
import linkedinIcon from "../assets/linkedin.svg";

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

function Contact({ theme }: Props) {
  const level = usePortfolioStore((state) => state.level);

  if (level === 4) {
    return (
      <main className={theme.container}>
        <section className="mx-auto max-w-5xl py-12 text-center md:pt-15 md:pb-24">
          <h1 className={`${theme.heading} mt-8`}>
            Let's build something useful.
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-xl font-light leading-relaxed text-[#cbc4d2] md:text-2xl">
            The map is fully restored. Reach out to discuss engineering,
            thoughtful products, or opportunities to learn and build together.
          </p>
        </section>

        <section className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-3">
          {[
            {
              name: "GitHub",
              description: "Explore source code and active systems.",
              href: "https://github.com/TakakiHashimoto",
              icon: githubIcon,
              iconClassName: "bg-white",
            },
            {
              name: "LinkedIn",
              description: "Connect for work and engineering conversations.",
              href: "https://www.linkedin.com/in/%E6%98%82%E6%A8%B9-%E6%A9%8B%E6%9C%AC-331140357/",
              icon: linkedinIcon,
              iconClassName: "",
            },
            {
              name: "Email",
              description: "Send a direct message through the uplink.",
              href: "mailto:takaki.hashimoto0715@gmail.com",
              icon: null,
              iconClassName: "",
            },
          ].map(({ name, description, href, icon, iconClassName }) => (
            <a
              key={name}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className={`${theme.card} group flex min-h-80 flex-col`}
            >
              {icon ? (
                <img
                  src={icon}
                  alt=""
                  className={`h-16 w-16 rounded-2xl object-contain p-1 ${iconClassName}`}
                />
              ) : (
                <Mail
                  aria-hidden="true"
                  className="h-16 w-16 rounded-2xl bg-[#8be9ff]/10 p-4 text-[#8be9ff]"
                />
              )}

              <h2 className="mt-8 text-3xl font-semibold text-white">{name}</h2>
              <p className="mt-3 text-base leading-relaxed text-[#cbc4d2]/65">
                {description}
              </p>
              <span className="mt-auto inline-flex pt-10 font-mono text-xs uppercase tracking-[0.2em] text-[#8be9ff] transition group-hover:translate-x-1">
                Establish connection -&gt;
              </span>
            </a>
          ))}
        </section>
      </main>
    );
  }

  return (
    <main className={theme.container}>
      <section className={theme.panel}>
        <p className={theme.label}>Final links unlocked</p>
        <h1 className={`${theme.heading} mt-3`}>Let's Connect</h1>
        <p className={`${theme.body} mt-6 max-w-2xl`}>
          You have reached the fully unlocked portfolio. From here, you can view
          my code, connect with me, or contact me directly.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://github.com/TakakiHashimoto"
            target="_blank"
            rel="noreferrer"
            className={theme.buttonPrimary}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/%E6%98%82%E6%A8%B9-%E6%A9%8B%E6%9C%AC-331140357/"
            target="_blank"
            rel="noreferrer"
            className={theme.buttonSecondary}
          >
            LinkedIn
          </a>
          <a
            href="mailto:your-email@example.com"
            className={theme.buttonSecondary}
          >
            Email Me
          </a>
        </div>
      </section>
    </main>
  );
}

export default Contact;
