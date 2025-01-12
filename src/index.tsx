// React
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// React Router
import { BrowserRouter, Route, Routes } from "react-router";

// Pages
import Home from "./pages/HomePage.tsx";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import ProjectsPage from "./pages/ProjectsPage.tsx";
import AboutMePage from "./pages/AboutMePage.tsx";

// Utils
import { BASE, HOME, ABOUT_ME, PROJECTS } from "./utils/routes.ts";

// Global CSS
import "./globals.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <main>
        <div className="page">
          <Routes>
            <Route path={`/${BASE}/${HOME}`} element={<Home />} />
            <Route path={`/${BASE}/${ABOUT_ME}`} element={<AboutMePage />} />
            <Route path={`/${BASE}/${PROJECTS}`} element={<ProjectsPage />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
