//Import text
const Text = require('../lib/text')
const {Circle, Triangle, Square} = require('../lib/shapes')

describe('Text', () =>{
    describe('Render Text for Circle', () => {
        it('should pass if it fills the shape with blue', () => {
            const shape = 'Circle';
            const text = new Text(shape);
            expect(text.render()).toEqual(`<text x="150" y="120" font-size="60" text-anchor="middle" fill="white">${this.text}</text>`)
        })
    })

    describe('Render Text for Triangle', () => {
        it('should pass if it fills the shape with blue', () => {
            const shape = 'Triangle';
            const text = new Text(shape);
            expect(text.render()).toEqual(`<text x="150" y="150" font-size="60" text-anchor="middle" fill="white">${this.text}</text>`)
        })
    })

    describe('Render Text for Square', () => {
        it('should pass if it fills the shape with blue', () => {
            const shape = 'Square';
            const text = new Text(shape);
            expect(text.render()).toEqual(`<text x="100" y="120" font-size="60" text-anchor="middle" fill="white">${this.text}</text>`)
        })
    })

    describe('Render for anything else', () => {
        it('should pass if it throws the appropriate error', () => {
            const shape = 'Pentagon';
            const text = new Text(shape);
            expect(() => text.render()).toThrow(new Error('Not a valid shape'))
        })
    })

    describe('Render checks if text is appropriate', () => {
        it('should pass if it throws the appropriate error', () => {
            const shape = 'Square';
            const text = new Text(shape);
            text.setText('TEST')
            expect(text.text).toEqual('TEST');
        })
    })

})