function menuPrincipal() {
    let total = 0;
    let menu;
    do {
        menu = prompt("1-comprar\n 2-reservar\n 3-finalizar-compra\n 4-Salir");
        menu = parseInt(menu);
        switch (menu) {
            case 1:
                total = total + comprar();
                break;
            case 2:
                total=total + reservar();
                break;
            case 3:
                alert("el total es + total" + total)   
                total = 0;
                break;
            case 4:
                alert("cerrando sesion");
                break;
                default:
                    alert("opcion incorrecta");
        }

    } while (menu !=4);
}
function comprar () {
    let acumulador = 0;
    alert("seleccione para ver su presupuesto")
    alert ("1-objeto1\n 2-objeto2\n 3-objeto3")
    let tipo = prompt("ingrese tipo de objeto")
    tipo = parseInt(tipo)
    switch (tipo) {
        case 1:acumulador = acumulador + 10000
        break;
        case 2:acumulador = acumulador + 5000
        break;
        case 3:acumulador = acumulador + 8000
        break;
        default: alert("Opcion no valida")
    }

    return acumulador
}
        function reservar () {
            let acumulador = 0;
            alert("selecciona para obtener su presupuesto")
            alert("1-30dias\n 2-20dias")
            let tipo = prompt("ingrese tipo de objeto")
            tipo = parseInt(tipo)

            switch (tipo)  {
                case 1:15000
                break;
                case  2:11000
                break;
                default: alert("Opcion no valida")
            }
            return acumulador
        }
        
        menuPrincipal
        
    
