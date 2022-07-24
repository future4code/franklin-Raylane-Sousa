import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {
  it("retorna true para 'mirim'", () => {
    const ehPalindromo = checaPalindromo("mirim");
    expect(ehPalindromo).toEqual(true);
  });

  it("retorna false para laranja", () => {
    const palavra = checaPalindromo("laranja")

    expect(palavra).toEqual(false);
  })

  it("retorna false para laranja", () => {
    const palavra = checaPalindromo("arara")

    expect(palavra).toEqual(true);
  })

});
