import { proxyFactory, handler } from './changeNotifier.js';

function getCursorGlobalPosition(event) {
    let canvasBoundingBox = this._canvas.getBoundingClientRect();
    const mouseX = event.clientX - canvasBoundingBox.left;
    const mouseY = event.clientY - canvasBoundingBox.top;
    
    return { x : mouseX, y : mouseY };
}

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
        this._chanegeNotifier = proxyFactory.create(this._nodes, handler);
        this.mouse = Object.create(Object.prototype);
        this._canvas.addEventListener('mousemove', (event) => {
            this.mouse = getCursorGlobalPosition.call(this, event);
            this._chanegeNotifier.mouse = this.mouse;
        });
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

};
