var Node = require('./node.js').Node;
var LinearFunction = require('./linearFunction.js').LinearFunction;

function Bar(begin, end) {
    this.begin = begin;
    this.end = end;
    this.mathFunction = new LinearFunction(begin, end);
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
