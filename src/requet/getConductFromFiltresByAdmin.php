<?php
    include 'bdd.php';
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Headers: Content-Type');
    $bdd = getBDD();

    $reqStr = "SELECT * FROM conducteur ";
    $reqConds = "WHERE ";
    $reqConds = $reqConds . "((date  > '".$_GET["dateDeb"]."' AND date  < '".$_GET["dateFin"]."') OR ((date='".$_GET["dateDeb"]."') OR (date='".$_GET["dateFin"]."'))) AND idAdmin='".$_GET["idAdmin"]."' ";
    if(isset($_GET["commune"])){
        $reqConds = $reqConds."AND commune = '".$_GET["commune"]."' ";
    }
    if(isset($_GET["quartier"])){
        $reqConds = $reqConds."AND quartier = '".$_GET["quartier"]."' ";
    }
    $reqConds = $reqConds . " ORDER BY date DESC";
    //echo($reqStr.$reqConds);
    $rechConduct = $bdd->prepare($reqStr.$reqConds);
    $rechConduct->execute();
    $listeConduct = [];
    $conducts = [];
    while($donneesConducts = $rechConduct->fetch()){
        $listeConduct[] = $donneesConducts;
    }

    foreach($listeConduct as $itemConduct){
        $conduct = [];
        $conduct["id"] = $itemConduct["id"];
        $conduct["date"] = substr($itemConduct["date"], 8, 2)."-".substr($itemConduct["date"], 5, 2)."-".substr($itemConduct["date"], 0, 4);
        $conduct["nom"] = $itemConduct["nom"];
        $conduct["prenom"] = $itemConduct["prenom"];
        $conduct["commune"] = $itemConduct["commune"];
        $conduct["quartier"] = $itemConduct["quartier"];
        $conduct["telephone"] = $itemConduct["telephone"];
        $conducts[] = $conduct;
    }
    
    $result = [
        "succes"=>true,
        "resultat"=>$conducts
    ];



    echo(json_encode($result, JSON_UNESCAPED_UNICODE));
?>
