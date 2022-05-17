<?php
    include 'bdd.php';
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Headers: Content-Type');
    try {
        $bdd = getBDD();
        $stmt = $bdd->prepare("UPDATE rechargement SET nomComplet=:nomComplet, montant=:montant,moyenPay=:moyenPay,telephone=:telephone WHERE id='".$_GET["id"]."'");
        $stmt->bindParam(':nomComplet', $nomComplet);
        $stmt->bindParam(':montant', $montant);;
        $stmt->bindParam(':moyenPay', $moyenPay);
        $stmt->bindParam(':telephone', $telephone);
      
        $nomComplet = $_GET["nomComplet"];
        $montant = $_GET["montant"];
        $moyenPay = $_GET["moyenPay"];
        $telephone = $_GET["telephone"];
        $stmt->execute();

        $result = [
            "succes"=>true,
        ];
      
      } catch(PDOException $e) {
        echo($e->getMessage());
        $result = [
            "succes"=>false,
        ];
      }
    
    



    echo(json_encode($result, JSON_UNESCAPED_UNICODE));
?>
