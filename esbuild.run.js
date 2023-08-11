import option from "./esbuild.config.js";
import esbuild from "esbuild";

esbuild.build(option).catch(() => process.exit(1));
