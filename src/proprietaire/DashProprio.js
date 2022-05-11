import React, { useEffect,useState } from 'react';
import '../styles/styleDashProprio.css';
import Entete from "../components/Entete.js";
import TitleBar from '../components/TitleBar';
import ProprioItem from '../components/ProprioItem';
import axios from 'axios';
export default function DashProprio(){

    const [proprio, setProprio] = useState([])
    const [dates, setDates] = useState([])

    function getProprioFromFiltres(dateDeb, dateFin, nombreConductMin, nombreConductMax, commune, quartier){
        let req ='http://tryconnectadmin/getProprioFromFiltresByAdmin.php?dateDeb='+dateDeb+'&dateFin='+dateFin+'&nombreConductMin='+nombreConductMin+'&nombreConductMax='+nombreConductMax+'&idAdmin='+sessionStorage.getItem("matricule");
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
          console.log(setProprio(response.data.resultat)) 
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });

    }

    function validFiltres2(){

        const commun = document.getElementById('commun').value
        const conducteur1 = document.getElementById('conducteur1').value
        const conducteur2 = document.getElementById('conducteur2').value
        const quartier = document.getElementById('quartier').value
        const datedeb = document.getElementById('datedeb').value
        const datefin = document.getElementById('datefin').value

        getProprioFromFiltres(datedeb,datefin,conducteur1,conducteur2,commun,quartier)
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
              validFiltres2()
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
                    <Entete nomComplet={sessionStorage.getItem('nomComplet')} name="proprietaire" lienProfil="#"  />
            <TitleBar titre='PROPRIETAIRES' nombre={proprio.length} onFiltreClick={cacherOuMontrerFiltres}/>
            <div id='corps'>
                <div className='fitreForm filtreFormHidden' id='filtreForm'>
                <div className='filtreRow'>
                        <input type='date' id='datedeb' defaultValue={dates}/>
                        <span>-</span>
                        <input type='date' id='datefin' defaultValue={result}/>
                    </div>   
                    <div className='filtreLabel'>Commune Recherchée</div>
                    <div className='filtreRow'>
                        <input type='text' id='commun'/>
                    </div>
                    <div className='filtreLabel'>Quartier Recherché</div>
                    <div className='filtreRow'>
                        <input type='text' id='quartier'/>
                    </div>
                    <div className='filtreLabel'>Nombre de Conducteurs Recherchés</div>
                    <div className='filtreRow'>
                        <input type='number' min="1" step='1' id='conducteur1' defaultValue="0"/>
                        <span>-</span>
                        <input type='number' min="1" step='1' id='conducteur2' defaultValue="10000"/>
                    </div>
                    <div id='validFiltresRow'>
                        <div id='validFiltres' onClick={validFiltres2}>VALIDER</div>
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
            {(proprio.length==0)? <div></div> : proprio.map((item,i)=>(<ProprioItem key={i} idproprio={item.id} dateProprio={item.date} nomComplet={item.nom+" "+item.prenom } telProprio={item.telephone} nbVehicules={item.nombreConduct} adresseRecherch={item.communeRech+"-"+item.quartierRech} nom ={item.nom} prenom={item.prenom} quartier={item.quartierRech} commune={item.communeRech} />))}

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
