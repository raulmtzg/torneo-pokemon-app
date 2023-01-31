

export const TiposPokemonListItem = ({pokemons}) => {
   
   const water = pokemons.find(e => e.tipo === 'water')
   const fire = pokemons.find(e => e.tipo === 'fire')
   const grass = pokemons.find(e => e.tipo === 'grass')
   const ground = pokemons.find(e => e.tipo === 'ground')
   const rock = pokemons.find(e => e.tipo === 'rock')
   const steel = pokemons.find(e => e.tipo === 'steel')
   const ice = pokemons.find(e => e.tipo === 'ice')
   const electric = pokemons.find(e => e.tipo === 'electric')
   const dragon = pokemons.find(e => e.tipo === 'dragon')
   const ghost = pokemons.find(e => e.tipo === 'ghost')
   const psychic = pokemons.find(e => e.tipo === 'psychic')
   const normal = pokemons.find(e => e.tipo === 'normal')
   const fighting = pokemons.find(e => e.tipo === 'fighting')
   const poison = pokemons.find(e => e.tipo === 'poison')
   const bug = pokemons.find(e => e.tipo === 'bug')
   const flying = pokemons.find(e => e.tipo === 'flying')
   const dark = pokemons.find(e => e.tipo === 'dark')
   const fairy = pokemons.find(e => e.tipo === 'fairy')
  

  return (
    <>

        <div className="col-3 text-center">
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Water <span className="badge bg-primary rounded-pill">
                    {
                        water !== undefined ? water.total : '0'
                    }
                </span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Fire <span className="badge bg-primary rounded-pill">
                    {
                        fire !== undefined ? fire.total : '0'
                    }
                </span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Grass <span className="badge bg-primary rounded-pill">{grass !== undefined ? grass.total : '0'}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Ground <span className="badge bg-primary rounded-pill">{ground !== undefined ? ground.total : '0'}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Rock <span className="badge bg-primary rounded-pill">{rock !== undefined ? rock.total : '0'}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Steel <span className="badge bg-primary rounded-pill">{steel !== undefined ? steel.total : '0'}</span>
              </li>
              
            </ul>
          </div>
          <div className="col-3 text-center">
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Ice <span className="badge bg-primary rounded-pill">{ice !== undefined ? ice.total : '0'}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Electric <span className="badge bg-primary rounded-pill">{electric !== undefined ? electric.total : '0'}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Dragon <span className="badge bg-primary rounded-pill">{dragon !== undefined ? dragon.total : '0'}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Ghost <span className="badge bg-primary rounded-pill">{ghost !== undefined ? ghost.total : '0'}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Psychic <span className="badge bg-primary rounded-pill">{psychic !== undefined ? psychic.total : '0'}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Normal <span className="badge bg-primary rounded-pill">{normal !== undefined ? normal.total : '0'}</span>
              </li>              
            </ul>
          </div>

          <div className="col-3 text-center">
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Fighting <span className="badge bg-primary rounded-pill">{fighting !== undefined ? fighting.total : '0'}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Poison <span className="badge bg-primary rounded-pill">{poison !== undefined ? poison.total : '0'}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Bug <span className="badge bg-primary rounded-pill">{bug !== undefined ? bug.total : '0'}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Flying <span className="badge bg-primary rounded-pill">{flying !== undefined ? flying.total : '0'}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Dark <span className="badge bg-primary rounded-pill">{dark !== undefined ? dark.total : '0'}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Fairy <span className="badge bg-primary rounded-pill">{fairy !== undefined ? fairy.total : '0'}</span>
              </li>              
            </ul>
          </div>
    </>
  )
}
