import React from 'react'
import arrowLeft from '../assets/arrow-left.svg'

export default function UpdatProprio() {
  return (
    <>
    <div className='recha'>
      <div className='box-add'>
      <div className="teteRecharge">
          <img src={arrowLeft} height="30" className='arrowleft' />
          <h1 className='title-add'>PROPRIETAIRE</h1>
      </div>
      <form action="" className='formAddCon'>
          <div className="presenProprio">
          <label htmlFor="nom" className='nmPro'>Nom</label>
          <input type="text" name='nom' />
          <label htmlFor="prenom">Prenom</label>
          <input type="text" name='prenom' />
          </div>
          <div className="adressProprio">
          <label htmlFor="nombreCondu">Nombre De Conducteur</label>
          <input type="text" name='nombreCondu' />
          <label htmlFor="telephone">Téléphone</label>
          <input type="text" name='telephone' />
          </div>
          <div className='quartirs'>
          <label htmlFor="adressCondu">Adress Du  Conducteur</label>
          <input type="text" name='adressCondu' />
          </div>
          <button className='but-condu'>MODIFIER</button>
      </form>
      </div>
      </div>
      </>  )
}
