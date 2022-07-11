import { terser } from "rollup-plugin-terser";
import { resolve } from "path";

export default {
  input: resolve(__dirname, "src/index.js") /** 실행의 시작점 */,
  output: [
    {
      file: resolve(__dirname, "dist/bundle.js"),
      format: "cjs",
    },
    {
      file: resolve(__dirname, "dist/bundle.min.js"),
      format: "iife",
      name: "version",
      plugins: [terser()],
    },
  ],
};

/**
 * @Link build-hooks: https://rollupjs.org/guide/en/#build-hooks
 */
