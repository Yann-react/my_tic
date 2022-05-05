import React from 'react';
import '../styles/styleDashRecharg.css';
import Entete from "../components/Entete";
import TitleBar from '../components/TitleBar';
import RechargItem from '../components/RechargItem';

export default function DashRecharg(){
    return (
        <div>
            <Entete nomComplet="AMANI KONE" lienProfil="#"/>
            <TitleBar titre='RECHARGEMENTS' nombre={25} onFiltreClick={cacherOuMontrerFiltres}/>
            <div id='corps'>
                <div className='fitreForm filtreFormHidden' id='filtreForm'>
                    <div className='filtreLabel'>Date</div>
                    <div className='filtreRow'>
                        <input type='date'/>
                        <span>-</span>
                        <input type='date'/>
                    </div>
                    <div className='filtreLabel'>Montant</div>
                    <div className='filtreRow'>
                        <input type='number' step='50' min='50'/>
                        <span>-</span>
                        <input type='number' step='50' min='50'/>
                    </div>
                    <div className='filtreLabel'>Moyen de Paiement</div>
                    <div className='filtreRow'>
                        <select>
                            <option>PEUT IMPORTE</option>
                            <option>WAVE</option>
                            <option>ORANGE MONEY</option>
                            <option>ESPECE</option>
                        </select>
                    </div>
                    <div className='filtreLabel'>Numéro de Téléphone</div>
                    <div className='filtreRow'>
                        <input type='text'/>
                    </div>
                    <div className='filtreLabel'>Nom Complet</div>
                    <div className='filtreRow'>
                        <input type='text'/>
                    </div>
                    <div className='filtreLabel'>ID Administrateur</div>
                    <div className='filtreRow'>
                        <input type='text'/>
                    </div>
                    <div id='validFiltresRow'>
                        <div id='validFiltres'>VALIDER</div>
                    </div>
                </div>
            <div id='listeSommaire'>
                <div>Date</div>
                <div>Conducteur</div>
                <div>Moyen de Paiement</div>
                <div>Montant</div>
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
