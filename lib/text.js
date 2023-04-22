class Text{
    setText(text){
        this.text = text;
    }

    render(shape){
        switch(shape){
            case 'Square':
                return `<text x="150" y="150" font-size="60" text-anchor="middle" fill="white">SVG</text>`
            case 'Circle':
                return `<text x="150" y="150" font-size="60" text-anchor="middle" fill="white">SVG</text>`;
            case 'Triangle':
                return `<text x="150" y="150" font-size="60" text-anchor="middle" fill="white">SVG</text>`;
            default:
                throw new Error('Not a valid shape');
        }
    }  
}