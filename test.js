
let lista_nombres = [];

function ver_lugar() {
    let busqueda = prompt("Ingrese el nombre a buscar");
    let posicion = lista_nombres.indexOf(busqueda);
    if (posicion !== -1) {
        alert("El cliente " + busqueda + " tiene " + posicion + " personas antes");
    } else {
        alert("Al parecer el cliente " + busqueda + " no está en la lista, recuerde escribirlo igual a como se ingreso");
    }
}

function Llamar_cliente() {
    //si no hay clientes el ultimo valor seria 0 y no tendria nada para mostrar.
    if (lista_nombres.length === 0) {
        alert("No hay clientes registrados")
    }
    else {
        nombre_llamar = lista_nombres[0];
        alert("Llamar al cliente : " + nombre_llamar);
        lista_nombres.shift();
    }
}

function cargar() {
  //  Cicla la carga de nombres hasta que el usuario presione el boton cancelar.
    while (true) {
        let nombre = prompt("Ingrese nombre y apellido del Cliente");
        if (nombre === null) {

            break;
        }
        lista_nombres.push(nombre);
    }
    return lista_nombres;
}

function ver_lista() {
    //carga la variable con el resultado de la lectura de array
    let lista = "Cliente en la fila ordenados por llegada:\n" + lista_nombres.join("\n ");

    // Muestra el mensaje en un alert
    alert(lista);
}
//cicla el proyecto hasta que el usuario cancela el prompt.
while (true) {
    let opcion = prompt("Elige una opción:\n1. Nueva persona \n2. Ver Lugar\n3. Ver lista\n4. Llamar cliente");
    switch (opcion) {

        case "1":
            cargar();
            break;
        case "2":
            ver_lugar();
            break;
        case "3":
            ver_lista();
            break;
        case "4":
            Llamar_cliente();
            break;
    }

    if (opcion === null) {
        break;
    }
}

