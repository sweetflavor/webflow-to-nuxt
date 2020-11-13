const { exec } = require("child_process")
const execa = require('execa');
const fs = require('fs');

export default function createNuxtProject (name, path) {
    // exec(`mkdir ${name} && cd ${name}/ && mkdir pages && cd pages/`)
    // echo "<template></template>" >index.vue
    (async () => {
        const { stdout } = await exec(`mkdir ${name} && cd ${name} && mkdir pages && cd pages/`);
    })();

    fs.readdir(path, (err, files) => {
        console.log(files);
        files.map(file => {
            console.log(file);
            exec(`cd ${name}/pages && echo "<template></template>" > ${file}.vue`)
        })
    })
}