function LinearFunction(begin , end) {
    this.a = (begin.y - end.y)/(begin.x - end.x);
    this.b = (begin.y - this.a * begin.x);
}

LinearFunction.prototype.getFormula = function() {
    let functionFormula = ['y', ' = ', this.a, 'x', ' + ', this.b];
    let formula = formulaSlicer(functionFormula);

    return formula.reduce((accumulator, currentValue) => accumulator + currentValue); 
}

function formulaSlicer(mathFunction) {
    const NULL = 0;
    if (mathFunction[mathFunction.length - 1] === NULL) {
        mathFunction = mathFunction.slice(0, -2);
    }else if (mathFunction[2] == NULL) {
        mathFunction.splice(2, 3);
    }

    return mathFunction;
}

exports.LinearFunction = LinearFunction;
