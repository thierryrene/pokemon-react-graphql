import React from "react";
import "./Pokemon.scss";

export const Pokemon = ({ pokemon }) => {
  const pokemonHpStyle = {
    width: pokemon.maxHP / 10,
  };

  const pokemonCpStyle = {
    width: pokemon.maxCP / 12,
  };

  return (
    <div className="card pokemon__container">
      <img src={pokemon.image} className="card-img-top" alt={pokemon.name} />
      <div className="card-body">
        <h5 className="card-title">{pokemon.name}</h5>
        <span>HP</span>
        <div class="progress">
          <div
            class="progress-bar progress-bar-striped progress-bar-animated bg-danger"
            style={pokemonHpStyle}
          >
            {pokemon.maxHP}
          </div>
        </div>
        <span>CP</span>
        <div class="progress">
          <div
            class="progress-bar progress-bar-striped progress-bar-animated bg-primary"
            style={pokemonCpStyle}
          >
            {pokemon.maxCP}
          </div>
        </div>
        {/* <a href="#" className="btn btn-primary text-capitalize">
          ver detalhes
        </a> */}
      </div>
    </div>
  );
};
