//Imports
const { Triangle, Square, Circle } = require('../lib/shapes');

//Shape testing suite
describe('Square', () =>{
    describe('Set Color', () => {
        it('should pass if it fills the shape with blue', () => {
            const shape = new Square();
            shape.setColor('blue');
            expect(shape.render()).toEqual(`<rect width='200' height='200' fill='blue'/>`)
        })
    })
})

describe('Triangle', () =>{
    describe('Set Color', () => {
        it('should pass if it fills the shape with blue', () => {
            const shape = new Triangle();
            shape.setColor('blue');
            expect(shape.render()).toEqual(`<polygon points='150, 18 244, 182 56, 182' fill='blue' />`)
        })
    })
})


describe('Circle', () =>{
    describe('Set Color', () => {
        it('should pass if it fills the shape with blue', () => {
            const shape = new Circle();
            shape.setColor('blue');
            expect(shape.render()).toEqual(`<circle cx='150' cy='100' r='80' fill='blue'/>`)
        })
    })
})

