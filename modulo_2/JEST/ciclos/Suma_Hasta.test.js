const {sumaHasta} = require('./sumaHasta');

describe('Suma Hasta',()=>{
    test('Happy path: n=5=>15',()=>{
        expect(sumaHasta(5)).tobe(15);
    })
    test('Happy path: n=5=>15',()=>{
        expect(sumaHasta(1)).tobe(1);
    })
    test('Sad path: n invalido',()=>{
        expect(()=>sumaHasta(0).toThrow('n debe de ser entero >=1'));
        expect(()=>sumaHasta(2.6).toThrow('n debe de ser entero >=1'));
        expect(()=>sumaHasta('10').toThrow('n debe de ser entero >=1'));
    })
})