import React from 'react';
import '../styles/style_entete.css';
import { useNavigate } from "react-router-dom";
export default function Entete({nomComplet, lienProfil , name, showAjouter}){
  
   const navigate = useNavigate();
   function choose (){
    switch (name) {
        case 'conducteur':
         return navigate('/AddCondu')
          break;
        case 'proprietaire':
            return navigate('/AddProprio')
            break;
        case 'rechargement':
            return   navigate('/RechargeForm')
          break;    
   }
}
    return (
        <header id="entete">
            <div id="logo" onClick={()=>navigate('/Menu')}>
                <span className='m'>M</span>y
                <span className='tir'>-</span>
                <span className='tic'>tic</span>
            </div>
            <div id="enteteDroite">
                {
                    showAjouter==false?
                        <div></div>
                    :
                    <a href="#" id='ajoutBTN' onClick={choose}>AJOUTER</a>
                }
                <a id="userIcon" href='#'>
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={()=> navigate('/profils')} viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"/></svg>
                </a>
                <div id='userName'>{nomComplet}</div>
            </div>
        </header>
    );
}
