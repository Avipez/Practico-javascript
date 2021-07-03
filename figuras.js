//Código del cuadrado

console.group("Cuadrados");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado  + "cm")

const perimetroCuadrado = ladoCuadrado * 4;

console.log("El perimetro del cuadrado es: " + perimetroCuadrado  + "cm")

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado  + "cm2")

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

const perimetroTriangulo = lado1Triangulo + lado2Triangulo + baseTriangulo

console.log("El perimetro del triangulo es de: " + perimetroTriangulo + "cm")

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2

console.log("El area del triangulo es de: " + areaTriangulo + "cm2")

console.groupEnd();

//Código del círculo

console.group("Círculo");

const radio = 4;
console.log("El radio del círculo es: " + radio + "cm");

const diametro = radio * 2;
console.log("El diametro del círculo es: " + diametro + "cm");

const PI = Math.PI;
console.log("PI es: " + PI);

const perimetroCirculo = diametro * PI;
console.log("El perimetro del círculo es: " + perimetroCirculo + "cm");

const areaCirculo = PI * (radio * radio);
console.log("El area del círculo es: " + areaCirculo + "cm2");