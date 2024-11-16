let inventario = [];
let opcion;

do {
    opcion = parseInt(prompt(
        "Aplicacion de Stock\n" +
        "1-Agregar producto\n" +
        "2-Existe Producto\n" +
        "3-Listar Productos\n" +
        "4-Salir\n" +
        "Ingresa una Opcion:"
    ));

    switch (opcion) {
        case 1:
            agregarProducto();
            break;
        case 2:
            existeProducto();
            break;
        case 3:
            consultarStock();
            break;
        case 4:
            alert("¡Gracias por usar el Gestor de Stock!");
            break;
        default:
            alert("Opción inválida, intenta de nuevo.");
    }
} while (opcion !== 4);


function agregarProducto() {
    let nombre = prompt("Ingrese el nombre del producto:");
    let cantidad = parseInt(prompt("Ingrese la cantidad de stock disponible:"));
    let precio = parseInt(prompt("Ingrse el precio unitario:"));
    inventario.push({ nombre, cantidad, precio });
    alert("El Producto " + nombre + " agregando correctamente");
}

function existeProducto() {
    let objetoBuscado = prompt("Ingrese el objeto que busca:");
    let encontrado = false;
    for (let i = 0; i < inventario.length; i++) {
        if (inventario[i].nombre === objetoBuscado) {
            encontrado = true;
            break;
        }
    }
    if (encontrado == true) {
        alert("Este objeto forma parte del inventario.");
        console.log("Este objeto forma parte del inventario.");
    } else {
        alert("Este objeto no es parte del inventario.");
        console.log("Este objeto no es parte del inventario.");
    }
}


function consultarStock() {
    if (inventario.length == 0) {
        alert("El inventario esta vacio.")
    } else {
        console.log("Hay " + inventario.length + " objetos en el inventario, estos son:");
        for (let i = 0; i < inventario.length; i++) {
            console.log(inventario[i]);
        }
    }
}