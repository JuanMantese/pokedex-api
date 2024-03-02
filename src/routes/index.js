// Cargador automatico de Rutas
const express = require('express')
const router = express.Router()

// Permite leer archivos dentro de Node
const fs = require('fs')

// Ruta del directorio
const PATH_ROUTER = __dirname;

// Seteamos el nombre de directorio actual
const cleanFileName = (fileName) => {
  // Separamos por '.' y devolvemos el primer elemento del array 
  const clean = fileName.split('.').shift()
  return clean
}

// Lee el directorio donde estamos ubicados, y devuelve un Array
// Utilizamos el nombre de los archivos para definir las rutas
fs.readdirSync(PATH_ROUTER).filter(fileName => {
  
  const prefixRoute = cleanFileName(fileName)

  if (prefixRoute !== 'index') {
    // Seteamos la ruta con el prefix y el archivo que corresponde al mismo
    console.log(`Loading the route... ${prefixRoute}`);
    router.use(`/${prefixRoute}`, require(`./${prefixRoute}.js`))
  }

})

module.exports = { router };