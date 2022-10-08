import React, {useState , useEffect, useMemo} from 'react';
import '../styles/styleDashConduct.css';
import Entete from "../components/Entete.js";
import TitleBar from '../components/TitleBar';
import axios from 'axios';
import ConductItem from '../components/ConductItem';
export default function DashConduct(){

    const [condu, setCondu] = useState([])
    const [dates, setDates] = useState([])

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
                      validFiltres3()
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
                   DateDeb()
               },[])
                
     
                return (
                    <div>
                    <Entete nomComplet={sessionStorage.getItem('nomComplet')} name='conducteur' lienProfil="#" />
            <TitleBar titre='CONDUCTEURS' nombre={condu.length} onFiltreClick={cacherOuMontrerFiltres}/>
            <div id='corps'>
                <div className='fitreForm filtreFormHidden' id='filtreForm'>
                <div className='filtreLabel'>Date</div>
                    <div className='filtreRow'>
                        <input type='date' id='datedeb' defaultValue={dates}/>
                        <span>-</span>
                        <input type='date' id='datefin' defaultValue={result} />
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
            <div id='listeSommairer'>
                <div>Date</div>
                <div>Conducteur</div>
                <div>Téléphone</div>
                <div>Adresse</div>
            </div>
            <div id='listeBox'>
            {(condu.length == 0)? <div></div> : condu.map((item,i)=>(<ConductItem key={i} idConduct={item.id} nomComplet={item.nom+" "+item.prenom} telConduct={item.telephone} adresseConduct={item.quartier+"-"+item.commune} dateConduct={item.date} nom={item.nom} prenom={item.prenom} commune={item.commune} quartier={item.quartier} />))}

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
