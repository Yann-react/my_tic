function getRechargFromFiltres(dateDeb, dateFin, montantMin, montantMax, telephone, idAdmin, nomComplet, moyenPay){
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


//Supprimer, Tu passes l'ID du wé et c tout

function deleteProprio(matricule){
    const url =  encodeURI("http://tryconnectadmin/deleteProprio.php?id="+matricule);
    
     axios.get(url)
        .then(function (response) {
            // handle success
            console.log(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        })  
}

function deleteConduct(matricule){
    const url =  encodeURI("http://tryconnectadmin/deleteRecharg.php?id="+matricule);
    
     axios.get(url)
        .then(function (response) {
            // handle success
            console.log(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        })  
}

function deleteRecharg(id){
    const url =  encodeURI("http://tryconnectadmin/deleteProprio.php?id="+id);
    
     axios.get(url)
        .then(function (response) {
            // handle success
            console.log(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        })  
    }
//Modifier
function setConduct(nom, prenom, commune, quartier, telephone){
    let req = 'http://tryconnectadmin/setConduct.php?nom='+nom+'&commune='+commune+'&quartier='+quartier+'&telephone='+telephone+'&prenom='+prenom;
    axios.get(url)
    .then(function (response) {
        // handle success
        console.log(response.data);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    })  

}
    
    
//Fonctions de verification et de deconnexion
function verifierConnexion(){
    if((window.sessionStorage.getItem("matricule")!=null)&&(window.sessionStorage.getItem("mdp")!=null)){
        const matricul = window.sessionStorage.getItem("matricule")
        const password = window.sessionStorage.getItem("mdp")
       const url =  encodeURI("http://tryconnectadmin/tryConnectAdmin.php?matricule="+matricul+"&mdp="+password)
    
     axios.get(url)
         .then(function (response) {
             console.log(response.data);
             if(response.data.succes){
                 //Ok il est connecté, il peut rester
             }else{
                 //Il degage
                navigate('/');
             }
         })
         .catch(function (error) {
             console.log(error);
         })
         .then(function () {
         })  
    }else{
        //Deco
        navigate('/');
    }
}

function deconnecter(){
    window.sessionStorage.removeItem('matricule');
    window.sessionStorage.removeItem('mdp');
    navigate('/');
}


// pour l total


// <?php
//     include 'bdd.php';
//     header("Access-Control-Allow-Origin: *");
//     header('Access-Control-Allow-Headers: Content-Type');

//     try {
//         $bdd = getBDD();
//         $rech = $bdd->prepare("SELECT SUM(montant) date FROM rechargement");
//         $reqConds = "WHERE ";
//         $reqConds = $reqConds . "((date  > '".$_GET["dateDeb"]."' AND date  < '".$_GET["dateFin"]."') OR ((date='".$_GET["dateDeb"]."') OR (date='".$_GET["dateFin"]."')))";
//         $rech->execute();
//         while($donnees = $rech->fetch()){
//             $result = [
//                 "succes"=>true,
//                 "resultat"=>$donnees["SUM(montant)"]
//             ];
//         }
      
//       } catch(PDOException $e) {
//         echo($e->getMessage());

//         $result = [
//             "succes"=>false,
//         ];
//       }
//     echo(json_encode($result, JSON_UNESCAPED_UNICODE));
// ?>
