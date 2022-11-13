// Me permite criar regras como em qual lugar os arquivos compilados devem ficar, se devem ficar, se os erros devem ser mostrados ou não e por aí vai
const user: string = 'Luan';

function bla(n1: number):string {
    return 'Seu número é: ' + n1;
}

bla(10);


let button = document.querySelector('button') as HTMLButtonElement;
button.addEventListener('click', () => {
    console.log('CLICOU!');
})