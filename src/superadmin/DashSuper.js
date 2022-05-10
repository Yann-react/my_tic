import React, { useEffect,useState } from 'react';
import '../styles/styleDashSuper.css';
import Entete from "../components/Entete";
import TitleBar from '../components/TitleBar';
import RechargItem from '../components/RechargItem';
import axios from 'axios';
import AdminItem from '../components/AdminItem';
import '../styles/style_entete.css';
import { useNavigate } from "react-router-dom";
export default function DashSuper(){

    
    const [admins, setAdmins] = useState([]);
    
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
                    navigate('/LoginSuper');
                }
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
            })  
        }else{
            //Deco
            navigate('/LoginSuper');
        }
    }
    
    function getAdmin(){
        let req = 'http://tryconnectadmin/getAdmins.php';
        
        const  url = encodeURI(req);
        
        axios.get(url)
        .then(function (response) {
            // handle success
            console.log(response);
            setAdmins(response.data.resultat);
        })
        .catch(function (error) {
            // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    }
    
    const navigate = useNavigate();
    
    function versAjout (){
        navigate('/AddAdmin')
    }
    
    function versProfil(){
        navigate('/ViewProfileSuper')
    }
    useEffect(() => {
        console.log("Hellooo")
        verifierConnexion();
        getAdmin();
     }, []);
    
    return (
        <>
            
            <div>
            <header id="entete">
            <div id="logo">Logo</div>
            <div id="enteteDroite">
                <a href="#" id='ajoutBTN' onClick={versAjout}>AJOUTER</a>
                <a id="userIcon" href='#'>
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={versProfil} viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"/></svg>
                </a>
                <div id='userName'>{window.sessionStorage.getItem("nomComplet")}</div>
            </div>
            </header>
            <TitleBar titre='LISTE DES ADMINISTRATEURS' nombre={(admins!=undefined)?admins.length:0} showFiltres={false} />
            <div id='corps'>
            <div id='listeSommaire'>
                <div>Matricule</div>
                <div>Nom et Prénoms</div>
            </div>
            <div id='listeBox'>
                {(admins!=undefined)?admins.map(item=>(<AdminItem  matricule={item.matricule} nomComplet={item.nomComplet} key={item.matricule} />)): <div></div>}
            </div>
            </div>
        </div>
        </>
        
    );
}


