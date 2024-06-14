import fs, { readdir } from 'node:fs/promises'


fs.readdir('.',)
    .then(files => {
        files.forEach(file => {
            console.log(file)
        })
    })
    .catch(err => {
        if (err) {
            console.log('Error reading the files', err)
            return
        }
    })