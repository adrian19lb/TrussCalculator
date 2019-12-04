var Node = require('./node.js').Node;
var LinearFunction = require('./linearFunction.js').LinearFunction;

function Bar(begin, end) {
    this.begin = begin;
    this.end = end;
    this.toVector2 = end.position.subtract(begin.position);
    this.toLinearFunction = new LinearFunction(begin.position, end.position);
    Object.freeze(this.toLinearFunction);
    Object.seal(this.toLinearFunction);
    throwExceptionIfNodesOverlapped.call(this);
}

function throwExceptionIfNodesOverlapped() {
    if (this.begin.equal(this.end)) {
        throw 'given nodes could not overlap';
    }
}

Object.defineProperty(Bar.prototype, 'length', {
    set : undefined,
    get() {
        return Math.sqrt(Math.pow(this.end.position.x - this.begin.position.x, 2) + Math.pow(this.end.position.y - this.begin.position.y, 2)).toFixed(3);
    }

});

Object.defineProperty(Bar.prototype, 'angle', {
    set : undefined,
    get() {
        return Math.atan(this.toLinearFunction.a) * 180/Math.PI;
    }
});
exports.Bar = Bar;
