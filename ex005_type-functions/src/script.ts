// O ': string' após os parênteses da função indica o typo que terá o retorno da função
function firstLetterUpperCase(name: string): string {
    let firstLetter = name.charAt(0).toUpperCase();
    return firstLetter + name.substring(1);
}

// graças a tipagem do ts em obtenho esse aviso de erro antes mesmo de rodar o código
firstLetterUpperCase(90); // ERROR

// recebo o aviso de error pois já indiquei que a função retorna uma string e estou tentando salva-lo em uma variável de type number
let user: number = firstLetterUpperCase('luan'); // ERROR



function sun(n1: number, n2: number): number {
    return n1 + n2;
}

let something = sun(3, 8);