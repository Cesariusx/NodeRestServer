const express = require('express');
const cors =require('cors');

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        // Middeawers
        this.middewares();

        // Rutas de APlicacion

        this.routes();
    }

    middewares(){
        // CORS
        this.app.use(cors());

        // Lectura y parseo delbody
        this.app.use( express.json() );

        // Directorio Publico
        this.app.use( express.static('public') );
    }

    routes() {
       this.app.use(this.usuariosPath,require('../routes/usuarios'));
    }    

    listen () {
        this.app.listen(this.port, () =>{
            console.log('Servidor corriendo en puerto: ', this.port);
        } );
    }

}




module.exports = Server;