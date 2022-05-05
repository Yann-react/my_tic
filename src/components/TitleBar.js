import React from 'react'

import '../styles/styleTitleBar.css';
export default function TitleBar({titre, nombre, onFiltreClick}){
    return (
        <div id='bar'>
            <div id='filtreBTN' onClick={onFiltreClick}>
                <span>Filtres</span>
            </div>
            <div id='titre'> {titre} </div>
            <div id='nombre'> {nombre} </div>
        </div>
    );
}
