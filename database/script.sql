-- Tabela de vagas
CREATE TABLE `positions` (
  `id_vaga` INT(11) NOT NULL AUTO_INCREMENT, 
  `company` varchar(20) NOT NULL,
  `title` varchar(30) NOT NULL,
  `description` varchar(1024) NOT NULL,
  `localization` varchar(1) NOT NULL,
  `level` tinyint(1) NOT NULL,
  constraint pk_position primary key (id_vaga)
) ENGINE=InnoDB DEFAULT CHARSET=utf8

-- Tabela de Candidatos
CREATE TABLE `applicants` (
  `id_applicant` INT(11) NOT NULL AUTO_INCREMENT, 
  `name` varchar(20) NOT NULL,
  `position` varchar(30) NOT NULL,
  `localization` varchar(1) NOT NULL,
  `level` tinyint(1) NOT NULL,
  constraint pk_position primary key (id_applicant)
) ENGINE=InnoDB DEFAULT CHARSET=utf8

-- Tablea de Candidaturas
CREATE TABLE `applications` (
    `id_applicant` INT(11) NOT NULL,
    `id_vaga` INT(11) NOT NULL,
    CONSTRAINT pk_applications PRIMARY KEY (id_applicant, id_vaga),
    CONSTRAINT fk_application_applicant FOREIGN KEY (id_applicant)
        REFERENCES applicants (id_applicant)
        ON UPDATE CASCADE ON DELETE RESTRICT,
    CONSTRAINT fk_application_position FOREIGN KEY (id_vaga)
        REFERENCES positions (id_vaga)
        ON UPDATE CASCADE ON DELETE RESTRICT
)  ENGINE=INNODB DEFAULT CHARSET=UTF8


