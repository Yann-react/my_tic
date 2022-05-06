<?php
    include 'bdd.php';

    try {
        $bdd = getBDD();
        $stmt = $bdd->prepare("INSERT INTO rechargement (date, nomComplet, montant, idAdmin, moyenPay, telephone, heure) VALUES (:date, :nomComplet, :montant, :idAdmin, :moyenPay, :telephone, :heure)");
        $stmt->bindParam(':date', $date);
        $stmt->bindParam(':nomComplet', $nomComplet);
        $stmt->bindParam(':montant', $montant);
        $stmt->bindParam(':idAdmin', $idAdmin);
        $stmt->bindParam(':moyenPay', $moyenPay);
        $stmt->bindParam(':telephone', $telephone);
        $stmt->bindParam(':heure', $heure);
      
        $date = date('Y-m-d');
        $heure = date('H:i:s');
        $nomComplet = $_GET["nomComplet"];
        $montant = $_GET["montant"];
        $idAdmin = $_GET["idAdmin"];
        $moyenPay = $_GET["moyenPay"];
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
