import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";

export default defineConfig({
  base: '/todo-vite/',
  css: {
    postcss: {
      plugins: [tailwindcss()],
    }
  }
})
