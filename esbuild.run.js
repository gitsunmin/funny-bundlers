const option = require('./esbuild.config.js');

require('esbuild').build(option).catch(() => process.exit(1))