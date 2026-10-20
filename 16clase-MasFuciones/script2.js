//Desarrollar las siguientes funciones

//buscarUsuariosPorTerminoDeBusqueda(termino_de_busqueda)

//tiene que devolver a los usuarios que cumplan con ese termino de busqueda en el nombre

//buscarUsuariosPorTerminoDeBusqueda('j')

/* 

retorna 

[

    {

        id: 2,

        email: "jose@gmail.com",

        nombre: 'jose'

    },

    {

        id: 4,

        email: "julieta@gmail.com",

        nombre: 'julieta'

    }

]

*/

//buscarUsuariosPorTerminoDeBusqueda('jo')

/* 

retorna 

[

    {

        id: 2,

        email: "jose@gmail.com",

        nombre: 'jose'

    }

]

*/

//buscarUsuariosPorTerminoDeBusqueda('josefina')

/* 

retorna 

[]

*/

//obtenerMailsUsuarios()

//Devuelve una lista de mails con los mails de cada usuario

//obtenerMailsUsuarios() -> ["julieta@gmail.com", "pepe@gmail.com", "jose@gmail.com", "adrian@gmail.com"]

let usuarios = [
    {
        id: 4,
        email: "julieta@gmail.com",
        nombre: 'julieta'
    },
    {
        id: 1,
        email: "pepe@gmail.com",
        nombre: 'pepe'
    },
    {
        id: 2,
        email: "jose@gmail.com",
        nombre: 'jose'
    },
    {
        id: 3,
        email: "adrian@gmail.com",
        nombre: 'adrian'
    }
]

/******************************** */
/* ejercicio 1 */
/********************************* */
function buscarUsuariosPorTerminoDeBusqueda(termino_de_busqueda){
    //CREO UN  array vacio
    let resultadosEncontrados = []; 

     //
    for(let indice=0; indice<usuarios.length; indice = indice + 1){
        
        //acá lo pusheo al nuevo
        if(usuarios[indice].nombre.includes(termino_de_busqueda)){
            resultadosEncontrados.push(usuarios[indice])
        }
    }

    return resultadosEncontrados
}

let resultadosEncontrados = []; 
resultadosEncontrados = buscarUsuariosPorTerminoDeBusqueda("jo");

// poner "coma" en lugar de suma "+" para que la consola muestre el objeto real
// lo de la "coma" no me era intuitivo
console.log("Resultado:", resultadosEncontrados); 



/******************************** */
/* ejercicio 2 */
/********************************* */
function obtenerMailsUsuarios(){
    //CREO UN  array vacio
    let mailsUsuarios = []; 

    //
    for(let indice=0; indice<usuarios.length; indice = indice + 1){
        
        //acá pusheo al nuevo // pero verifico que haya email
        if(usuarios[indice].email != "" ){
            mailsUsuarios.push(usuarios[indice].email)
        }
    }
    return mailsUsuarios
}

let resultados = []; 
resultados = obtenerMailsUsuarios();

// poner "coma" en lugar de suma "+" para que la consola muestre el objeto real
// lo de la "coma" no me era intuitivo
console.log("Resultado obtenerMailsUsuarios():", resultados); 



/******************************** */
/* ejercicio clase 15 */
/********************************* */
//Debe cambiar el nombre del personaje
function renombrarPersonaje(nombre){
    
    //recorremos el array usuario
    for(let indice=0; indice<usuarios.length; indice = indice + 1){
        
        //
        if(usuarios[indice].nombre === nombre ){
            usuarios[indice].nombre = "nuevoNombre"
        }

        return usuarios[indice].nombre
    }

}

let nombre= "julieta"
let nuevoNombre = renombrarPersonaje(nombre)
// Veamos si cambiamos el nombre de la persona
console.log("Resultado renombrarPersonaje(nombre):" +"antes: " + nombre + "-- ahora:" + nuevoNombre); 

