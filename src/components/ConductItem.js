import React from 'react';
import '../styles/styleConductItem.css';
import Delete from '../assets/delete.svg'
import update from '../assets/update.svg'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function ConductItem({idConduct, nomComplet, telConduct, adresseConduct, dateConduct , nom , prenom, commune , quartier}){
  
  
    const navigate = useNavigate()

    function deleteConduct(matricule){
        const url =  encodeURI("http://tryconnectadmin/deleteConduct.php?id="+matricule);
        
         axios.get(url)
            .then(function (response) {
                // handle success
                console.log(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            })  
    }
  
    function handledelete (){
        deleteConduct(idConduct)
        console.log("ok")
    }


    function setConduct(nom, prenom, commune, quartier, telephone){
        let url = 'http://tryconnectadmin/setConduct.php?nom='+nom+'&commune='+commune+'&quartier='+quartier+'&telephone='+telephone+'&prenom='+prenom;
        axios.get(url)
        .then(function (response) {
            // handle success
            console.log(response.data);
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
        // setConduct(nomComplet,nomComplet,adresseConduct,adresseConduct,telConduct)
        // console.log("ok")
        navigate(`/UpdatConductor/${nom}/${prenom}/${commune}/${quartier}/${telConduct}`);
        }




    return (
        <div id="recharg">
            <div> {dateConduct} </div>
            <div> {nomComplet} </div>
            <div> {telConduct} </div>
            <div> {adresseConduct} </div>
            <div className='modSuppr'>
            <div className='modSuppr'>
    
    <img src={Delete} height="17px" onClick={handledelete}   />


    <img src={update} height="17px" className='upadt' onClick={handleupdate} />
    

</div>
            </div>
        </div>
    );
}
