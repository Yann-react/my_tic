import '../styles/styleProprioItem.css';
import Delete from '../assets/delete.svg'
import update from '../assets/update.svg'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ProprioItem({ idproprio, dateProprio, nomComplet, telProprio, nbVehicules, adresseRecherch , nom , prenom , quartier, commune}){
   
    const navigate = useNavigate()

    function deleteProprio(matricule){
        const url =  encodeURI("http://tryconnectadmin/deleteProprio.php?id="+matricule);
        
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
        deleteProprio(idproprio)
        console.log("ok")
    }
    function handleupdate1(){
        navigate(`/UpdatProprio/${nom}/${prenom}/${commune}/${quartier}/${telProprio}/${nbVehicules}/${idproprio}`);
        }
    return (
        <div id="recharg">
            <div> {dateProprio} </div>
            <div> {nomComplet} </div>
            <div> {telProprio} </div>
            <div> {nbVehicules} </div>
            <div> {adresseRecherch} </div>
            <div className='modSuppr'>
    
                    <img src={Delete} height="17px" onClick={handledelete}   />
                
                
                    <img src={update} height="17px" className='upadt' onClick={handleupdate1} />
                    
                
            </div>
        </div>
    );
}
