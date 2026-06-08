import type { UnlockLevel } from "../store/portfolioStore";

export const levelThemes: Record<
  UnlockLevel,
  {
    app: string;
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
  }
> = {
  0: {
    app: "legacy-html",
    container: "",
    panel: "",
    heading: "",
    body: "",
    label: "",
    buttonPrimary: "",
    buttonSecondary: "",
    card: "",
    badge: "",
    progressTrack: "",
    progressFill: "",
    nav: "",
  },

  1: {
    app: "min-h-screen bg-[#fdf7ff] text-[#1d1b20] font-sans transition-colors duration-700",
    container: "mx-auto max-w-[1100px] px-6 py-12",
    panel: "border border-[#cbc4d2] bg-[#ffffff] p-7 md:p-10",
    heading: "text-4xl font-semibold leading-tight text-[#1d1b20]",
    body: "text-lg leading-[1.7] text-[#494551]",
    label:
      "font-mono text-sm font-medium uppercase tracking-[0.1em] text-[#4f378a]",
    buttonPrimary:
      "border border-[#4f378a] bg-[#4f378a] px-5 py-3 text-base text-white hover:bg-[#6750a4]",
    buttonSecondary:
      "border border-[#7a7582] px-5 py-3 text-base text-[#1d1b20] hover:bg-[#f2ecf4]",
    card: "border border-[#cbc4d2] bg-[#f8f2fa] p-6 md:p-7",
    badge:
      "border border-[#cbc4d2] bg-[#e9ddff] px-3 py-1 text-sm text-[#4f378a]",
    progressTrack: "h-2 border border-[#cbc4d2] bg-[#f2ecf4]",
    progressFill: "h-full bg-[#4f378a]",
    nav: "border-b border-[#cbc4d2] bg-[#fdf7ff]",
  },

  2: {
    app: "min-h-screen bg-[#0f1f17] text-[#f3f8ee] font-sans transition-colors duration-700",
    container: "mx-auto max-w-[1400px] px-6 py-14 lg:px-8",
    panel:
      "rounded-[2rem] border border-[#9fbc8f]/20 bg-[#1a2d22]/80 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.25)] md:p-12",
    heading:
      "text-5xl font-semibold tracking-[-0.03em] text-[#f3f8ee] md:text-6xl",
    body: "text-lg leading-[1.8] text-[#dbe8d2]/80",
    label: "font-mono text-sm uppercase tracking-[0.16em] text-[#b8d99b]",
    buttonPrimary:
      "rounded-full bg-[#b8d99b] px-7 py-3 font-semibold text-base text-[#102016] transition hover:scale-105",
    buttonSecondary:
      "rounded-full border border-[#b8d99b]/30 px-7 py-3 text-base text-[#f3f8ee] hover:bg-[#b8d99b]/10",
    card: "rounded-3xl border border-[#b8d99b]/20 bg-[#243829]/80 p-7 transition  hover:border-[#b8d99b]/50 md:p-8",
    badge:
      "rounded-full border border-[#b8d99b]/20 bg-[#b8d99b]/10 px-3 py-1 text-sm text-[#dbe8d2]",
    progressTrack: "h-2 rounded-full bg-[#243829]",
    progressFill: "h-full rounded-full bg-[#b8d99b]",
    nav: "border-b border-[#b8d99b]/10 bg-[#0f1f17]/90 backdrop-blur",
  },

  3: {
    app: "min-h-screen bg-[#020617] text-cyan-50 font-sans transition-colors duration-700",
    container:
      "mx-auto max-w-[1500px] px-6 py-14 lg:px-8 bg-[linear-gradient(rgba(30,41,59,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(30,41,59,0.35)_1px,transparent_1px)] bg-[size:32px_32px]",
    panel:
      "border border-cyan-300/20 bg-slate-950/80 p-8 shadow-[0_0_40px_rgba(34,211,238,0.08)] md:p-12",
    heading: "text-5xl font-semibold leading-tight text-cyan-50 md:text-6xl",
    body: "text-lg leading-[1.7] text-cyan-50/70",
    label:
      "font-mono text-sm font-medium uppercase tracking-[0.16em] text-cyan-300",
    buttonPrimary:
      "border border-cyan-300 bg-cyan-300 px-6 py-3 font-mono text-base uppercase tracking-[0.12em] text-slate-950 hover:bg-cyan-200",
    buttonSecondary:
      "border border-cyan-300/30 px-6 py-3 font-mono text-base uppercase tracking-[0.12em] text-cyan-100 hover:bg-cyan-300/10",
    card: "border border-cyan-300/20 bg-slate-950/70 p-7 transition hover:border-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)] md:p-8",
    badge:
      "border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 font-mono text-sm text-cyan-200",
    progressTrack: "h-2 border border-cyan-300/20 bg-slate-900",
    progressFill: "h-full bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.7)]",
    nav: "border-b border-cyan-300/20 bg-slate-950/90 backdrop-blur",
  },

  4: {
    app: "final-observatory min-h-screen bg-[#050505] text-[#fdf7ff] font-sans transition-colors duration-700",
    container: "mx-auto max-w-[1400px] px-6 pb-28 pt-36 md:px-8",
    panel:
      "rounded-[2rem] border border-white/[0.08] bg-white/[0.04] p-8 shadow-[inset_0_0_20px_rgba(255,255,255,0.03),0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:p-12",
    heading:
      "bg-gradient-to-br from-[#cfbcff] to-[#8be9ff] bg-clip-text text-4xl font-extrabold leading-[1.05] tracking-[-0.055em] text-transparent md:text-8xl",
    body: "text-md leading-[1.8] text-[#cbc4d2] md:text-lg",
    label:
      "font-mono text-xs font-medium uppercase tracking-[0.3em] text-[#8be9ff]/80",
    buttonPrimary:
      "rounded-full border border-[#8be9ff]/25 bg-[#6750a4]/20 px-8 py-4 font-mono text-sm uppercase tracking-[0.16em] text-white transition hover:border-[#8be9ff]/50 hover:bg-[#6750a4]/40",
    buttonSecondary:
      "rounded-full border border-white/10 bg-white/[0.05] px-8 py-4 font-mono text-sm uppercase tracking-[0.16em] text-white/80 backdrop-blur-xl transition hover:border-[#8be9ff]/35 hover:bg-white/[0.08] hover:text-white",
    card: "rounded-3xl border border-white/[0.08] bg-white/[0.04] p-7 shadow-[inset_0_0_20px_rgba(255,255,255,0.025),0_16px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl transition duration-500 hover:border-[#8be9ff]/30 hover:bg-white/[0.07] md:p-8",
    badge:
      "rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 font-mono text-xs uppercase tracking-wider text-white/65",
    progressTrack: "h-2 rounded-full bg-white/10",
    progressFill:
      "h-full rounded-full bg-gradient-to-r from-[#6750a4] via-[#cfbcff] to-cyan-200 shadow-[0_0_20px_rgba(207,188,255,0.8)]",
    nav: "fixed left-1/2 top-5 z-50 w-fit max-w-[calc(100%-2rem)] -translate-x-1/2 rounded-full border border-white/10 bg-white/[0.06] shadow-[inset_0_0_20px_rgba(255,255,255,0.04),0_14px_40px_rgba(0,0,0,0.4)] backdrop-blur-2xl",
  },
};
