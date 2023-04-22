//Imports
const Shapes = require('../lib/shapes');

describe('SVG', () => { 
    describe('Character Length', () => {
        it('should fail if the length is greater than three', ()=> {
            const text = 'TEST';
            const Shape = () => new Shape(text)
            const err = new Error('Input is greater than three characters');
            expect(svg).toThrowError(err);
        });
    });
 });