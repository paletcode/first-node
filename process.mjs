//console.log(process.argv)

//controlar proceso y su salida
//process.exit(0)

process.on('exit', () =>{
    //limpiar los recursos, etc
})

console.log(process.cwd()) //current working directory
console.log(process.platform)

console.log(process.env.VARN)