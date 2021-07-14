const lista1 = [100,200,300,400,500]
const lista2 = [50,500,20,360]
const lista3 = [1,2,6,4,2,3,1,1,5,2,4,6,3,2,2,1,2]

function promedio(lista) {
    /* let sumaLista = 0;
    for(let i=0; i<lista.length; i++){
        sumaLista += lista[i];
    } */

    const sumaLista = lista.reduce(
        (valorAcumulado = 0, nuevoElemento) => {
            return valorAcumulado + nuevoElemento
        }
    )

    let promedio = sumaLista/lista.length
    return promedio;
}

//Mediana

function esPar(numero){
    if(numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function mediana(lista) {
    const mitadLista = parseInt(lista.length/2);
    const listaO = lista.sort((a, b) => {return a - b })
    let mediana;

    if (esPar(listaO.length)) {
        const mediana1 = listaO[mitadLista];
        const mediana2 = listaO[mitadLista - 1];
        mediana = promedio([mediana1, mediana2]);
    } else {
        mediana = listaO[mitadLista];
    }

    return mediana

}

//moda

function moda(lista) {
    const conteoLista = {};

    lista.map((elemento) => {
        if (conteoLista[elemento]) {
            conteoLista[elemento] += 1;
        } else {
            conteoLista[elemento] = 1;
        }
        conteoLista[elemento]
    });

    const arregloNuevo = Object.entries(conteoLista).sort((a,b) => { return a[1] - b[1] });

    return arregloNuevo[arregloNuevo.length - 1]
}

//salario

const colombia = [];

colombia.push({
  name: "Camila",
  salary: 500,
});
colombia.push({
  name: "Nath",
  salary: 1500,
});
colombia.push({
  name: "Luisa",
  salary: 1800,
});
colombia.push({
  name: "Laura",
  salary: 1000,
});
colombia.push({
  name: "Daniela",
  salary: 2200,
});
colombia.push({
  name: "Esperancita",
  salary: 200,
});
colombia.push({
  name: "Carla",
  salary: 500,
});
colombia.push({
  name: "Antonieta",
  salary: 1500,
});
colombia.push({
  name: "Alicia",
  salary: 1300,
});
colombia.push({
  name: "Ana",
  salary: 2400,
});
colombia.push({
  name: "Julia",
  salary: 3400,
});
colombia.push({
  name: "Rosa",
  salary: 400,
});
colombia.push({
  name: "Angélica",
  salary: 400,
});
colombia.push({
  name: "Tatiana",
  salary: 400,
});
colombia.push({
  name: "Lorena",
  salary: 600,
});
colombia.push({
  name: "Carolina",
  salary: 1600,
});
colombia.push({
  name: "Fernanda",
  salary: 2600,
});
colombia.push({
  name: "Nora",
  salary: 1000,
});
colombia.push({
  name: "Gisselle",
  salary: 2000,
});
colombia.push({
  name: "Bill Gates",
  salary: 100000000,
});

//Mediana general

const salariosCol = colombia.map(
    (persona) => persona.salary
);

const salariosColOrdenados = salariosCol.sort(
    (salarioA, salarioB) => {
        return salarioA - salarioB;
    }
)

//Helper (utils)

function esPar2(numero) {
    return (numero % 2 === 0);
}

//calculadora de medianas

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length/2);
    if (esPar2(lista.length)) {
        const personaMitad1 = lista[mitad];
        const personaMitad2 = lista[mitad-1];
        const mediana = promedio([personaMitad1, personaMitad2])
        return mediana;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
};


const medianaGeneralCol = medianaSalarios(salariosColOrdenados);

//mediana del top 10

const spliceStart = (salariosColOrdenados.length *90 )/100;
const spliceCount = salariosColOrdenados.length - spliceStart;

const salariosTop10 = salariosColOrdenados.splice(spliceStart, spliceCount);

const medianaTop10Col = medianaSalarios(salariosTop10);

console.log({medianaGeneralCol, medianaTop10Col});





