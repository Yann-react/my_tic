import React , { useEffect }from 'react'
import profils from '../assets/profils.svg'
import edit from '../assets/edit.svg'
import '../styles/ViewProfil.css'
import Entete from "./Entete";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function ViewProfil() {

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
  function deconnecter(){
    window.sessionStorage.removeItem('matricule');
    window.sessionStorage.removeItem('mdp');
    navigate('/');
}
  return (
    <>
            <Entete showAjouter={false} lienProfil="#" />

        <div className='viewProfil'>
          <div className="profil">
        <img src={profils} height="70"/>
          </div>
          <div className="formProfil">
          <p><strong>Id</strong> {sessionStorage.getItem('matricule')}</p>
          <p><strong>Nom Complet</strong> {sessionStorage.getItem('nomComplet')}</p>
          <button className='but' onClick={deconnecter}>DECONNEXION</button>
          </div>
        </div>
    </>
  )
}
