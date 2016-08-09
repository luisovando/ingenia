/*
Navicat MySQL Data Transfer

Source Server         : Homestead
Source Server Version : 50630
Source Host           : localhost:33060
Source Database       : examen

Target Server Type    : MYSQL
Target Server Version : 50630
File Encoding         : 65001

Date: 2016-08-03 01:01:05
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for employees
-- ----------------------------
DROP TABLE IF EXISTS `employees`;
CREATE TABLE `employees` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `maiden_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of employees
-- ----------------------------
INSERT INTO `employees` VALUES ('1', 'Fabiola Denesik', 'Schuppe', 'Monahan', '2016-08-02 23:10:55', '2016-08-02 23:10:55');
INSERT INTO `employees` VALUES ('2', 'Dr. Delphia Luettgen II', 'Hills', 'Hane', '2016-08-02 23:10:55', '2016-08-02 23:10:55');
INSERT INTO `employees` VALUES ('3', 'Carrie Larson Sr.', 'Huel', 'Kuvalis', '2016-08-02 23:10:55', '2016-08-02 23:10:55');
INSERT INTO `employees` VALUES ('4', 'Barry VonRueden III', 'Willms', 'Berge', '2016-08-02 23:10:55', '2016-08-02 23:10:55');
INSERT INTO `employees` VALUES ('5', 'Robin Labadie', 'Brown', 'Kutch', '2016-08-02 23:10:55', '2016-08-02 23:10:55');
INSERT INTO `employees` VALUES ('6', 'Luis', 'Ovando', 'Rosales', '2016-08-03 00:35:01', '2016-08-03 00:35:01');

-- ----------------------------
-- Table structure for migrations
-- ----------------------------
DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations` (
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of migrations
-- ----------------------------
INSERT INTO `migrations` VALUES ('2014_10_12_000000_create_users_table', '1');
INSERT INTO `migrations` VALUES ('2014_10_12_100000_create_password_resets_table', '1');
INSERT INTO `migrations` VALUES ('2016_08_03_001929_create_employees_table', '1');
INSERT INTO `migrations` VALUES ('2016_08_03_003039_create_salaries_table', '1');

-- ----------------------------
-- Table structure for password_resets
-- ----------------------------
DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  KEY `password_resets_email_index` (`email`),
  KEY `password_resets_token_index` (`token`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of password_resets
-- ----------------------------

-- ----------------------------
-- Table structure for salaries
-- ----------------------------
DROP TABLE IF EXISTS `salaries`;
CREATE TABLE `salaries` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `employee_id` int(10) unsigned NOT NULL,
  `birthday` date NOT NULL,
  `annual_income` decimal(8,2) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  KEY `salaries_employee_id_foreign` (`employee_id`),
  CONSTRAINT `salaries_employee_id_foreign` FOREIGN KEY (`employee_id`) REFERENCES `employees` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of salaries
-- ----------------------------
INSERT INTO `salaries` VALUES ('1', '1', '1975-03-28', '489182.40', '2016-08-02 23:10:55', '2016-08-02 23:10:55');
INSERT INTO `salaries` VALUES ('2', '5', '1982-07-15', '999999.99', '2016-08-02 23:10:55', '2016-08-02 23:10:55');
INSERT INTO `salaries` VALUES ('3', '3', '2004-07-24', '999999.99', '2016-08-02 23:10:55', '2016-08-02 23:10:55');
INSERT INTO `salaries` VALUES ('4', '2', '2008-11-02', '344356.40', '2016-08-02 23:10:55', '2016-08-02 23:10:55');
INSERT INTO `salaries` VALUES ('5', '4', '1991-02-05', '999999.99', '2016-08-02 23:10:55', '2016-08-02 23:10:55');
INSERT INTO `salaries` VALUES ('6', '6', '1988-04-12', '18979.00', '2016-08-03 00:35:01', '2016-08-03 00:35:01');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'Ingenia', 'demo@example.com', '$2y$10$nAKXymbFZsOOaIXZEIpvhe4aTTnnFAMWHW/RqY0mDmLMHZAM8thNq', 'PMTsfn8Jnt4BNbfJhy8lMLRPAS10vT62AbOfZmt4go3HFu0dlFk4r8JoXU4y', '2016-08-02 23:10:55', '2016-08-02 23:11:17');
INSERT INTO `users` VALUES ('2', 'Erica McGlynn', 'zulauf.eladio@example.org', '$2y$10$xwzAK2w9ghIeFpG7GbsEZOwpmwyLTJZHchD/qvS8GtvRV9ZWv3oHC', null, '2016-08-02 23:10:56', '2016-08-02 23:10:56');
INSERT INTO `users` VALUES ('3', 'David Blanda', 'kcummerata@example.com', '$2y$10$sP0v6luS.uP5hvlbB0YPu.4D53231PYRtflXL/JRbD0eu1VTGF1vy', null, '2016-08-02 23:10:56', '2016-08-02 23:10:56');
INSERT INTO `users` VALUES ('4', 'Green Schiller', 'nat81@example.org', '$2y$10$jr4NnCbkTwj/SHI5pEdJm.GkTbWsKdlqPHyaQnvJdwGtdI7ZVDFbe', null, '2016-08-02 23:10:56', '2016-08-02 23:10:56');
