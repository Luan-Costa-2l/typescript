// Informei ser um array de strings com o string[]
let users: string[] = ['Luan', 'Pedro', 'Luiz', 'fulano'];

// As duas formas abaixo indicam que a variável é um array de números, mas use a primeira (number[])
let ages: number[] = [90, 15, 20, 30];
let ages2: Array<number> = [1, 4, 6, 3, 2];

// O ts percebe que tentei mandar uma string pro array de numbers e me retorna um erro
ages.push('Luan');

// este não teve erro pois mandei um number
ages.push(0);