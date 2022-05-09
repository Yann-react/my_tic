import React,{useState} from 'react'
import arrowLeft from '../assets/arrow-left.svg'
import Entete from "./Entete";
import axios from 'axios';
import DashConduct from '../conducteur/DashConduct';
import ConductItem from './ConductItem';
import { useParams  } from 'react-router-dom';


export default function UpdatConductor(props) {
  const params = useParams()
  const [nom, setNom] = useState('')
  const [prenom, setPrenom] = useState('')
  const [commune, setCommune] = useState('')
  const [telephone, setTelephone] = useState('')
  const [quartier, setQuartier]= useState('')

 function onInputChange(e){
   setNom( e.target.value)
  }
 function onInputChange1(e){
  setPrenom(e.target.value)
  }
 function onInputChange2(e){
  setCommune(e.target.value)
  }
 
 function onInputChange3(e){
  setTelephone(e.target.value)
  }
 function onInputChange4(e){
  setQuartier(e.target.value)
  }
 
 
  function setConduct(nom, prenom, commune, quartier, telephone){
    let url = 'http://tryconnectadmin/setConduct.php?nom='+nom+'&commune='+commune+'&quartier='+quartier+'&telephone='+telephone+'&prenom='+prenom;
    axios.get(url)
    .then(function (response) {
        // handle success
        console.log(response.data);
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
  
      setConduct(nom,prenom,commune,quartier,telephone)
    console.log("ok")
}

  return (
    <>
  <div className='recha'>
    <div className='box-add'>
    <div className="teteRecharge">
        <img src={arrowLeft} height="30" className='arrowleft' />
        <h1 className='title-add'>CONDUCTEUR</h1>
    </div>
    <div action="" className='formAddCon'>
        <div className="presenCon">
        <label htmlFor="nom">Nom</label>
        <input type="text" name='nom' placeholder={params.nom} value={nom} onChange={onInputChange} />
        <label htmlFor="prenom">Prenom</label>
        <input type="text" name='prenom' placeholder={params.prenom} value={prenom}  onChange={onInputChange1} />
        </div>
        <div className="adressCon">
        <label htmlFor="commun">Commune</label>
        <input type="text" name='commun' placeholder={params.commune} value={commune}  onChange={onInputChange2} />
        <label htmlFor="telephone">Téléphone</label>
        <input type="text" name='telephone' placeholder={params.telConduct} value={telephone}  onChange={onInputChange3} />
        </div>
        <div className='quartir'>
        <label htmlFor="quartier">Quartier</label>
        <input type="text" name='quartier' placeholder={params.quartier} value={quartier}  onChange={onInputChange4} />
        </div>
        <button className='but-condu' onClick={handleupdate}>MODIFIER</button>
    </div>
    </div>
    </div>
    </>
  )
}
