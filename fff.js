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
