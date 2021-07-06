//Código del cuadrado

console.group("Cuadrados");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado  + "cm")

function perimetroCuadrado(lado) {
    return lado * 4;
} 

/* console.log("El perimetro del cuadrado es: " + perimetroCuadrado  + "cm") */

function areaCuadrado(ladoCuadrado) {
    return ladoCuadrado * ladoCuadrado;
}

/* console.log("El area del cuadrado es: " + areaCuadrado  + "cm2") */

console.groupEnd();

//Codigo del triangulo

console.group("triangulos")

const lado1Triangulo = 6;

const lado2Triangulo = 6;

const baseTriangulo = 4;

const alturaTriangulo = 5.5;

console.log(
    "Los lados del triangulo miden: "
    + lado1Triangulo
    + "cm "
    + lado2Triangulo
    + "cm y "
    + baseTriangulo
    + "cm"
);

console.log("La altura del triangulo es de: " + alturaTriangulo + "cm")

function perimetroTriangulo (lado1Triangulo, lado2Triangulo, baseTriangulo) {
     const suma = (lado1Triangulo + lado2Triangulo + baseTriangulo)
     return suma
}

console.log("El perimetro del triangulo es de: " + perimetroTriangulo + "cm")

function areaTriangulo(baseTriangulo, alturaTriangulo){
    return (baseTriangulo * alturaTriangulo)/2
}

console.log("El area del triangulo es de: " + areaTriangulo + "cm2")

console.groupEnd();

//Código del círculo

const PI = Math.PI;
console.log("PI es: " + PI);

console.group("Círculo");

const radio = 4;
console.log("El radio del círculo es: " + radio + "cm");

function diametroCirculo (radio) {
    return radio * 2;
}

console.log("El diametro del círculo es: " + diametro + "cm");


function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
} 

console.log("El perimetro del círculo es: " + perimetroCirculo + "cm");

function areaCirculo(radio) {
    return (radio * radio) * PI;
} 

console.log("El area del círculo es: " + areaCirculo + "cm2");

//Interaccion con HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("ladoCuadrado");
    const valor = input.value;

    const perimetro = perimetroCuadrado(valor)

    alert(perimetro)
}

function calcularAreaCuadrado() {
    const input = document.getElementById("ladoCuadrado");
    const valor = input.value;

    const area = areaCuadrado(valor)

    alert(area)
}

function calcularPerimetroTrianguloE() {
    const input = document.getElementById("ladoTriangulo");
    const valor = input.value;
    console.log(typeof(valor))

    const perimetro = perimetroTriangulo(valor, valor, valor)

    alert(perimetro)
}

function calcularAreaTriangulo() {
    const input = document.getElementById("ladoTriangulo");
    const valor = input.value;
    console.log(typeof(valor))

    const inputAltura = document.getElementById("alturaTriangulo");
    const valorAltura = inputAltura.value;

    const area = areaTriangulo(valor, valorAltura);

    alert(area);
}

function calcularCircunferencia() {
    const input = document.getElementById("radioCirculo");
    const valor = input.value;

    const circunferencia = perimetroCirculo(valor)

    alert(circunferencia);
}

function calcularArea() {
    const input = document.getElementById("radioCirculo");
    const valor = input.value;

    const area = areaCirculo(valor)

    alert(area);
}