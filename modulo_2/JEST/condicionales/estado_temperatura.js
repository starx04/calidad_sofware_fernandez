function estado_temperatura(temperatura){
    let estado;
    if (!Number.isInteger(temperatura)||temperatura<15||temperatura>=30) {
        throw new TypeError('temperatura invalida ');
        estado='Templado';       
    }if (temperatura>=60||temperatura<-50) {
          throw new TypeError('temperatura invalida ');
    }
    if(temperatura>30){
        estado='Calor';
    }else if(temperatura<15){         
        estado='Frio'
    }
    return estado;

} 
module.exports = estado_temperatura;