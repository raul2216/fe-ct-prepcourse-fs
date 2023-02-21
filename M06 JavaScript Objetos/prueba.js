/*var array = [97, 100, 190, 5, 7, 9]
var nuevo = 0;

array.forEach(element => {
    if (element > 18){
        nuevo = nuevo +
        console.log (nuevo)
    }
});*/


/*array = [1,1,1,1,1,]
for (let i = 0; i < array.length; i++) {
  if(array[0] !== array[0]){
    console.log ("no son iguales")
  }
  console.log("son iguales")
}*/


/*array = [1,12,4,4,12,]
var nuevoArray = array.map((num) => {
    num + 1
})
console.log(nuevoArray);*/
/*const nombres = ['Whinds', 'Freeway', 'Test', 'Maria'];

for(let i = 0; i < nombres.length; i = i + 1 ) {  
    console.log('[for]', nombres[i]);
}

const nombres1 = ['Whinds', 'Freeway', 'Test', 'Maria'];

nombres.forEach(function(nombre, i) {  
    console.log('[forEach]', nombre, i);
})
*/
/*let array = [100, 4, 56, 78, 200, 120, 7, 160, 148, 22]

let nuevoarray = []

array.forEach(element => {
    
    if(element > 100){
        nuevoarray.push(element)
        return nuevoarray
    }
  console.log(nuevoarray);
});
*/
/*let array = [100, 4, 56, 78, 200, 120, 7, 160, 148, 22]
let nuevoarray = []

for (let i = 0; i < array.length; i++) {
   if(array[i] > 100){
     nuevoarray.push(array[i])
   }
    console.log(nuevoarray);
}*/
/*let num = 50
let nuevoarr = []
let aumentados = 0
for (let i = 2; i < 21; i+=2) {



aumentados = num + i


    nuevoarr.push(aumentados)
    
}
console.log(nuevoarr)

for (let index = 0; index < 10; index++) {
   console.log(index)
    
} */
/*{let Arr = [tomate, manzana, fresa, pera] = [1,2,3,4]
console.log(Arr);
console.log(tomate, manzana, fresa, pera)
console.log(1,2,3,4)}
*/
// var nuevoarray = []
// var num = 50
// var suma = num

// for (var i = 0; i < 10; i++) {
//      suma = suma + 2;
//   if(suma === i)  break;
//    else {
//   nuevoarray.push(suma)
//   }
// }
// if(i < 10) {
//   console.log("Se interrumpió la ejecución");
//   } 
//   else{
//       console.log(nuevoarray)
     
//   }  
  
  // var array = [];
  // var numero = -4
  // var suma = numero;
  // for(var i= 0; i<10; i++) {
  //   suma = suma + 2;
  //   if(suma === i) break;
  //   else {
  //     array.push(suma);
  //   }
  // }
  // if(i < 10) {
  //   console.log( 'Se interrumpió la ejecución')
  // }
  // else {
  //     console.log(array) ;
  // }
  //   var num = -4
  //   var suma = num
  //  let nuevoarray = []
  //  for (var i = 0; i < 10; i++) {
  //    suma = suma +  2;
  //  if(suma=== i) break;
  //   else{
  //   nuevoarray.push(suma)
  //  }
  // }
  //  if(i < 10){ 
  //   console.log("se cago")
  //  } 
  //  else{
  //   console.log(nuevoarray)
  //  }
  // var objetoUsuario = {
  //   "email": "raulillosortiz22"
  // }

  // if(objetoUsuario.email) {  
  //  console.log(true)
  // } else {
  //   console.log(false)
  // }

  // console.log(objetoUsuario.email)
//   var nuevoamigo =5
// var objeto = {
//   amigos: [1,2,4,6,7,8,]
// }
// objeto.amigos.push(nuevoamigo)
// console.log(objeto.amigos)
// const users = [
//             { esPremium: false },
//             { esPremium: false },
//             { esPremium: false },
//             { esPremium: false },
//             { esPremium: false },
//          ];
//          const updatedUsers = [
//             { esPremium: true },
//             { esPremium: true },
//             { esPremium: true },
//             { esPremium: true },
//             { esPremium: true },
//          ];

//         for (let i = 0; i < users.length; i++) {
//           esPremium = true
//         }
//          console.log(users)

var objetoproducto ={
  precio: 80,
  descuento: 0.1
  

}

objetoproducto.preciofinal = function () {
   console.log (this.precio - (this.precio * this.descuento) )
}

console.log(objetoproducto.preciofinal())