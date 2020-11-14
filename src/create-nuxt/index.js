const { exec } = require("child_process")
const execa = require('execa');
const fs = require('fs');

export default function createNuxtProject (name, path) {
    // Create basic nuxt structure
    (async () => {
        const { stdout } = await exec(`mkdir ${name} && cd ${name} && mkdir pages && cd pages/`);
    })();
    // Create pages into page/ dir
    fs.readdir(path, (err, files) => {
        console.log(files);
        files.map(file => {
            console.log(file);
            exec(`cd ${name}/pages && echo "<template></template>" > ${file}.vue`)
        })
    })
    // Create package.json
    const packageFile = `{"name": "my-app","scripts": { "dev": "nuxt", "build": "nuxt build", "generate": "nuxt generate", "start": "nuxt start" }}`

    exec(`cd ${name}/pages && echo "${JSON.stringify(packageFile)}" > package.json && npm run install`)
   
}