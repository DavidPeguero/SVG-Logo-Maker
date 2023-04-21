//Import inquirer 
const inquirer = require("inquirer");

//Set variables need
let text;
let input;
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


function getText(){
    inquirer.
    prompt({
        name : 'text', 
        type : 'input',
        message:'Enter desired text (up to three characters)',
    }).
    then((data) => {
        text = data.text;
        console.log(text)
    });
}

getText();
