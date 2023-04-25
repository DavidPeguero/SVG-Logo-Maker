//Import required modules
const inquirer = require("inquirer");
const { validateText, validateColor } = require('./lib/validateInputs')
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes')
const Text = require('./lib/text');
const svgGenerator = require('./lib/svgGenerator');
const { error } = require("console");

//Set variables need
let text;
let textColor;
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

    try {
        validateText(data.text);
        text = data.text;
    } 
    catch (error) {
        console.log('Text is too long');
        await getText();
    }
}

//Async function to get shape
async function getTextColor() {
    let data = await inquirer.
        prompt({
            name: 'textColor',
            type: 'input',
            message: 'Enter desired Text Color (name or hexcode)',
        })
    
    //Try catch for errors
    try {
        validateColor(data.textColor.toLowerCase());
        textColor = data.textColor.toLowerCase();
    }
    catch (error) {
        console.log('Not a valid color input');
        await getTextColor();
    }
}

//Async function to get color
async function getShapeColor() {
    let data = await inquirer.
        prompt({
            name: 'color',
            type: 'input',
            message: 'Enter desired Shape Color (name or hexcode)',
        })
    //Check if good input
    try {
        validateColor(data.color.toLowerCase());
        color = data.color.toLowerCase();
    }
    catch (error) {
        console.log('Not a valid color input');
        await getShapeColor();
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
    await getTextColor();
    await getShape();
    await getShapeColor();
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
    svgText.setColor(textColor);
    const svg = new svgGenerator(svgBase, svgText);
    fs.writeFile('test.svg', svg.render(), (err) => {
        err ? console.error('Ooops') : console.log('Success!');
    })

}

init()