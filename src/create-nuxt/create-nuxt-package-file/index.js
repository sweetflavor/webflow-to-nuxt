const { exec } = require("child_process")

export default function createNuxtPackageFile (name) {
    const packageFile = `{"name": "${name}", "version": "0.0.1", "private": true, "license": "MIT", "scripts": { "dev": "nuxt", "build": "nuxt build", "generate": "nuxt generate", "start": "nuxt start" }}`
    exec(`cd ${name}/ && echo "${JSON.stringify(packageFile)}" > package.json && npm install nuxt`)
}