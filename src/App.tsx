import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Mission from "./pages/Mission";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import { usePortFolioProgress } from "./hooks/usePortfolioProgress";
import { levelThemes } from "./styles/levelThemes";

function App() {
  const { level } = usePortFolioProgress();
  const theme = levelThemes[level];
  return (
    <Routes>
      <Route element={<Header />}>
        <Route index element={<Home theme={theme} />} />
        <Route path="about" element={<About theme={theme} />} />
        <Route path="skills" element={<Skills theme={theme} />} />
        <Route path="projects" element={<Projects theme={theme} />} />
        <Route path="mission" element={<Mission theme={theme} />} />
        <Route path="contact" element={<Contact theme={theme} />} />
      </Route>
    </Routes>
  );
}

export default App;
