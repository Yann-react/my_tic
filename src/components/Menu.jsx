import React from 'react'
import '../styles/Menu.css'
import owner from '../assets/owner.svg'
import rechar from '../assets/rechar.svg'
import driv from '../assets/driv.svg'
import Entete from "./Entete";

import { useNavigate } from "react-router-dom";

export default function Menu() {

    const navigate = useNavigate()

  return (
    <>
                    <Entete nomComplet={sessionStorage.getItem('nomComplet')} lienProfil="#" />

        <div className='box-menu'>
            <div className='box-condu'><img src={driv}  height="170px" onClick={()=> navigate('/condu') } /><h2 id='titl-box-mnu'>CONDUCTEUR</h2></div>
            <div className='box-propr'><img src={owner} height="170px"  onClick={()=> navigate('/proprio') }  /><h2 id='titl-box-mnu'>PROPRIETAIRE</h2></div>
            <div className='box-rechar'><img src={rechar}  height="170px" onClick={()=> navigate('/rechar') } /><h2 id='titl-box-mnu'>RECHARGEMENT</h2></div>
        </div>
    </>
  )
}
