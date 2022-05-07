import React, {useState} from 'react';
import '../styles/styleDashConduct.css';
import Entete from "../components/Entete.js";
import TitleBar from '../components/TitleBar';
import axios from 'axios';
import ConductItem from '../components/ConductItem';
export default function DashConduct(){

    const [condu, setCondu] = useState([])

    function getConductFromFiltres(dateDeb, dateFin, commune, quartier){
        let req = 'http://tryconnectadmin/getConductFromFiltres.php?dateDeb='+dateDeb+'&dateFin='+dateFin;
        if(commune != ''){
            req = req + '&commune='+commune;
        }
        if(quartier != ''){
            req = req + '&quartier='+quartier;
        }
    
        let url = encodeURI(req);

        axios.get(url)
        .then(function (response) {
          // handle success
          console.log(response);
          console.log(setCondu(response.data.resultat)) 
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });    }
    
    function validFiltres3(){
        const commun = document.getElementById('commun').value
        const quartier = document.getElementById('quartier').value
        const datedeb = document.getElementById('datedeb').value
        const datefin = document.getElementById('datefin').value  
        getConductFromFiltres(datedeb,datefin,commun,quartier) 
       }
    
    return (
        <div>
            <Entete nomComplet="AMANI KONE" lienProfil="#" name="conducteur"/>
            <TitleBar titre='CONDUCTEURS' nombre={25} onFiltreClick={cacherOuMontrerFiltres}/>
            <div id='corps'>
                <div className='fitreForm filtreFormHidden' id='filtreForm'>
                <div className='filtreLabel'>Date</div>
                    <div className='filtreRow'>
                        <input type='date' id='datedeb'/>
                        <span>-</span>
                        <input type='date' id='datefin'/>
                        </div>
                    <div className='filtreLabel'>Commune</div>
                    <div className='filtreRow'>
                        <input type='text' id='commun'/>
                    </div>
                    <div className='filtreLabel'>Quartier</div>
                    <div className='filtreRow'>
                        <input type='text' id='quartier'/>
                    </div>
                    <div id='validFiltresRow'>
                        <div id='validFiltres' onClick={validFiltres3}>VALIDER</div>
                    </div>
                </div>
            <div id='listeSommaire'>
                <div>Date</div>
                <div>Conducteur</div>
                <div>Téléphone</div>
                <div>Adresse</div>
            </div>
            <div id='listeBox'>
            {condu.map((item,i)=>(<ConductItem key={i} nomComplet={item.nom} telConduct={item.telephone} adresseConduct={item.quartier+"-"+item.commune} dateConduct={item.date}  />))}

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
