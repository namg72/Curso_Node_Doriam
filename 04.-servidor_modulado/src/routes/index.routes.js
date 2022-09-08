//Nos traemos express
const express = require("express");

//Como solo queremos el paquetre routes de Express para controlar las rutas nos lo traemos
const router = express.Router()

//Nos trameos el objeto controlador
const controller = require("../controllers/index.controller")



//construimos la ruta con el metodo get, la función es la que hemos puesto en el objeto controller 
router.get("/", controller.index)

//Ahora exportamos este archivo a nuestro app.modul para que se pueda utilizar
module.exports = router