const {sumar_mayores} = require('./sumar_mayores');

describe('SUMA PAR',()=>{
    test('Happy path: n=[5,5,5]=>5',()=>{
        expect(sumar_mayores([5,5,5])).toBe(0);
    })
    test('Happy path: n=[6,6,6]=>6',()=>{
        expect(sumar_mayores([6,6,6])).toBe(3);
    })
    test('Sad path: n invalido',()=>{
        expect(()=>sumar_mayores(0).toThrow('array invalido'));
        expect(()=>sumar_mayores([]).toThrow('array invalido'));
    })
})