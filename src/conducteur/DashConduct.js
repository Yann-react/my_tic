import React from 'react';
import '../styles/styleDashConduct.css';
import Entete from "../components/Entete.js";
import TitleBar from '../components/TitleBar';

export default function DashConduct(){
    return (
        <div>
            <Entete nomComplet="AMANI KONE" lienProfil="#" name="conducteur"/>
            <TitleBar titre='CONDUCTEURS' nombre={25} onFiltreClick={cacherOuMontrerFiltres}/>
            <div id='corps'>
                <div className='fitreForm filtreFormHidden' id='filtreForm'>
                    <div className='filtreLabel'>Ville</div>
                    <div className='filtreRow'>
                        <input type='text'/>
                    </div>
                    <div className='filtreLabel'>Commune</div>
                    <div className='filtreRow'>
                        <input type='text'/>
                    </div>
                    <div className='filtreLabel'>Quartier</div>
                    <div className='filtreRow'>
                        <input type='text'/>
                    </div>
                </div>
            <div id='listeSommaire'>
                <div>Date</div>
                <div>Conducteur</div>
                <div>Téléphone</div>
                <div>Adresse</div>
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
