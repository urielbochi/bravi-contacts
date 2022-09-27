DROP DATABASE IF EXISTS Contacts;
CREATE DATABASE Contacts;

USE Contacts;

CREATE TABLE IF NOT EXISTS users(
`id` INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(250) NOT NULL,
email VARCHAR(250) NOT NULL
) engine = InnoDB;

CREATE TABLE IF NOT EXISTS contacts(
`id` INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(250) NOT NULL,
phone VARCHAR(250) NOT NULL,
email VARCHAR(250) NOT NULL,
whatsapp VARCHAR(250) NOT NULL,
userId integer,
FOREIGN KEY(`userId`)
REFERENCES `users` (`id`)
) engine = InnoDB;

/* Usuários disponíveis */

INSERT INTO users(name, email)
VALUES('Ana Joice', 'ana@gmail.com');

INSERT INTO users(name, email)
VALUES('Pedro Amorim', 'pedroamorim@gmail.com');

INSERT INTO users(name, email)
VALUES('Lucas Santos', 'lucassantos@gmail.com');

INSERT INTO users(name, email)
VALUES('Juliana Happatsch', 'julianahp@gmail.com');

INSERT INTO users(name, email)
VALUES('Lilian Santos', 'liliansantos@gmail.com');


/* População dos usuários */

INSERT INTO contacts(name, phone, email, whatsapp, userId)
VALUES('Matheus Pepe', '+55 11 98152-0245', 'matheuspepe@gmail.com', '+55 11 98152-0245', 1);

INSERT INTO contacts(name, phone, email, whatsapp, userId)
VALUES('Luiz Fernando', '+55 13 99611-9313', 'luizfernando@gmail.com', '+55 13 99611-9313', 1);

INSERT INTO contacts(name, phone, email, whatsapp, userId)
VALUES('Juliana Happatsch', '+55 21 98934-1190', 'julianahapataix@gmail.com', '+55 21 98934-1190', 1);

INSERT INTO contacts(name, phone, email, whatsapp, userId)
VALUES('Lilian Santos', '+55 21 98323-8716', 'liliansantos@gmail.com', '55 21 98323-8716', 1);

INSERT INTO contacts(name, phone, email, whatsapp, userId)
VALUES('Herique Teles', '+55 31 99631-2948', 'henriquemoreira@gmail.com', '+55 31 99631-2948', 1);

INSERT INTO contacts(name, phone, email, whatsapp, userId)
VALUES('Lu Orsi', '+55 51 8963-6641', 'luorsi@gmail.com', '+55 51 8963-6641', 1);






INSERT INTO contacts(name, phone, email, whatsapp, userId)
VALUES('Raphael Soares', '+55 84 9613-9498', 'raphsoares@gmail.com', '+55 84 9613-9498', 2);

INSERT INTO contacts(name, phone, email, whatsapp, userId)
VALUES('Ruan Dietrich', '+55 53 8128-4404', 'ruandietrich@gmail.com', '+55 53 8128-4404', 2);

INSERT INTO contacts(name, phone, email, whatsapp, userId)
VALUES('Marcela Gonçalo', '+55 32 99034-4190', 'marcelagonçalo@gmail.com', '+55 32 99034-4190', 2);

INSERT INTO contacts(name, phone, email, whatsapp, userId)
VALUES('Mr Dealer', '+55 45 96123-2416', 'mrdealer@gmail.com', '55 45 96123-2416', 2);

INSERT INTO contacts(name, phone, email, whatsapp, userId)
VALUES('Alan Gonçalvez', '+55 48 99324-6987', 'alangoncalvez@gmail.com', '+55 48 99324-6987', 2);

INSERT INTO contacts(name, phone, email, whatsapp, userId)
VALUES('Meu chat privado', '+55 38 92463-1041', 'pedroamorim@gmail.com', '+55 38 92463-1041', 2);





