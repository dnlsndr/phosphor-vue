import { defineConfig } from "vite";
import { visualizer } from "rollup-plugin-visualizer";
import { createVuePlugin } from "vite-plugin-vue2";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    createVuePlugin(),
    visualizer({
      open: true,
      title: "phosphor-vue bundle visualizer",
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/entry.ts"),
      name: "phosphor-vue",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
