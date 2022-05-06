-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : ven. 06 mai 2022 à 12:42
-- Version du serveur :  8.0.21
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `registre`
--

-- --------------------------------------------------------

--
-- Structure de la table `admin`
--

DROP TABLE IF EXISTS `admin`;
CREATE TABLE IF NOT EXISTS `admin` (
  `matricule` varchar(10) NOT NULL,
  `nomComplet` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `motpass` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`matricule`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `conducteur`
--

DROP TABLE IF EXISTS `conducteur`;
CREATE TABLE IF NOT EXISTS `conducteur` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `prenom` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `telephone` varchar(10) NOT NULL,
  `commune` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `quartier` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `conducteur`
--

INSERT INTO `conducteur` (`id`, `nom`, `prenom`, `telephone`, `commune`, `quartier`, `date`) VALUES
(1, 'Thea', 'Kouadjo', '0897', 'Angré', 'CHU', '2022-05-11');

-- --------------------------------------------------------

--
-- Structure de la table `moyenpayement`
--

DROP TABLE IF EXISTS `moyenpayement`;
CREATE TABLE IF NOT EXISTS `moyenpayement` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `moyenpayement`
--

INSERT INTO `moyenpayement` (`id`, `nom`) VALUES
(0, 'WAVE');

-- --------------------------------------------------------

--
-- Structure de la table `proprietaire`
--

DROP TABLE IF EXISTS `proprietaire`;
CREATE TABLE IF NOT EXISTS `proprietaire` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `prenom` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `telephone` varchar(10) NOT NULL,
  `nombreCondu` int NOT NULL,
  `communeCondu` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `quartierCondu` int NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `proprietaire`
--

INSERT INTO `proprietaire` (`id`, `nom`, `prenom`, `telephone`, `nombreCondu`, `communeCondu`, `quartierCondu`, `date`) VALUES
(1, 'THH', 'AEEAE', '989797', 3, 'Angré', 0, '2022-05-11');

-- --------------------------------------------------------

--
-- Structure de la table `rechargement`
--

DROP TABLE IF EXISTS `rechargement`;
CREATE TABLE IF NOT EXISTS `rechargement` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `nomComplet` varchar(200) NOT NULL,
  `montant` int NOT NULL,
  `idAdmin` varchar(10) NOT NULL,
  `moyenPay` varchar(50) NOT NULL,
  `telephone` varchar(10) NOT NULL,
  `heure` time NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `rechargement`
--

INSERT INTO `rechargement` (`id`, `date`, `nomComplet`, `montant`, `idAdmin`, `moyenPay`, `telephone`, `heure`) VALUES
(1, '2022-05-18', 'fsfsf', 0, 'ADMIN001', '0', '0897', '00:00:00'),
(2, '2022-05-06', 'HHH', 0, 'FFS', 'FSF', '', '02:52:53');

-- --------------------------------------------------------

--
-- Structure de la table `superadmin`
--

DROP TABLE IF EXISTS `superadmin`;
CREATE TABLE IF NOT EXISTS `superadmin` (
  `matricule` varchar(5) COLLATE utf8mb4_general_ci NOT NULL,
  `nomComplet` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `motpass` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`matricule`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
