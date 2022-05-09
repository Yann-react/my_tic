import React, { useEffect,useState } from 'react';
import '../styles/styleDashRecharg.css';
import Entete from "../components/Entete";
import TitleBar from '../components/TitleBar';
import RechargItem from '../components/RechargItem';
import axios from 'axios';
export default function DashRecharg(){
   
    const [client, setClient] = useState([])

    function getRechargFromFiltres(dateDeb, dateFin, montantMin, montantMax, telephone, idAdmin, nomComplet, moyenPay){
        let req = 'http://tryconnectadmin/getRechargFromFiltres.php?dateDeb='+dateDeb+'&dateFin='+dateFin+'&montantMin='+montantMin+'&montantMax='+montantMax;
        if(telephone != ''){
            req = req + '&telephone='+telephone;
        }
        if(idAdmin != ''){
            req = req + '&idAdmin='+idAdmin;
        }
        if(nomComplet != ''){
            req = req + '&nomComplet='+nomComplet;
        }
        if(moyenPay != ''){
            req = req + '&moyenPay='+moyenPay;
        }
    
        const  url = encodeURI(req);

        axios.get(url)
        .then(function (response) {
          // handle success
          console.log(response);
          console.log(setClient(response.data.resultat)) 
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    }

    function validFiltres(){
        const nom = document.getElementById('nomCom').value      
        const montant1 = document.getElementById('montant1').value
        const montant2 = document.getElementById('montant2').value
        const datedeb = document.getElementById('datedeb').value
        const datefin = document.getElementById('datefin').value
        const pay = document.getElementById('pay').value
        const phone = document.getElementById('phone').value
        const idadmin = document.getElementById('idadmin').value

        getRechargFromFiltres(datedeb, datefin, montant1, montant2, phone, idadmin, nom, pay);
    }
    
    return (
        <div>
            <Entete nomComplet="AMANI KONE" lienProfil="#" name="rechargement"/>
            <TitleBar titre='RECHARGEMENTS' nombre={25} onFiltreClick={cacherOuMontrerFiltres}/>
            <div id='corps'>
                <div className='fitreForm filtreFormHidden' id='filtreForm'>
                    <div className='filtreLabel'>Date</div>
                    <div className='filtreRow'>
                        <input type='date' id='datedeb'/>
                        <span>-</span>
                        <input type='date' id='datefin'/>
                    </div>
                    <div className='filtreLabel'>Montant</div>
                    <div className='filtreRow'>
                        <input type='number' step='50' min='50' id='montant1'/>
                        <span>-</span>
                        <input type='number' step='50' min='50' id='montant2'/>
                    </div>
                    <div className='filtreLabel'>Moyen de Paiement</div>
                    <div className='filtreRow'>
                        <select id='pay'>
                            <option value="">PEUT IMPORTE</option>
                            <option value="1">WAVE</option>
                            <option value="2">ORANGE MONEY</option>
                            <option value="3">ESPECE</option>
                        </select>
                    </div>
                    <div className='filtreLabel'>Numéro de Téléphone</div>
                    <div className='filtreRow'>
                        <input type='text' id='phone'/>
                    </div>
                    <div className='filtreLabel'>Nom Complet</div>
                    <div className='filtreRow'>
                        <input type='text' id='nomCom'/>
                    </div>
                    <div className='filtreLabel'>ID Administrateur</div>
                    <div className='filtreRow'>
                        <input type='text' id='idadmin'/>
                    </div>
                    <div id='validFiltresRow'>
                        <div id='validFiltres' onClick={validFiltres}>VALIDER</div>
                    </div>
                </div>
            <div id='listeSommaire'>
                <div>Date</div>
                <div>Conducteur</div>
                <div>Télephone</div>
                <div>Moyen de Paiement</div>
                <div>Montant</div>
            </div>
            <div id='listeBox'>
                
                {client.map((item, i)=>(<RechargItem key={i} idRecharg={item.id} dateRecharg={item.date} conducteur={item.nomComplet} moyen={item.moyenPay} montant={item.montant} telephone={item.telephone}/>))}
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
