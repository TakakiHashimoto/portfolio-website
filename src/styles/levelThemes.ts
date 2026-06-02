import { colors } from "./designTokens";

export type UnlockLevel = 0 | 1 | 2 | 3 | 4;

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
    container: "mx-auto max-w-[800px] px-6 py-10",
    panel: "border border-[#cbc4d2] bg-[#ffffff] p-6",
    heading: "text-3xl font-semibold leading-tight text-[#1d1b20]",
    body: "text-base leading-[1.6] text-[#494551]",
    label:
      "font-mono text-xs font-medium uppercase tracking-[0.1em] text-[#4f378a]",
    buttonPrimary:
      "border border-[#4f378a] bg-[#4f378a] px-4 py-2 text-white hover:bg-[#6750a4]",
    buttonSecondary:
      "border border-[#7a7582] px-4 py-2 text-[#1d1b20] hover:bg-[#f2ecf4]",
    card: "border border-[#cbc4d2] bg-[#f8f2fa] p-5",
    badge:
      "border border-[#cbc4d2] bg-[#e9ddff] px-2 py-1 text-xs text-[#4f378a]",
    progressTrack: "h-2 border border-[#cbc4d2] bg-[#f2ecf4]",
    progressFill: "h-full bg-[#4f378a]",
    nav: "border-b border-[#cbc4d2] bg-[#fdf7ff]",
  },

  2: {
    app: "min-h-screen bg-[#18181b] text-[#f5eff7] font-sans transition-colors duration-700",
    container: "mx-auto max-w-[1200px] px-6 py-10",
    panel: "rounded-lg border border-white/10 bg-[#27272a] p-6",
    heading: "text-4xl font-semibold leading-tight text-[#f5eff7]",
    body: "text-base leading-[1.6] text-[#ded8e0]",
    label:
      "font-mono text-xs font-medium uppercase tracking-[0.1em] text-[#cfbcff]",
    buttonPrimary:
      "rounded-md bg-[#cfbcff] px-5 py-2 font-medium text-[#22005d] hover:bg-[#e9ddff]",
    buttonSecondary:
      "rounded-md border border-white/20 px-5 py-2 text-[#f5eff7] hover:bg-white/10",
    card: "rounded-lg border border-white/10 bg-[#27272a] p-5 transition hover:-translate-y-1 hover:border-[#cfbcff]/60",
    badge:
      "rounded-md border border-[#cfbcff]/30 bg-[#cfbcff]/10 px-2 py-1 text-xs text-[#cfbcff]",
    progressTrack: "h-2 rounded-full bg-white/10",
    progressFill: "h-full rounded-full bg-[#cfbcff]",
    nav: "border-b border-white/10 bg-[#18181b]/90 backdrop-blur",
  },

  3: {
    app: "min-h-screen bg-[#020617] text-cyan-50 font-sans transition-colors duration-700",
    container:
      "mx-auto max-w-[1200px] px-6 py-10 bg-[linear-gradient(rgba(30,41,59,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(30,41,59,0.35)_1px,transparent_1px)] bg-[size:32px_32px]",
    panel:
      "border border-cyan-300/20 bg-slate-950/80 p-6 shadow-[0_0_40px_rgba(34,211,238,0.08)]",
    heading: "text-4xl font-semibold leading-tight text-cyan-50",
    body: "text-base leading-[1.6] text-cyan-50/70",
    label:
      "font-mono text-xs font-medium uppercase tracking-[0.18em] text-cyan-300",
    buttonPrimary:
      "border border-cyan-300 bg-cyan-300 px-5 py-2 font-mono text-sm uppercase tracking-[0.12em] text-slate-950 hover:bg-cyan-200",
    buttonSecondary:
      "border border-cyan-300/30 px-5 py-2 font-mono text-sm uppercase tracking-[0.12em] text-cyan-100 hover:bg-cyan-300/10",
    card: "border border-cyan-300/20 bg-slate-950/70 p-5 transition hover:border-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]",
    badge:
      "border border-cyan-300/30 bg-cyan-300/10 px-2 py-1 font-mono text-xs text-cyan-200",
    progressTrack: "h-2 border border-cyan-300/20 bg-slate-900",
    progressFill: "h-full bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.7)]",
    nav: "border-b border-cyan-300/20 bg-slate-950/90 backdrop-blur",
  },

  4: {
    app: "min-h-screen bg-black text-white font-sans transition-colors duration-700",
    container: "mx-auto max-w-[1200px] px-6 py-10",
    panel:
      "rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-[0_0_80px_rgba(103,80,164,0.25)] backdrop-blur-2xl",
    heading:
      "bg-gradient-to-r from-[#cfbcff] via-white to-cyan-200 bg-clip-text text-5xl font-bold leading-[1.1] tracking-[-0.05em] text-transparent md:text-7xl",
    body: "text-lg leading-[1.7] text-white/70",
    label:
      "font-mono text-xs font-medium uppercase tracking-[0.18em] text-[#cfbcff]",
    buttonPrimary:
      "rounded-full bg-gradient-to-r from-[#cfbcff] to-cyan-200 px-6 py-3 font-semibold text-black shadow-[0_0_40px_rgba(207,188,255,0.35)] transition hover:scale-105",
    buttonSecondary:
      "rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-xl transition hover:bg-white/20",
    card: "rounded-3xl border border-white/10 bg-white/10 p-6 shadow-[0_0_60px_rgba(103,80,164,0.14)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-200/50",
    badge:
      "rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80",
    progressTrack: "h-2 rounded-full bg-white/10",
    progressFill:
      "h-full rounded-full bg-gradient-to-r from-[#6750a4] via-[#cfbcff] to-cyan-200 shadow-[0_0_20px_rgba(207,188,255,0.8)]",
    nav: "fixed bottom-6 left-1/2 z-50 w-[min(720px,calc(100%-2rem))] -translate-x-1/2 rounded-full border border-white/10 bg-white/10 px-5 py-3 shadow-[0_0_60px_rgba(103,80,164,0.25)] backdrop-blur-2xl",
  },
};
