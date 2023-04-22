//Import required modules
const inquirer = require("inquirer");
const { validateText, validateColor } = require('./lib/validateInputs')
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes')
const Text = require('./lib/text');
const svgGenerator = require('./lib/svgGenerator');

//Set variables need
let text;
let color;
let shape;


//Async function to get the text inside the SVG
async function getText() {
    let data = await inquirer.
        prompt({
            name: 'text',
            type: 'input',
            message: 'Enter desired text (up to three characters)',
        })
    if (validateText(data.text)) {
        text = data.text;
    }
    else {
        console.log('Text is too long');
        await getText();
    }
}

//Async function to get color
async function getColor() {
    let data = await inquirer.
        prompt({
            name: 'color',
            type: 'input',
            message: 'Enter desired Color ',
        })
    //Check if good input
    if (validateColor(data.color.toLowerCase())) {
        color = data.color.toLowerCase();
    }
    else {
        console.log('Not a valid color');
        await getColor();
    }
}

//Async function to get shape
async function getShape() {
    let data = await inquirer.
        prompt({
            name: 'shape',
            type: 'list',
            message: 'Enter desired shape (circle, square, or triangle)',
            choices: ['circle', 'square', 'triangle'],
        })
    shape = data.shape;
}


//Async function that gets all the info from the user
async function init() {
    await getText();
    await getColor();
    await getShape();
    console.log(text);
    console.log(color);
    console.log(shape);
    let svgBase;
    let svgText;
    //Create shape class and setColor 
    switch (shape) {
        case 'circle':
            svgBase = new Circle()
            break;
        case 'square':
            svgBase = new Square()
            break;
        case 'triangle':
            svgBase = new Triangle()
    }
    svgBase.setColor(color);

    //Create text class and set text class
    svgText = new Text(shape);
    svgText.setText(text);
    const svg = new svgGenerator(svgBase, svgText);
    fs.writeFile('test.svg', svg.render(), (err) => {
        err ? console.error('Ooops') : console.log('Success!');
    })

}

init()