function sumar_par_array (numeros){
    if (!Array.isArray(numeros)||numeros.length==0)
    {
        throw new TypeError('arreglo no valido');
    }
    let par=0;
    for(let i=0 ; i <= numeros.length-1; i++){
        if(numeros[i]%2 == 0){
            par++};
    }
    return par; 
}
module.exports={ sumar_par_array };