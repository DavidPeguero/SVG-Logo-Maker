class Shape{
    constructor(color){
    }

    setColor(color){
        this.color = color
    }
    
    render(){
        throw new Error('Each shape should override this function');
    }
}

class Square extends Shape{
    constructor(color){
        super(color)
    }
}

module.exports = {
    Triangle,
    Circle,
    Square
};