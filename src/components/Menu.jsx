import React, {useEffect} from 'react'
import '../styles/Menu.css'
import owner from '../assets/owner.svg'
import rechar from '../assets/rechar.svg'
import driv from '../assets/driv.svg'
import Entete from "./Entete";
import axios from 'axios';

import { useNavigate } from "react-router-dom";

export default function Menu() {
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
                    <Entete nomComplet={sessionStorage.getItem('nomComplet')} lienProfil="#" showAjouter={false} />

        <div className='box-menu'>
            <div className='box-condu'><img src={driv}  height="170px" onClick={()=> navigate('/condu') } /><h2 id='titl-box-mnu'>CONDUCTEUR</h2></div>
            <div className='box-propr'><img src={owner} height="170px"  onClick={()=> navigate('/proprio') }  /><h2 id='titl-box-mnu'>PROPRIETAIRE</h2></div>
            <div className='box-rechar'><img src={rechar}  height="170px" onClick={()=> navigate('/rechar') } /><h2 id='titl-box-mnu'>RECHARGEMENT</h2></div>
        </div>
    </>
  )
}
