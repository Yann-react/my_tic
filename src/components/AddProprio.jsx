import React from 'react'
import arrowLeft from '../assets/arrow-left.svg'
import '../styles/Proprio.css'
import Entete from "../components/Entete";
import axios from 'axios';
export default function AddProprio() {

  function handleSbmit2(){
    
    const nom = document.getElementById('nom').value
    const prenom = document.getElementById('prenom').value
    const quartier= document.getElementById('quartier').value
    const commun= document.getElementById('commun').value
    const telephone = document.getElementById('telephone').value
    const nombreCondu = document.getElementById('nombreCondu').value
       const url =  encodeURI("http://tryconnectadmin/addProprio.php?nom="+nom+"&prenom="+prenom+"&communeCondu="+commun+"&quartierCondu="+quartier+"&telephone="+telephone+"&nombreCondu="+nombreCondu)

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
      <div className='box-addPro'>
      <div className="teteRecharge">
          <img src={arrowLeft} height="30" className='arrowleft' />
          <h1 className='title-addP'>PROPRIETAIRE</h1>
      </div>
      <div action="" className='formAddCon'>
          <div className="presenProprio">
          <label htmlFor="nom" className='nmPro'>Nom</label>
          <input type="text" name='nom' id='nom'  />
          <label htmlFor="prenom">Prenom</label>
          <input type="text" name='prenom' id='prenom' />
          </div>
          <div className="adressProprio">
          <label htmlFor="nombreCondu">Nombre De Conducteur</label>
          <input type="text" name='nombreCondu' id='nombreCondu' />
          <label htmlFor="telephone">Téléphone</label>
          <input type="text" name='telephone' id='telephone' />
          </div>
          <div className='quartirs'>
          <label htmlFor="Commune Du Conducteur">Commune Du Conducteur</label>
          <input type="text" name='Commune Du Conducteur' id='commun' />
          <label htmlFor="Quartier Du Conducteur" className='cond'>Quartier Du Conducteur</label>
          <input type="text" name='Quartier Du Conducteur' id='quartier' />
          </div>
          <button className='but-condu' onClick={handleSbmit2}>VALIDER</button>
      </div>
      </div>
      </div>

      </>
  )
}
