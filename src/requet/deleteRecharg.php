<?php
    include 'bdd.php';
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Headers: Content-Type');
    try {
        $bdd = getBDD();
        $stmt = $bdd->prepare("DELETE FROM rechargement WHERE id = ?");
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
