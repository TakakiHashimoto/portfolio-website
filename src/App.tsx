import { Route, Routes } from "react-router";
import { Toaster } from "sonner";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Mission from "./pages/Mission";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import { levelThemes } from "./styles/levelThemes";
import { usePortfolioStore } from "./store/portfolioStore";
import RequireUnlock from "./pages/protectedRoutes/RequireUnlock";

function App() {
  const level = usePortfolioStore((state) => state.level);
  const theme = levelThemes[level];
  return (
    <div className={theme.app}>
      <Toaster
        position="top-center"
        offset="24px"
        gap={12}
        richColors
        closeButton
        toastOptions={{
          duration: 4500,
          classNames: {
            toast:
              "min-w-[min(420px,calc(100vw-2rem))] border border-white/10 bg-[#111116]/95 text-white shadow-2xl backdrop-blur-xl",
            title: "text-base font-semibold",
            description: "text-sm text-white/65",
          },
        }}
      />
      <Routes>
        <Route element={<Header />}>
          <Route index element={<Home theme={theme} />} />

          <Route element={<RequireUnlock requiredLevel={1} />}>
            <Route path="about" element={<About theme={theme} />} />
          </Route>

          <Route element={<RequireUnlock requiredLevel={2} />}>
            <Route path="skills" element={<Skills theme={theme} />} />
          </Route>

          <Route element={<RequireUnlock requiredLevel={3} />}>
            <Route path="projects" element={<Projects theme={theme} />} />
          </Route>

          <Route element={<RequireUnlock requiredLevel={4} />}>
            <Route path="mission" element={<Mission theme={theme} />} />
            <Route path="contact" element={<Contact theme={theme} />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
