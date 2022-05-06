<?php
    include 'bdd.php';

    try {
        $bdd = getBDD();
        $stmt = $bdd->prepare("DELETE FROM proprietaire WHERE id = ?");
        $stmt->execute(array($_GET["id"]));

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
