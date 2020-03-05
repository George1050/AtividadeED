import Conversor from "../../src/Exercicio/Quest5"


test("questao 5", () => {
    let p = new Conversor(8);
    p.converter(15);
    p.pilha.clear();
    p.converter(10);

});