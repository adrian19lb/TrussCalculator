function Vector2(x, y) {
    this.x = x;
    this.y = y;
}

Vector2.prototype.subtract = function(vector) {
    return new Vector2(this.x - vector.x, this.y - vector.y);
}

Vector2.prototype.add = function(vector){
    return new Vector2(this.x + vector.x, this.y + vector.y);
}

Vector2.prototype.scale = function(scalar) {
    return new Vector2(this.x * scalar, this.y * scalar);
}

Vector2.prototype.dotProduct = function(vector) {
   return this.x * vector.x + this.y * vector.y;
}

Vector2.prototype.crossProduct = function(vector) {
    return this.x*vector.y - this.y*vector.x;
}

Object.defineProperty(Vector2.prototype, 'magnitude', {
    set : undefined,
    get() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
})

exports.Vector2 = Vector2;
