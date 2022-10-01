
## Exercício 03

*a. Implemente a função de tal forma que ela utilize a função de validação diretamente na implementação*

~~~typescript
    export const performAttack = (attacker: Character, defender: Character) => {
    if (!validateCharacter(attacker) || !validateCharacter(defender)) {
        throw new Error("Invalid character");
    }

    if (attacker.strength > defender.defense) {
        defender.life -= attacker.strength - defender.defense;
    }
    };
~~~

*b. Implemente a função utilizando inversão de dependências*

~~~typescript
    export const performAttack = (
    attacker: Character,
    defender: Character,
    validator: (input: Character) => boolean
    ) => {
    if (!validator(attacker) || !validator(defender)) {
        throw new Error("Invalid character");
    }

    if (attacker.strength > defender.defense) {
        defender.life -= attacker.strength - defender.defense;
    }
    };
~~~


*c. Explique, com as suas palavras, as diferenças entre as duas implementações*
-  A implementação com inversão de dependências utiliza a função validateCharacter passada como parâmetro.

## Excercício 04 

a. De qual das duas funções (*`validateCharacter` ou `performAttack`)  deveremos criar um Mock nos próximos testes? Justifique.

- performAttack

b. Crie um Mock dessa função que represente a saída de sucesso do seu comportamento

~~~typescript
 test("Creating Mocks", () => {
        const validatorMock = jest.fn(() => {
                return true
        });
    });

~~~
c. Crie um Mock dessa função que representa a saída de erro/falha do seu comportamento


~~~typescript
 test("Creating Mocks", () => {
        const validatorMock = jest.fn(() => {
                return false
        });
    });

~~~