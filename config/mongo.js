// !-- traemos la dependencia para la conexion a la base de datos
const mongoose = require('mongoose');

// ?-- creamos la funcion para la conexion
const dbConnect = () => {
    const DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err, res) => {
        if (!err) {
            console.log('*** CONEXION EXITOSA ***');
        }else{
            console.log('*** ERROR EN LA CONEXION ***');
        }
    }
    
    );
}

// todo: necesitamos exportar la funcion para importar en otros componentes
module.exports = dbConnect
