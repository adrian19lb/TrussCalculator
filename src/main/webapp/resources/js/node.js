function Node (x, y) {
    this.x = x;
    this.y = y;
    throwExceptionIfCoordsAreNotNumbers.call(this);
}

function throwExceptionIfCoordsAreNotNumbers() {
    if (typeof this.x !== 'number' && this.y !== 'number') {
        throw 'node cordinates must be a number';
    }
}

Node.prototype.equal = function (other) {
    if (other instanceof Node) {
        return this.x === other.x && this.y === other.y;
    }else {
        return false;
    }
}

Node.prototype.clone = function() {
    return new Node(this.x, this.y);
}

exports.Node = Node;
