const { exec } = require("child_process")
const fs = require('fs');

export default function createNuxtProject (name, path) {
    // exec(`mkdir ${name} && cd ${name}/ && mkdir pages && cd pages/`)
    // echo "<template></template>" >index.vue

    
    fs.readdir(path, (err, files) => {
        console.log(files);
    })
}