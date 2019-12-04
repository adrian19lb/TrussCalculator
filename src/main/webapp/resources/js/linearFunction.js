function LinearFunction(begin , end) {
    this.a = (begin.y - end.y)/(begin.x - end.x);
    this.b = (begin.y - this.a * begin.x);
    competeFunctionFormula.call(this, begin);
    formulaTrimmer.call(this);
}

function competeFunctionFormula(node) {
    if(isInfinity(this.a)) {
       this._function = ['x', ' = ', node.x]; 
    }else {
        this._function = ['y', ' = ', this.a, 'x', ' + ', this.b];
        this._trim = { 'a' : [2, 3], 'b' : [0, -2] }; //prepare trim object if a or b doesn't exist
    }
}

function isInfinity(value) {
    return value === Infinity || value === -Infinity;
}

function formulaTrimmer() {
    const DOES_NOT_EXIST = 0;
    if (this.b === DOES_NOT_EXIST) {
        this._function = Array.prototype.slice.apply(this._function, this._trim.b);
    }else if (this.a === DOES_NOT_EXIST) {
        Array.prototype.splice.apply(this._function, this._trim.a);
    }
}

Object.defineProperty(LinearFunction.prototype, 'formula', {
    set : undefined,
    get() {
        return this._function.reduce((accumulator, currentValue) => accumulator + currentValue); 
    }
})

exports.LinearFunction = LinearFunction;
