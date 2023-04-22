class Text{
    constructor(shape){
        this.shape = shape;
    }
    setText(text){
        this.text = text;
    }

    render(){
        switch(this.shape){
            case 'square':
                return `<text x="100" y="120" font-size="60" text-anchor="middle" fill="white">${this.text}</text>`
            case 'circle':
                return `<text x="150" y="120" font-size="60" text-anchor="middle" fill="white">${this.text}</text>`;
            case 'triangle':
                return `<text x="150" y="150" font-size="60" text-anchor="middle" fill="white">${this.text}</text>`;
            default:
                throw new Error('Not a valid shape');
        }
    }  
}

module.exports = Text;