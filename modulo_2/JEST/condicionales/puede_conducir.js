function puedeConducir(edad){
    if (!Number.isInteger(edad)) {
        throw new TypeError('edad invalida');
    }
    return edad >= 18 ?'Si':'No';

} 
module.exports = puedeConducir;