import React , {useState , useEffect} from 'react'
import '../styles/RechargeForm.css'
import arrowLeft from '../assets/arrow-left.svg'
import Entete from "./Entete";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function UpdatRecharge() {
    
    const navigate = useNavigate()
    
    const params = useParams()
    
    // const [nom, setNom] = useState('')
    // const [montant, setMontant] = useState('')
    // const [moyPay, setMoyPay] = useState('')
    // const [telephone, setTelephone] = useState('')

  
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



function onInputChange(e){
    // setNom( e.target.value)
    // console.log(e.target.value)
}
function onInputChange1(e){
    // setMontant(e.target.value)
   }
   function onInputChange2(e){
    //    const pau = e.target.value 
    //    setMoyPay(pau )
    }
  
    function onInputChange3(e){
//    setTelephone(e.target.value)
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
         const nom= document.getElementById('nom').value
         const montant= document.getElementById('montant').value
         const moyPay= document.getElementById('moyPay').value
         const telephone= document.getElementById('telephone').value
         
          setRecha(nom,montant,moyPay,telephone,params.id)
          alert('Rechargement à bien été modifié')
          navigate('Rechar')
        
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
        <input type="text" name='nomComplet'id='nom' defaultValue={params.nomComplet}  onChange={onInputChange} />
        <label htmlFor="telephone">telephone</label>
        <input type="text" name='telephone'id='telephone' defaultValue={params.telephone}  onChange={onInputChange3}/>
        </div>
        <div className="payement">
        <label htmlFor="montant">Montant</label>
        <input type="text" name='montant'id='montant' defaultValue={params.montant}  onChange={onInputChange1}/>
        <label htmlFor="moyenPayement">Moyen Payement</label>
        <select name="moyenPayement" id="moyPay" defaultValue={params.moyPay}  onChange={onInputChange2}>
            <option value="1">WAVE</option>
            <option value="2">ORANGE MONEY</option>
            <option value="3">ESPECE</option>
        </select>
        </div>
        <button className='but-recha' onClick={handleupdate }>MODIFIER</button>
    </div>
    </div>
    </div>
    </>
  )
}
