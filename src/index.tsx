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
} from "./utils/mainEndpoints.ts";

// Global CSS
import "./globals.scss";
import SkillsAndExpPage from "./pages/SkillsAndExpPage.tsx";
import Error404Page from "./pages/Error404Page.tsx";
import EducationPage from "./pages/EducationPage.tsx";
import ConnectPage from "./pages/ConnectPage.tsx";
import { P_MTE, P_TODO, P_WEATHER } from "./utils/projectEndpoints.ts";
import ProjectPage from "./pages/ProjectPage.tsx";

import { mteProject, todoProject, weatherProject } from "./content/project.ts";

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
            <Route path={PROJECTS} element={<ProjectsPage />} />
            <Route
              path={`${PROJECTS}/${P_TODO}`}
              element={<ProjectPage project={todoProject} inDev={true} />}
            />
            <Route
              path={`${PROJECTS}/${P_MTE}`}
              element={<ProjectPage project={mteProject} inDev={false} />}
            />
            <Route
              path={`${PROJECTS}/${P_WEATHER}`}
              element={<ProjectPage project={weatherProject} inDev={false} />}
            />
            <Route path={CONNECT} element={<ConnectPage />} />
            <Route path="*" element={<Error404Page />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
