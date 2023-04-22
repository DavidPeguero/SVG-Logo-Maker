//Import inquirer and validating functions
const inquirer = require("inquirer");
const {validateText, validateColor} = require('./lib/validateInputs')

//Set variables need
let text;
let color;
let shape;

//Questions to ask through inquirer
const questions = [
    {
        name : 'color', 
        type : 'input',
        message:'Enter desired color (name or hexadecimal)',
    },
    
]

//Begin the prompts


//Async function to get the text inside the SVG
async function getText(){
    let data = await inquirer.
    prompt({
        name : 'text', 
        type : 'input',
        message:'Enter desired text (up to three characters)',
    })
    if(validateText(data.text)){
        text = data.text;
    }
    else{
        console.log('Text is too long');
        await getText();
    }
}

//Async function to get color
async function getColor(){
    let data = await inquirer.
    prompt({
        name : 'color', 
        type : 'input',
        message:'Enter desired Color ',
    })
    //Check if good input
    if(validateColor(data.color.toLowerCase())){
        color = data.color.toLowerCase();
    }
    else{
        console.log('Not a valid color');
        await getColor();
    }
}

//Async function to get shape
async function getShape(){
    let data = await inquirer.
    prompt({
        name : 'shape', 
        type : 'list',
        message:'Enter desired shape (circle, square, or triangle)',
        choices : ['circle', 'square', 'triangle'],
    })
    shape = data.shape;
}


//Async function that gets all the info from the user
async function init(){
    await getText();
    await getColor();
    await getShape();
    console.log(text);
    console.log(color);
    console.log(shape);
}

init()