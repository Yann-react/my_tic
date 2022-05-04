import React from 'react'
import '../styles/RechargeForm.css'
import arrowLeft from '../assets/arrow-left.svg'
export default function RechargeForm() {
  return (
    <>
    <div className='recha'>
    <div className='box-recha'>
    <div className="teteRecharge">
        <img src={arrowLeft} height="30" className='arrowleft' />
        <h1 className='titile-recha'>RECHARGEMENT</h1>
    </div>
    <form action="" className='formRech'>
        <div className="nomComp">
        <label htmlFor="nomComplet">Nom Complet</label>
        <input type="text" name='nomComplet'/>
        </div>
        <div className="payement">
        <label htmlFor="montant">Montant</label>
        <input type="text" name='montant'/>
        <label htmlFor="moyenPayement">Moyen Payement</label>
        <select name="moyenPayement" id="">
            <option value="wave">Wave</option>
            <option value="OrangeMoney">Orange Money</option>
            <option value="MoovMoney">Moov Money</option>
            <option value="MtnMoney">Mtn Money</option>
        </select>
        </div>
        <button className='but-recha'>VALIDER</button>
    </form>
    </div>
    </div>
    </>
  )
}
