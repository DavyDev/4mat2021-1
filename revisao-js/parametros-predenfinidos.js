function calculaArea (base, altura, forma){
switch(forma){
    case "Q" : 
        return base * altura
        break
    case "T" : 
        return (base * altura) / 2
        break    
    case "E" : 
        return (base / 2) * (altura / 2) * Math.PI
     
}

}

console.log(calculaArea(2, 3, "Q"))
console.log(calculaArea(2, 3, "T"))
console.log(calculaArea(2, 3, "E"))