//Declaracion de variables

/*const aceitunas = 500;
const lechuga = 100;
const papa = 240;
const cebolla = 300;
const palta = 1000;
const ajo = 130;
const pimiento = 460;*/

const tomate = new Verdura('tomate',310)
const lechuga = new Verdura('lechuga',100)
const cebolla = new Verdura('cebolla',300)
const palta = new Verdura('palta',1000)
const ajo = new Verdura('ajo',130)
const pimiento = new Verdura('pimiento',460)
const aceitunas = new Verdura('aceitunas', 450)
const papa = new Verdura('papa', 450)

let carrito = []
let kg = 0
let total = 0
let contador = 0

class Producto{
    Verdura(producto, precio, kilos){
        this.producto = producto
        this.precio = precio
        this.kilos = kilos}}


function contarCarrito(){
    carrito.push()

}




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
         lleva:${carrito}
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
            1- 🍅 Tomate $${tomate.precio} /kg
            2- 🫒 Aceitunas $${aceitunas.precio} /kg
            3- 🥬 Lechuga $${lechuga.precio} /unidad
            4- 🥔 Papa $${papa.precio} /kg
            5- 🧅 Cebolla $${cebolla.precio} /kg
            6- 🧄 Ajo $${ajo.precio} /unidad
            7- 🥑 Palta $${palta.precio} /kg
            8- 🫑 Pimiento $${pimiento.precio} /kg
            9- 💨 Salir`)
    )
   switch (eleccion){
    case 1:
        kg = prompt('¿Cuantos kilos de tomate desea?', tomate)
        total = total+kg*tomate.precio;
        carrito.push(tomate.producto)

        seguir()
        break;
    case 2:
        kg = prompt('¿Cuantos kilos de aceitunas desea? ')
        total = total+kg*aceitunas.precio
        seguir()
        break;
     case 3:
        kg = prompt('¿Cuantos lechugas desea? ')
        total = total+kg*lechuga.precio
        seguir()
        break;
    case 4:
        kg = prompt(`¿Cuantos kilos de papa desea?`)
        total = total+kg*papa.precio
        seguir()
        break;
    case 5:
        kg = prompt(`¿Cuantos kilos de cebolla desea?`)
        total = total+kg*cebolla.precio
        seguir()
        break;
    case 6:
        kg = prompt(`¿Cuantos kilos de ajo desea?`)
        total = total+kg*ajo.precio
        seguir()
        break;
    case 7:
        kg = prompt(`¿Cuantos kilos de palta desea?`)
        total = total+kg*palta.precio
        seguir()
        break;        
    case 8:
        kg = prompt(`¿Cuantos kilos de pimiento desea?`)
        total = total+kg*pimiento.precio
        seguir()
        break;

    case 9:
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