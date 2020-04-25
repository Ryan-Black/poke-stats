import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { getPokemon, getAllPokemon } from './api';
import Navbar from './components/Navbar';
import PokeCard from './components/PokeCard';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const initialURL = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=151';

  useEffect(() => {
    async function fetchData() {
      let res = await getAllPokemon(initialURL);
      await loadPokemon(res.results);
    }
    fetchData();
  }, []);

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await getPokemon(pokemon);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="grid-container">
          {pokemonData.map((pokemon, i) => {
            return <PokeCard key={i} pokemon={pokemon} />;
          })}
        </div>
      </div>
    </Router>
  );
}

export default App;
