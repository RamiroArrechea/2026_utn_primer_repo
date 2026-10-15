/* 
Crear las funciones:
- buscarUsuarioPorId(id_usuario)
- buscarUsuarioPorEmail(email)
- buscarUsuarioPorNombre(nombre)
- eliminarUsuarioPorId(id_usuario) (Dificil)
*/

let usuarios = [
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
    },
    {
        id: 4,
        email: "julieta@gmail.com",
        nombre: 'julieta'
    }
]

// BUSCAR POR ID
function buscarUsuarioPorId(id_usuario){
    for(let indice=0; indice<usuarios.length; indice = indice + 1){
        if(usuarios[indice].id === id_usuario){
            return indice
        }
    }
    return null
}

let lugar = buscarUsuarioPorId(2)
console.log('Id: El usuario esta en la posicion: ', lugar  + "de la lista")
//


// BUSCAR POR EMAIL
function buscarUsuarioPorEmail(email){
    for(let indice=0; indice<usuarios.length; indice = indice + 1){
        if(usuarios[indice].email === email){
            return indice
        }
    }
    return null
}

let lugar2 = buscarUsuarioPorEmail("julieta@gmail.com")
console.log('Email: El usuario esta en la posicion: ', lugar2  + "de la lista")

//
// BUSCAR POR NOMBRE
function buscarUsuarioPorNombre(nombre){
    for(let indice=0; indice<usuarios.length; indice = indice + 1){
        if(usuarios[indice].nombre === nombre){
            return indice
        }
    }
    return null
}

let lugar3 = buscarUsuarioPorNombre("adrian")
console.log('Nombre: El usuario esta en la posicion: ', lugar3  + "de la lista")

//
// eliminar usuario
{
    let nombreUsuario

    function eliminarUsuarioPorId(id_usuario) {
        usuarios.splice(id_usuario, 1);
        //no se que retornar
        //return ??
    }

    //Primero encuentro el indice a eliminar
    let indiceAElimminar = buscarUsuarioPorId(2)

    //luego llamo a la funcion eliminar
    eliminarUsuarioPorId(indiceAElimminar)
    console.log('Se elimino el usuario cuya posicion era la: ', indiceAElimminar  + "de la lista")

}