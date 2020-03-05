import Quest1 from "../../src/Exercicios/Quest1";

let f;

beforeEach(() => {
    f = new Quest1(2,3);
})

test("Multi e Divi", () => {
    expect(f.multiplicacao(new Quest1(2,3))).toBe("4/9");
    expect(f.divisao(new Quest1(4,5))).toBe("4/6"); 
})