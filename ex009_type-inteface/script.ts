// criando types próprios usando padrão pascal case (começa palavras com maiúscula)
type Idade = string | number;

let user: Idade = 'Luan';



// Aqui usei o type próprio para organizar a tipagem do object
// criei usando type:
/*
type User = {
    userName: string,
    lastName: string,
    status: number,
    age: number,
    man: boolean
};
*/

// Usando o interface pra criar os tipos funcionará do mesmo jeito, mas posso alterar o interface durante o código, já o type não
interface User {
    userName: string,
    lastName: string,
    status: number,
    age: number,
}
interface User {
    man: boolean
}

function summary(user: User) {
    return `Olá ${user.userName}, você tem ${user.age} anos.`
}

summary({
    userName: 'Luan',
    lastName: 'Cordeiro',
    status: 15,
    age: 90,
    man: true
});