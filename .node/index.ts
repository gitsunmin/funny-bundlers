import { exec } from 'child_process';
// import ora from 'ora';
// import chalk from 'chalk';

const buildByWebpack = async () => {
    console.time('webpack');
    return new Promise((resolve) => {
        exec('npm run build:w', (_error, responses) => {
            console.timeEnd('webpack');
            resolve(responses);
        })
})
}

async function main() {
    console.log()
    await buildByWebpack();
}

main();