CREATE TABLE `personne` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `nom` varchar(255),
  `prenom` varchar(255),
  `telephone` int,
  `mail` varchar(255),
  `adresse_rue` varchar(255),
  `adresse_ville` varchar(255),
  `adresse_code_postal` varchar(255),
  `present` boolean,
  `mdp` varchar(255)
);

CREATE TABLE `admin` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `personne_id` int,
  `responsabilite` varchar(255)
);

CREATE TABLE `orateur` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `personne_id` int,
  `presentation` varchar(255)
);

CREATE TABLE `medecin` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `information` hotel,
  `personne_id` int,
  `numero_inami` int,
  `specialite` varchar(255)
);

CREATE TABLE `participant` (
  `personne_id` int,
  `event_id` int
);

CREATE TABLE `event` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `nom` varchar(255),
  `description` varchar(255),
  `date_end` datetime,
  `date_start` datetime,
  `lieu` varchar(255)
);

CREATE TABLE `conference` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `nom` varchar(255),
  `informations` varchar(255),
  `description` varchar(255),
  `evnt_id` int,
  `hour_start` datetime,
  `hour_en` datetime,
  `sale` char
);

ALTER TABLE `admin` ADD FOREIGN KEY (`personne_id`) REFERENCES `personne` (`id`);

ALTER TABLE `orateur` ADD FOREIGN KEY (`personne_id`) REFERENCES `personne` (`id`);

ALTER TABLE `medecin` ADD FOREIGN KEY (`personne_id`) REFERENCES `personne` (`id`);

ALTER TABLE `participant` ADD FOREIGN KEY (`personne_id`) REFERENCES `personne` (`id`);

ALTER TABLE `participant` ADD FOREIGN KEY (`event_id`) REFERENCES `event` (`id`);

ALTER TABLE `conference` ADD FOREIGN KEY (`evnt_id`) REFERENCES `event` (`id`);
