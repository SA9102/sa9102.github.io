import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { BASE } from "./src/utils/routes";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: `/`,
});
