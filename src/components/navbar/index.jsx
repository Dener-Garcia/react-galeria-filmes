import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi"



const NavBars = () => {

  const [search, setSearch] = useState("")

  // criando um redirecionamento quando o usuario clicar no botao de busca vamos o usar o navigate basta atrelar ele a uma variavel, isso sera nosso filtro

  const renavigate = useNavigate()

  // mapeando um evento para o submit do input

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(search)

    // cirando e validando o filtro, caso usuario nao digite nada nao quero que mostre a pagina pra ele

    if (!search) {
      console.log("nao tem nada no campo")

    } else {
      console.log("entrei na funcao de redirecionar")
      renavigate(`/search?q=${search}`)
      // apos redirecionar vou limpar o campo de input
      setSearch("")
    }
  }

  console.log(search)

  return (
    <nav className="navbar">
      <a>
        <Link to="/"> <BiCameraMovie /> Biblioteca de filmes</Link>
      </a>
      <a>
        <Link to="/movie/1"> movie</Link>
      </a>
      <a>
        <Link to="/search"> movie3</Link>
      </a>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Encontre um filme"
          onChange={(e) => setSearch(e.target.value)}
          value={search} // colocamos o value o proprio estado para ele limpar o campo ao carregar a pagina eh um truque
        />
        <button type="submit"><BiSearchAlt2 /></button>
      </form>
    </nav>
  )
}

export default NavBars