// Aqui criei um type padrão para as funcões matemáticas
type MathFunction = (n1: number, n2:number) => number;

const sun: MathFunction = (n1, n2) => {
    return n1 + n2;
}

sun(1, 2);

const sub: MathFunction = (n1, n2) => {
    return n1 - n2;
}

const mult: MathFunction = (n1, n2) => {
    return n1 * n2;
}

const div: MathFunction = (n1, n2) => {
    return n1 / n2;
}