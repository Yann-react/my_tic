import React from 'react'
import AddConductor from './components/AddConductor'
import AddProprio from './components/AddProprio'
import ConfirmationRecha from './components/ConfirmationRecha'
import Entete from './components/Entete'
import Login from './components/Login'
import Menu from './components/Menu'
import RechargeForm from './components/RechargeForm'
import UpdatConductor from './components/UpdatConductor'
import ViewProfil from './components/ViewProfil'
import DashRecharg from './rechargement/DashRecharg'
import { Routes, Route, Link } from "react-router-dom";
import DashProprio from './proprietaire/DashProprio'
import DashConduct from './conducteur/DashConduct'
export default function App() {
  return (
    <div>
            {/* <Login /> */}

      <Routes>
      <Route path='/' element={<Login />} />
      <Route path='Menu' element={<Menu />} />
      <Route path='profils'  element={<ViewProfil /> } />
      {/* <RechargeForm /> */}
      {/* <ConfirmationRecha /> */}
    <Route path='AddCondu' element={<AddConductor />} />
    <Route path='AddProprio' element={<AddProprio />} />
    <Route path='RechargeForm' element={<RechargeForm />} />
      {/* <UpdatConductor /> */}
      {/* <AddProprio /> */}
      {/* <UpdatConductor /> */}
     <Route path='condu' element={ <DashConduct /> } />
    <Route path='proprio' element={<DashProprio /> } />
     <Route path='Rechar' element={<DashRecharg />} />
      </Routes>
     
    </div>
  )
}
