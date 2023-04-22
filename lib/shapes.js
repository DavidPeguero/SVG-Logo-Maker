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
        return `<polygon points='150, 18 244, 182 56, 182' fill='blue' />`
    }
}

class Circle extends Shape{
    constructor(){
        super();
    }

    //Override render function
    render(){
        return `<circle cx='150' cy='100' r='80' fill='blue'/>`
    }
}

module.exports = {
    Triangle,
    Circle,
    Square
};