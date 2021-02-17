
let quadrado = (x) => {return x ** 2 } 

console.log(quadrado(7))


let quadrado2 = (x, b) => {return x ** b }

console.log(quadrado2(2, 2))

function megasena() {
    return Math.floor(Math.random() * 60 + 1)
}

console.log(megasena())

let megasena_2 = () => {return Math.floor(Math.random() * 60 + 1)}

console.log(megasena_2())


function somaTudo(...nums){
    let soma = 0

    for(let n of nums) {
        soma += n
    }

    return soma

}

let somaTudo_2 = (...nums) => {
    let soma = 0

    for(let n of nums) {
        soma += n
    }

    return soma
}