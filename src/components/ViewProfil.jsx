import React from 'react'
import profils from '../assets/profils.svg'
import edit from '../assets/edit.svg'
import '../styles/ViewProfil.css'
import Entete from "./Entete";

export default function ViewProfil() {
  return (
    <>
        <div className='viewProfil'>
          <div className="profil">
        <img src={profils} height="70"/>
        <p>Changer</p>
          </div>
          <div className="formProfil">
          <p><strong>Id</strong> AMA-100</p>
          <p><strong>Nom Complet</strong> AMA-100</p>
          <p><strong>Numéro</strong> 0767571379 <img src={edit} height="20" /></p>
          <button className='but'>DECONNEXION</button>
          </div>
        </div>
    </>
  )
}
