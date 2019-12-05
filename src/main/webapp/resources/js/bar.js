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
        return this.toVector2.magnitude.toFixed(3);
    }

});

Object.defineProperty(Bar.prototype, 'angle', {
    set : undefined,
    get() {
        return Math.atan(this.toLinearFunction.a) * 180/Math.PI;
    }
});

Bar.prototype.intersect = function(collidableBar) {
    const MIN_VALUE = 0.0;
    const MAX_VALUE = 1.0;
    let thisParameter = computeIntersectionParameter.call(this, collidableBar);
    let thatParameter = computeIntersectionParameter.call(collidableBar, this);

    return (MIN_VALUE <= thisParameter) && 
           (MAX_VALUE >= thisParameter) && 
           (MIN_VALUE <= thatParameter) && 
           (MAX_VALUE >= thatParameter);
}

function computeIntersectionParameter(collidableBar) {
    let numerator =  collidableBar.toVector2.crossProduct(collidableBar.begin.position.subtract(this.begin.position))
    let denominator = -this.toVector2.crossProduct(collidableBar.toVector2);
    
    return numerator/denominator;
}

exports.Bar = Bar;
