import { checaBissexto } from "./ex1";

describe("Checa bissexto", () => { //describe é o suite de teste, onde podem ser guardados mais de um teste

  test("retorna true pra 1600", () => {
    const resultado = checaBissexto(1600);

    expect(resultado).toEqual(true);
  });

  test("retorna true pra 2000", () => {
    const resultado = checaBissexto(2000);

    expect(resultado).toEqual(true);
  });

  test("retorna true pra 1996", () => {
    const resultado = checaBissexto(1996)

    expect(resultado).toEqual(true)

  });

  test("retorna true pra 2008", () => {
    const resultado = checaBissexto(2008)

    expect(resultado).toEqual(true)
  });

  test("retorna false pra 2007", () => {
    const resultado = checaBissexto(2007)

    expect(resultado).toEqual(false)

  });

  test("retorna true pra 2400", () => {
    const resultado = checaBissexto(2400)

    expect(resultado).toEqual(true)

  });

  test("retorna true pra 2800", () => {
    const resultado = checaBissexto(2800)

    expect(resultado).toEqual(true)

  });
});
