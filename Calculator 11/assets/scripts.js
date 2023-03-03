calc = {
    // Addition function
    add : (a,b) => a+b,

    // Subtraction function
    sub : (a,b) => a-b,

    // Multiplication function
    mul : (a,b) => a*b,

    // Division function
    div : (a,b) => a/b,

    // Square root function
    sqrt : (a) => Math.sqrt(a),

    // Remainder or modulo function
    rem : (a,b) => a%b
}

//Function calls and print statements
console.log(calc.add(57,14))
console.log(calc.sub(57,12))
console.log(calc.mul(11,10))
console.log(calc.div(110,10))
console.log(calc.sqrt(169))
console.log(calc.rem(11,10))