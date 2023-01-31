

export const CardPokemonTopItem = ({pokemon}) => {
  
  const {nombre, total, porcentaje} = pokemon
  return (
    <>
        <div className="mb-2">
            <div className="clearfix">
            <span className="float-start">{nombre.toUpperCase()} - {total} veces utilizado</span>
            <span className="float-end">{porcentaje}%</span>
            </div>
            <div className="progress" role="progressbar">
            <div className="progress-bar" style={{ width: `${porcentaje}%` }}></div>
            </div>
        </div>
    </>
  )
}
