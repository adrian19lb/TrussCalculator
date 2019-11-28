function LinearFunction(begin , end) {
    this.a = (begin.y - end.y)/(begin.x - end.x);
    this.b = (begin.y - this.a * begin.x);
    competeFunctionFormula.call(this, begin);
    formulaTrimmer.call(this);
}

function competeFunctionFormula(node) {
    if(isInfinity(this.a)) {
       this.functionFormula = ['x', ' = ', node.x]; 
    }else {
        this.functionFormula = ['y', ' = ', this.a, 'x', ' + ', this.b];
        this._trim = { 'a' : [2, 3], 'b' : [0, -2] }; //prepare trim object if a or b doesn't exist
    }
}

function isInfinity(value) {
    return value === Infinity || value === -Infinity;
}

function formulaTrimmer() {
    const DOES_NOT_EXIST = 0;
    if (this.b === DOES_NOT_EXIST) {
        this.functionFormula = Array.prototype.slice.apply(this.functionFormula, this._trim.b);
    }else if (this.a === DOES_NOT_EXIST) {
        Array.prototype.splice.apply(this.functionFormula, this._trim.a);
    }
}

LinearFunction.prototype.getFormula = function() {
    return this.functionFormula.reduce((accumulator, currentValue) => accumulator + currentValue); 
}

exports.LinearFunction = LinearFunction;
