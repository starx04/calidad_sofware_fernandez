const{puedeConducir} = require('./puede_conducir');

describe('puedeConducir', () => {
    test('happy path: 20 puede conducir', () => {
        expect(puedeConducir(20)).toBe('Si');
    });

    test('happy path: 17 no puede conducir', () => {
        expect(puedeConducir(17)).toBe('No');
    });

    test('sad path: edad invalida', () => {
        expect(() => puedeConducir(20.5)).toThrow('edad invalida');
        expect(() => puedeConducir(-5)).toThrow('edad invalida');
    });
});