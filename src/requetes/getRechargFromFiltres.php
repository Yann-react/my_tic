<?php
    include 'bdd.php';
    $bdd = getBDD();

    $reqStr = "SELECT id, nomComplet, date, montant, idAdmin, telephone, SUM(montant) FROM rechargement ";
    $reqConds = "WHERE ";
    $reqConds = $reqConds . "((date  > '".$_GET["dateDeb"]."' AND date  < '".$_GET["dateFin"]."') OR ((date='".$_GET["dateDeb"]."') OR (date='".$_GET["dateFin"]."'))) AND montant >= '".$_GET["montantMin"]."' AND montant <= '".$_GET["montantMax"]."' ";
    if(isset($_GET["telephone"])){
        $reqConds = $reqConds."AND telephone = '".$_GET["telephone"]."' ";
    }
    if(isset($_GET["idAdmin"])){
        $reqConds = $reqConds."AND idAdmin = '".$_GET["idAdmin"]."' ";
    }
    if(isset($_GET["nomComplet"])){
        $reqConds = $reqConds."AND nomComplet = '".$_GET["nomComplet"]."' ";
    }
    if(isset($_GET["moyenPay"])){
        $reqConds = $reqConds."AND moyenPay = '".$_GET["moyenPay"]."' ";
    }
    $reqConds = $reqConds . " ORDER BY date, heure DESC";
    //echo($reqStr.$reqConds);
    $rechRecharg = $bdd->prepare($reqStr.$reqConds);
    $rechRecharg->execute();
    $listeRecharg = [];
    $rechargs = [];
    while($donneesRechargs = $rechRecharg->fetch()){
        $listeRecharg[] = $donneesRechargs;
    }

    foreach($listeRecharg as $itemRecharg){
        $recharg = [];
        $recharg["id"] = $itemRecharg["id"];
        $recharg["date"] = substr($itemRecharg["date"], 8, 2)."-".substr($itemRecharg["date"], 5, 2)."-".substr($itemRecharg["date"], 0, 4)." à ".substr($itemRecharg["heure"], 0, 2)."H".substr($itemRecharg["heure"], 3, 2);
        $recharg["nomComplet"] = $itemRecharg["nomComplet"];
        $recharg["montant"] = $itemRecharg["montant"];
        $recharg["idAdmin"] = $itemRecharg["idAdmin"];
        $recharg["telephone"] = $itemRecharg["telephone"];
        $recharg["total"] = $itemRecharg["SUM(montant)"];
        $rechMoy = $bdd->prepare("SELECT nom FROM moyenpayement WHERE id='".$itemRecharg["moyenPay"]."'");
        $rechMoy->execute();
        if($donneesMoy = $rechMoy->fetch()){
            $recharg["moyenPay"] = $donneesMoy["nom"];
        }
        $rechargs[] = $recharg;
    }
    
    $result = [
        "succes"=>true,
        "resultat"=>$rechargs
    ];



    echo(json_encode($result, JSON_UNESCAPED_UNICODE));
?>
