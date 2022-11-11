const iva = 21/100;
let tomate = 100;
let aceitunas = 200;
let lechuga = 100;
let papa = 100;
let kg = 0
let total = 0
function seguir(){
    let decision = (prompt(
        `Desea Seguir comprando? \n 
         El total es de : $${total}
         1-si              2-no`))

    if (decision == 1){
        simulador()

    }
    else if(decision == 2){
        alert(`Muchas Gracias por su compra! \n
        El total es de $${total}`) 
        console.log(total)
    }
    else{
        alert('Porfavor elija una de las opciones disponibles.')
        seguir()
    }
}

function simulador(){
   let eleccion = parseInt(
        prompt(`que quieres comprar?:\n \
            1- tomate $${tomate*iva} /kg \n \
            2- aceitunas $${aceitunas*iva} /kg\n \
            3- lechuga $${lechuga*iva} /unidad)
            4- lechuga $${papa*iva} /unidad`)
    )
   switch (eleccion){
    case 1:
        kg = prompt('¿Cuantos kilos de tomate desea?', tomate)
        total = total+kg*tomate;

        seguir()
        break;
    case 2:
        kg = prompt('¿Cuantos kilos de aceitunas desea? ')
        total = total+kg*aceitunas
        break;
     case 3:
        kg = prompt('¿Cuantos lechugas desea? ')
        total = total+kg*lechuga
        break;
    case 4:
        kg = prompt(`¿Cuantos kilos de papa desea?`)
        total = total+kg*papa
        break;

    default:
        alert('Porfavor escriba una de las opciones disponibles')
        simulador()
        break;

        
        


   }

}
simulador()