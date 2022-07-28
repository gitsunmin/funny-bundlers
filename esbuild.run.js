require('esbuild').build({
    entryPoints: ['src/index.js'],
    bundle: true,
    outfile: 'dist/index.js',
}).catch(() => process.exit(1))