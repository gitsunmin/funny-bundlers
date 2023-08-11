import { exec } from "child_process";

import chalk from "chalk";

import runSpinner from "./spinner";
import timer from "./timer";

export type Builder = "esbuild" | "rollup" | "webpack";

export type color = "#8DD6F9" | "#EC4A3F" | "#FFCF00";

export default async (builder: Builder, color: color) => {
  const coloring = chalk.hex(color);
  const spinner = runSpinner(coloring(`${builder} running...`));
  const end = timer();

  return new Promise((resolve) => {
    exec(`npm run build:${builder}`, (_error) => {
      const runningTime = end();
      spinner.succeed(`${coloring(`${builder} running time: ${runningTime}`)}`);
      resolve({
        builder,
        runningTime,
      });
    });
  });
};
