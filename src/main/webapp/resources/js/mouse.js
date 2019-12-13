import {proxyFactory, handler} from './changeNotifier.js';

const ButtonAction = Object.freeze({
    PRESSED: Symbol("pressed"),
    RELEASED: Symbol("released"),
    HOLD: Symbol("hold"),
    UNKNOWN : Symbol("unknown")
});

const Button = Object.freeze({
    LEFT: Symbol("left"),
    MIDDLE: Symbol("middle"),
    RIGHT : Symbol("right"),
    UNKNOWN : Symbol("unknown")
});

class EventNotifier {
    constructor(scene) {
        this._chanegeNotifier = proxyFactory.create(scene.getChildren(), handler);
        notifyOnMouseMove.call(this, scene._canvas);
        notifyOnMouseButton.call(this, scene._canvas);
    }
};

function notifyOnMouseMove(node) {
   node.addEventListener('mousemove', (event) => {
       this._chanegeNotifier.mouseMove = Object.freeze({movementX: event.movementX, movementY: event.movementY});     
   });
   node.addEventListener('mousemove', (event) => {
       this._chanegeNotifier.mousePosition = getCursorGlobalPosition(event, node);
   });
}

function getCursorGlobalPosition(event, node) {
    let canvasBoundingBox = node.getBoundingClientRect();
    const mouseX = event.clientX - canvasBoundingBox.left;
    const mouseY = event.clientY - canvasBoundingBox.top;
    
    return Object.freeze({ x : mouseX, y : mouseY });
}

function notifyOnMouseButton(node) {
   node.addEventListener('mousedown', (event) => {
       this._chanegeNotifier.mouseButton = createPressMouseButtonEvent(event);
   });
   node.addEventListener('mouseup', (event) => {
       this._chanegeNotifier.mouseButton = createReleaseMouseButtonEvent(event)
   });
}

function createPressMouseButtonEvent(event) {
    switch (event.button) {
        case 0: return Object.freeze({action: ButtonAction.PRESSED, code: Button.LEFT});
        case 1: return Object.freeze({action: ButtonAction.PRESSED, code: Button.MIDDLE});
        case 2: return Object.freeze({action: ButtonAction.PRESSED, code: Button.RIGHT});
        default: return Object.freeze({action: ButtonAction.PRESSED, code: Button.UNKNOWN}); 
    }
}

function createReleaseMouseButtonEvent(event) {
    switch (event.button) {
        case 0: return Object.freeze({action: ButtonAction.RELEASED, code: Button.LEFT});
        case 1: return Object.freeze({action: ButtonAction.RELEASED, code: Button.MIDDLE});
        case 2: return Object.freeze({action: ButtonAction.RELEASED, code: Button.RIGHT});
        default: return Object.freeze({action: ButtonAction.RELEASED, code: Button.UNKNOWN});    
    }
}

export {ButtonAction, Button, EventNotifier}
