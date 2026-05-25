import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import {
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material";
import "./index.css";

// const darkTheme = localStorage.get("mode");

const theme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: ["Funnel Display", "sans-serif"].join(","),
      body1: {
        fontSize: 30,
      },
      body2: {
        fontSize: 30,
      },
    },
    // colorSchemes: { dark: true },
  })
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <App />
      </CssBaseline>
    </ThemeProvider>
  </StrictMode>
);
