import build from "./build";

async function main() {
  await Promise.all([
    build("webpack", "#8DD6F9"),
    build("rollup", "#EC4A3F"),
    build("esbuild", "#FFCF00"),
  ]);
}

main();
