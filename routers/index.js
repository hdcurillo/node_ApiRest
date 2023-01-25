const express = require('express');
const fs = require('fs');
const router = express.Router();

const PATH_ROUTES = __dirname;

// ? creo una funcion para eliminar el .js de los archivos routes
const removeExtension = (fileName) => {
    // todo: transforma una cade en un array basado en algo == tracks.js = [tracks, js]
    return fileName.split('.').shift()
}

// ? obtengo el directorio de todos los archivos de la carpeta routes
fs.readdirSync(PATH_ROUTES).filter((file) => {
    const name = removeExtension(file) //todo: index, tracks, users, sotrages
    if (name !== 'index') {
        router.use(`/${name}`,require(`./${file}`)) //todo: http://localhost:3000/api/(users,tracks,storage)
    }
})



module.exports = router