var assert = require('assert');
var chai = require('chai');
var Node = require('../resources/js/node.js').Node;

describe('NodeTest', function() {
  describe('#contructor()', function() {
    it('nodes should be equal with the same coords', function() {
        let node = new Node(0, 0);
        assert.equal(node.equal(new Node(0,0)), true);
    });

    it('nodes codrinates must be a number', function() {
       chai.expect(() => new Node('0', '0')).to.throw('node cordinates must be a number'); 
    });

    describe('#clone()', function() {
        it('node can be cloneable', function() {
            let node = new Node(0, 0);
            let clonedNode = node.clone();
            assert.equal(node.equal(clonedNode), true);
            assert.equal(clonedNode.equal(node), true);
        });
    });
  });
});
