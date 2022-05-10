import React from 'react'
import profils from '../assets/profils.svg'
import edit from '../assets/edit.svg'
import '../styles/ViewProfil.css'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useEffect,useState } from 'react';


export default function ViewProfilSuper() {
  function deconnecter(){
    window.sessionStorage.removeItem('matricule');
    window.sessionStorage.removeItem('mdp');
    navigate('/LoginSuper');
}

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
  const navigate = useNavigate();
  function versModifPass(){
    navigate('/SetPasswordSuper');
  }
  useEffect(() => {
    verifierConnexion();
 }, []);
  return (
    <>
        <div className='viewProfil'>
          <div className="profil">
        <img src={profils} height="70"/>
          </div>
          <div className="formProfil">
          <p><strong>Matricule</strong> {window.sessionStorage.getItem("matricule")}</p>
          <p><strong>Nom Complet</strong> {window.sessionStorage.getItem("nomComplet")}</p>
          <p><strong>Editer le Mot de Passe</strong> <img src={edit} height="20" onClick={versModifPass} /></p>
          <button className='but' onClick={deconnecter}>DECONNEXION</button>
          </div>
        </div>
    </>
  )
}
