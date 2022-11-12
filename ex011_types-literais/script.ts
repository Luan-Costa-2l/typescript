// Nesse caso estou dizendo que a variável só pode aceitar o valor/type 'Luan', mas criar uma const faria a mesma coisa
let user: 'Luan' = 'Luan';

user = 'Luan';
user = 'pedro'; // ERROR



// Aqui está um exemplo da utilidade do type literal
function showText(
    text: string,
    align: 'left' | 'right' | 'center'
) {
    return `<div style="text-align: ${align};">${text}</div>`
}

showText('Luan', 'left');
showText('Luan', 'right');
showText('Luan', 'blablabla'); // ERROR


// Mais um exemplo de uso. PS: nesse caso o type boolean resolvia
type TorF = true | false;

function hasName(name: string): TorF {
    return (name !== '') ? true : false;
}


function config(props: {width: number, height: number} | 'auto') {

}

config({width: 100, height: 100});
config('auto');
config('play'); // ERROR