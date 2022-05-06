<?php
    include 'bdd.php';

    try {
        $bdd = getBDD();
        $stmt = $bdd->prepare("INSERT INTO proprietaire (date, nom, prenom, nombreCondu, communeCondu, quartierCondu, telephone) VALUES (:date, :nom, :prenom, :nombreCondu, :communeCondu, :quartierCondu, :telephone)");
        $stmt->bindParam(':date', $date);
        $stmt->bindParam(':nom', $nom);
        $stmt->bindParam(':prenom', $prenom);
        $stmt->bindParam(':nombreCondu', $nombreCondu);
        $stmt->bindParam(':communeCondu', $communeCondu);
        $stmt->bindParam(':quartierCondu', $quartierCondu);
        $stmt->bindParam(':telephone', $telephone);
      
        $date = date('Y-m-d');
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
