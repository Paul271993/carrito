class Prendas{
    


    constructor(nombre, cantidad, precio){

        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;



        
    }   

    toString(){
        return "Nombre: " + this.nombre + "<br>" + "Cantidad: " + this.cantidad + "<br>" + "Precio: " + this.precio
    }


    

}

class Carrito{
        
    
    

    constructor(){
        
        this.prendas = [];
    }

    toString()
        {
            return "Productos: " + this.prendas

        }
        
        

}




let carrito = new Carrito();


function prendasCarrito(nombre,cantidad,precio){
    
    var prenda1 = new Prendas(nombre,cantidad,precio)
    // carrito.prendas.push(prenda1)
    
    carrito.prendas.push(prenda1)
    console.log(carrito)

    // document.getElementById("carrito").innerHTML = carrito.prendas.toString()
}



function mostrarCarrito(){


     document.getElementById("mostrarCarrito").innerHTML = carrito.prendas.toString()

     console.log(carrito)

    
}
