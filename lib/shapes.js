class Shape{
    constructor(){
    }
    
    setColor(color){
        this.color = color;
    }
    //Function to be overriden by children
    render(){
        throw new Error('Each shape should override this function');
    }
}

class Square extends Shape{
    constructor(){
    }

    //Override render function
    render(){
    }
}

class Triangle extends Shape{
    constructor(color){
    }

    //Override render function
    render(){

    }
}

class Circle extends Shape{
    constructor(){
    }

    //Override render function
    render(){

    }
}

module.exports = {
    Triangle,
    Circle,
    Square
};