 //NECESITAMOS CONSTRUIR UN OBJETO QUE PODAMOS EXPORTAR 
 //ESTE OBJETO ES EL QUE VAMOS A UTILIZAR PARA EXPORTAR TODAS LAS FUNCIONABILIDADES QUE TENGA EL CONTROLADOR QUE SE ENCARGE DE INDEX

 const controller = {}

 //y le asginamos la función


 controller.index = (req, res) => {
     res.send("La conexión ha sido correcta desde index.controller")
 }

 //Exportamos el objeto para poder utilizarlo deantro de las rutas
 module.exports = controller