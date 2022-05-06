import React from 'react';
import '../styles/styleDashProprio.css';
import Entete from "../components/Entete.js";
import TitleBar from '../components/TitleBar';
import ProprioItem from '../components/ProprioItem';

export default function DashProprio(){
    return (
        <div>
            <Entete nomComplet="AMANI KONE" lienProfil="#" name="proprietaire"/>
            <TitleBar titre='PROPRIETAIRES' nombre={25} onFiltreClick={cacherOuMontrerFiltres}/>
            <div id='corps'>
                <div className='fitreForm filtreFormHidden' id='filtreForm'>
                    <div className='filtreLabel'>Ville Recherchée</div>
                    <div className='filtreRow'>
                        <input type='text'/>
                    </div>
                    <div className='filtreLabel'>Commune Recherchée</div>
                    <div className='filtreRow'>
                        <input type='text'/>
                    </div>
                    <div className='filtreLabel'>Quartier Recherché</div>
                    <div className='filtreRow'>
                        <input type='text'/>
                    </div>
                    <div className='filtreLabel'>Nombre de Conducteurs Recherchés</div>
                    <div className='filtreRow'>
                        <input type='number' min="1" step='1'/>
                    </div>
                </div>
            <div id='listeSommaire'>
                <div>Date</div>
                <div>Propriétaire</div>
                <div>Télephone</div>
                <div>Véhicules Disponibles</div>
                <div>Adresse Recherchée</div>
            </div>
            <div id='listeBox'>
            </div>
            </div>
        </div>
        
    );
}


function cacherOuMontrerFiltres(){
    let filtreBox = document.getElementById('filtreForm');
    if(filtreBox.getAttribute('class') == 'fitreForm filtreFormHidden'){
        filtreBox.setAttribute('class', 'fitreForm');
    }else{
        filtreBox.setAttribute('class', 'fitreForm filtreFormHidden');
    }

}
