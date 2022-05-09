import React from 'react'
import '../styles/RechargeForm.css'
import arrowLeft from '../assets/arrow-left.svg'
import Entete from "./Entete";
import axios
 from 'axios';
export default function RechargeForm() {

  
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
         console.log(response);
       })
       .catch(function (error) {
         // handle error
         console.log(error);
       })
       .then(function () {
         // always executed
       });
      }

  return (
    <>
                    <Entete nomComplet="AMANI KONE" lienProfil="#" />

    <div className='recha'>
    <div className='box-recha'>
    <div className="teteRecharge">
        <img src={arrowLeft} height="30" className='arrowleft' />
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
        <select name="moyenPayement" id="moyPay">
            <option value="wave">Wave</option>
            <option value="OrangeMoney">Orange Money</option>
            <option value="MoovMoney">Moov Money</option>
            <option value="MtnMoney">Mtn Money</option>
        </select>
        </div>
        <button className='but-recha' onClick={handleSbmit3}>VALIDER</button>
    </div>
    </div>
    </div>
    </>
  )
}
