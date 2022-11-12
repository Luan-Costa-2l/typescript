// Aqui eu digo ao typescript que a variável age pode receber tanto strings quanto numbers
let age: string | number = 90;

age = 'Something';

/*
Ps: em funções como a de baixo, se você fizer algo que só afete o tipo string por exemplo isso accarretará em um erro, então use verificações pra evita-lo
*/
function showAge(age: string | number) {
    if(typeof age !== 'string') {
        console.log(`Minha idade é ${age}`);
    } else {
        age.split('');
        console.log(`Os números são: ${age}`);
    }   
}

showAge(90);
showAge('90');