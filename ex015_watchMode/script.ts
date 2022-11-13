// tsc script.ts(localização do arquivo) -w :compila o arquivo ts para js e fica eu "mode visão" ele fica monitorando o que acontece no aquivo.ts e quando salvo ele é compilado automaticamente(caso não haja erros) em um arquivo js;
const user: string = 'Luan';

function bla(n1: number):string {
    return 'Seu número é: ' + n1;
}

bla(10);