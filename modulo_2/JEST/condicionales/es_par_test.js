const {esPar}= require('./es_par');

describe('esPar', () => {
    test('happy path: 8 es par',() => {
        expect(esPar(8)).toBe(true);
    })
    test('happy path: 7 es impar',() => {
        expect(esPar(7)).toBe(false);
    })
    test('Sad path: n debe ser entero es par',() => {
        expect(esPar(8.5)).toThrow('n debe de ser un entero');
        expect(esPar(-3)).toThrow('n debe de ser un numero entero positivo');
    })
})