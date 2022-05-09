import React from 'react'
import check from '../assets/check.svg'
import Entete from "./Entete";

export default function ConfirmationRecha() {
  return (
    <>
      <div className='recha'>
    <div className='box-recha'>
        <div className="txt-confi">
        <img src={check} height="160px" />
        <h2 className='txt-confiRecha'>Votre rechargement à bien été ajouté</h2>
        </div>
        </div>
        </div>
    </>
  )
}
