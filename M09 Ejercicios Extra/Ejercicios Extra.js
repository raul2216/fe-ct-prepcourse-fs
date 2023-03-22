/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let arr = []
   let miniarr = []
   for (const key in objeto) {
         arr.push(key,objeto[key])  
        
       }
       miniarr.push(arr.slice(0,2))
       miniarr.push(arr.slice(2))
 return miniarr  
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   
   var objet = {}
   let prueba = string.split("").sort()
   
   for (const element of prueba){
      
   
      if(objet.hasOwnProperty(element)){ objet[element] += 1
      } else {
         objet[element] = 1
      }}
   ;
   return objet
   

}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var arra = []
   var arra2 = [] 
      for (let i = 0; i < string.length; i++) {
     if(string[i] == string[i].toUpperCase()){
         arra = arra + string[i]}  
      else{arra2 =  arra2 + string[i]}
        } 
        string = arra.concat(arra2)
          return (string)
        }
       // for (var i = string.length - 1; i >= 0; i--) {
      //   arra.unshift(string[i]) 
      //   continue;
      //   for (let i = 0; i < string.length; i++) {
      //      if(string[i] == string[i].toLowerCase()){
      //         arra.push(string[i]) 
      //      }
      //   }

//    return arra.join("")
// }

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
//    let arra = frase.split(" ")
// for (let i = 0; i < arra.length; i++) {
//    arra[i] = arra[i].split("").reverse().join("")
// } return arra.join(" ")

let arr = frase.split(" ").map(e =>  e.split("").reverse().join("")).join(" ");
 return arr
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let tostr = numero.toString().split("").reverse().join("")
   if(numero.toString() === tostr)  return 'Es capicua'
    else return 'No es capicua'

}


function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let arr = string.split("")
   let arr2= []
for (let i = 0; i < arr.length; i++) {
   if(arr[i] === "a" || arr[i] === "b" || arr[i] === "c" ) continue
     arr2.push(arr[i])
}
   return arr2.join("")
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
    let ordenado = arrayOfStrings.sort((a, b) => a.length - b.length)
   return ordenado
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let array3 = []
  for (let i = 0; i < array1.length; i++) {
   for (let j = 0; j < array2.length; j++) {
      if(array1[i] !== array2[j]) continue;
      array3.push(array1[i])
      
   }
  }
  return array3
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
