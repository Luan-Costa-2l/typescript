// Initial
var n1 = document.getElementById('number1');
var n2 = document.getElementById('number2');
var button = document.getElementById('calculate');
var res = document.querySelector('.result');
// Functions
function calc(x, y) {
    return x + y;
}
function showRes() {
    res.innerHTML = "".concat(n1.value, " + ").concat(n2.value, " = ").concat(calc(+n1.value, +n2.value).toString());
}
// Events
button.addEventListener('click', showRes);
