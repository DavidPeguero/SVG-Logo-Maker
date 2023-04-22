class Shape{
    constructor(color){
        this.color = color;
    }
    
    //Function to be overriden by children
    render(){
        throw new Error('Each shape should override this function');
    }
}

class Square extends Shape{
    constructor(color){
        super(color)
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