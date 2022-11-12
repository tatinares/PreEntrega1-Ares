//Declaracion de variables
const tomate = 310;
const aceitunas = 500;
const lechuga = 100;
const papa = 240;
const cebolla = 300;
const palta = 1000;
const ajo = 130;
const pimiento = 460;
let kg = 0
let total = 0
let contador = 0


function contadors(){
  //cuenta las veces que se ingreso un caracter distino a las opciones y si se ingreso mas de 3 veces termina el programa

    while(contador<3){
        alert(`Porfavor escriba una de las opciones disponibles \n Intentos restantes: ${3-contador}`)
        contador++;
        simulador()
    }
    
    

    
}
//Pregunta si quiere seguir comprando en caso contrario , da el total de la compra y termina el programa
function seguir(){
    let decision = (prompt(
        `Desea Seguir comprando? \n 
         El total es de : $${total}
         1- ✅ SI              2- ❌ NO`))

    if (decision == 1){
        simulador()

    }
    
    else if(decision == 2){
        if(total>1500){
            //Descuentos por compras mayor a $1500
            alert(`Tenemos un descuento del 13% para usted!
            El total es de :$${total-(total*13/100)}`)
        }
        else{
        alert(`Muchas Gracias por su compra! \n
        El total es de $${total}`) }
        
    }
    else{
        alert('Porfavor elija una de las opciones disponibles.')
        seguir()
    }
}
//Funciòn Principal
function simulador(){
    
   let eleccion = parseInt(
        prompt(`Qué desea comprar?:
            1- 🍅 Tomate $${tomate} /kg
            2- 🫒 Aceitunas $${aceitunas} /kg
            3- 🥬 Lechuga $${lechuga} /unidad
            4- 🥔 Papa $${papa} /kg
            5- 🧅 Cebolla $${cebolla} /kg
            6- 🧄 Ajo $${ajo} /unidad
            7- 🥑 Palta $${palta} /kg
            8- 🫑 Pimiento $${pimiento} /kg
            10- 💨 Salir`)
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
        seguir()
        break;
     case 3:
        kg = prompt('¿Cuantos lechugas desea? ')
        total = total+kg*lechuga
        seguir()
        break;
    case 4:
        kg = prompt(`¿Cuantos kilos de papa desea?`)
        total = total+kg*papa
        seguir()
        break;
    case 5:
        kg = prompt(`¿Cuantos kilos de cebolla desea?`)
        total = total+kg*cebolla
        seguir()
        break;
    case 6:
        kg = prompt(`¿Cuantos kilos de ajo desea?`)
        total = total+kg*ajo
        seguir()
        break;
    case 7:
        kg = prompt(`¿Cuantos kilos de palta desea?`)
        total = total+kg*palta
        seguir()
        break;        
    case 8:
        kg = prompt(`¿Cuantos kilos de pimiento desea?`)
        total = total+kg*pimiento
        seguir()
        break;

    case 10:
        break    
    default:
        
        contadors()
        alert(`ha escrito demasiadas opciones invalidas, porfavor recargue la pagina e intente nuevamente`)
        break;      
   }

}
alert(`Bienvenidos a verduleria San José!`)
simulador()
//Redirecciona  la pagina
window.location.href = "index.html";