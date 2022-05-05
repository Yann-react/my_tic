import React from 'react'
import '../styles/Menu.css'
import owner from '../assets/owner.svg'
import rechar from '../assets/rechar.svg'
import driv from '../assets/driv.svg'
export default function Menu() {
  return (
    <>
        <div className='box-menu'>
            <div className='box-condu'><img src={driv}  height="170px" /><h2 id='titl-box-mnu'>CONDUCTEUR</h2></div>
            <div className='box-propr'><img src={owner} height="170px"  /><h2 id='titl-box-mnu'>CONDUCTEUR</h2></div>
            <div className='box-rechar'><img src={rechar}  height="170px" /><h2 id='titl-box-mnu'>CONDUCTEUR</h2></div>
        </div>
    </>
  )
}
