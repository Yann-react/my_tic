import React from 'react'
import filter from '../assets/filter.svg'
import '../styles/styleTitleBar.css';
export default function TitleBar({titre, nombre, onFiltreClick}){
    return (
        <div id='bar'>
            <div id='filtreBTN' onClick={onFiltreClick}>
                <span> <img src={filter} height="25px" /> Filtres</span>
            </div>
            <div id='titre'> {titre} </div>
            <div id='nombre'> {nombre} </div>
        </div>
    );
}
