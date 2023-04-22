//Import text
const Text = require('../lib/text')

describe('Text', () =>{
    describe('Set Text', () => {
        it('should pass if it fills the shape with blue', () => {
            const shape = new Circle();
            shape.setColor('blue');
            expect(shape.render()).toEqual(`<circle cx='150' cy='100' r='80' fill='blue'/>`)
        })
    })
})