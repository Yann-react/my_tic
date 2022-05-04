import React from 'react'
import arrowLeft from '../assets/arrow-left.svg'

export default function UpdatConductor() {
  return (
    <>
  <div className='recha'>
    <div className='box-add'>
    <div className="teteRecharge">
        <img src={arrowLeft} height="30" className='arrowleft' />
        <h1 className='title-add'>CONDUCTEUR</h1>
    </div>
    <form action="" className='formAddCon'>
        <div className="presenCon">
        <label htmlFor="nom">Nom</label>
        <input type="text" name='nom' />
        <label htmlFor="prenom">Prenom</label>
        <input type="text" name='prenom' />
        </div>
        <div className="adressCon">
        <label htmlFor="commun">Commune</label>
        <input type="text" name='commun' />
        <label htmlFor="telephone">Téléphone</label>
        <input type="text" name='telephone' />
        </div>
        <div className='quartir'>
        <label htmlFor="quartier">Quartier</label>
        <input type="text" name='quartier' />
        </div>
        <button className='but-condu'>MODIFIER</button>
    </form>
    </div>
    </div>
    </>
  )
}
