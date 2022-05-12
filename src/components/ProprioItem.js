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
    function handledelete2 (){
        deleteProprio(idproprio)
        alert('Proprietaire à bien été suprimé')
        window.location.reload();


        console.log("ok")
    }
    function handleupdate1(){
        navigate(`/UpdatProprio/${nom}/${prenom}/${commune}/${quartier}/${telProprio}/${nbVehicules}/${idproprio}`);
        }
    return (
        <div>

        <div id="box-s">
            <div> {dateProprio} </div>
            <div> {nomComplet} </div>
            <div> {telProprio} </div>
            <div> {nbVehicules} </div>
            <div> {adresseRecherch} </div>
            </div>
            <div className='mod'>
            <div className='modSuppr'>
                    <img src={Delete} height="17px" onClick={handledelete2}  className='dlt'   />
                    <img src={update} height="17px" className='upadt' onClick={handleupdate1} />
            </div>
            </div>
        </div>
        
    );
}
