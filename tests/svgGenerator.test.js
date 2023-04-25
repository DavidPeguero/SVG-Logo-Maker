//Import svgGenerator
const svgGenerator = require("../lib/svgGenerator");
const { Triangle } = require('../lib/shapes');
const Text = require('../lib/text')

describe('SVG Generator', () => {
    describe('Render SVG', () => {
        it('should pass if the expected svg code for a triangle with a blue color and "svg" text is returned', () => {
            const text = 'svg';
            const shape = 'triangle'
            const svgBase = new Triangle();
            const color = 'blue';
            svgBase.setColor(color);
            const svgText = new Text(shape);
            svgText.setText(text);
            svgText.setColor('red')

            const svgGen = new svgGenerator(svgBase, svgText);
            expect(svgGen.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points='150, 18 244, 182 56, 182' fill='blue' />
      
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="red">svg</text>

      </svg>`)
        });
    });
});