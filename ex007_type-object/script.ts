// Em objetos é vai se usar muito a tipagem
function summary(user: {userName: string, age: number}) {
    return `Olá ${user.userName}, tudo bem? Você tem ${user.age}`;
}

let u = {
    userName: 'Luan',
    age: 19
};

// como eu indiquei a tipagem e os itens necessário, caso eu remova o 'age:' do object o ts retornará um erro no código abaixo
console.log(summary(u));