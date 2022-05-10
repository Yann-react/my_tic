import React from 'react'
import AddConductor from './components/AddConductor'
import AddProprio from './components/AddProprio'
import ConfirmationRecha from './components/ConfirmationRecha'
import Entete from './components/Entete.js'
import Login from './components/Login'
import Menu from './components/Menu'
import RechargeForm from './components/RechargeForm'
import UpdatConductor from './components/UpdatConductor'
import ViewProfil from './components/ViewProfil'
import DashRecharg from './rechargement/DashRecharg'
import { Routes, Route, Link } from "react-router-dom";
import DashProprio from './proprietaire/DashProprio'
import DashConduct from './conducteur/DashConduct'
import UpdatProprio from './components/UpdatProprio'
import UpdatRecharge from './components/UpdatRecharge'
export default function App() {
  return (
    <div>
            {/* <Login /> */}

      <Routes>
      {/* Route simpl */}
      <Route path='/' element={<Login />} />
      <Route path='Menu' element={<Menu />} />
      <Route path='profils'  element={<ViewProfil /> } />
      <Route path='AddCondu' element={<AddConductor />} />
      <Route path='AddProprio' element={<AddProprio />} />
      <Route path='RechargeForm' element={<RechargeForm />} />
      <Route path='condu' element={ <DashConduct /> } />
      <Route path='proprio' element={<DashProprio /> } />
      <Route path='Rechar' element={<DashRecharg />} />

      {/* Route pour Modifier  */}

      <Route path='/UpdatConductor/:nom/:prenom/:commune/:quartier/:telConduct/:id' element={<UpdatConductor />} />
      <Route path='/UpdatProprio/:nom/:prenom/:commune/:quartier/:telProprio/:nbVehicules/:id' element={<UpdatProprio />} />
      <Route path='/UpdatRecharge/:nomComplet/:montant/:moyenPay/:telephone/:id' element={<UpdatRecharge />} />
     
     {/* Route pour fait ds rtour */}

      <Route path='/AddProprio/proprio' element={<DashProprio /> } />
      <Route path='/AddCondu/condu' element={<DashConduct /> } />
      <Route path='/RechargeForm/Rechar' element={<DashRecharg /> } />
      <Route path='/UpdatConductor/:nom/:prenom/:commune/:quartier/:telConduct/:id/condu' element={<DashConduct /> } />
      <Route path='/UpdatProprio/:nom/:prenom/:commune/:quartier/:telProprio/:nbVehicules/:id/proprio' element={<DashProprio /> } />
      <Route path='/UpdatRecharge/:nomComplet/:montant/:moyenPay/:telephone/:id/Rechar' element={<DashRecharg /> } />
      <Route path='LoginSuper' element={<LoginSuper />} />
     <Route path='DashSuper' element={<DashSuper />} />
     <Route path='ViewProfileSuper' element={<ViewProfilSuper />} />
     <Route path='AddAdmin' element={<AddAdmin />} />
     <Route path='SetPasswordSuper' element={<SetPasswordSuper />} />
     <Route path='ConfirmDeleteAdmin' element={<ConfirmDeleteAdmin />} />

      </Routes>
    
     {/* <UpdatRecharge /> */}
     
    </div>
  )
}
