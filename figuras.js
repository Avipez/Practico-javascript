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

function perimetroTriangulo (ladoTriangulo) {
     return ladoTriangulo*3;
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

    const nodoResp = document.getElementById("respuestaPerimetroCuadrado");

    const nodoTexto = document.createTextNode(perimetro);

    nodoResp.textContent = ""

    nodoResp.append(nodoTexto);

}

function calcularAreaCuadrado() {
    const input = document.getElementById("cuadradoArea");
    const valor = input.value;

    const area = areaCuadrado(valor)

    const nodoResp = document.getElementById("respuestaAreaCuadrado");

    const nodoTexto = document.createTextNode(area);

    nodoResp.textContent = ""

    nodoResp.append(nodoTexto);
}

function calcularPerimetroTrianguloE() {
    const input = document.getElementById("lado");
    const valor = input.value;

    const perimetro = perimetroTriangulo(valor)

    const nodoResp = document.getElementById("perimetroTriangulo");

    const nodoTexto = document.createTextNode(perimetro);

    nodoResp.textContent = ""

    nodoResp.append(nodoTexto);
}

function calcularAreaTriangulo() {
    const input = document.getElementById("ladoTriangulo");
    const valor = input.value;
    
    const inputAltura = document.getElementById("alturaTriangulo");
    const valorAltura = inputAltura.value;

    const area = areaTriangulo(valor, valorAltura);

    const nodoResp = document.getElementById("areaTriangulo");

    const nodoTexto = document.createTextNode(area);

    nodoResp.textContent = ""

    nodoResp.append(nodoTexto);
}

function calcularCircunferencia() {
    const input = document.getElementById("radio");
    const valor = input.value;

    const circunferencia = perimetroCirculo(valor)

    const nodoResp = document.getElementById("circunferencia");

    const nodoTexto = document.createTextNode(circunferencia.toFixed(2));

    nodoResp.textContent = ""

    nodoResp.append(nodoTexto);
}

function calcularArea() {
    const input = document.getElementById("radioCirculo");
    const valor = input.value;

    const area = areaCirculo(valor)

    const nodoResp = document.getElementById("area");

    const nodoTexto = document.createTextNode(area.toFixed(2));

    nodoResp.textContent = ""

    nodoResp.append(nodoTexto);
}