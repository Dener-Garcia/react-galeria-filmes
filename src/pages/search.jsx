import React, { useEffect } from "react"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"

// o useSearchParams permite pegar a query string da url e resgatar um texto e pegar os dados pela api

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY



import MovieCard from "../components/movie-card"


const Search = () => {

    const [searchParams] = useSearchParams()
    // voce percebeu que deu erro pois o useSearchParams eh uma lista de varias funcoes, para resolver vamos envolver nossa const num array para desiistruturar

    const [movieFound, setMovieFound] = useState([])

    const query = searchParams.get("q") 
    // a ideia aqui eh capturar o que tiver apos o q na minha url (http://localhost:5173/search?q=batman), ai no jsx abaixo eu mostrou isso dentro de um span ou seja somente o batman.

    return (
        <>
        <h1>Search</h1>
        <div className="container">
      <h2 className="tittle">Resultado da busca para: </h2>
      <span>{query}</span>
    
    </div>
        
        </>
    )
}

export default Search