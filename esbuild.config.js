import { htmlPlugin } from "@craftamap/esbuild-plugin-html";

export default {
  entryPoints: ["src/index.jsx"],
  bundle: true,
  outdir: "esbuild_dist",
  metafile: true,
  plugins: [
    htmlPlugin({
      initialOptions: {
        metafile: "esbuild_dist/meta.json",
      },
      files: [
        {
          entryPoints: ["src/index.jsx"],
          filename: "index.html",
          htmlTemplate: `
            <!DOCTYPE html>
            <html lang="en">
              <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
              </head>
              <body>
                  <div id="root" />
              </body>
            </html>
          `,
        },
      ],
    }),
  ],
};
