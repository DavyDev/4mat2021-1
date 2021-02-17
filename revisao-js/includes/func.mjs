export function somaVet(vet){
    let soma = 0

    for(let i in vet){
        soma += vet[i]
        return soma
    }
};

export function quadradoVet(vet){
    let res = []

    for(let n of vet){
        res.push(n ** 2)

    }
    return res
}