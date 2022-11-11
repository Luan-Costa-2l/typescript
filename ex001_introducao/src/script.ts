// Initial
let n1 = document.getElementById('number1') as HTMLInputElement;
let n2 = document.getElementById('number2') as HTMLInputElement;
let button = document.getElementById('calculate') as HTMLButtonElement;
let res = document.querySelector('.result') as HTMLDivElement;

// Functions
function calc(x: number, y: number) {
    return x + y;
}
function showRes() {
    res.innerHTML = `${n1.value} + ${n2.value} = ${calc(+n1.value, +n2.value).toString()}`;
}


// Events
button.addEventListener('click', showRes);