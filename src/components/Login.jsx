import React from 'react'
import '../styles/Login.css'
export default function Login() {
  return (
    <>
    <div className="box-lo">

    <div className="box-login">
    <h1>CONNEXION</h1>
    <form action="" className='formLogin'>
        <label htmlFor="id">ID</label>
        <input type="text" name='id' />
        <label htmlFor="motspass">MOTS DE PASSE</label>
        <input type="text" name='motspass' />
        <button className='but-login'>VALIDER</button>
    </form>
    </div>
    </div>
    </>
  )
}
