import Inversor from "../../src/Exercicio/Quest2";

let i;

beforeEach(() => {
    i = new Inversor(7);
})

test("Inversor 4", () => {
    i.inicial.push(1);
    i.inicial.push(2);
    i.inicial.push(3);
    i.inicial.push(4);
    i.inicial.push(5);
    i.inicial.push(6);
    i.inicial.push(7);
    i.inversor();
    console.log(i.final);
})