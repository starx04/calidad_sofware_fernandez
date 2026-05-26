const {promedio_array} = require('./arreglo_elemento');

describe('Suma Hasta',()=>{
    test('Happy path: n=[5,5,5]=>5',()=>{
        expect(promedio_array([5,5,5])).tobe(5);
    })
    test('Happy path: n=[6,6,6]=>6',()=>{
        expect(promedio_array([6,6,6])).tobe(6);
    })
    test('Sad path: n invalido',()=>{
        expect(()=>promedio_array(0).toThrow('array invalido'));
        expect(()=>promedio_array([]).toThrow('array invalido'));
    })
})