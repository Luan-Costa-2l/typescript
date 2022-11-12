// Aqui eu tornei o age uma propriedade opcional usando o '?'
function summary(user: {userName: string, age?: number}) {
    if(user.age !== undefined) {
        return `Olá ${user.userName}, tudo bem? Você tem ${user.age} anos de idade`;
    } else {
        return `Olá ${user.userName}, tudo bem?`;
    }
    
}


let u = {
    userName: 'Luan',
};

console.log(summary(u));