const{aprobacion_nota} = require('./aprobacion_nota');

describe('aprobacion_notas', () => {
    test('happy path: 8 aprobada', () => {
        expect(aprobacion_notas(8)).toBe('Aprobado');
    });

    test('happy path: 3 no aprobada', () => {
        expect(aprobacion_notas(3)).toBe('Supletorio');

    });
    test ('happy path: 5 no aprobada', () => {
        expect(aprobacion_notas(5)).toBe('Reprobado');
    });

    test('sad path: nota invalida', () => {
        expect(() => aprobacion_notas(20.5)).toThrow('nota invalida');
        expect(() => aprobacion_notas(-5)).toThrow('nota invalida');
    });
});