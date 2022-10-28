# CASE PROMOBIT  

Case para o curso de formação Full Stack do curso da [Labenu](https://www.labenu.com.br/), consumo da api [themoviedb](https://developers.themoviedb.org/3/getting-started/introduction)

##  SCRIPT

Acesse o repositório clonado e digite no terminal:

### `npm install`
### `npm start`

Ao executar abra o navegador no endereço [http://localhost:3000](http://localhost:3000) para vizualizar a aplicação, por padrão isso ocorre automaticamente. 

## FERRAMENTAS UTILIZADAS 

- Framework[React](https://pt-br.reactjs.org/)
- Rotas [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- Requisições HTTP com [axios](npmjs.com/package/axios)
- Estilos com [styled-components](https://www.npmjs.com/package/styled-components)


##  PÁGINAS (`ROTA`)

- Home (`/`)
- Search (`/search`)
- Filmes populates (`/movie/popular`) 
- Filmes com melhor classificação (`/movie/top_rated`)
- Detalhes do filme (`/movie/:id`)

## AXIOS

`npm install axios`

### Instância (src/services)

No diretório `services` foi criada uma instância do `axios` com uma configuração personalizada no arquivo api.js.

[axios.create([config])](https://axios-http.com/docs/instance)

- Importar a biblioteca axios;
- Criar a instância passando a url base da api consumida como parâmetro;
- Exportar a instância para ser utilizada na aplicação.

```js
    import axios from "axios";

    const api = axios.create({
        baseURL: `https://api.themoviedb.org/3/`
    })

    export default api;
```

# DESCRIÇÃO DAS IMPLEMENTAÇÕES DA PÁGINA PopularMovies
## Hooks

São funções que permitem a utilização do state e outros recursos do React sem escrever uma classe.
### useState()

O [useState()](https://reactjs.org/docs/hooks-state.html) é uma função especial que permite a utilização de recursos do React, retornando um par de valores composto por: 
- popularMovies: variável que armazena o estado atual;
- setPopularMovies: função que atualiza o estado da variável popularMovies;
- useState([]): indica o estado ininial da variável 

Resumo: a variável `popularMovie` será responsável por receber as informações que seráo puxadas da requisição HTTP, e ela inicia com um array [] vazio.

```js

import { useState } from "react";  //IMPORTANDO O HOOK 

const PopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState([]);  //DECLARANO A VARIÁVEL DE ESTADO
  //...
};
```
## Requisição

### Axis

Ao criar a instância do `axios` os métodos que a api possui ficam disponíveis para utilização.\
Segue um exemplo de como fazer uma requisição utilizando o método`.get`, veja outros [métodos](https://axios-http.com/ptbr/docs/post_example).

```js
import api from "../../services/api";


const PopularMovies = () => {
  //...[VARIAVEL DE ESTADO] 

const takePopularMovies = () => { //DECLARAÇÃO DA FUNÇÃO QUE FAZ A REQUISIÇÃO DOS FILMES POPULARES
    api.get(`movie/popular?${API_KEY}`) //CHAMADA DO MÉTODO GET A PARTIR DA INSTÂNCIA DO AXIOS(import..)
    .then((res) => {
      setPopularMovies(res.data.results) //FUNÇÃO DE ATUALIZAÇÃO DA VARIAVEL DE ESTADO popularMovies
    }).catch((error) => {
      console.log(error.code)
    })

  }
};

export default PopularMovies;
```
### RENDERIZANDO INFORMAÇÕES

```js
const PopularMovies = () => {
  //...[VARIAVEL DE ESTADO]
 
 //...[REQUISIÇÃO AXIOS]

  return (
      <Container>
          <Title className="title">Filmes populares no momento</Title>
        <div div className="topMovies">
            {popularMovies.length > 0 && popularMovies.map((pm) =>
              <MovieCard key={pm.id} movie={pm}/>
            )}
        </div>
        //...
    </Container>
  )
};

export default PopularMovies;

```
### STYLED COMPONENTS 

```js
export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    //...
`

export const Title = styled.div`
    display: flex;
    flex-wrap: wrap;
    //...
`
```
### COMPONENTE MOVIE CARD

