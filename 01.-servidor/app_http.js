//VAMOS A CREAR UN SERVIDOR

//1.- Requerimos el modulo http de node y lo guradamos en una variable
const http = require("http");

//2.- Ahora creamos el servidor con createServer que recibe otra función que lleva dos parametros request y responde
//    req =  request -> petición del cliente  (navegador)
//    res = responde -> respuesta del servidor
const server = http.createServer((req, res) => {
    console.log("se ha conectado un cliente al servidor")
        //con response le enviamos respuesta al navegador, en este caso en end que la conexión ha sido correcta y terminamos el ¡ntercambio de datos
    response.end("la conexion ha sido correta....")
});

//3.- Preparamos al servidor para recibir conexiones. Funcion listen que recibe dos parametros
//      1º El puerto (normalmente es el 3000)
//      2ª Una función que se va a ejecutar cuando el servidor este listo para recibir conexiones

server.listen(3000, () => {
    console.log("servidor a la espera de conexiones")
})