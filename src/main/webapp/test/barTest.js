var assert = require('assert');
var chai = require('chai');
var Node = require('../resources/js/node.js').Node;
var Bar = require('../resources/js/bar.js').Bar;

describe('Bar', function() {
   describe('#constructor()', function() {
       it('bar nodes could not overlap', function() {
           chai.expect(() => new Bar(new Node(0,0), new Node(0,0))).to.throw('given nodes could not overlap');   
       });
   });
   describe('#formula', function() {
       it('bar should be representation of linear function', function() {
           let bar = new Bar(new Node(0, 2*0), new Node(3, 2*3)); //y = 2x
           let collidableBar = new Bar(new Node(0, -2*0 + 6), new Node(3, -2*3 + 6)); //y = -2x + 6
           assert.equal(bar.toLinearFunction.formula, 'y = 2x');
           assert.equal(collidableBar.toLinearFunction.formula, 'y = -2x + 6');

           let orthogonalBar = new Bar(new Node(0, 4), new Node(1, 4));
           assert.equal(orthogonalBar.toLinearFunction.formula, 'y = 4')
           assert.equal(orthogonalBar.angle, 0);

           let verticalBar = new Bar(new Node(2, 0), new Node(2, 1));
           assert.equal(verticalBar.toLinearFunction.formula, 'x = 2');
           assert.equal(verticalBar.angle, -90);
       });
   });
   describe('#length()', function() {
       it('bar length evaluation from nodes coordinations', function() {
            let bar = new Bar(new Node(1, 1), new Node(2, 2));
            assert.equal(bar.length, 1.414);
       });
   });
   describe('#intersect()', function() {
        it('should return true if bar intersect with another, otherwise return false', function() {
            let bar = new Bar(new Node(2, 4), new Node(6, 7));
            let collidableBar = new Bar(new Node(6,4), new Node(2, 7));
            let noCollidableBar = new Bar(new Node(2, 1), new Node(6,1));
            
            assert.deepEqual(bar.intersect(collidableBar), true);
            assert.deepEqual(bar.intersect(noCollidableBar), false);
        });
   });
   
});
