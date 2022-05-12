<?php
    include 'bdd.php';
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Headers: Content-Type');

    try {
        $bdd = getBDD();
        $rech = $bdd->prepare("SELECT SUM(montant) FROM rechargement");
        $rech->execute();
        while($donnees = $rech->fetch()){
            $result = [
                "succes"=>true,
                "resultat"=>$donnees["SUM(montant)"]
            ];
        }
      
      } catch(PDOException $e) {
        $result = [
            "succes"=>false,
        ];
      }
    echo(json_encode($result, JSON_UNESCAPED_UNICODE));
?>
