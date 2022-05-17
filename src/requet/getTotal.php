<?php
    include 'bdd.php';
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Headers: Content-Type');

    try {
        $bdd = getBDD();
        $rech = $bdd->prepare("SELECT SUM(montant) date FROM rechargement");
        $reqConds = "WHERE ";
        $reqConds = $reqConds . "((date  > '".$_GET["dateDeb"]."' AND date  < '".$_GET["dateFin"]."') OR ((date='".$_GET["dateDeb"]."') OR (date='".$_GET["dateFin"]."')))";
        $rech->execute();
        while($donnees = $rech->fetch()){
            $result = [
                "succes"=>true,
                "resultat"=>$donnees["SUM(montant)"]
            ];
        }
      
      } catch(PDOException $e) {
        echo($e->getMessage());

        $result = [
            "succes"=>false,
        ];
      }
    echo(json_encode($result, JSON_UNESCAPED_UNICODE));
?>
