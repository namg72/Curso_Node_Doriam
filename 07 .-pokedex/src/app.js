//Nos traemos express
const express = require("express")
const app = express();
const path = require("path")

//set asignamos funciones al seridor en este caso vamos a asignar a express la función viwe engine (motor de plasntillas) y le decimos cual vamos a utilizar

app.set("view engine", "pug")

//Tenemos que decirle a express que use la caperta vista, con dos paramentros, "views" (parametro que asigna las vistas) y la ruta absoluta de la carpeta
app.set("views", path.join(__dirname, "vistas"))

//ROUTES

//requerimos el archivo que hemos exportado y lo asignamos a una constante y luego le decimos a app que lo use
const routes = require("./routes/index.routes")
app.use(routes)


//ruta alternativa por si no encuenta ninguna que nos redirija al html



app.use(express.static(path.join(__dirname, "../public")));

app.use((reg, res) => {
    res.sendFile(path.join(__dirname, "../public/error.html"))

})




//Ponemos a la escucha el puerto
app.listen(3000, () => {
    console.log("servidor a la espera de conexiones")
})