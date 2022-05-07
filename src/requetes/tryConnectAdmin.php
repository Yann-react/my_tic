<?php
    include 'bdd.php';
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Headers: Content-Type');
    try {
        $bdd = getBDD();
        $rech = $bdd->prepare("SELECT * FROM admin WHERE matricule=? AND motpass=?");
        $rech->execute(Array($_GET["matricule"], $_GET["mdp"]));

        if($donnees = $rech->fetch()){
            $user["matricule"] = $donnees["matricule"];
            $user["nomComplet"] = $donnees["nomComplet"];
            $user["mdp"] = $donnees["motpass"];

            $result = [
                "succes"=>true,
                "resultat"=>$user
            ];
        }else{
            $result = [
                "succes"=>false,
            ];
        }
      
      } catch(PDOException $e) {
        $result = [
            "succes"=>false,
        ];
      }
    

    echo(json_encode($result, JSON_UNESCAPED_UNICODE));
?>
