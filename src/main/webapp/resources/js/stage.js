import * as mouse from './mouse.js'

function draw() {
    let ctx = this._canvas.getContext('2d');
    ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    this._nodes.forEach((node) => {
        node.draw(ctx);
    });
}

function update(dt) {
    this._nodes.forEach((node) => {
        node.update(dt);
    });
}

export default class Stage {
    constructor(htmlCanvasId) {
        this._canvas = document.getElementById(htmlCanvasId);
        this._nodes = [];
        this._mouseEventNotifier = new mouse.EventNotifier(this);
    }
    
    show() {
        var lastRender = 0;
        var stage = this;
        function loop(timeStep) {
            const progress = (timeStep - lastRender);
            update.call(stage, progress);
            draw.call(stage);
            lastRender = timeStep;
            window.requestAnimationFrame(loop);
        }
        window.requestAnimationFrame(loop);
    }

    push(node) {
        this._nodes.push(node);
    }

    getChildren() {
        return this._nodes;
    }
};
