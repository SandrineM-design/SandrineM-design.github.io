CREATE TABLE `formation` (
  `id` int,
  `name` varchar(255),
  `school` varchar(255)
);

CREATE TABLE `experiences` (
  `id` int,
  `name` varchar(255),
  `place` varchar(255)
);

CREATE TABLE `projects` (
  `id` int,
  `title` varchar(255),
  `img` varchar(255),
  `description` varchar(255),
  `link` varchar(255),
  `github` varchar(255)
);

CREATE TABLE `skills` (
  `id` int,
  `name` varchar(255),
  `img` varchar(255),
  `id_type` int
);

CREATE TABLE `type` (
  `id` int,
  `name` varchar(255)
);

CREATE TABLE `experiences_skills` (
  `id_experience` int,
  `id_skill` int
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
