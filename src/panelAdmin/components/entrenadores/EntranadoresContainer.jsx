import React from 'react'
import { TablaEntrenadores } from './TablaEntrenadores'

export const EntranadoresContainer = ({ handleShow }) => {
  return (
    <>
        <div className="row mt-3 mb-3">
            <div className="col-12 text-center">
                <h1>Lista de Entrenadores</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-12 text-center">
            <TablaEntrenadores
                onShowModal = { handleShow }
                
            />
            </div>      
        </div>
    </>
  )
}
