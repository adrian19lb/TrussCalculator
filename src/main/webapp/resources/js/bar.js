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

exports.Bar = Bar;
