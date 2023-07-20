import { exec } from "child_process";
// import ora from 'ora';
import chalk from "chalk";

const buildByWebpack = async () => {
  const log = chalk.hex("#8DD6F9")("webpack running time");
  console.time(log);
  return new Promise((resolve) => {
    exec("npm run build:w", (_error, responses) => {
      resolve(responses);
      console.timeEnd(log);
    });
  });
};

const buildByRollup = async () => {
  const log = chalk.hex("#EC4A3F")("rollup running time");
  console.time(log);
  return new Promise((resolve) => {
    exec("npm run build:r", (_error, responses) => {
      resolve(responses);
      console.timeEnd(log);
    });
  });
};

const buildByESBuild = async () => {
  const log = chalk.hex("#FFCF00")("esbuild running time");
  console.time(log);
  return new Promise((resolve) => {
    exec("npm run build:r", (_error, responses) => {
      resolve(responses);
      console.timeEnd(log);
    });
  });
};

async function main() {
  console.log(chalk.bgBlackBright("🛫 🛫 🛫 BUILD START 🛫 🛫 🛫\n"));
  await Promise.all([buildByWebpack(), buildByRollup(), buildByESBuild()]);
  console.log(chalk.bgBlackBright("\n🛬 🛬 🛬 BUILD END 🛬 🛬 🛬"));
}

main();
