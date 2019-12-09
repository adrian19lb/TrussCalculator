let handler = {
    set: function(target, key, value) {
        target.forEach(function(node){
            if (node.listener.propertyName === key) {
                node.listener.receiver(value);
            }
        });
        target[key] = value;
        return true;
    }
};
  
let proxyFactory = {
    create : function(nodes, handler) {
        return new Proxy(nodes, handler);
    }
};

class PropertyObserver {
	constructor(propertyName, receiver) {
  	    this.propertyName = propertyName;
        this.receiver = receiver;
  }
};

export { handler, proxyFactory, PropertyObserver };
