import React from 'react';
import datosPokemon from './pokemons';

const TarjetaPokemon = ({ nombre, imagen }) => {
  return (
    <div className="tarjeta-pokemon">
      <img src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
    </div>
  );
};

const ListaPokemon = () => {
  const rows = [];
  for (let i = 0; i < datosPokemon.length; i += 3) {
    rows.push(datosPokemon.slice(i, i + 3));
  }

  return (
    <div className="lista-pokemon">
      {rows.map((row, index) => (
        <div className="fila-pokemon" key={index}>
          {row.map(pokemon => (
            <TarjetaPokemon key={pokemon.id} nombre={pokemon.nombre} imagen={pokemon.imagen} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ListaPokemon;