import React from 'react'
import arrowLeft from '../assets/arrow-left.svg'
import '../styles/styleAddAdmin.css'
import Entete from "../components/Entete";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useEffect,useState } from 'react';

export default function ConfirmDeleteAdmin() {

    function verifierConnexion(){
        if((window.sessionStorage.getItem("matricule")!=null)&&(window.sessionStorage.getItem("mdp")!=null)){
            const matricul = window.sessionStorage.getItem("matricule")
            const password = window.sessionStorage.getItem("mdp")
           const url =  encodeURI("http://tryconnectadmin/tryConnectSuperAdmin.php?matricule="+matricul+"&mdp="+password)
        
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
    let params = new URLSearchParams(document.location.search);
   
   const navigate = useNavigate();
   

   function versProfil(){
    navigate('/ViewProfileSuper')
    }
    function versSuper(){
        navigate('/DashSuper')
    }
    function execSuppr(){
        const matricule = params.get("matricule");
        const url =  encodeURI("http://tryconnectadmin/deleteAdmin.php?matricule="+matricule);

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
            versSuper();
        });
    }
    useEffect(() => {
        verifierConnexion();
     }, []);



  return (
    <>
        <header id="entete">
        <div id="logo" onClick={()=>navigate('/Menu')}>
                <span className='m'>M</span>y
                <span className='tir'>-</span>
                <span className='tic'>tic</span>
            </div>             <div id="enteteDroite">
                <a id="userIcon" href='#'>
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={versProfil} viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"/></svg>
                </a>
                <div id='userName'>{window.sessionStorage.getItem("nomComplet")}</div>
            </div>
            </header>
            <div className='form'>
                <div className='formTitre'>SUPPRIMER L'ADMINISTRATEUR {params.get("matricule")}</div>
                <div className='btnBox'>
                    <div className='annulBTN' onClick={versSuper}>Annuler</div>
                    <div className='validBTN' onClick={execSuppr}>Confirmer</div>
                </div>
            </div>
    </>
  )
}
