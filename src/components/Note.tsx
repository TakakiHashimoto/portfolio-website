function Note() {
  return (
    <div className="absolute top-5 right-28 z-50 w-88 rounded-3xl border border-white/10 bg-white/8 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
      <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#8be9ff]/80">
        Personal note
      </p>

      <div className="mt-4 space-y-4 text-sm leading-relaxed text-white/75">
        <p>
          I started this portfolio from plain HTML because, at the beginning of
          my journey, that was all I knew. As the site evolves, it reflects how
          my skills have grown.
        </p>

        <p>
          I am an aspiring full-stack developer and technology enthusiast. I
          enjoy building applications, but I also want to understand what is
          happening underneath the abstraction.
        </p>

        <p>
          My long-term goal is to use engineering to make people happier, create
          useful tools, and contribute something good to the world.
        </p>

        <p>
          I am curious, persistent, and good at looking at problems from unusual
          angles. I believe that perspective is worth having on a team.
        </p>
      </div>
    </div>
  );
}

export default Note;
