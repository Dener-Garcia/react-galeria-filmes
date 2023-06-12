# Criando projeto React com Vite

- Rode os comando abaixo para criar seu projeto

        npm create vite@latest

- Entre na pasta do projeto para instalar as dependencias do node

        npm install

## Limpando o projeto

Apague imagens, e arquivos como paginas que nao seram usados no seu projeto

- Apague conteudo do app.css
- Imagens da pasta public e assets
- O arquivo app.jsx deve ficar limpo conforme exemplo abaixo:

        function App() {
        return (
        <>
        </>
        )}


export default App

## Instalando bibliotecas para projeto

- Instale o React Icons

        npm install react-icons --save

- Instale o React Router Dom

        npm install react-router-dom --save

## Configurando o projeto

> Variaveis de ambiente

- Crie um arquivo na raiz com as variaveis de ambiente chamado .env

Geralmente colocamos aqui variaveis como key de api, links, por padrao o vite pede que comecem com VITE_NOME_VAR

- Exemplo

        VITE_API_SITE=https://api.themoviedb.org/3/movie/
        VITE_SEARCH=https://api.themoviedb.org/3/search/movie/
        vite_img=https://image.tmdb.org/t/p/w500

## Criando Rotas

- Crie umas pasta dentro de src chamada pages e crie arquivos .jsx com os nomes das rotas

> Configurando as Rotas

dentro do Main.jsx configure as rotas conforme abaixo:

        // Importando react router dom
        import { BrowserRouter, Routes, Route } from 'react-router-dom'

>

        // Importando as paginas
        import Home from './pages/home.jsx'
        import Movie from './pages/movie.jsx'
        import Search from './pages/search.jsx'

Dentro do <React.StrictMode> retire o componente App e configure o router dom:

    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<Movie />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>

Routes = Dentro dele teremos as rotas
Route element: App = Todas as rotas vao girar em torno do componente App.jsx nesse primeiro Route precisamos definir o elemento pai da aplicacao por isso colocamos o App aqui
Route = Sao as paginas ou rotas que vamos ter no projeto

> Criando um navbar para os links

Dentro do App import o Link e crie um nav bar para testar se a URL esta trocando no navegador

        import { Link } from "react-router-dom";

        <nav className="navbar">
        <a>
          <Link to="/"> MoviesLib</Link>
        </a>
        <a>
          <Link to="/movie/1"> movie</Link>
        </a>
        <a>
          <Link to="/search"> movie3</Link>
        </a>
      </nav>
      <Outlet />

Repare que a url do navegador muda mas nao aparece o componente na pagina entao abaixo do fechamento do Nav coloque o componente Outlet

> Finalizando Nav bar

Agora componentize a nav bar, crie uma pasta components dentrou outra pasta para navbar e por fim um index.jsx, copie somente toda a tag nav do codigo acima deixando o Outlet no app.jsx

Seu app.jsx deve ficar como abaixo somente chamando o component navbars

      function App() {
      return (
      <>
      <h1>App Home</h1>
      <NavBars />
      <Outlet/>
      </>
      );}

## Usando biblioteca de icones

Apos instalar a biblioteca de icones para usar basta seguir o fluxo abaix, import no documento o nome do icone e use-o como um component

        import { BiSearchAlt2 } from "react-icons/bi"


        <button type="submit"> <BiSearchAlt2/> </button>

## Trabalhando com a API arquivo home.jsx

Iremos requisitar dados vindos de uma api para isso iremos criar algumas estruturas no nosso codigo que sao arrow functions basicamente

> Atribuindo as variaveis de ambiente .env em const

        const moviesURL = import.meta.env.VITE_API_SITE
        const apiKey = import.meta.env.VITE_API_KEY

> Atribuindo as variaveis de ambiente .env em const

        const moviesURL = import.meta.env.VITE_API_SITE
        const apiKey = import.meta.env.VITE_API_KEY

> Criando um useState para agrupar os melhores filmes que vem da api sera um array vazio

        const [topMovies, setTopMovies] = useState([])

> Criando uma funcao para chamar os filmes da api e jogar dentro do array do useState criando acima

        const getTopRatedMovies = async (url) => {
        const resposta = await fetch (url)
        const data = await resposta.json()
        console.log("dados do json = ", data)
        setTopMovies(data.results)
        };

- const getTopRatedMovies = async (url) : nome da funcao do tipo async que aguarda uma resposta, como parametro passamos o endereco da url da api
- const resposta = await fetch (url) : baseado no meu await fetch para a url
- const data = await resposta.json() : aqui recebendo os dados e transformando eles em um objeto javascript em json
- setTopMovies(data.results) : pegando somente os results pois a api manda os resultado em pagina 1, pagina 2 etc...

> Chamando a funcao de receber os dados com o useEffect

O use effect permite executar uma funcao em alguns estagios da aplicacao por exemplo com um array vazio quando ele for modificado ira atualizar o array de dados chamando novamente esse useEffect

        useEffect(() =>{ 
        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`
        getTopRatedMovies(topRatedUrl)
        }, [])

- const topRatedUrl = `${moviesURL}top_rated?${apiKey}`
        getTopRatedMovies(topRatedUrl) : Estou montando a url junto com minha key da api, cada api pode trabalhar de um jeito procure pela documentacao
- getTopRatedMovies(topRatedUrl) : Chamando a funcao getTopRatedMovies que vai trazer os filmes em forma de dados e estou passando a url mais minha key como parametro para essa funcao poder trazer os dados

Para ver os dados no dev tools va na aba "NETWORK" > FETCH/XHR > clique na requisicao do status 200 na aba que se abre va em preview




# parei no 27:10 - projeto de filmes com react e api https://www.youtube.com/watch?v=XqxUHVVO7-U