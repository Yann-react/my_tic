import React , {Component , useEffect , useState }from 'react'
import '../styles/Login.css'
import { useNavigate } from "react-router-dom";
import Entete from "./Entete";
import axios from 'axios';
import md5 from 'md5';
export default function Login() {
    const navigate = useNavigate()

    function versSuper(){
        navigate('/LoginSuper');
    }

   function handleSbmit(){
    const matricul = document.getElementById('matricul').value
    const password = md5(document.getElementById('password').value)
       const url =  encodeURI("http://tryconnectadmin/tryConnectAdmin.php?matricule="+matricul+"&mdp="+password)
    
     axios.get(url)
         .then(function (response) {
             // handle success
             console.log(response.data);
             if(response.data.succes){
                 sessionStorage.setItem("matricule", response.data.resultat.matricule);
                 sessionStorage.setItem("mdp", response.data.resultat.mdp);
                 sessionStorage.setItem("nomComplet", response.data.resultat.nomComplet);
                 navigate('/Menu');
             }else{
                 document.querySelector('.disactive').setAttribute('class',' .disactive active')
                }
            //  response.data.succes? navigate('/Menu'):
         })
         .catch(function (error) {
             // handle error
             console.log(error);
         })
         .then(function () {
             // always executed
            })  
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
              
                <Entete lienProfil="#" showAjouter={false} showProfil={false} />

    <div className="box-lo">

    <div className="box-login">
    <h1>CONNEXION</h1>
    <div className='formLogin'>
        <label htmlFor="id" >ID</label>
        <input type="text" name='id' id='matricul'/>
        <label htmlFor="motspass">MOT DE PASSE</label>
        <input type="password" name='motspass' id='password' />
        <p className="disactive">Identifiants erronés</p>
        <button className='but-login' onClick={handleSbmit}>VALIDER</button>
        <div className='supAdmin' onClick={versSuper}>Super Admin</div>
    </div>
    
    </div>
    </div>
    </>
  )
}
