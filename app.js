require("dotenv").config()

const express = require("express");
const cors = require("cors");

// todo: se llama la funcion o modulo de la conexion a la base
const dbConnect = require('./config/mongo');

const app = express();

// !-- la app puede usar peticiones externas utilizando cors
// !-- para evitar problemas de origenes 
app.use(cors())

// ? la app recibira json
app.use(express.json())
app.use(express.static("storage"))

// ?-- se esccha en el puerto 3000
// const port = 3000
// todo: permite que la app escuhe cualquier puerto desde las variables de entorno
const port = process.env.PORT || 3000

/**
 * Aqui invocamos alas rutas
 */
// todo: localhost/api/_________
// app.use("/api", require("./routers/tracks"))
app.use("/api", require("./routers"))


// ** la app escucha el puerto y envia un mensaje
app.listen( port, () => {
    console.log(`Tu app esta lista por http://localhost:${port}`);
})

dbConnect()