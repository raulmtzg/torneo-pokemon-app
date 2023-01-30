import React from 'react'
import { CardEstadisticaItem } from './CardEstadisticaItem'

export const CardEstadistica = ({titleCard, colorCard}) => {
    // const clases = `col-5 bg-${colorCard} bg-opacity-25 pt-5 pb-5 rounded mx-4`;
  return (
    <>

        <div className={`col-5 bg-${colorCard} bg-opacity-25 pt-5 pb-5 rounded mx-4`}>
            <h5 className="text-center mb-3"> { titleCard } </h5>
            
            <CardEstadisticaItem progress='50' barTitle='Balbasur' />
            <CardEstadisticaItem progress='30' barTitle='Pikachu' />
            <CardEstadisticaItem progress='40' barTitle='Charmander' />
            
        </div>
    </>
  )
}
