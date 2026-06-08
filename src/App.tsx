import { Route, Routes } from "react-router";
import { Toaster } from "sonner";
import { Check, X } from "lucide-react";
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
        className="unlock-toaster"
        position="top-center"
        offset="28px"
        gap={14}
        theme="dark"
        closeButton
        icons={{
          success: <Check aria-hidden="true" />,
          close: <X aria-hidden="true" />,
        }}
        toastOptions={{
          duration: 6500,
          classNames: {
            toast: "unlock-toast",
            icon: "unlock-toast-icon",
            content: "unlock-toast-content",
            title: "unlock-toast-title",
            description: "unlock-toast-description",
            closeButton: "unlock-toast-close",
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
