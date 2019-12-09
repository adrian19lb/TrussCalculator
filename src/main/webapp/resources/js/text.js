class Text {
    constructor(text, position) {
        this.text = text;
        this.position = position;
    }

    draw(ctx) {
        ctx.fillText(this.text, this.position.x, this.position.y);
    }

    update() {

    }
};

export { Text }
