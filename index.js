//Import inquirer 
const inquirer = require("inquirer");

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
    {
        name : 'shape', 
        type : 'input',
        message:'Enter desired shape (circle, shape, or triangle)',
    }
]

//Begin the prompts


async function getText(){
    let data = await inquirer.
    prompt({
        name : 'text', 
        type : 'input',
        message:'Enter desired text (up to three characters)',
    })
    text = data.text
}

async function getColor(){
    let data = await inquirer.
    prompt({
        name : 'color', 
        type : 'input',
        message:'Enter desired Color ',
    })
    color = data.color
}



async function init(){
    await getText();
    await getColor();
    console.log(text);
    console.log(color);
}

init()