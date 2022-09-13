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
    //se podrida hacer en un solo paso
    // app.use(require("./routes/index.routes")


//ruta alternativa por si no encuenta ninguna que nos redirija al html

/* hay que darle la ruta absoluta
        app.use((reg, res) => {
        res.sendFile("/Users/nachomartinez/Documents/CURSOS INFOMATICA/Curso Node Doriam/renderizado_Paginas/public/error.html")
       
})
 */

//tambien lo podemos hacer utilizand el atributo static
//rutas para los archivos estaticos para ello utilizamos el atributo static de express y le damos la ruta de los archivos estaticos
// dirname es una variable que nos da node y que nos devuleve la ruta absoluta al proyecto donde estemos
//con path lo que hacemos es normalizar las rutas para que sean igual en windows y linux y con el metodo join unimos el dirname y la carpeta public

const path = require("path")
app.use(express.static(path.join(__dirname, "../public")));

app.use((reg, res) => {
    res.sendFile(path.join(__dirname, "../public/error.html"))

})


//ME PARECE MAS FACIL DARLE DIRECTAMENTE LA RUTA ABSOLUTA DEL ARCHIVO


//Ponemos a la escucha el puerto
app.listen(3000, () => {
    console.log("servidor a la espera de conexiones")
})