"use strict";
const user = 'Luan';
function bla(n1) {
    return 'Seu número é: ' + n1;
}
bla(10);
let button = document.querySelector('button');
button.addEventListener('click', () => {
    console.log('CLICOU!');
});
