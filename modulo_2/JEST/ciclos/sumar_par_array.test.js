const {sumar_par_array} = require('./sumar_par_array');

describe('SUMA PAR',()=>{
    test('Happy path: n=[5,5,5]=>5',()=>{
        expect(sumar_par_array([5,5,5])).toBe(0);
    })
    test('Happy path: n=[6,6,6]=>6',()=>{
        expect(sumar_par_array([6,6,6])).toBe(3);
    })
    test('Sad path: n invalido',()=>{
        expect(()=>sumar_par_array(0).toThrow('array invalido'));
        expect(()=>sumar_par_array([]).toThrow('array invalido'));
    })
})