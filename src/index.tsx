// React
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// React Router
import { BrowserRouter, Route, Routes, Navigate } from "react-router";

// Pages
import Home from "./pages/HomePage.tsx";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import ProjectsPage from "./pages/ProjectsPage.tsx";
import AboutMePage from "./pages/AboutMePage.tsx";

// Utils
import {
  HOME,
  ABOUT_ME,
  SKILLS_AND_EXP,
  EDUCATION,
  PROJECTS,
  CONNECT,
} from "./utils/routes.ts";

// Global CSS
import "./globals.scss";
import SkillsAndExpPage from "./pages/SkillsAndExpPage.tsx";
import Error404Page from "./pages/Error404Page.tsx";
import EducationPage from "./pages/EducationPage.tsx";
import ConnectPage from "./pages/ConnectPage.tsx";
import TodoAppPage from "./pages/projects/TodoAppPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <main>
        <div className="page">
          <Routes>
            <Route path="/" element={<Navigate to={HOME} replace />} />
            <Route path={HOME} element={<Home />} />
            <Route path={ABOUT_ME} element={<AboutMePage />} />
            <Route path={EDUCATION} element={<EducationPage />} />
            <Route path={SKILLS_AND_EXP} element={<SkillsAndExpPage />} />
            <Route path={PROJECTS} element={<TodoAppPage />} />
            <Route path={CONNECT} element={<ConnectPage />} />
            <Route path="*" element={<Error404Page />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
