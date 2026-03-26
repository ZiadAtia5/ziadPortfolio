import { defineConfig } from "vite";
import react from "@vitejs/react-swc";

export default defineConfig(({ command }) => {
  return {
    plugins: [react()],

    base:
      command === "build" && process.env.NODE_ENV === "production" ? "/" : "/",
  };
});
