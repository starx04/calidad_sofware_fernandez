function promedio_array (numeros){
    if (!Array.isInteger(numeros)||numeros.length<1)
        throw new TypeError('arreglo no valido');
    let total=0;
    for(let i=1 ; i <= numeros.length-1; i++) total +=numeros[i];
    return total/numeros.length; 
}
module.exports ={promedio_array};