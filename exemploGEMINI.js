let nome = "Ana"; // String
let idade = 28; // Number
let estaAprovado = true; // Boolean
let carro = null; // Null
let hobbies; // Undefined

console.log(typeof nome); // "string"
console.log(typeof idade); // "number"
console.log(typeof estaAprovado); // "boolean"
console.log(typeof carro); // "object" (null é um objeto especial)
console.log(typeof hobbies); // "undefined"

let pessoa = {
    nome: "Pedro",
    idade: 30
};

console.log(typeof pessoa); // "object"
console.log(typeof pessoa.nome); // "string"

//Outra proposta para os dados

const dinossauros = [
    {
        nome: "Tiranossauro Rex",
        nome_cientifico: "Tyrannosaurus rex",
        periodo: "Cretáceo Superior",
        local: "América do Norte",
        alimentacao: "Carnívoro"
    },
    {
        nome: "Velociraptor",
        nome_cientifico: "Velociraptor mongoliensis",
        periodo: "Cretáceo Superior",
        local: "Ásia",
        alimentacao: "Carnívoro"
    },
    {
        nome: "Braquiossauro",
        nome_cientifico: "Brachiosaurus altithorax",
        periodo: "Jurássico Superior",
        local: "América do Norte",
        alimentacao: "Herbívoro"
    },
    {
        nome: "Tricerátops",
        nome_cientifico: "Triceratops horridus",
        periodo: "Cretáceo Superior",
        local: "América do Norte",
        alimentacao: "Herbívoro"
    },
    {
        nome: "Indominus Rex",
        nome_cientifico: "Indominus rex",
        periodo: "Cretáceo Superior (híbrido)",
        local: "Ilha Nublar (criado em laboratório)",
        alimentacao: "Carnívoro (onívoro)"
    }
];

console.log(dinossauros[0].nome); // Saída: Tiranossauro Rex
console.log(dinossauros[2].alimentacao); // Saída: Herbívoro

// Iterando sobre todos os dinossauros:
for (let dinossauro of dinossauros) {
    console.log(dinossauro.nome + " era um " + dinossauro.alimentacao);
}