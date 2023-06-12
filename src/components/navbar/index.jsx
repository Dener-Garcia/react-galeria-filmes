import React from "react";
import { Link } from "react-router-dom";

import {BiCameraMovie, BiSearchAlt2} from "react-icons/bi"


const NavBars = () => {
    return (
        <nav className="navbar">
        <a>
          <Link to="/"> <BiCameraMovie/> Biblioteca de filmes</Link>
        </a>
        <a>
          <Link to="/movie/1"> movie</Link>
        </a>
        <a>
          <Link to="/search"> movie3</Link>
        </a>
      <form>
        <input type="text" placeholder="Encontre um filme"/>
        <button type="submit"><BiSearchAlt2/></button>
      </form>
      </nav>
    )
}

export default NavBars