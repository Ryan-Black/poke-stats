import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar bg-primary">
      <h1>PokeStats</h1>
      <ul>
        <li>
          <Link to="/">PokeList</Link>
        </li>
        <li>
          <Link to="/pokedex">PokeDex</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
