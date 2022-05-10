import React, {useEffect} from 'react'

import '../styles/styleRechargItem.css';
import Delete from '../assets/delete.svg'
import update from '../assets/update.svg'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function RechargItem({ idRecharg,dateRecharg, conducteur, moyen, montant, telephone}){
   

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
    useEffect(()=>{
      verifierConnexion()
    },[])

    function deleteRecharg(id){
        const url =  encodeURI("http://tryconnectadmin/deleteRecharg.php?id="+id);
        
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
        deleteRecharg(idRecharg)
        // alert('Rechargement à bien été supprimé')
        window.location.reload();

    }
    function handleupdate2(){
        navigate(`/UpdatRecharge/${conducteur}/${montant}/${moyen}/${telephone}/${idRecharg}`);
        }

    return (
        <div>

        <div id="box-R">
            <div> {dateRecharg} </div>
            <div> {conducteur} </div>
            <div> {telephone} </div>
            <div> {moyen} </div>
            <div> {montant} </div>
        </div>
            <div className='mods'>
            <img src={Delete} height="17px"  onClick={handledelete}   />
            <img src={update} height="17px" className='up' onClick={handleupdate2} />
            </div>
        </div>
    );
}
