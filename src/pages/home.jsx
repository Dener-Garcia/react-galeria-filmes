import React from "react"
import { useState, useEffect } from "react"

const moviesURL = import.meta.env.VITE_API_SITE
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {

const [topMovies, setTopMovies] = useState([])

const getTopRatedMovies = async (url) => {
    const resposta = await fetch (url)
    const data = await resposta.json()

    console.log("dados do json", data)

    // pegando somente os objetos dentro do results do retorno do fetch pois o arquivo da api vem paginado

    setTopMovies(data.results)
};

useEffect(() =>{ 
    const topRatedUrl = moviesURL+"top_rated?"+apiKey  // ou com template string `${moviesURL}top_rated?${apiKey}`

    getTopRatedMovies(topRatedUrl)
    console.log(topRatedUrl)
}, [])

    return(
        <>
        <h1>Home</h1>

        {topMovies && topMovies.map((listaTitulos)=> 
        <p>{listaTitulos.title}</p>)}

        </>
    )
}

export default Home