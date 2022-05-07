import React from 'react'
import '../styles/Login.css'
import { useNavigate } from "react-router-dom";
import Entete from "../components/Entete";

export default function Login() {

    const navigate = useNavigate()
  return (
    <>
                <Entete lienProfil="#" />

    <div className="box-lo">

    <div className="box-login">
    <h1>CONNEXION</h1>
    <form action="" className='formLogin'>
        <label htmlFor="id">ID</label>
        <input type="text" name='id' />
        <label htmlFor="motspass">MOTS DE PASSE</label>
        <input type="text" name='motspass' />
        <button className='but-login' onClick={() => navigate('/Menu')}>VALIDER</button>
    </form>
    </div>
    </div>
    </>
  )
}

function tryConnectAdmin(login, mdp){//Prend en parametre le login et le mdp
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {
            let rep = JSON.parse(xhr.responseText);
            //rep est le resultat de la requete
            //Si la connexion a echoué, on a rep.succes == false
            //Si la connexion a reussi, on a rep.succes == true et rep.resultat = {nomComplet: ..., matricule: ..., mdp: ....}
        }
    };
    xhr.open("GET", encodeURI("../requetes/tryConnectAdmin.php?matricule="+login+"&mdp="+mdp), true);
    xhr.send();
}
