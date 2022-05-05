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

export default function App() {
  return (
    <div>
       <Entete />
      {/* <ViewProfil /> */}
      {/* <RechargeForm /> */}
      {/* <ConfirmationRecha /> */}
      {/* <AddConductor /> */}
      {/* <UpdatConductor /> */}
      {/* <AddProprio /> */}
      {/* <UpdatConductor /> */}
      {/* <Menu /> */}
      {/* <DashRecharg /> */}
      <Login />
     
    </div>
  )
}
