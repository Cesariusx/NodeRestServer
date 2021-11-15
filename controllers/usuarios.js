
const { response, request } = require('express');


const usuariosGet = (req = request, res = response) => {

    const {nombre,apellido="<SinApellido>",edad} = req.query;

    res.json({
        msg: 'get API - Controlador',
        nombre,
        apellido,
        edad
    })
}

const usuariosPut = (req, res=response) => {
    
    //const id = req.params.id;     // Es igual a lo de abajo solo que esta descestructurado
    const {id} = req.params;

    res.status(400).json({
        msg: 'put API - Controlador',
        id
    })
}

const usuariosPost = (req, res=response) => {
    
    const {nombre, edad} =req.body;

    res.json({
        msg: 'post API - Controlador',
        nombre,
        edad
    })
}

const usuariosDelete = (req, res=response) => {
    //res.send('Hello World')
    res.json({
        ok: true,
        msg: 'delete API - Controlador'
    })
}


module.exports = {
    usuariosGet, usuariosPut, usuariosPost, usuariosDelete
}