import React, {useState ,useEffect} from 'react'
import arrowLeft from '../assets/arrow-left.svg'
import Entete from "./Entete";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function UpdatProprio() {
  const navigate = useNavigate()

const params = useParams()


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



  // function onInputChange(e){
  //   setNom( e.target.value)
  //  }
  // function onInputChange1(e){
  //  setPrenom(e.target.value)
  //  }
  // function onInputChange2(e){
  //  setCommune(e.target.value)
  //  }
  
  // function onInputChange3(e){
  //  setTelephone(e.target.value)
  //  }
  // function onInputChange4(e){
  //  setQuartier(e.target.value)
  //  }
  
  // function onInputChange5(e){
  //  setNombreCondu(e.target.value)
  //  }
  

  function setProprio(nom, prenom, commune, quartier, telephone, nombreCondu, id){
    let url = 'http://tryconnectadmin/setProprio.php?nom='+nom+'&communeCondu='+commune+'&quartierCondu='+quartier+'&telephone='+telephone+'&prenom='+prenom+'&nombreCondu='+nombreCondu+'&id='+id;
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
  const nom = document.getElementById('nom').value
  const prenom = document.getElementById('prenom').value
  const commune = document.getElementById('commun').value
  const telephone = document.getElementById('telephone').value
  const quartier  = document.getElementById('quartier').value 
  const nombreCondu  = document.getElementById('nombreCondu').value 

  setProprio(nom,prenom,commune,quartier,telephone,nombreCondu,params.id)
  alert('Proprietaire à bien été modifié')
      navigate('proprio')
      
    }
    console.log(params.prenom);
    useEffect(()=>{
      verifierConnexion()
    },[])
  return (
    <>
                    <Entete nomComplet={sessionStorage.getItem('nomComplet')} lienProfil="#" showAjouter={false} />

    <div className='recha'>
      <div className='box-add-p'>
      <div className="teteRecharge">
      <img src={arrowLeft} height="30" className='arrowleft' onClick={()=>navigate('proprio')} />
          <h1 className='title-add'>PROPRIETAIRE</h1>
      </div>
      <div action="" className='formAddCon'>
          <div className="presenProprio">
          <label htmlFor="nom" className='nmPro'>Nom</label>
          <input type="text" name='nom' id='nom' defaultValue={params.nom} />
          <label htmlFor="prenom">Prenom</label>
          <input type="text" name='prenom' id='prenom' defaultValue={params.prenom}   />
          </div>
          <div className="adressProprio">
          <label htmlFor="nombreCondu">Nombre De Conducteur</label>
          <input type="text" name='nombreCondu'   id='nombreCondu' defaultValue={params.nbVehicules}    />
          <label htmlFor="telephone">Téléphone</label>
          <input type="text" name='telephone' id='telephone' defaultValue={params.telProprio}  />
          </div>
          <div className='quartirs'>
          <label htmlFor="Commune Du Conducteur">Commune Du Conducteur</label>
          <input type="text" name='Commune Du Conducteur' id='commun' defaultValue={params.commune}   />
          <label htmlFor="Quartier Du Conducteur" className='cond'>Quartier Du Conducteur</label>
          <input type="text" name='Quartier Du Conducteur' defaultValue={params.quartier} id='quartier'   />
          </div>
          <button className='but-condu-p' onClick={handleupdate}>MODIFIER</button>
      </div>
      </div>
      </div>
      </>  )
}
