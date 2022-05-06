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
