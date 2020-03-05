import Pilhafila from "../../src/Exercicio/Quest3";

let p;

beforeEach(() =>{
    p = new Pilhafila(10);
});

test("Test 1", () => {
    p.push(1);
    p.push(2);
    p.push(3);
    p.push(4);
    p.push(5);
    p.push(6);
    p.push(7);
    p.push(8);
    p.push(9);
    p.push(10)
    expect(p.pop()).toBe(10);
    expect(p.pop()).toBe(9);
    p.push(11);
    expect(p.pop()).toBe(11);
})