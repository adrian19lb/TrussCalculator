var assert = require('assert');
var Vector2 = require('../resources/js/vector2.js').Vector2;

describe('Vector2', function() {
    let a, b;
    before(function() {
        a = new Vector2(2,4);
        b = new Vector2(6,7);
    });
    describe('#math operation on vector which return new vector object', function() {
        it('subtract(vector)', function() {
            assert.deepEqual(a.subtract(b), new Vector2(-4, -3));
        });
        it('add(vector)', function() {
            assert.deepEqual(a.add(b), new Vector2(8, 11));
        });
        it('scale(scalar)', function() {
            assert.deepEqual(a.scale(2), new Vector2(2*2, 2*4));
        });
    })
    describe('#math operation on vector which return scalar', function() {
        it('dotProduct(vector)', function() {
            assert.deepEqual(a.dotProduct(b), 2*6+4*7);
        });
        it('crossProduct(vector)', function() {
            assert.deepEqual(a.crossProduct(b), 2*7-4*6);
        });
        it('magnitude', function() {
            assert.deepEqual(a.magnitude, Math.sqrt(20));
        });
    });
});
