<?php
    include 'bdd.php';

    try {
        $bdd = getBDD();
        $stmt = $bdd->prepare("UPDATE proprietaire SET (nom, prenom, nombreCondu, communeCondu, quartierCondu, telephone) VALUES (:nom, :prenom, :nombreCondu, :communeCondu, :quartierCondu, :telephone)");
        $stmt->bindParam(':nom', $nom);
        $stmt->bindParam(':prenom', $prenom);
        $stmt->bindParam(':nombreCondu', $nombreCondu);
        $stmt->bindParam(':communeCondu', $communeCondu);
        $stmt->bindParam(':quartierCondu', $quartierCondu);
        $stmt->bindParam(':telephone', $telephone);
      
        $nom = $_GET["nom"];
        $prenom = $_GET["prenom"];
        $nombreCondu = $_GET["nombreCondu"];
        $communeCondu = (isset($_GET["communeCondu"]))? $_GET["communeCondu"] : NULL;
        $quartierCondu = (isset($_GET["quartierCondu"]))? $_GET["quartierCondu"] : NULL;
        $telephone = $_GET["telephone"];
        $stmt->execute();

        $result = [
            "succes"=>true,
        ];
      
      } catch(PDOException $e) {
        $result = [
            "succes"=>false,
        ];
      }
    
    



    echo(json_encode($result, JSON_UNESCAPED_UNICODE));
?>
