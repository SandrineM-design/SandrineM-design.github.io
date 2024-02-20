CREATE TABLE `formation` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `school` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `experiences` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `place` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `projects` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `img` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `link` VARCHAR(255) NOT NULL,
  `github` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `skills` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `img` VARCHAR(255) NOT NULL,
  `id_type` INT NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`id_type`) REFERENCES type(id)
);

CREATE TABLE `type` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `experiences_skills` (
  `id_experience` INT NOT NULL,
  `id_skill` INT NOT NULL,
  FOREIGN KEY (`id_experience`) REFERENCES experience(id),
  FOREIGN KEY (`id_skill`) REFERENCES skill(id)
);

CREATE TABLE `projects_skills` (
  `id_project` int,
  `id_skill` int
);

CREATE TABLE `formations_skills` (
  `id_formation` int,
  `id_skill` int
);

ALTER TABLE `skills` ADD FOREIGN KEY (`id`) REFERENCES `experiences_skills` (`id_skill`);

ALTER TABLE `experiences` ADD FOREIGN KEY (`id`) REFERENCES `experiences_skills` (`id_experience`);

ALTER TABLE `projects` ADD FOREIGN KEY (`id`) REFERENCES `projects_skills` (`id_project`);

ALTER TABLE `skills` ADD FOREIGN KEY (`id`) REFERENCES `projects_skills` (`id_skill`);

ALTER TABLE `type` ADD FOREIGN KEY (`id`) REFERENCES `skills` (`id_type`);

ALTER TABLE `formation` ADD FOREIGN KEY (`id`) REFERENCES `formations_skills` (`id_formation`);

ALTER TABLE `skills` ADD FOREIGN KEY (`id`) REFERENCES `formations_skills` (`id_skill`);
