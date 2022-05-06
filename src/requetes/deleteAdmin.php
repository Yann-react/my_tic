<?php
    include 'bdd.php';

    try {
        $bdd = getBDD();
        $stmt = $bdd->prepare("DELETE FROM admin WHERE matricule = ?");
        $stmt->execute(array($_GET["matricule"]));

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
