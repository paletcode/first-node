import fs from 'node:fs/promises'
import { join } from 'node:path'


const folder = process.argv[2] ?? '.'

//funcion asincrona
async function ls(folder) {
    let files
   //try para el await
    try {
        files = await fs.readdir(folder)
    } catch {
        console.log(`Folder not found ${folder}`)
        process.exit(1) //si hay algun error, sale en 1
    }

    const filePromises = files.map(async file => {
        const filePath = join(folder, file)
        let fileStats
        try {
            fileStats = await fs.stat(filePath)
        } catch(err) {
            console.log(`Error reading the file ${filePath} ${err}`)
            process.exit(1) //si hay algun error, sale en 1
        }

        const isDirectory   = fileStats.isDirectory()
        const fileType     = isDirectory ? 'd' : 'f'
        const fileSize      = fileStats.size
        const fileModified  = fileStats.mtime.toLocaleString()


        return `${fileType} ${file.padEnd(20)} ${fileSize.toString().padStart(10).padEnd(20)} ${fileModified.padStart(10)}`
    }
    )

    const filesInfo = await Promise.all(filePromises)
    filesInfo.forEach(fileInfo => console.log(fileInfo))
}

ls(folder)