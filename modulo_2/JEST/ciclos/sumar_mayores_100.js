function sumar_mayores (numeros){
    if (!Array.isArray(numeros)||numeros.length==0)
    {
        throw new TypeError('arreglo no valido');
    }
    let mayor=0;
    for(let i=0 ; i <= numeros.length-1; i++){
        if(numeros[i] >= 100){
            mayor++};
    }
    return mayor; 
}
module.exports={ sumar_mayores };