//Imports
const { Triangle, Square, Circle } = require('../lib/shapes');

//Shape testing suite
describe('Square', () =>{
    describe('Set Color', () => {
        it('should pass if it fills the shape with blue', () => {
            const shape = new Square();
            shape.setColor('blue');
            expect(shape.render()).toEqual(`<rect width='300' height='200' fill='blue'/>`)
        })
    })

})