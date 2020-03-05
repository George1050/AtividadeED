import Filadupla from "../../src/Exercicios/Quest6";

let fd;

beforeEach(() => {
    fd = new Filadupla(10);
});

test("Fila dupla teste", () => {
    fd.fila.enqueue(1);
    fd.fila.enqueue(2);
    fd.fila.enqueue(3);
    expect(fd.dequeue_fim()).toBe(3);
    expect(fd.fila.dequeue()).toBe(1);
});