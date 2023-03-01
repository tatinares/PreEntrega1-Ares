class Verdura{
    constructor(producto,precio,preciototal){
        this.producto = producto;
        this.precio = precio;
        this.preciototal = 0}
    asignarPrecio(precio){
        this.preciototal = precio
    
    }}

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

let contador = 0
let carritoprecio = []
let carritoNombre = []




//Funciòn Principal.
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
         kg = parseInt(prompt('¿Cuantos kilos de tomate desea?')) 
         tomate.asignarPrecio(kg*tomate.precio)
         carrito.push(tomate)
         seguir()
         break;

     case 2:
         kg = parseInt(prompt('¿Cuantos kilos de aceitunas desea? ')  )
         aceitunas.asignarPrecio(kg*aceitunas.precio)
         carrito.push(aceitunas)
         seguir()
         break;

      case 3:
         kg = parseInt(prompt('¿Cuantos lechugas desea? ')
     )    
         lechuga.asignarPrecio(kg*lechuga.precio)
         carrito.push(lechuga)
         seguir()
         break;

     case 4:
         kg = parseInt(prompt(`¿Cuantos kilos de papa desea?`)
 )        
         papa.asignarPrecio(kg*papa.precio)
         carrito.push(papa)
         seguir()
         break;

     case 5:
         kg = parseInt(prompt(`¿Cuantos kilos de cebolla desea?`))
        
         cebolla.asignarPrecio(kg*cebolla.precio)
         carrito.push(cebolla)
         seguir()
         break;

     case 6:
         kg = parseInt(prompt(`¿Cuantos kilos de ajo desea?`)
  )      
         ajo.asignarPrecio(kg*ajo.precio)
         carrito.push(ajo)
         seguir()
         break;
     case 7:

         kg = parseInt(prompt(`¿Cuantos kilos de palta desea?`)
)         
         palta.asignarPrecio(kg*palta.precio)
         carrito.push(palta)
         seguir()
         break;        
     case 8:
         kg = parseInt(prompt(`¿Cuantos kilos de pimiento desea?`))
         
         pimiento.asignarPrecio(kg*pimiento.precio)
         carrito.push(pimiento)
         seguir()
         break;
 
     case 9:
         break    
     default:
         
         contadors()
         alert(`Ha escrito demasiadas opciones invalidas, porfavor recargue la pagina e intente nuevamente`)
         break;      
    }
 
 }

function seguir(){
        
    carritoNombre = []
    for (let i=0;i<carrito.length;i++){
        
        carritoNombre.push(carrito[i].producto)
       
    }

    
    let decision = (prompt(
        `Desea Seguir comprando? \n 
        lleva: 
${carritoNombre.join(('\n'))}
         
         El total es de : $${precioTotali()}
         1- ✅ SI      2- ❌ NO    3- ELIMINAR PRODUCTO`))

    if (decision == 1){
        simulador()

    }
    
    else if(decision == 2){
        if(precioTotali()>1500){
            //Descuentos por compras mayor a $1500
            alert(`Tenemos un descuento del 13% para usted!
            El total es de :$${precioTotali()-(precioTotali()*13/100)}`)
        }
   
        else{
        alert(`Muchas Gracias por su compra! \n
        El total es de $${precioTotali()}`) }
        
    }
    else if(decision == 3){
        eliminarProducto()
        seguir()
    }    
    else{
        alert('Porfavor elija una de las opciones disponibles.')
        seguir()
    }
}

function eliminarProducto(){
    //Elimina un producto del carrito de compras

    let eliminareleccc = prompt(
        `Escriba el nombre del producto que desea eliminar:
        ${carritoNombre.join('\n')}`)
        const finderd = (element) => element  === eliminareleccc
        let indd = carritoNombre.findIndex(finderd)
        console.log(indd)
        carritoNombre.splice(indd,1)
        carrito.splice(indd,1)

       console.log(carritoNombre.some(finderd))    

    
}

//Devuelve el precio total de la compra
function precioTotali(){
    
    let precioTotal = 0;
    for(i=0;i<carrito.length;i++){
        precioTotal += carrito[i].preciototal

    }
    return precioTotal;
}



function contadors(){
    //cuenta las veces que se ingreso un caracter distino a las opciones y si se ingreso mas de 3 veces termina el programa
  
      while(contador<3){
          alert(`Porfavor escriba una de las opciones disponibles \n Intentos restantes: ${3-contador}`)
          contador++;
          simulador()
      }
}  
simulador()
//Redirecciona  la pagina
window.location.href = "index.html";

//for (inicialización; condición; actualización) { 
   	//sentencias a ejecutar en cada iteración 
    //filter,find,map,some,etc.

