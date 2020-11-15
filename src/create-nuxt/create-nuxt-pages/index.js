const { exec } = require("child_process")
const fs = require('fs');

export default function createNuxtPages (name, path) {
    fs.readdir(path, (err, files) => {
        console.log(files);
        files.map(file => {
            console.log(file);
            exec(`cd ${name}/pages && echo "<template></template>" > ${file.replace('.html', '.vue')}`)
        })
    })
}