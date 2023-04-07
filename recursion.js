function exponentReursive(base,exponent){
if (exponent===0) {return 1}
let total =(base *=exponentReursive(base, exponent-1))
return total
}
console.log(exponentReursive(9,4))