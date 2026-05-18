function esPar(n) {
    if (!Number.isInteger(n)) {
        throw new TypeError('n debe de ser un entero');
    }
    return n % 2 === 0;
}    
module.exports = esPar;