var Vector2 = require('./vector2.js').Vector2;

function Node (x, y) {
    this.position = new Vector2(x, y);
    throwExceptionIfCoordsAreNotNumbers.call(this);
}

function throwExceptionIfCoordsAreNotNumbers() {
    if (typeof this.position.x !== 'number' && this.position.y !== 'number') {
        throw 'node cordinates must be a number';
    }
}

Node.prototype.equal = function (other) {
    if (other instanceof Node) {
        return this.position.x === other.position.x && this.position.y === other.position.y;
    }else {
        return false;
    }
}

Node.prototype.clone = function() {
    return new Node(this.position.x, this.position.y);
}

exports.Node = Node;
