import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import devtools from "solid-devtools/vite";

export default defineConfig({
  plugins: [
    solid(),
    devtools({
      autoname: true,
    }),
  ],
});
