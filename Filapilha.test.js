import Filapilha from "../../src/Exercicio/Quest4"

let f;

beforeEach(() => {
    f = new Filapilha(4);
});

test("enqueue and dequeue", () =>{
    f.enqueue(1);
    f.enqueue(2);
    f.enqueue(3);
    f.enqueue(4);
    expect(f.dequeue()).toBe(1);
    expect(f.dequeue()).toBe(2);
    expect(f.dequeue()).toBe(3);
})