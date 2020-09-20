let baseDeDatos = [
    {
        id: 1,
        nombre: 'Zapatos',
        precio: 50.00,
        imagen: 'zapatos.jpg'
    },
    {
        id: 2,
        nombre: 'Pantalones',
        precio: 30.00,
        imagen: 'pantalones.jpg'
    },
    {
        id: 3,
        nombre: 'Mascarillas',
        precio: 15.00,
        imagen: 'mascarillas.jpg'
    }
    

]
let $items = document.querySelector('#items');
let carrito = [];
let total = 0;
let $carrito = document.querySelector('#carrito');
let $total = document.querySelector('#total');


function calcularTotal(){
    total = 0;
    for (let item of carrito){
        let miItem = baseDeDatos.filter(function(itemBaseDatos){
            return itemBaseDatos['id'] == item;
        });
        total = total + miItem[0]['precio'];
        $total.textContent = total.toFixed(2);
    }
}
