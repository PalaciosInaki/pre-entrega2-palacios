/* Simulador carrito de compras */

function agregarAlCarrito(precio) {
    totalCompra += precio; /* Sumo al valor total de la compra el precio indicado por parametro */
    alert('Producto agregado al carrito.\n' +
        'Total actual: $' + totalCompra);
}

function mostrarProductos() {

    let producto = prompt('Productos disponibles:\n' +
        '1. Grafica RTX 4080 - $500\n' +
        '2. Pc Gamer Prearmada - $1000\n' +
        '3. Combo Perifericos Hyper X - $250' + '\n\n' +
        'Ingresa el número del producto que deseas agregar al carrito:');

    switch (producto) {
        case '1':
            agregarAlCarrito(500); /* Llamo a la funcion agregarAlCarrito y le paso como parametro el precio del producto */
            break;
        case '2':
            agregarAlCarrito(1000); /* Llamo a la funcion agregarAlCarrito y le paso como parametro el precio del producto */
            break;
        case '3':
            agregarAlCarrito(250); /* Llamo a la funcion agregarAlCarrito y le paso como parametro el precio del producto */
            break;
        default:
            alert('Producto no válido. Por favor selecciona un producto válido.');
            mostrarProductos(); /* Vuelvo a mostrar los productos */
            break;
    }
}

function finalizarCompra() {
    alert('Compra finalizada.\n\n' +
        'Total a pagar: $' + totalCompra);
    totalCompra = 0; /* Reinicio el valor del totalCompra para la sig */
}

function terminarSimulacion() {
    alert('¡Gracias por tu compra y por elegirnos!\n' +
        'Somos Bamboo PC'
    );
}

/* Inicializo variables */
let opcion = 0;
let totalCompra = 0;

/* Inicio la simulación  */
while (opcion != 3) {

    opcion = prompt('Bienvenido al carrito de compras de Bamboo PC.\n' +
        'Selecciona una opción:\n' +
        '1. Ver productos disponibles\n' +
        '2. Finalizar compra\n' +
        '3. Salir');

    switch (opcion) {
        case '1':
            mostrarProductos();
            break;
        case '2':
            finalizarCompra();
            break;
        case '3':
            terminarSimulacion();
            break;
        default:
            alert('Opción no válida. Por favor selecciona una opción válida.\n' +
                opcion);
            break;
    }

}







