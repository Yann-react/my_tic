import React, {useEffect} from 'react'
import check from '../assets/check.svg'
import Entete from "./Entete";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ConfirmationRecha() {
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
useEffect(()=>{
  verifierConnexion()
},[])
  return (
    <>
            <Entete nomComplet={sessionStorage.getItem('nomComplet')} lienProfil="#" />

      <div className='recha'>
    <div className='box-recha'>
        <div className="txt-confi">
        <img src={check} height="160px" />
        <h2 className='txt-confiRecha'>Votre rechargement à bien été ajouté</h2>
        </div>
        </div>
        </div>
    </>
  )
}
