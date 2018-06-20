-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 19, 2018 at 03:10 PM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 5.6.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_chatbot`
--

-- --------------------------------------------------------

--
-- Table structure for table `ci_sessions`
--

CREATE TABLE `ci_sessions` (
  `session_id` varchar(40) NOT NULL DEFAULT '0',
  `ip_address` varchar(45) NOT NULL DEFAULT '0',
  `user_agent` varchar(120) NOT NULL,
  `last_activity` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `user_data` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ci_sessions`
--

INSERT INTO `ci_sessions` (`session_id`, `ip_address`, `user_agent`, `last_activity`, `user_data`) VALUES
('2c8c13cfd8b8cdd6a2f79b4663b5e377', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36', 1529413731, '');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_category`
--

CREATE TABLE `tbl_category` (
  `id` int(10) NOT NULL,
  `name` varchar(100) NOT NULL,
  `status` enum('Active','InActive') DEFAULT 'Active',
  `slug` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_category`
--

INSERT INTO `tbl_category` (`id`, `name`, `status`, `slug`) VALUES
(1, 'Unit', 'Active', 'unit'),
(2, 'GPA', 'Active', 'gpa');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_faq`
--

CREATE TABLE `tbl_faq` (
  `id` int(11) NOT NULL,
  `question` varchar(255) DEFAULT NULL,
  `category_id` varchar(255) DEFAULT NULL,
  `answer` text,
  `status` enum('Active','InActive') DEFAULT 'Active',
  `created_by` int(11) DEFAULT NULL,
  `created_on` int(15) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `updated_on` int(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_faq`
--

INSERT INTO `tbl_faq` (`id`, `question`, `category_id`, `answer`, `status`, `created_by`, `created_on`, `updated_by`, `updated_on`) VALUES
(2, 'What we do ?', '1', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur arcu id faucibus interdum. Nunc commodo nec est eget consectetur. Curabitur malesuada efficitur laoreet. Sed mattis enim non leo egestas, vel fermentum leo porta. In hac habitasse platea dictumst. Nullam posuere elit interdum bibendum mattis. Phasellus sodales, nibh non consectetur cursus, dolor ipsum porttitor est, vel consectetur nisi diam posuere quam. Donec tristique rutrum cursus. Sed sit amet purus in nulla sagittis feugiat nec vel mauris. Nullam euismod blandit velit, vitae porta elit malesuada non. Ut faucibus rhoncus malesuada. Phasellus felis orci, cursus vel dui sit amet, laoreet posuere ante. Morbi enim sapien, cursus in mauris in, pharetra condimentum erat. Cras ex risus, vestibulum non congue quis, dapibus in magna.</p>\r\n\r\n<p>Mauris sagittis mi a gravida tempor. Proin urna massa, posuere et elit at, ultricies ultricies lorem. Morbi quis nunc sed libero malesuada tempor. Quisque ante sapien, varius vel posuere quis, ullamcorper et lacus. Fusce venenatis accumsan est, tempus aliquet lorem porta ut. Cras venenatis, arcu sed aliquet suscipit, ante urna convallis sem, in rutrum risus dui eu arcu. Praesent felis sapien, blandit ut semper sit amet, pretium quis nulla. Sed consequat leo a tellus aliquet, in feugiat quam ullamcorper. Morbi nec facilisis nisi. In feugiat fermentum aliquet. Sed id lectus gravida, faucibus lacus vitae, varius elit. Nullam egestas ultrices libero, eu iaculis orci commodo molestie. Integer faucibus pretium scelerisque. Nullam luctus sollicitudin lectus, eu aliquet eros facilisis vitae. Nulla facilisi.</p>\r\n', 'Active', 1, 0, 7, 1457410501),
(3, 'Why KBIC?', '', '\r\n', 'Active', 7, 1457410301, 7, 1457410500),
(4, 'mnmnmnm', '2', '<p>bnb</p>\r\n', 'Active', 7, 1529407854, 7, 1529407854);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_module`
--

CREATE TABLE `tbl_module` (
  `id` int(10) NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `slug` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `priority` int(10) NOT NULL,
  `parent_id` int(10) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `updated_time` int(11) DEFAULT NULL,
  `public_module` enum('Yes','No') COLLATE utf8_unicode_ci DEFAULT 'Yes'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tbl_module`
--

INSERT INTO `tbl_module` (`id`, `name`, `slug`, `priority`, `parent_id`, `updated_by`, `updated_time`, `public_module`) VALUES
(5, 'Categories', 'category', 0, 0, NULL, NULL, 'Yes'),
(9, 'Settings', 'settings', 0, 0, NULL, NULL, 'Yes'),
(20, 'Users', 'user', 0, 0, NULL, NULL, 'No'),
(64, 'FAQ', 'faq', 0, 0, NULL, NULL, 'Yes'),
(94, 'Role Manager', 'role', 0, 9, NULL, NULL, 'Yes'),
(97, 'Unanswered Question', '', 0, 0, NULL, NULL, 'Yes');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_role`
--

CREATE TABLE `tbl_role` (
  `id` int(10) NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci,
  `updated_by` int(11) DEFAULT NULL,
  `updated_on` int(11) DEFAULT NULL,
  `role_type` enum('Backend','Frontend') COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tbl_role`
--

INSERT INTO `tbl_role` (`id`, `name`, `description`, `updated_by`, `updated_on`, `role_type`) VALUES
(1, 'Super Administrator', 'Super Administrator', NULL, NULL, 'Backend'),
(2, 'Staff', '<p>Staff</p>\r\n', NULL, NULL, 'Backend');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_role_module`
--

CREATE TABLE `tbl_role_module` (
  `id` int(10) NOT NULL,
  `module_id` int(10) NOT NULL,
  `role_id` int(10) NOT NULL,
  `permission` varchar(4) COLLATE utf8_unicode_ci DEFAULT '1111'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tbl_role_module`
--

INSERT INTO `tbl_role_module` (`id`, `module_id`, `role_id`, `permission`) VALUES
(10, 5, 2, '1110'),
(11, 64, 2, '1110'),
(12, 97, 2, '0100');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE `tbl_user` (
  `id` int(10) NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `username` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `role_id` int(10) NOT NULL,
  `status` enum('Active','InActive') COLLATE utf8_unicode_ci DEFAULT 'Active',
  `updated_by` int(11) DEFAULT NULL,
  `updated_time` int(11) DEFAULT NULL,
  `token_generated_at` datetime DEFAULT NULL,
  `user_type` enum('Backend','Frontend') COLLATE utf8_unicode_ci DEFAULT 'Backend'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`id`, `name`, `email`, `username`, `password`, `role_id`, `status`, `updated_by`, `updated_time`, `token_generated_at`, `user_type`) VALUES
(2, 'Staff', 'staff@staff.com', 'staff', 'staff', 2, 'Active', NULL, NULL, NULL, 'Backend'),
(7, 'Rojeena Shrestha', 'rshrestha92@gmail.com', 'superadmin', 'superadmin', 1, 'Active', NULL, NULL, NULL, 'Backend');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_category`
--
ALTER TABLE `tbl_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_faq`
--
ALTER TABLE `tbl_faq`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `tbl_module`
--
ALTER TABLE `tbl_module`
  ADD PRIMARY KEY (`id`),
  ADD KEY `User Module` (`updated_by`);

--
-- Indexes for table `tbl_role`
--
ALTER TABLE `tbl_role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_role_module`
--
ALTER TABLE `tbl_role_module`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_category`
--
ALTER TABLE `tbl_category`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_faq`
--
ALTER TABLE `tbl_faq`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tbl_module`
--
ALTER TABLE `tbl_module`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=98;

--
-- AUTO_INCREMENT for table `tbl_role`
--
ALTER TABLE `tbl_role`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_role_module`
--
ALTER TABLE `tbl_role_module`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_module`
--
ALTER TABLE `tbl_module`
  ADD CONSTRAINT `User Module` FOREIGN KEY (`updated_by`) REFERENCES `tbl_user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
