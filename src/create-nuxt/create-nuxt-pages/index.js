const { exec } = require("child_process")
const fs = require('fs');

export default function createNuxtPages (name, path) {
    
    fs.readdir(path, (err, files) => {
        console.log(files);
        files.map(file => {
            console.log(file);
            const baseVueStructure = new String(`
                        <template>
                            <div>
                                <h1>{{ msg }}</h1>
                            </div>
                        </template>
                        <script>
                        export default {
                            name: '${file.replace('.html', '')}',
                            data () {
                                return {
                                    msg: 'Welcome to the ${file.replace('.html', '')} page!'
                                }
                            }
                        }
                        </script>
    `)
            exec(`cd ${name}/pages && echo "${baseVueStructure}" > ${file.replace('.html', '.vue')}`)
        })
    })
}