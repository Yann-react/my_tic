import React, {useEffect} from 'react'
import arrowLeft from '../assets/arrow-left.svg'
import '../styles/AddConductor.css'
import Entete from "./Entete";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function AddConductor() {
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

function handleSbmit1(){
  
  const nom = document.getElementById('nom').value
      const prenom = document.getElementById('prenom').value
      const commun = document.getElementById('commun').value
      const telephone = document.getElementById('telephone').value
      const quartier = document.getElementById('quartier').value
      const idAdmin = sessionStorage.getItem("matricule");

      const url =  encodeURI("http://tryconnectadmin/addConduct.php?nom="+nom+"&prenom="+prenom+"&commune="+commun+"&quartier="+quartier+"&telephone="+telephone+"&idAdmin="+idAdmin)
      
      axios.get(url)
      .then(function (response) {
        // handle success
         if(response.data.succes){
           alert('Conducteur à bien été ajouté')
          navigate('condu')

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
                    <Entete nomComplet={sessionStorage.getItem('nomComplet')} lienProfil="#" showAjouter={false} />

     <div className='recha'>
    <div className='box-add'>
    <div className="teteRecharge">
    <img src={arrowLeft} height="30" className='arrowleft' onClick={()=>navigate('condu')} />
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
