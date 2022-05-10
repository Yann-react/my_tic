import React, {useEffect} from 'react'
import '../styles/RechargeForm.css'
import arrowLeft from '../assets/arrow-left.svg'
import Entete from "./Entete";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function RechargeForm() {
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

function handleSbmit3(){
  
  const nom = document.getElementById('nom').value
  const telephone = document.getElementById('telephone').value
  const montant = document.getElementById('montant').value
  const moyPay = document.getElementById('moyPay').value
  const admin = sessionStorage.getItem("matricule");
  const url =  encodeURI("http://tryconnectadmin/addRecharg.php?nomComplet="+nom+"&montant="+montant+"&moyenPay="+moyPay+"&telephone="+telephone+"&idAdmin="+admin)

       axios.get(url)
       .then(function (response) {
         // handle success
         if(response.data.succes){
           alert('Rechargement à bien été ajouté')
           navigate('Rechar')

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
    <div className='box-recha'>
    <div className="teteRecharge">
    <img src={arrowLeft} height="30" className='arrowleft' onClick={()=>navigate('Rechar')} />
        <h1 className='titile-recha'>RECHARGEMENT</h1>
    </div>
    <div action="" className='formRech'>
        <div className="nomComp">
        <label htmlFor="nomComplet">Nom Complet</label>
        <input type="text" name='nomComplet'id='nom'/>
        <label htmlFor="telephone">telephone</label>
        <input type="text" name='telephone'id='telephone'/>
        </div>
        <div className="payement">
        <label htmlFor="montant">Montant</label>
        <input type="text" name='montant'id='montant'/>
        <label htmlFor="moyenPayement">Moyen Payement</label>
        <select name="moyenPayement" id='moyPay'>
            <option value="">PEUT IMPORTE</option>
            <option value="1">WAVE</option>
            <option value="2">ORANGE MONEY</option>
            <option value="3">ESPECE</option>
        </select>
        </div>
        <button className='but-recha' onClick={handleSbmit3}>VALIDER</button>
    </div>
    </div>
    </div>
    </>
  )
}
