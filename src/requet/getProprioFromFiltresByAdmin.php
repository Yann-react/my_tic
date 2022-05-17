<?php
    include 'bdd.php';
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Headers: Content-Type');

    try {
    $bdd = getBDD();

    $reqStr = "SELECT * FROM proprietaire ";
    $reqConds = "WHERE ";
    $reqConds = $reqConds . "((date  > '".$_GET["dateDeb"]."' AND date  < '".$_GET["dateFin"]."') OR ((date='".$_GET["dateDeb"]."') OR (date='".$_GET["dateFin"]."'))) AND nombreCondu >= '".$_GET["nombreConductMin"]."' AND nombreCondu <= '".$_GET["nombreConductMax"]."' AND idAdmin='".$_GET["idAdmin"]."' ";
    if(isset($_GET["commune"])){
        $reqConds = $reqConds."AND communeCondu = '".$_GET["commune"]."' ";
    }
    if(isset($_GET["quartier"])){
        $reqConds = $reqConds."AND quartierCondu = '".$_GET["quartier"]."' ";
    }
    if(isset($_GET["nombreConductMin"]) && isset($_GET["nombreConductMax"])){
        $reqConds = $reqConds."AND nombreCondu >= '".$_GET["nombreConductMin"]."' AND nombreCondu <= '".$_GET["nombreConductMax"]."' ";
    }
    $reqConds = $reqConds . " ORDER BY date DESC";
    //echo($reqStr.$reqConds);
    //echo($reqStr.$reqConds);
    $rechProprio = $bdd->prepare($reqStr.$reqConds);
    $rechProprio->execute();
    $listeProprio = [];
    $proprios = [];
    while($donneesProprios = $rechProprio->fetch()){
        $listeProprio[] = $donneesProprios;
    }

    foreach($listeProprio as $itemProprio){
        $proprio = [];
        $proprio["id"] = $itemProprio["id"];
        $proprio["date"] = substr($itemProprio["date"], 8, 2)."-".substr($itemProprio["date"], 5, 2)."-".substr($itemProprio["date"], 0, 4);
        $proprio["nom"] = $itemProprio["nom"];
        $proprio["prenom"] = $itemProprio["prenom"];
        $proprio["nombreConduct"] = $itemProprio["nombreCondu"];
        $proprio["communeRech"] = $itemProprio["communeCondu"];
        $proprio["quartierRech"] = $itemProprio["quartierCondu"];
        $proprio["telephone"] = $itemProprio["telephone"];
        
        $proprios[] = $proprio;
    }

    
    $result = [
        "succes"=>true,
        "resultat"=>$proprios
    ];
    



    echo(json_encode($result, JSON_UNESCAPED_UNICODE));
    
      
      } catch(PDOException $e) {
        echo($e->getMessage());

        $result = [
            "succes"=>false,
        ];
      }
?>
