<?php
    include 'bdd.php';

    try {
        $bdd = getBDD();
        $stmt = $bdd->prepare("INSERT INTO conducteur (nom, prenom, commune, quartier, telephone) VALUES (nom, :prenom, :nombreCondu, :communeCondu, :quartierCondu, :telephone)");
        $stmt->bindParam(':nom', $nom);
        $stmt->bindParam(':prenom', $prenom);
        $stmt->bindParam(':commune', $commune);
        $stmt->bindParam(':quartier', $quartier);
        $stmt->bindParam(':telephone', $telephone);
      
        $nom = $_GET["nom"];
        $prenom = $_GET["prenom"];
        $commune = $_GET["commune"];
        $quartier = $_GET["quartier"];
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
