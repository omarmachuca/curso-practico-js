
//Codigo Cuadrado
console.group("Cuadrado");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadro miden: " + ladoCuadrado + "cm.");
//console.log("El perimetro del cuadro es: " + perimetroCuadrado + "cm.");
//console.log("El area del cuadro es: " + areaCuadrado + "cm2.");

/*
function perimetroCuadrado(lado){
    return lado * 4;
} */

const perimetroCuadrado = (lado) => lado *4;

perimetroCuadrado(12);

function areaCuadrado(lado){
    return lado * lado;
}


console.groupEnd();



/*
//Codigo Triangulo
console.group("Triangulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm, " 
+ ladoTriangulo2 + "cm, " 
+ baseTriangulo + "cm.");

console.log("El Altura del triangulo es: " + alturaTriangulo + "cm.");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es: " + perimetroTriangulo + " cm.");


const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo es: " + areaTriangulo + "cm2.");

console.groupEnd();
*/

const PI = Math.PI;

function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base,altura){
    return (base * altura) / 2;
}



function diametroCirculo(radio){
    return radio * 2;
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro* PI;
}

function areaCirculo(radio){
    return (radio * radio) * PI;
}


/*



//Codigo del Circulo

console.group("Circulo");

//Radio
const radioCirculo = 4;
console.log("El Radio del circulo es: " + radioCirculo + "cm.");

// Diámetro
const diametroCirculo = radioCirculo * 2;
console.log("El Diámetro del circulo es: " + diametroCirculo + "cm.");

//PI

console.log("El Valor de PI es: " + PI);

//Circunferencia
const circuferenciaCirculo = diametroCirculo * PI;
console.log("La Circunferencia del circulo es: " + circuferenciaCirculo + "cm.");

//Area
const areaCirculo = (radioCirculo * radioCirculo) * 2;
console.log("El Área del circulo es: " + areaCirculo + "cm2.");


console.groupEnd();

*/

function calcularPerimetroCuadrado(){
    const lado = document.getElementById("InputCuadrado").value;
    alert("El Perímetro del cuadrado es:" + lado * 4);
}

function calcularAreaCuadrado(){
    const lado = document.getElementById("InputCuadrado").value;
    alert("El Area del cuadrado es:" + lado * lado);
}








function calcularPerimetroTriangulo(){
    const lado1 = Number(document.getElementById("InputLado1Triangulo").value);
    const lado2 = Number(document.getElementById("InputLado2Triangulo").value);
    const base = Number(document.getElementById("InputBaseTriangulo").value);

    const perimetro =  perimetroTriangulo(lado1,lado2,base);
    //alert("El Perímetro del Triangulo es: " + perimetro);

    resultadoTriangulo = document.getElementById("resultadoTriangulo");
    resultadoTriangulo.innerHTML = "<p>El Perímetro del Triangulo es: " + perimetro + "</p>";
}








function calcularAreaTriangulo(){
    const lado = document.getElementById("InputLado1Triangulo").value;
    alert("El Area del cuadrado es:" + lado * lado);
}

