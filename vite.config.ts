import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repoName = "mertce";

export default defineConfig({
  base: `/${repoName}/`,
  plugins: [react()],
});
