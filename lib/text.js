class Text{
    setText(text){
        this.text = text;
    }

    render(shape){
        switch(shape){
            case 'Square':
                return 'text with square coords';
            case 'Circle':
                return 'text with cirle coords';
            case 'Triangle':
                return 'text with triangle coords';
            default:
                throw new Error('Not a valid shape');
        }
    }  
}