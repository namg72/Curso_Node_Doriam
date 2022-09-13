 //NECESITAMOS CONSTRUIR UN OBJETO QUE PODAMOS EXPORTAR 
 //ESTE OBJETO ES EL QUE VAMOS A UTILIZAR PARA EXPORTAR TODAS LAS FUNCIONABILIDADES QUE TENGA EL CONTROLADOR QUE SE ENCARGE DE INDEX

 const controller = {}

 //y le asginamos la función


 controller.index = (req, res) => {
     // res.send("La conexión ha sido correcta desde index.controller")
     res.sendFile("/Users/nachomartinez/Pictures/Fotos GS/211024131516-3.jpg")
 }

 //Exportamos el objeto para poder utilizarlo deantro de las rutas
 module.exports = controller