
//Helpers

function esPar(numero){
    return (numero % 2 === 0);
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }
  

  //Calculadora Mediana

  function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.lenght)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1],[personaMitad2]);
        return mediana;

    }else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

// Mediana General
const salarioCol = colombia.map(
    function (persona){
        return persona.salary;
    }
);

const salarioColSorted = salarioCol.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);

const medianaGeneralCol = medianaSalarios(salarioColSorted);

//Mediana del top 10%
//const per10 = parseInt(salarioColSorted.length * 0.1);
//const spliceStar = salarioColSorted.length - per10;

const spliceStar = (salarioColSorted.length * 90) / 100;
const spliceCount = salarioColSorted.length;

const salariosTopCol10 = salarioColSorted.splice(
    spliceStar, 
    spliceCount,
    );

const medianaTop10Col = medianaSalarios(salariosTopCol10);

console.log(
    medianaGeneralCol,
    medianaTop10Col,
    );



    const numeros = [71,41,19,88,3,65];

    const acumularDobles = (acumulador, numero) => [...acumulador, numero * 2];
    const dobles = numeros.reduce(acumularDobles,[]);

