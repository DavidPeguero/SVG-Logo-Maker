//Import validateInputs
const {validateColor, validateText} = require('../lib/validateInputs')

describe('Input Validation', () => {
    describe('Validate Color ERROR', () => {
        it('should pass if the correct color erroris thrown.', () => {
            const color = 'Super Blue'
            expect(() => validateColor(color)).toThrow(new Error('Not a valid color input'))
        })
    });

    describe('Validate Text ERROR', () => {
        it('should pass if length is greater than 3', () => {
            const text = "TOO LONG"
            expect(() => validateText(text)).toThrow(new Error('Length of desired text is too long'))
        })
    });

    describe('Validate Text Length', () => {
        it('should pass if length is less than or equal to 3', () => {
            const text = "SVG"
            expect(validateText(text)).toBeTruthy()
        })
    });

    describe('Validate Color by Name', () => {
        it('should pass if color is in the list of valid color (CSS Color Names)', () => {
            const color = "blue"
            expect(validateColor(color)).toBeTruthy()
        })
    });

    describe('Validate Color by Hex', () => {
        it('should pass if color matches the Regex for Hex color values', () => {
            const color = "#ffffff"
            expect(validateColor(color)).toBeTruthy()
        })
    });
});