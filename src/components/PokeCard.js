import React from 'react';
import typeColors from '../helpers/colors';

const PokeCard = ({ pokemon }) => {
  const main_types = Object.keys(typeColors);
  const poke_types = pokemon.types.map((type) => type.type.name);
  const type = main_types.find((type) => poke_types.indexOf(type) > -1);

  return (
    <figure
      className="card"
      style={{
        background: `linear-gradient(120deg, ${typeColors[type]} 0%, rgba(0, 0, 0, 0.9) 100%)`,
      }}
    >
      <div className="card-img-container">
        <img src={pokemon.sprites.front_default} alt="" className="card-img" />
      </div>
      <figcaption className="card-caption">
        <h1 className="card-name">
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </h1>

        <h3
          class="card-type"
          style={{
            backgroundColor: typeColors[type],
          }}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </h3>

        <table className="card-stats">
          <tbody>
            <tr>
              <th>Weight:</th>
              <td>{pokemon.weight}</td>
            </tr>
            <tr>
              <th>Height:</th>
              <td>{pokemon.height}</td>
            </tr>
            <tr>
              <th>Types:</th>
              {pokemon.types.map((type) => {
                return (
                  <td>
                    {type.type.name.charAt(0).toUpperCase() +
                      type.type.name.slice(1)}
                  </td>
                );
              })}
            </tr>
          </tbody>
          <div className="card-abilities">
            <h4 className="card-ability">
              <span className="card-label">Ability</span>
              {pokemon.abilities[0].ability.name.charAt(0).toUpperCase() +
                pokemon.abilities[0].ability.name.slice(1)}
            </h4>
          </div>
        </table>
      </figcaption>
    </figure>
  );
};

export default PokeCard;
