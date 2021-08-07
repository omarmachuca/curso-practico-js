/*const lista1 = [
    1,
    2,
    3,
    1,
    1,
    3,
    2,
    3,
    3,
];*/

function encuentraModa(listaModa){

const lista1Count = {}

listaModa.map(
    function (elemento){
        if (lista1Count[elemento]){
            lista1Count[elemento] += 1;
        }else{
        lista1Count[elemento] = 1;
        }
    }

);

const lista1Array = Object.entries(lista1Count).sort(
   function (valorAcumulado, nuevoValor) {
       return valorAcumulado[1] - nuevoValor[1];
   }
);

const moda = lista1Array[lista1Array.length -1];

return moda;

};


