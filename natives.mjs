import os from 'node:os';
import fs, { stat } from 'node:fs';
import fsp from 'node:fs/promises';
const file = './archivo.txt'


export function getSystemInfo(){
    console.log(os.platform())
    console.log(os.release())
    console.log(os.arch())
    console.log(os.cpus())
}



export function fileOps(){
    const stats = fs.statSync(file)
    console.log(stats.size)
    
}

export function readFile(){
    const text = fs.readFileSync(file, 'utf-8')
    console.log(text)
}

//   con callback
export function asyncFileReadCb(){ 
    //funcion callback
    fs.readFile(file, 'utf-8', (err, text)=> {
        if(!err){
            console.log(text)
        }
       
    })

    console.log("haciendo algo mientras leo el archivo")
}


//  con promises
export function asyncFileReadPr(){ 
    //funcion con promises
    fsp.readFile(file, 'utf-8').then( text => {
        console.log(text)
    })

    console.log("haciendo algo mientras leo el archivo")
}

