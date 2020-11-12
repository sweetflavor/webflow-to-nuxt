const { exec } = require("child_process")

export default function createDir(name) {
    exec(`mkdir ${name}`)
}

export default function cdInToDir(name) {
    exec(`cd ${name}/`)
}