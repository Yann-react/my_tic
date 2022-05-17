<?php
    include 'bdd.php';

    try {
        $bdd = getBDD();
        $stmt = $bdd->prepare("INSERT INTO admin (matricule, nomComplet, motpass) VALUES (:matricule, :nomComplet, :motpass)");
        $stmt->bindParam(':matricule', $matricule);
        $stmt->bindParam(':nomComplet', $nomComplet);
        $stmt->bindParam(':motpass', $motpass);
      
        $nomComplet = $_GET["nomComplet"];
        $motpass = $_GET["motpass"];
        $matricule = $_GET["matricule"];
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
