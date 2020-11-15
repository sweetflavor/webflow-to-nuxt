const { exec } = require("child_process")
const execa = require('execa');
const fs = require('fs');
import createNuxtPages from './create-nuxt-pages'
import createNuxtPackageFile from './create-nuxt-package-file'

export default function createNuxtProject (name, path) {
    // Create basic nuxt structure
    (async () => {
        const { stdout } = await exec(`mkdir ${name} && cd ${name} && mkdir pages && cd pages/`);
    })();
    
    createNuxtPackageFile( name )
    createNuxtPages( name, path )
}