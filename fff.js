unction getRechargFromFiltres(dateDeb, dateFin, montantMin, montantMax, telephone, idAdmin, nomComplet, moyenPay){
    let req = 'requetes/getRechargFromFiltres.php?dateDeb='+dateDeb+'&dateFin='+dateFin+'&montantMin='+montantMin+'&montantMax='+montantMax;
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

    url = encodeURI(req);
}


function getProprioFromFiltres(dateDeb, dateFin, nombreConduMin, nombreConduMax, commune, quartier){
    let req = 'requetes/getProprioFromFiltres.php?dateDeb='+dateDeb+'&dateFin='+dateFin+'&nombreConduMin='+nombreConduMin+'&nombreConduMax='+nombreConduMax;
    if(commune != ''){
        req = req + '&communeCondu='+commune;
    }
    if(quartier != ''){
        req = req + '&quartierCondu='+quartier;
    }

    let url = encodeURI(req);
}

function getConductFromFiltres(dateDeb, dateFin, commune, quartier){
    let req = 'requetes/getConductFromFiltres.php?dateDeb='+dateDeb+'&dateFin='+dateFin;
    if(commune != ''){
        req = req + '&commune='+commune;
    }
    if(quartier != ''){
        req = req + '&quartier='+quartier;
    }

    let url = encodeURI(req);
}
