 //NECESITAMOS CONSTRUIR UN OBJETO QUE PODAMOS EXPORTAR 
 //ESTE OBJETO ES EL QUE VAMOS A UTILIZAR PARA EXPORTAR TODAS LAS FUNCIONABILIDADES QUE TENGA EL CONTROLADOR QUE SE ENCARGE DE INDEX

 const controller = {}

 //y le asginamos la función

 //ahora le decimos que en el caso que llegue una conexion a la raiz tiene que renderizar y donde se encuentra el archivo a renderizar
 //solamente tenemos que darle el nombre del archivo porque ya le hemos dicho qen que carpeta estan las vistas en el app y la variable que hemos
 //creado con lo que queremos que se muestre 

 const title = "INDEX DESDE EL SERVIDOR  CON PUG UTILIZANDO UNA VARIABLE"


 controller.index = (req, res) => {
         res.render("index", { title })
     }
     //Exportamos el objeto para poder utilizarlo deantro de las rutas 
 module.exports = controller