function insert(num) {
    document.calculator.display.value = document.calculator.display.value + num;
}

function equal() {
    var exp = document.calculator.display.value;
    if(exp) {
        document.calculator.display.value = eval(exp)
    }
}

function back() {
    var exp = document.calculator.display.value

    document.calculator.display.value = exp.substring(0, exp.length - 1);
}