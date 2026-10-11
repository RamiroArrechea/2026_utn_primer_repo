/*let precioProducto = prompt("Ingrese el precio del producto:");

function calcularIVA(precio) { 
    const iva = 0.21 // 21% de IVA
        
    // solo debo calcular el iva del precio , no sumarselo!
    let precioIVA = precio * ( iva)

    //si deseara sumar el iva al precio original seria:
    // let precioConIVA = precio * (1 + iva)
    //return precioConIVA

    return precioIVA
}   

alert("El precio con IVA es: " + calcularIVA(precioProducto));
*/

function mostrarPais(pais) { 
    let mensaje= "los elementos del pais son: "

    for(i=1; i<5;i++){
        if(i===1){
            mensaje = mensaje + "contiente:" + pais.continente
            
        }else if(i===2){
            mensaje = mensaje + "km_2:" + pais.km_2
        }else if(i===3){
            mensaje = mensaje + "cant_hab:" + pais.cant_hab
        }else if(i===4){
            mensaje = mensaje + "id: " + pais.id
        }
        mensaje = mensaje + ","
    }
    
    alert(mensaje);
    
    
}

///
let pais = {
    id: "1",
    cant_hab:"4",
    km_2: "10",
    continente:"asia"
}

mostrarPais(pais)