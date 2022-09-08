/* 
VAMOS A MODULARIZAR LA CONEXION

RUTAS: LA PODEEMOS DIVIDRI EN DOS PARTES

    .- LA RUTA A LA QUE ESTAMOS ACCEDIENDO
    .- EL METODO O LA FUNCION QUE SE VA A EJECUTAR CUANDO NOSOTROS NOS CONECTEMOS POR ESA RUTA

PARA ELLO NOS CREAMOS DOS CARPETAS UNA PARA LAS RUTAS Y LAS OTRA PARA EL METODO (CONTROLADOR)
EN LA CARPETA DE LAS RUTAS TENENOS ARCHIVOS INDEPENDIENRES CON TODAS LAS RUTAS Y EXPORTAMOS EL ARCHIVO PARA PODER UTILIZARLO
EN LA CARPETE CONTROLERS TENEMOS LAS FUNCIONES POR
*/

//Nos traemos express
const express = require("express")
const app = express();




//ROUTES

//requerimos el archivo que hemos exportado y lo asignamos a una constante y luego le decimos a app que lo use
const routes = require("./routes/index.routes")
app.use(routes)
    //se podrida hacer en un solo paso∫no
    // app.use(require("./routes/index.routes")


app.listen(3000, () => {
    console.log("servidor a la espera de conexiones")
})