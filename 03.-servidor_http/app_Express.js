//VAMOS A CREAR UN SERVIDOR USANDO EXPRESS

// Importamos Express "npm i express"
// Creamos una constante y nos traemos express.
const express = require("express");

// Express hay que ejecutarlo primero para poder utilizar todos los metodos y esto lo hacemos creando una constante y ejecutandolo dentro de ella
const app = express();


//Construimos el hecho que un cliente se conecte por una ruta get y mandarle un mensaje. Todas las ruta que vienen por URL son conexiones get
//Hay un metodo para cada uno de los metodos de conexion (get/push/push/delete)
//con get tenemos dos parametros:
//      1.- La ruta por la que va a entrar (Con "/" le indicamos que es la carpeta raiz del localhost:3000)
//      2.- La función que querermos que se ejecute cuando pase, necesitamos poner el request y el response como parametros
//                  req =  request -> petición del cliente  (navegador)
//                  res = responde -> respuesta del servidor

app.get("/", (req, res) => {

    console.log("Se ha conectado un cliente al servidor")
    res.send("enviado desde el servidor")
        /* si queremos enviar un archivo o un html usaremos sendFile y le daremos la ruta absoluta, no relativa:
              res.sendFile("/Users/nachomartinez/Documents/CURSOS INFOMATICA/Curso Node Doriam/servidor_http/MARINA-B&W.jpg") */
})


// Con listen le indicamos el puerto que tiene que escuchar y le pasamos la función que imprime nuestro mensaje
app.listen(3000, () => console.log("Servidor a la espera de conexiones"));