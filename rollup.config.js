import { resolve } from "path";

import { terser } from "rollup-plugin-terser"; /** @Link https://www.npmjs.com/package/rollup-plugin-terser */
import html from "@rollup/plugin-html"; /** @Link https://www.npmjs.com/package/@rollup/plugin-html */

const OUTPUT_PATH = "rollup_dist";

/**
 * @Link https://github.com/rollup/plugins/tree/master/packages/html#options
 */
const HTML_OPTIONS = {
  fileName: "index.html",
  meta: [],
  publicPath: "",
  attributes: {
    html: {
      lang: "ko",
    },
    link: null,
    script: null,
  },
  title: "Hello, Rollup",
};

export default {
  input: resolve(__dirname, "src/index.js") /** 실행의 시작점 */,
  output: [
    {
      file: resolve(__dirname, `${OUTPUT_PATH}/index.js`),
      format: "cjs",
    },
    {
      file: resolve(__dirname, `${OUTPUT_PATH}/index.min.js`),
      format: "iife",
      name: "version",
      plugins: [html(HTML_OPTIONS), terser()],
    },
  ],
};

/**
 * Good to note
 * @Link build-hooks: https://rollupjs.org/guide/en/#build-hooks
 */
