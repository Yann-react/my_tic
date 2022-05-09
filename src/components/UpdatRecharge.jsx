import React , {useState} from 'react'
import '../styles/RechargeForm.css'
import arrowLeft from '../assets/arrow-left.svg'
import Entete from "./Entete";
import axios from 'axios';
import { useParams } from 'react-router-dom';
export default function UpdatRecharge() {

  
  const params = useParams()

const [nom, setNom] = useState('')
  const [montant, setMontant] = useState('')
  const [moyPay, setMoyPay] = useState('')
  const [telephone, setTelephone] = useState('')
 

  function onInputChange(e){
    setNom( e.target.value)
   }
  function onInputChange1(e){
   setMontant(e.target.value)
   }
  function onInputChange2(e){
  const pau = e.target.value 
    setMoyPay(pau )
   }
  
  function onInputChange3(e){
   setTelephone(e.target.value)
   }
 
      

      function setRecha(nom,montant,moyPay,telephone, id){
        let url = 'http://tryconnectadmin/setRecharg.php?nomComplet='+nom+'&montant='+montant+'&moyenPay='+moyPay+'&telephone='+telephone+'&id='+id;
        axios.get(url)
        .then(function (response) {
            // handle success
            console.log(response);
            // if(response.data.succ)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        })  
    
    }
    
    function handleupdate (){
      
          setRecha(nom,montant,moyPay,telephone,params.id)
        console.log("ok")
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
        <input type="text" name='nomComplet'id='nom' placeholder={params.nomComplet} value={nom} onChange={onInputChange}/>
        <label htmlFor="telephone">telephone</label>
        <input type="text" name='telephone'id='telephone' placeholder={params.telephone} value={telephone} onChange={onInputChange3}/>
        </div>
        <div className="payement">
        <label htmlFor="montant">Montant</label>
        <input type="text" name='montant'id='montant' placeholder={params.montant} value={montant} onChange={onInputChange1}/>
        <label htmlFor="moyenPayement">Moyen Payement</label>
        <select name="moyenPayement" id="moyPay" placeholder={params.moyPay}  onChange={onInputChange2}>
            <option label="wave" value={moyPay} >Wave</option>
            <option label="OrangeMoney" value={moyPay}>Orange Money</option>
            <option label="MoovMoney" value={moyPay}>Moov Money</option>
            <option label="MtnMoney" value={moyPay}>Mtn Money</option>
        </select>
        </div>
        <button className='but-recha' onClick={handleupdate }>MODIFIER</button>
    </div>
    </div>
    </div>
    </>
  )
}
