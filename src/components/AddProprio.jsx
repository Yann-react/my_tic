import React, {useEffect} from 'react'
import arrowLeft from '../assets/arrow-left.svg'
import '../styles/Proprio.css'
import Entete from "./Entete";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddProprio() {

  const navigate = useNavigate()

  function verifierConnexion(){
    if((window.sessionStorage.getItem("matricule")!=null)&&(window.sessionStorage.getItem("mdp")!=null)){
        const matricul = window.sessionStorage.getItem("matricule")
        const password = window.sessionStorage.getItem("mdp")
       const url =  encodeURI("http://tryconnectadmin/tryConnectAdmin.php?matricule="+matricul+"&mdp="+password)
    
     axios.get(url)
         .then(function (response) {
             console.log(response.data);
             if(response.data.succes){
                 //Ok il est connecté, il peut rester
             }else{
                 //Il degage
                navigate('/');
             }
         })
         .catch(function (error) {
             console.log(error);
         })
         .then(function () {
         })  
    }else{
        //Deco
        navigate('/');
    }
}

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
         if(response.data.succes){
          alert('Proprietaire à bien été ajouté')
         }
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
       .then(function () {
         // always executed
        });
      }
      useEffect(()=>{
        verifierConnexion()
      },[])
      return (
        <>
                    <Entete nomComplet={sessionStorage.getItem('nomComplet')} lienProfil="#" />

    <div className='recha'>
      <div className='box-addPro'>
      <div className="teteRecharge">
        <img src={arrowLeft} height="30" className='arrowleft' onClick={()=>navigate('proprio')} />
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
