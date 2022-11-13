// void, de forma simplificada, é quando não se espera retorno da função, como quando criamos uma função para modificar um elemento HTML
function removeElement(el: HTMLElement): void {
    el.remove();
}

removeElement(document.getElementById('test') as HTMLElement);


// nesse caso o ts não retornou um erro pois quando especifiquei o void no type eu disse ao ts que não espere por um retorno, não disse para não aceitar um retorno ao contrário  da função acima.
type AnyFunction = () => void;

const something: AnyFunction = () => {
    return 'bla bla';
}

something();