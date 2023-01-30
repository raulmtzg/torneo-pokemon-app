import React from 'react'

export const CardPokemon = () => {
  return (

    <>
        <div className="d-flex position-relative w-100">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" className="flex-shrink-0 me-3 imgPokemonCard" alt="..." />
            <div className="w-100">
            <h5 className="mt-0">Pokémon más utilizado</h5>
            <p>Name: Balbasur</p>                                
            <div className="d-flex justify-content-between">
                <span className="float-start">HP: 100k</span>
                <span className="float-end">Attack: 100k</span>
                <span>Defense: 100k</span>
            </div>
            
            </div>
        </div>
    </>
  )
}
