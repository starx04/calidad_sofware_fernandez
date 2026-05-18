const{esatdo_temperatura} = require('./esatdo_temperatura');

describe('estado_temperatura', () => {
    test('happy path: 35 calor', () => {
        expect(estado_temperatura(35)).toBe('Calor');
    });

    test('happy path: 10 frio', () => {
        expect(estado_temperatura(10)).toBe('Frio');
    });

    test('happy path: 25 templado', () => {
        expect(estado_temperatura(25)).toBe('Templado');
    });

    test('sad path: temperatura invalida', () => {
        expect(() => estado_temperatura(20.5)).toThrow('temperatura invalida');
        expect(() => estado_temperatura(-5)).toThrow('temperatura invalida');
        expect(() => estado_temperatura()).toThrow('temperatura invalida');
        
    });
});