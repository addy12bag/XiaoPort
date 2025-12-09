import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Replace 'addy12bag' with your GitHub username
export default defineConfig({
  plugins: [react()],
  base: "/ai-orb-portfolio/", // <-- VERY IMPORTANT
});
