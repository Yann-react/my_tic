<?php
    include 'bdd.php';
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Headers: Content-Type');
    $bdd = getBDD();

    $rechAdmin = $bdd->prepare("SELECT * FROM admin");
    $rechAdmin->execute();
    $listeAdmin = [];
    $conducts = [];
    while($donneesAdmins = $rechAdmin->fetch()){
        $listeAdmin[] = $donneesAdmins;
    }

    foreach($listeAdmin as $itemAdmin){
        $admin = [];
        $admin["matricule"] = $itemAdmin["matricule"];
        $admin["nomComplet"] = $itemAdmin["nomComplet"];
        $admins[] = $admin;
    }
    
    $result = [
        "succes"=>true,
        "resultat"=>$admins
    ];

    echo(json_encode($result, JSON_UNESCAPED_UNICODE));
?>
