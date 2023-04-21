//Import inquirer 
const inquirer = require("inquirer");

//Questions to ask through inquirer
const questions = [
    {
        name : 'test', 
        type : 'input',
        message:'Enter desired text (up to three characters)',
    },
    {
        name : 'test', 
        type : 'input',
        message:'Enter desired color (name or hexadecimal)',
    },
    {
        name : 'test', 
        type : 'input',
        message:'Enter desired shape (circle, shape, or triangle)',
    }
]