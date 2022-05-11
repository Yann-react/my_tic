import React, { useEffect,useState } from 'react';
import '../styles/styleDashRecharg.css';
import TitleBar from '../components/TitleBar';
import RechargItem from '../components/RechargItem';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function RecharSup(){
    
    const navigate = useNavigate()

    const [client, setClient] = useState([])
    const [dates, setDates] = useState([])

    function verifierConnexion(){
        if((window.sessionStorage.getItem("matricule")!=null)&&(window.sessionStorage.getItem("mdp")!=null)){
            const matricul = window.sessionStorage.getItem("matricule")
            const password = window.sessionStorage.getItem("mdp")
            const url =  encodeURI("http://tryconnectadmin/tryConnectSuperAdmin.php?matricule="+matricul+"&mdp="+password)
            
            axios.get(url)
            .then(function (response) {
                console.log(response.data);
                if(response.data.succes){
                    //Ok il est connecté, il peut rester
                }else{
                    //Il degage
                    navigate('/LoginSuper');
                }
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
            })  
        }else{
            //Deco
            navigate('/LoginSuper');
        }
    }
    
    function getRechargFromFiltres(dateDeb, dateFin, montantMin, montantMax, telephone, nomComplet, moyenPay){
        let req = 'http://tryconnectadmin/getRechargFromFiltres.php?dateDeb='+dateDeb+'&dateFin='+dateFin+'&montantMin='+montantMin+'&montantMax='+montantMax;
        if(telephone != ''){
            req = req + '&telephone='+telephone;
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

        getRechargFromFiltres(datedeb, datefin, montant1, montant2, phone, nom, pay);
    }
    function versProfil(){
        navigate('/ViewProfileSuper')
      }
    
   function  DateFin(separator=''){
        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        
        
        
        return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
        }
        let result = DateFin()[0]+DateFin()[1]+DateFin()[2]+DateFin()[3]+"-"+DateFin()[4]+DateFin()[5]+"-"+DateFin()[6]+DateFin()[7];
        // console.log(result);
        function DateDeb(){
            axios.get('http://tryconnectadmin/getFirstDateRecharg.php')
            .then(function (response) {
              // handle success
              document.getElementById('datedeb').setAttribute('defaultValue', response.data.resultat);
              setDates(response.data.resultat);
              validFiltres()
              console.log(dates);
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
            .then(function () {
              // always executed
            });
        }
        useEffect(()=>{
            verifierConnexion();
            DateDeb();
        },[])

             return (
        <div>
            <header id="entete">
        <div id="logo" onClick={()=>navigate('/MenuSup')}>
                <span className='m'>M</span>y
                <span className='tir'>-</span>
                <span className='tic'>tic</span>
            </div>           
             <div id="enteteDroite">
                <a id="userIcon" href='#'>
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={versProfil} viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"/></svg>
                </a>
                <div id='userName'>{window.sessionStorage.getItem("nomComplet")}</div>
            </div>
            </header>
            <TitleBar titre='RECHARGEMENTS' nombre={client.length} onFiltreClick={cacherOuMontrerFiltres}/>
            <div id='corps'>
                <div className='fitreForm filtreFormHidden' id='filtreForm'>
                    <div className='filtreLabel'>Date</div>
                    <div className='filtreRow'>
                        <input type='date' id='datedeb' defaultValue={dates}  />
                        <span>-</span>
                        <input type='date' id='datefin' defaultValue={result} />
                    </div>
                    <div className='filtreLabel'>Montant</div>
                    <div className='filtreRow'>
                        <input type='number' step='50' min='5000' id='montant1' defaultValue="5000"/>
                        <span>-</span>
                        <input type='number' step='50' min='5000' id='montant2'  defaultValue="100000000000" />
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
            <div id='listeSommaires'>
                <div>Date</div>
                <div>Conducteur</div>
                <div>Télephone</div>
                <div>Moyen de Paiement</div>
                <div>Montant</div>
            </div>
            <div id='listeBox'>
                {(client.length == 0)? <div></div> : client.map((item, i)=>(<RechargItem key={i} idRecharg={item.id} dateRecharg={item.date} conducteur={item.nomComplet} moyen={item.moyenPay} montant={item.montant} telephone={item.telephone}/>))}
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
