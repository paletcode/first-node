const { readFile } = require('node:fs/promises')

;(async () => {
        const text = await readFile('./archivo.txt', 'utf-8')
        console.log(text)
        console.log('haciendo mientras se lee el archivo...')
    }
)()