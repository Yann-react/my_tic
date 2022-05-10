import React , {useEffect}from 'react';
import '../styles/styleConductItem.css';
import Delete from '../assets/delete.svg'
import update from '../assets/update.svg'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Entete from './Entete';
import DashConduct from '../conducteur/DashConduct';
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
  
    function handledelete1 (){
        deleteConduct(idConduct)
        alert('Conducteur à bien été supprimé')
        window.location.reload();
        
    }
     
    

    

    function handleupdate (){
        // setConduct(nomComplet,nomComplet,adresseConduct,adresseConduct,telConduct)
        // console.log("ok")
        navigate(`/UpdatConductor/${nom}/${prenom}/${commune}/${quartier}/${telConduct}/${idConduct}`);
        }

      


    return (
   <div>

        <div id="box-r">

            <div> {dateConduct} </div>
            <div> {nomComplet} </div>
            <div> {telConduct} </div>
            <div> {adresseConduct} </div>
            </div>
            <div className='mod2'>
            <div className='modSuppr'>
    
            <img src={Delete} height="17px" className='dsgn1' onClick={handledelete1}   />


            <img src={update} height="17px" className='upadt dsgn' onClick={handleupdate} />
            

</div>
            </div>
        </div>
   
    );
}
