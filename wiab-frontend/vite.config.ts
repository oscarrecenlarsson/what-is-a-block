import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const production = process.env.NODE_ENV === "production";

export default defineConfig({
  base: production ? "/what-is-a-block/" : "/",
  plugins: [vue()],
});
