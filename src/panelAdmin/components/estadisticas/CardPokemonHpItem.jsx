

export const CardPokemonHpItem = ({pokemon}) => {
  
    const {nombre, hp, porcentaje} = pokemon
    return (
      <>
          <div className="mb-2">
              <div className="clearfix">
              <span className="float-start">{nombre.toUpperCase()} - {hp}k</span>
              <span className="float-end">{porcentaje}%</span>
              </div>
              <div className="progress" role="progressbar">
              <div className="progress-bar" style={{ width: `${porcentaje}%` }}></div>
              </div>
          </div>
      </>
    )
  }
  