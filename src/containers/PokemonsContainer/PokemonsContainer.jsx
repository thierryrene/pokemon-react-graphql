import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMONS } from "../../graphql/get-pokemons.js";
import { Pokemon } from "../../components/Pokemon/Pokemon";

export function PokemonsContainer() {
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 20 },
  });

  return (
    <div className="pokemons">
      {pokemons &&
        pokemons.map((pokemon) => (
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        ))}
    </div>
  );
}
