//Imports
const { Triangle, Square, Circle } = require('../lib/shapes');
const { describe, expect, toEqual } = require('jest')

//Shape testing suite
describe('Square', () => {
    describe('Color Set', () => {
        it('should set the color equal to blue', () => {
            const shape = new Square();
            shape.setColor('blue');
            expect(shape.render()).toEqual(`<rect width="300" height="200" fill='blue'></rect>`)
        }
    });
})