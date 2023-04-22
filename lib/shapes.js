class Shape{
    constructor(){
        this.color = '';
        this.text = ''
    }
    

    //Set Color Function for all shapes
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
        super()
    }

    //Override render function
    render(){
        return `<rect width='300' height='200' fill='${this.color}'/>`
    }
}

class Triangle extends Shape{
    constructor(){
        super();
    }

    //Override render function
    render(){

    }
}

class Circle extends Shape{
    constructor(){
        super();
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