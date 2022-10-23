# CASE PROMOBIT  

Case para o curso de formação Full Stack do curso da [Labenu](https://www.labenu.com.br/), consumo da api [themoviedb](https://developers.themoviedb.org/3/getting-started/introduction)

##  SCRIPT

Acesse o repositório clonado e digite no terminal:

### `npm install`
### `npm start`

Ao executar abra o navegador no endereço [http://localhost:3000](http://localhost:3000) para vizualizar a aplicação, por padrão isso ocorre automaticamente. 

## FERRAMENTAS UTILIZADAS 

- [React](https://pt-br.reactjs.org/)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [axios](npmjs.com/package/axios)
- [styled-components](https://www.npmjs.com/package/styled-components)


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
### Requisição

Ao criar a instância do `axios` os métodos que a api possui ficam disponíveis para utilização. Segue um exemplo de como fazer uma requisição com o método `.get` 
- axios.get()


```js
const takePopularMovies = () => {
    api.get(`movie/popular?${API_KEY}`)
    .then((res) => {
      setPopularMovies(res.data.results)
    }).catch((error) => {
      console.log(error.code)
    })

  }
```
Exemplo de requisição com `fetch`
```js
  const {id} = useParams()
  const [movie, setMovie] =useState(null)

  const getMovie = async(url) => {
    const res = await fetch(url)
    const data = await res.json() 

    setMovie(data)
  }

  useEffect(() =>{
    const movieUrl =`${BASE_URL}${id}?${API_KEY}`
    getMovie(movieUrl)
  }, [id])
  ```js