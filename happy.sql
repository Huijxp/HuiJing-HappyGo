-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2019-01-17 12:56:22
-- 服务器版本： 10.1.28-MariaDB
-- PHP Version: 5.6.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `happy`
--

-- --------------------------------------------------------

--
-- 表的结构 `hp_login`
--

CREATE TABLE `hp_login` (
  `id` int(11) NOT NULL,
  `uname` varchar(20) DEFAULT NULL,
  `phone` varchar(16) DEFAULT NULL,
  `pwd` varchar(25) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `hp_login`
--

INSERT INTO `hp_login` (`id`, `uname`, `phone`, `pwd`) VALUES
(1, 'tom', '11111111111', '123'),
(2, 'jerry', '11111111111', '123'),
(3, '敌敌畏', '13566245986', '123'),
(5, 'jerry', '11111111111', '123'),
(55, 'jxpwudi132', '13833910516', '124621'),
(56, 'dsa123', '13833910513', '123654'),
(57, 'tom555', '15366524536', '111111'),
(58, 'jxpwu213', '18032654129', '321654'),
(59, 'tomt54', '13598746542', '365241');

-- --------------------------------------------------------

--
-- 表的结构 `hp_project`
--

CREATE TABLE `hp_project` (
  `pid` int(11) NOT NULL,
  `pname` varchar(20) DEFAULT NULL,
  `pnowprice` int(11) DEFAULT NULL,
  `poldprice` int(11) DEFAULT NULL,
  `pdetail` varchar(300) DEFAULT NULL,
  `pimg` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `hp_project`
--

INSERT INTO `hp_project` (`pid`, `pname`, `pnowprice`, `poldprice`, `pdetail`, `pimg`) VALUES
(17, '面膜', 799, 489, '诗蒂兰能量微震红光面罩套组（能量微震红光）', 'http://127.0.0.1:3000/picture/11.jpg'),
(18, '护肤', 399, 189, '丁星斋传统老汤牛肉 （清真）125g*10袋 赠8袋（诗蒂兰水光肌面膜60片）', 'http://127.0.0.1:3000/picture/12.jpg'),
(19, '面膜', 799, 489, '诗蒂兰能量微震红光面罩套组（能量微震红光面罩1个+诗蒂兰水光肌面膜60片）', 'http://127.0.0.1:3000/picture/11.jpg'),
(20, '护肤', 399, 189, '丁星斋传统老汤牛肉 （清真）125g*10袋 赠8袋（诗蒂兰水光肌面膜60片）', 'http://127.0.0.1:3000/picture/12.jpg'),
(21, '面膜', 799, 489, '诗蒂兰能量微震红光面罩套组（能量微震红光面罩1个+诗蒂兰水光肌面膜60片）', 'http://127.0.0.1:3000/picture/11.jpg'),
(22, '护肤', 399, 189, '丁星斋传统老汤牛肉 （清真）125g*10袋 赠8袋（诗蒂兰水光肌面膜60片）', 'http://127.0.0.1:3000/picture/12.jpg'),
(23, '面膜', 799, 489, '诗蒂兰能量微震红光面罩套组（能量微震红光面罩1个+诗蒂兰水光肌面膜60片）', 'http://127.0.0.1:3000/picture/11.jpg'),
(24, '护肤', 399, 189, '丁星斋传统老汤牛肉 （清真）125g*10袋 赠8袋（诗蒂兰水光肌面膜60片）', 'http://127.0.0.1:3000/picture/12.jpg'),
(25, '面膜', 799, 489, '诗蒂兰能量微震红光面罩套组（能量微震红光）', 'http://127.0.0.1:3000/picture/11.jpg'),
(26, '护肤', 399, 189, '丁星斋传统老汤牛肉 （清真）125g*10袋 赠8袋（诗蒂兰水光肌面膜60片）', 'http://127.0.0.1:3000/picture/12.jpg'),
(27, '面膜', 799, 489, '诗蒂兰能量微震红光面罩套组（能量微震红光面罩1个+诗蒂兰水光肌面膜60片）', 'http://127.0.0.1:3000/picture/11.jpg'),
(28, '护肤', 399, 189, '丁星斋传统老汤牛肉 （清真）125g*10袋 赠8袋（诗蒂兰水光肌面膜60片）', 'http://127.0.0.1:3000/picture/12.jpg'),
(29, '面膜', 799, 489, '诗蒂兰能量微震红光面罩套组（能量微震红光面罩1个+诗蒂兰水光肌面膜60片）', 'http://127.0.0.1:3000/picture/11.jpg'),
(30, '护肤', 399, 189, '丁星斋传统老汤牛肉 （清真）125g*10袋 赠8袋（诗蒂兰水光肌面膜60片）', 'http://127.0.0.1:3000/picture/12.jpg'),
(31, '面膜', 799, 489, '诗蒂兰能量微震红光面罩套组（能量微震红光面罩1个+诗蒂兰水光肌面膜60片）', 'http://127.0.0.1:3000/picture/11.jpg'),
(32, '护肤', 399, 189, '丁星斋传统老汤牛肉 （清真）125g*10袋 赠8袋（诗蒂兰水光肌面膜60片）', 'http://127.0.0.1:3000/picture/12.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `hp_login`
--
ALTER TABLE `hp_login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hp_project`
--
ALTER TABLE `hp_project`
  ADD PRIMARY KEY (`pid`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `hp_login`
--
ALTER TABLE `hp_login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- 使用表AUTO_INCREMENT `hp_project`
--
ALTER TABLE `hp_project`
  MODIFY `pid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
