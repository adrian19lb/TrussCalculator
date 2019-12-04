var Node = require('./node.js').Node;
var LinearFunction = require('./linearFunction.js').LinearFunction;

function Bar(begin, end) {
    this.begin = begin;
    this.end = end;
    this.toVector2 = end.position.subtract(begin.position);
    this.mathFunction = new LinearFunction(begin.position, end.position);
    Object.freeze(this.mathFunction);
    Object.seal(this.mathFunction);
    throwExceptionIfNodesOverlapped.call(this);
}

function throwExceptionIfNodesOverlapped() {
    if (this.begin.equal(this.end)) {
        throw 'given nodes could not overlap';
    }
}

Object.defineProperty(Bar.prototype, 'linearFunction', {
    get() {
        return this.mathFunction.getFormula();
    },
});

Object.defineProperty(Bar.prototype, 'length', {
    set : undefined,
    get() {
        return Math.sqrt(Math.pow(this.end.position.x - this.begin.position.x, 2) + Math.pow(this.end.position.y - this.begin.position.y, 2)).toFixed(3);
    }

});

Object.defineProperty(Bar.prototype, 'angle', {
    set : undefined,
    get() {
        return Math.atan(this.mathFunction.a) * 180/Math.PI;
    }
});
exports.Bar = Bar;
