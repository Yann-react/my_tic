import React from 'react'
import arrowLeft from '../assets/arrow-left.svg'
import '../styles/styleAddAdmin.css'
import Entete from "../components/Entete";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import md5 from 'md5';
import { useEffect,useState } from 'react';

export default function SetPasswordSuper() {
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
                navigate('/LoginSuper');
             }
         })
         .catch(function (error) {
             console.log(error);
         })
         .then(function () {
         })  
    }else{
        //Deco
        navigate('/LoginSuper');
    }
}
 
  function versDashSuper(){
    navigate('/DashSuper');
  }
  
  function validSetPassword(){
    const actu = document.getElementById('actu').value;
    const nouv1 = document.getElementById('nouv1').value;
    const nouv2 = document.getElementById('nouv2').value;

    

    if(nouv1!=nouv2){
      alert("Les 2 mots de passe de sont pas identiques");
    }
    else{
      const connurl =  encodeURI("http://tryconnectadmin/tryConnectSuperAdmin.php?matricule="+window.sessionStorage.getItem("matricule")+"&mdp="+md5(actu));
     axios.get(connurl)
         .then(function (response) {
             console.log(response.data);
             if(response.data.succes){
              const url =  encodeURI("http://tryconnectadmin/setPasswordSuperAdmin.php?motpass="+md5(nouv1)+"&matricule="+window.sessionStorage.getItem("matricule"));

              axios.get(url)
              .then(function (response) {
                // handle success
                console.log(response);
                 if(response.data.succes){
                   alert('Mot de Passe modifié avec Succès');
                   window.sessionStorage.removeItem('matricule');
                   window.sessionStorage.removeItem('mdp');
                   navigate('/');
                 }else{
                   alert("Echec de l'opération");
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
             else{
              alert('Le Mot de Passe est incorrect');
             }
         })
         .catch(function (error) {
             // handle error
             console.log(error);
         })
         .then(function () {
             // always executed
         })  
    }
  }
   
   const navigate = useNavigate()

   function versProfil(){
    navigate('/ViewProfileSuper')
}


useEffect(() => {
  verifierConnexion();
}, []);

  return (
    <>
        <header id="entete">
            <div id="logo">Logo</div>
            <div id="enteteDroite">
                <a id="userIcon" href='#'>
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={versProfil} viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"/></svg>
                </a>
                <div id='userName'>{window.sessionStorage.getItem("nomComplet")}</div>
            </div>
            </header>
            <div className='form'>
                <div className='formTitre'>MODIFIER LE MOT DE PASSE</div>
                <label htmlFor='actu'>Mot de Passe Actuel</label>
                <input type="password" name='actu' id='actu'/>
                <label htmlFor='nouv1'>Nouveau Mot de Passe</label>
                <input type="password" name='nouv1' id='nouv1'/>
                <label htmlFor='nouv2'>Nouveau Mot de Passe</label>
                <input type="password" name='nouv2' id='nouv2'/>
                <div className='btnBox'>
                    <div className='annulBTN' onClick={versDashSuper}>Annuler</div>
                    <div className='validBTN' onClick={validSetPassword}>Valider</div>
                </div>
            </div>
    </>
  )
}
