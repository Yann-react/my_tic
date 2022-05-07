import React from 'react'
import arrowLeft from '../assets/arrow-left.svg'
import '../styles/AddConductor.css'
import Entete from "../components/Entete";
import axios from 'axios';

export default function AddConductor() {


  function handleSbmit1(){
      
      const nom = document.getElementById('nom').value
      const prenom = document.getElementById('prenom').value
      const commun = document.getElementById('commun').value
      const telephone = document.getElementById('telephone').value
      const quartier = document.getElementById('quartier').value
      const url =  encodeURI("http://tryconnectadmin/addConduct.php?nom="+nom+"&prenom="+prenom+"&commune="+commun+"&quartier="+quartier+"&telephone="+telephone)

       axios.get(url)
       .then(function (response) {
         // handle success
         console.log(response);
       })
       .catch(function (error) {
         // handle error
         console.log(error);
       })
       .then(function () {
         // always executed
       });
   }
   




  return (
    <>
   <Entete nomComplet="AMANI KONE" lienProfil="#" />

     <div className='recha'>
    <div className='box-add'>
    <div className="teteRecharge">
        <img src={arrowLeft} height="30" className='arrowleft' />
        <h1 className='title-add'>CONDUCTEUR</h1>
    </div>
    <div className='formAddCon'>
        <div className="presenCon">
        <label htmlFor="nom">Nom</label>
        <input type="text" name='nom' id='nom' />
        <label htmlFor="prenom">Prenom</label>
        <input type="text" name='prenom' id='prenom' />
        </div>
        <div className="adressCon">
        <label htmlFor="commun">Commune</label>
        <input type="text" name='commun' id='commun' />
        <label htmlFor="telephone">Téléphone</label>
        <input type="text" name='telephone' id='telephone' />
        </div>
        <div className='quartir'>
        <label htmlFor="quartier">Quartier</label>
        <input type="text" name='quartier' id='quartier' />
        </div>
        <button className='but-condu' onClick={handleSbmit1}>VALIDER</button>
    </div>
    </div>
    </div>
    </>
  )
}
