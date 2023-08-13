import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";

import { terser } from "rollup-plugin-terser"; /** @Link https://www.npmjs.com/package/rollup-plugin-terser */
import html from "@rollup/plugin-html"; /** @Link https://www.npmjs.com/package/@rollup/plugin-html */

const OUTPUT_PATH = "./rollup_dist";

const extensions = ["js", "jsx" /*, "ts", "tsx", "mjs" */];

/**
 * @Link https://github.com/rollup/plugins/tree/master/packages/html#options
 */
const HTML_OPTIONS = {
  fileName: "index.html",
  title: "Hello, Rollup",
  entryFileName: "index.min.js",
  template: ({ title }) => {
    return `
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <title>${title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <div id="root"></div>
    <script src="index.js"></script>
  </body>
</html>
    `;
  },
};

export default {
  base: "./",
  input: "src/index.js" /** 실행의 시작점 */,
  output: [
    {
      dir: OUTPUT_PATH,
      format: "cjs",
      preserveModules: true,
      preserveModulesRoot: "src",
      paths: [
        "./node_modules/react/cjs/react.production.min.js",
        "./node_modules/react-dom/cjs/react-dom.production.min.js",
      ],
      // sourcemap: "inline",
      // name: "version",
      // plugins: [terser()],
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
      },
    },
  ],
  external: [/node_modules/],
  plugins: [
    html(HTML_OPTIONS),
    resolve(),
    commonjs({ include: "node_modules/**" }),
    babel({
      presets: [
        "@babel/preset-env",
        ["@babel/preset-react", { runtime: "automatic" }],
      ],
      exclude: "node_modules/**",
      include: ["src/**/*"],
      extensions,
    }),
    terser(),
  ],
};

/**
 * Good to note
 * @Link build-hooks: https://rollupjs.org/guide/en/#build-hooks
 */
