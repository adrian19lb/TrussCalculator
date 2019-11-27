var assert = require('assert');
var chai = require('chai');
var Node = require('../resources/js/node.js').Node;
var Bar = require('../resources/js/bar.js').Bar;

describe('BarTest', function() {
   describe('#constructor()', function() {
       it('bar nodes could not overlap', function() {
           chai.expect(() => new Bar(new Node(0,0), new Node(0,0))).to.throw('given nodes could not overlap');   
       });
   });
   describe('#linearFunction()', function() {
       it('bar should be representation of linear function', function() {
           let bar = new Bar(new Node(0, 2*0), new Node(3, 2*3)); //y = 2x
           let collidableBar = new Bar(new Node(0, -2*0 + 6), new Node(3, -2*3 + 6)); //y = -2x + 6
           assert.equal(bar.linearFunction, 'y = 2x');
           assert.equal(collidableBar.linearFunction, 'y = -2x + 6');

           let orthogonalBar = new Bar(new Node(0, 4), new Node(1, 4));
           assert.equal(orthogonalBar.linearFunction, 'y = 4')
       });
   });
});
