const { exec } = require("child_process")

export default function createNuxtPackageFile (name) {
    const packageFile = `{"name": "my-app","scripts": { "dev": "nuxt", "build": "nuxt build", "generate": "nuxt generate", "start": "nuxt start" }}`
    exec(`cd ${name}/pages && echo "${JSON.stringify(packageFile)}" > package.json`)
}