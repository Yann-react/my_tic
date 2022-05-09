<?php
    include 'bdd.php';

    try {
        $bdd = getBDD();
        $stmt = $bdd->prepare("UPDATE admin SET motpass=:motpass WHERE matricule=:matricule");
        $stmt->bindParam(':matricule', $matricule);
        $stmt->bindParam(':motpass', $motpass);
    
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
