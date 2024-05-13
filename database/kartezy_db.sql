-- MySQL dump 10.13  Distrib 8.0.36, for Linux (x86_64)
--
-- Host: localhost    Database: kartezy_db_demo1
-- ------------------------------------------------------
-- Server version	8.0.36-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category_name` varchar(100) DEFAULT NULL,
  `category_description` text,
  `parent_category_id` int DEFAULT '0',
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `is_delete` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Electronics','Devices and gadgets powered by electricity, including smartphones, laptops, TVs, and home appliances.',0,'2024-04-22 09:02:13',0),(2,'Clothing & Apparel','Clothing items, footwear, and accessories for men, women, and children, ranging from everyday wear to formal attire.',0,'2024-04-22 09:02:13',0),(3,'Home & Kitchen','Products for household use, such as cookware, utensils, home decor, furniture, and cleaning supplies.',0,'2024-04-22 09:02:13',0),(4,'Beauty & Personal Care','Items related to personal grooming, skincare, haircare, cosmetics, fragrances, and wellness products.\n',0,'2024-04-22 09:02:13',0),(5,'Books & Stationery','Printed and digital books, as well as writing materials, office supplies, and organizational tools',0,'2024-04-22 09:02:13',0),(6,'Toys & Games','Playthings and recreational activities for children and adults, encompassing toys, board games, video games, and puzzles',0,'2024-04-22 09:02:13',0),(7,'Sports & Outdoors','Gear and equipment for various sports and outdoor activities, including hiking, camping, cycling, and team sports.',0,'2024-04-22 09:02:13',0),(8,'Furniture & Decor','Items for furnishing and decorating living spaces, including sofas, tables, beds, rugs, lamps, and wall art.',0,'2024-04-22 09:02:13',0),(21,'Smartphones & Accessories',NULL,1,'2024-04-22 09:10:20',0),(22,'Computers & Laptops',NULL,1,'2024-04-22 09:10:20',0),(23,'Home Appliances',NULL,1,'2024-04-22 09:10:20',0),(24,'Tops & Shirts',NULL,2,'2024-04-22 09:10:20',0),(25,'Bottoms & Pants',NULL,2,'2024-04-22 09:10:20',0),(26,'Shoes & Footwear',NULL,2,'2024-04-22 09:10:20',0),(27,'Cookware & Bakeware',NULL,3,'2024-04-22 09:10:20',0),(28,'Cleaning Supplies & Organization',NULL,3,'2024-04-22 09:10:20',0),(29,'Skincare & Facial Care',NULL,4,'2024-04-22 09:10:20',0),(30,'Makeup & Cosmetics',NULL,4,'2024-04-22 09:10:20',0),(31,'Notebooks & Journals',NULL,5,'2024-04-22 09:10:20',0),(32,'Pens & Writing Instruments',NULL,5,'2024-04-22 09:10:20',0),(33,'Action Figures & Dolls',NULL,6,'2024-04-22 09:10:20',0),(34,'Board Games & Puzzles',NULL,6,'2024-04-22 09:12:49',0),(35,'Cycling & Biking Equipment',NULL,7,'2024-04-22 09:14:00',0),(36,'Camping & Hiking Gear',NULL,7,'2024-04-22 09:14:00',0),(37,'Living Room Furniture',NULL,8,'2024-04-22 09:15:27',0),(38,'Wall Decor & Art Pieces',NULL,8,'2024-04-22 09:15:27',0),(39,'abc','abc',1,'2024-04-23 11:28:25',0),(40,'abc','abc',24,'2024-04-23 11:28:35',0);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer_addresses`
--

DROP TABLE IF EXISTS `customer_addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer_addresses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `titel` text,
  `house_no` varchar(20) DEFAULT NULL,
  `land_mark` text,
  `area` varchar(30) DEFAULT NULL,
  `city` varchar(30) DEFAULT NULL,
  `state` varchar(30) DEFAULT NULL,
  `pincode` char(6) DEFAULT NULL,
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `is_delete` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `customer_addresses_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer_addresses`
--

LOCK TABLES `customer_addresses` WRITE;
/*!40000 ALTER TABLE `customer_addresses` DISABLE KEYS */;
INSERT INTO `customer_addresses` VALUES (2,4,'Office Address 1','A-109','Sukan Mall','Science City, Sola','Ahmedabad','Gujarat','370140','2024-04-22 12:10:42',0),(3,4,'Home Address','89-D','Kargil Petrol pump','Sola','Ahmedabad','Gujarat','370141','2024-04-22 12:12:15',0),(4,5,'Home','J-10','Navagam road','Navi Bhachau','Bhachau','Gujarat','360001','2024-04-22 12:33:54',0),(5,16,'abc','123','def','ajg','bha','guj','360001','2024-04-23 10:29:17',0),(6,17,'abc','1','def','sola','ahm','guj','370101','2024-04-24 12:27:39',0);
/*!40000 ALTER TABLE `customer_addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer_payment_detail`
--

DROP TABLE IF EXISTS `customer_payment_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer_payment_detail` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `card_holder_name` varchar(50) DEFAULT NULL,
  `card_number` varchar(20) DEFAULT NULL,
  `card_type` varchar(20) DEFAULT NULL,
  `expiry` varchar(10) DEFAULT NULL,
  `cvv` char(3) DEFAULT NULL,
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `is_delete` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `customer_payment_detail_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer_payment_detail`
--

LOCK TABLES `customer_payment_detail` WRITE;
/*!40000 ALTER TABLE `customer_payment_detail` DISABLE KEYS */;
INSERT INTO `customer_payment_detail` VALUES (2,4,'Mohit Moradiya','1234-1234-1234-1235','Debit card','12/12','123','2024-04-22 12:11:06',0),(3,4,'Mohit Moradiya','1234-1234-1234-9874','Credit card','12/28','123','2024-04-22 12:12:48',0),(4,5,'Dharm Patel','1234-1234-1234-5648','Credit card','03/28','123','2024-04-22 12:34:50',0),(5,16,'as','1234-1234-1234-1234','Credit card','03/01','123','2024-04-23 10:30:06',0),(6,17,'def','1234-1234-1234-1234','Credit card','03/02','123','2024-04-24 12:28:08',0);
/*!40000 ALTER TABLE `customer_payment_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer_support_query`
--

DROP TABLE IF EXISTS `customer_support_query`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer_support_query` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` text,
  `email` text,
  `query` text,
  `answer` text,
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_delete` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer_support_query`
--

LOCK TABLES `customer_support_query` WRITE;
/*!40000 ALTER TABLE `customer_support_query` DISABLE KEYS */;
INSERT INTO `customer_support_query` VALUES (7,'as','as','dfggh','as','2024-04-29 05:56:19','2024-04-29 10:02:33',1),(8,'as1','as1','asd','adf','2024-04-29 05:56:57','2024-04-29 10:02:43',1),(9,'mohit','mohit@gmail.com','what is customer care mobile number?','xgdfdgf','2024-04-29 08:09:01','2024-04-29 14:16:46',1),(10,'yash','yash@gmail.com','abc','dsfsfrrdytewy','2024-04-29 10:04:03','2024-04-30 04:10:36',1),(11,'mohit','mohit@gmail.com','hello',NULL,'2024-04-29 14:28:18','2024-04-29 14:28:18',0),(12,'gulshan','gulshan@gmail.com','hdsgmjkgdmhg',NULL,'2024-04-29 14:29:49','2024-04-29 14:29:49',0),(13,'manil','manil@gmail.com','what your query?',NULL,'2024-04-30 04:00:58','2024-04-30 04:00:58',0),(14,'mihir','mihir@gmail.com','djshlkfs',NULL,'2024-04-30 04:01:51','2024-04-30 04:10:32',1),(15,'shivam','shivam@gmail.com','bskdjajhgygnb vn,mzx',NULL,'2024-04-30 04:02:42','2024-04-30 04:10:28',1),(16,'yashvi','yashvi@gmail.com','mjdbasjkfksdfkfk,l',NULL,'2024-04-30 04:03:06','2024-04-30 04:10:26',1),(17,'abc','abc@gmail.com','as',NULL,'2024-04-30 04:05:18','2024-04-30 04:10:23',1),(18,'def','def@gmial.com',',jkaskjasjk',NULL,'2024-04-30 04:07:35','2024-04-30 04:10:21',1),(19,'as','as','as',NULL,'2024-04-30 04:08:13','2024-04-30 04:10:18',1),(20,'df','df','df','ds','2024-04-30 04:09:33','2024-04-30 04:10:14',1),(21,'sdft','ert','ytruyrt','abc','2024-04-30 11:40:30','2024-04-30 14:00:59',0),(22,'sd','sd','sdf',NULL,'2024-05-02 05:22:54','2024-05-02 05:22:54',0),(23,'ae','abc@gmail.lcom','12',NULL,'2024-05-03 08:18:44','2024-05-03 08:18:44',0);
/*!40000 ALTER TABLE `customer_support_query` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer_support_query_attchement`
--

DROP TABLE IF EXISTS `customer_support_query_attchement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer_support_query_attchement` (
  `id` int NOT NULL AUTO_INCREMENT,
  `query_id` int DEFAULT NULL,
  `filename` text,
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `is_delete` tinyint(1) DEFAULT '0',
  `type` varchar(30) DEFAULT NULL,
  `error` text,
  `is_answer` int DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `query_id` (`query_id`),
  CONSTRAINT `customer_support_query_attchement_ibfk_1` FOREIGN KEY (`query_id`) REFERENCES `customer_support_query` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer_support_query_attchement`
--

LOCK TABLES `customer_support_query_attchement` WRITE;
/*!40000 ALTER TABLE `customer_support_query_attchement` DISABLE KEYS */;
INSERT INTO `customer_support_query_attchement` VALUES (1,7,'1714370179460_movie (1).mp4','2024-04-29 05:56:19',1,'video/mp4','Attchement is not found...',0),(2,8,'1714370217943_movie (1).mp4','2024-04-29 05:56:57',1,'video/mp4','Attchement is not found...',0),(3,9,'1714378141258_pN4tnrld.jpg','2024-04-29 08:09:01',1,'image/jpeg','Attchement is not found...',0),(4,9,'1714378141260_miniature-3365503_640.jpg','2024-04-29 08:09:01',1,'image/jpeg','Attchement is not found...',0),(5,9,'1714378141263_intex-computer-cabinet-500x500.jpg','2024-04-29 08:09:01',1,'image/jpeg','Attchement is not found...',0),(8,8,'1714383871380_pN4tnrld.jpg','2024-04-29 09:44:31',1,'image/jpeg','Attchement is not found...',0),(9,9,'1714383926045_website-animation-3580563-3056468.mp4','2024-04-29 09:45:26',1,'video/mp4','Attchement is not found...',0),(10,9,'1714385000401_website-animation-3580563-3056468.mp4','2024-04-29 10:03:20',1,'video/mp4','Attchement is not found...',1),(11,10,'1714385043531_pN4tnrld.jpg','2024-04-29 10:04:03',1,'image/jpeg','Attchement is not found...',0),(12,10,'1714385066586_images.jpeg','2024-04-29 10:04:26',1,'image/jpeg','Attchement is not found...',1),(13,10,'1714392758480_toys-hero.jpg','2024-04-29 12:12:38',1,'image/jpeg','Attchement is not found...',1),(14,10,'1714400055341_website-animation-3580563-3056468.mp4','2024-04-29 14:14:15',1,'video/mp4','Attchement is not found...',1),(15,11,'1714400898647_pN4tnrld.jpg','2024-04-29 14:28:18',0,'image/jpeg','Attchement is not found...',0),(16,12,'1714400989721_miniature-3365503_640.jpg','2024-04-29 14:29:49',0,'image/jpeg','Attchement is not found...',0),(17,21,'1714477230678_pN4tnrld.jpg','2024-04-30 11:40:30',0,'image/jpeg','Attchement is not found...',0),(18,21,'1714477244728_movie (1).mp4','2024-04-30 11:40:44',0,'video/mp4','Attchement is not found...',1),(19,22,'1714627374571_images (1).jpeg','2024-05-02 05:22:54',0,'image/jpeg','Attchement is not found...',0),(20,23,'1714724324433_images.jpeg','2024-05-03 08:18:44',0,'image/jpeg','Attchement is not found...',0);
/*!40000 ALTER TABLE `customer_support_query_attchement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `logistic_shipping`
--

DROP TABLE IF EXISTS `logistic_shipping`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `logistic_shipping` (
  `id` int NOT NULL AUTO_INCREMENT,
  `logistic_id` int DEFAULT NULL,
  `city` varchar(30) DEFAULT NULL,
  `pincode` varchar(6) DEFAULT NULL,
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `is_delete` tinyint DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `logistic_id` (`logistic_id`),
  CONSTRAINT `logistic_shipping_ibfk_1` FOREIGN KEY (`logistic_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `logistic_shipping`
--

LOCK TABLES `logistic_shipping` WRITE;
/*!40000 ALTER TABLE `logistic_shipping` DISABLE KEYS */;
INSERT INTO `logistic_shipping` VALUES (5,20,'Bhachau','123456','2024-04-30 05:45:24',0),(6,20,'ahm','370101','2024-04-30 05:45:24',0),(7,20,'surat','784512','2024-04-30 05:45:24',0),(8,21,'bha','457812','2024-04-30 05:45:24',0),(9,21,'Ahmedabad','370140','2024-04-30 05:45:24',0),(10,24,'Rajkot','360001','2024-05-01 06:36:47',0),(11,24,'Rajkot','360004','2024-05-01 06:36:54',0),(12,23,'Rajkot','360002','2024-05-01 06:45:20',1),(13,23,'Rajkot','360001','2024-05-01 12:45:00',0),(14,23,'Rajkot','360002','2024-05-01 12:45:20',0),(15,23,'Rajkot','360003','2024-05-01 13:51:00',0),(16,23,'Rajkot','360002','2024-05-01 13:51:23',0),(17,23,'Rajkot','360002','2024-05-01 14:31:20',0),(18,23,'Bhavnagar','364001','2024-05-03 05:26:15',0),(19,23,'Bhavnagar','364002','2024-05-03 05:26:37',0),(20,23,'Jamnagar','361305','2024-05-03 08:52:19',0);
/*!40000 ALTER TABLE `logistic_shipping` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notifications`
--

DROP TABLE IF EXISTS `notifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notifications` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `note` text,
  `is_read` tinyint(1) DEFAULT '0',
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `is_delete` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `notifications_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notifications`
--

LOCK TABLES `notifications` WRITE;
/*!40000 ALTER TABLE `notifications` DISABLE KEYS */;
INSERT INTO `notifications` VALUES (1,16,'reset password','Password is successfully changed',1,'2024-04-26 08:21:05',0),(2,16,'Order','Order successfully delivered',1,'2024-04-26 10:41:05',0),(3,16,'reset password','Password is successfully changed',1,'2024-04-25 19:33:45',0),(4,16,'Order','Order successfully delivered',1,'2024-04-26 08:33:45',0),(5,16,'reset password','Password is successfully changed',1,'2024-04-26 08:33:45',0),(6,16,'Order','Order successfully delivered',1,'2024-04-26 08:33:45',0),(7,17,'reset password','Password is successfully changed',0,'2024-04-26 08:34:03',0),(8,17,'Order','Order successfully delivered',0,'2024-04-26 08:34:03',0),(9,17,'reset password','Password is successfully changed',1,'2024-04-26 08:34:03',0),(10,17,'Order','Order successfully delivered',1,'2024-04-26 08:34:03',0),(11,16,'Active Account','Account is successfully activate...',1,'2024-04-26 11:13:47',0),(12,16,'User','User data is updated..',1,'2024-04-26 11:14:00',0),(13,19,'Active Account','Account is successfully activate...',1,'2024-04-26 11:25:00',0),(14,18,'Active Account','Account is successfully activate...',1,'2024-04-26 11:26:18',0),(15,19,'Active Account','Account is successfully activate...',1,'2024-04-26 11:29:19',0),(16,16,'Active Account','Account is successfully activate...',1,'2024-04-26 11:30:03',0),(17,19,'Active Account','Account is successfully activate...',1,'2024-04-26 11:30:44',0),(18,18,'Active Account','Account is successfully activate...',1,'2024-04-26 11:38:26',0),(19,16,'Active Account','Account is successfully activate...',1,'2024-04-26 11:38:41',0),(20,19,'Active Account','Account is successfully activate...',1,'2024-04-26 11:39:50',0),(21,18,'Active Account','Account is successfully activate...',1,'2024-04-26 11:40:06',0),(22,19,'Active Account','Account is successfully activate...',1,'2024-04-26 11:41:00',0),(23,19,'Active Account','Account is successfully activate...',1,'2024-04-26 11:42:22',0),(24,19,'Password','Password is reset...',1,'2024-04-26 12:14:52',0),(25,19,'Password','Password is reset...',1,'2024-04-26 12:16:08',0),(26,19,'Password','Password is reset...',1,'2024-04-26 12:16:26',0),(27,18,'add product','add new products',1,'2024-04-30 04:25:32',0),(28,18,'Image','Please change main iamges',1,'2024-04-30 04:25:52',0),(29,21,'Register','User successfully registered...',0,'2024-04-30 04:43:37',0),(30,21,'Activate user','User is suceesfully activate...',0,'2024-04-30 04:44:06',0),(31,19,'User','User data is updated..',1,'2024-04-30 08:39:24',0),(32,16,'Order','Your order placed with order Id :#26 !',1,'2024-04-30 08:43:30',0),(33,16,'Order','Your order placed with order Id :#27 !',1,'2024-05-01 03:59:06',0),(34,22,'Register','User successfully registered...',0,'2024-05-01 06:17:56',0),(35,23,'Register','User successfully registered...',1,'2024-05-01 06:21:21',0),(36,24,'Register','User successfully registered...',1,'2024-05-01 06:24:50',0),(37,24,'Activate user','User is suceesfully activate...',1,'2024-05-01 06:32:37',0),(38,23,'Activate user','User is suceesfully activate...',1,'2024-05-01 06:44:55',0),(39,19,'Forget Password','User is forget password, So genrate new activation code...',1,'2024-05-01 12:40:20',0),(40,19,'Active Account','Account is successfully activate...',1,'2024-05-01 12:40:29',0),(41,19,'Activate user','User is suceesfully activate...',1,'2024-05-01 12:40:29',0),(42,16,'Order','Your order placed with order Id :#28 !',1,'2024-05-01 13:47:51',0),(43,18,'Password','Password is reset...',1,'2024-05-01 13:50:25',0),(44,18,'User','User data is updated..',1,'2024-05-01 13:50:42',0);
/*!40000 ALTER TABLE `notifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `qty` int DEFAULT NULL,
  `price` int DEFAULT NULL,
  `total_price` int DEFAULT NULL,
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_delete` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `order_id` (`order_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  CONSTRAINT `order_items_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_items`
--

LOCK TABLES `order_items` WRITE;
/*!40000 ALTER TABLE `order_items` DISABLE KEYS */;
INSERT INTO `order_items` VALUES (4,3,4,1,159999,159999,'2024-04-22 12:22:22','2024-04-22 12:22:22',0),(5,3,3,1,21999,21999,'2024-04-22 12:22:22','2024-04-22 12:22:22',0),(6,3,2,3,134900,404700,'2024-04-22 12:22:22','2024-04-22 12:22:22',0),(7,3,10,2,10000,20000,'2024-04-22 12:22:22','2024-04-22 12:22:22',0),(8,3,6,3,4999,14997,'2024-04-22 12:22:22','2024-04-22 12:22:22',0),(9,4,6,10,4999,49990,'2024-04-22 12:35:05','2024-04-22 12:35:05',0),(10,5,3,3,21999,65997,'2024-04-22 12:49:59','2024-04-22 12:49:59',0),(11,6,4,1,159999,159999,'2024-04-22 12:50:37','2024-04-22 12:50:37',0),(12,7,4,1,159999,159999,'2024-04-22 12:52:16','2024-04-22 12:52:16',0),(13,8,4,1,159999,159999,'2024-04-22 12:52:44','2024-04-22 12:52:44',0),(14,9,9,2,70,140,'2024-04-22 12:55:59','2024-04-22 12:55:59',0),(15,10,9,2,70,140,'2024-04-22 12:56:12','2024-04-22 12:56:12',0),(16,10,9,2,70,140,'2024-04-22 12:56:19','2024-04-24 09:48:45',0),(17,10,9,2,70,140,'2024-04-22 12:56:55','2024-04-24 09:48:45',0),(18,13,9,2,70,140,'2024-04-22 12:57:01','2024-04-22 12:57:01',0),(19,14,6,1,4999,4999,'2024-04-22 12:58:10','2024-04-22 12:58:10',0),(20,14,2,1,134900,134900,'2024-04-22 12:58:10','2024-04-22 12:58:10',0),(21,15,9,4,70,280,'2024-04-22 13:02:52','2024-04-22 13:02:52',0),(22,15,10,1,10000,10000,'2024-04-22 13:02:52','2024-04-22 13:02:52',0),(23,16,9,1,70,70,'2024-04-22 13:05:23','2024-04-22 13:05:23',0),(24,17,7,3,4999,14997,'2024-04-23 10:30:22','2024-04-23 10:30:22',0),(25,17,3,2,21999,43998,'2024-04-23 10:30:22','2024-04-23 10:30:22',0),(26,18,10,6,10000,60000,'2024-04-24 11:48:57','2024-04-24 11:48:57',0),(27,19,7,6,4999,29994,'2024-04-24 12:28:13','2024-04-24 12:28:13',0),(28,20,10,1,10000,10000,'2024-04-25 04:45:02','2024-04-25 04:45:02',0),(29,21,2,4,134900,539600,'2024-04-25 07:14:06','2024-04-25 07:14:06',0),(30,21,10,3,10000,30000,'2024-04-25 07:14:06','2024-04-25 07:14:06',0),(31,22,7,6,4999,29994,'2024-04-26 04:30:32','2024-04-26 04:30:32',0),(32,23,7,5,4999,24995,'2024-04-26 04:31:11','2024-04-26 04:31:11',0),(33,24,7,1,4999,4999,'2024-04-26 04:32:21','2024-04-26 04:32:21',0),(34,25,4,1,159999,159999,'2024-04-26 04:56:36','2024-04-26 04:56:36',0),(35,26,3,1,21999,21999,'2024-04-30 08:43:30','2024-04-30 08:43:30',0),(36,27,13,4,12000,48000,'2024-05-01 03:59:06','2024-05-01 03:59:06',0),(37,28,13,1,12000,12000,'2024-05-01 13:47:51','2024-05-01 13:47:51',0);
/*!40000 ALTER TABLE `order_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_logistics`
--

DROP TABLE IF EXISTS `order_logistics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_logistics` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` int DEFAULT NULL,
  `logistics_id` int DEFAULT NULL,
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `order_id` (`order_id`),
  KEY `logistics_id` (`logistics_id`),
  CONSTRAINT `order_logistics_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  CONSTRAINT `order_logistics_ibfk_2` FOREIGN KEY (`logistics_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_logistics`
--

LOCK TABLES `order_logistics` WRITE;
/*!40000 ALTER TABLE `order_logistics` DISABLE KEYS */;
INSERT INTO `order_logistics` VALUES (44,22,23,'2024-05-03 06:38:49'),(45,22,23,'2024-05-03 06:41:21'),(46,22,23,'2024-05-03 06:48:05');
/*!40000 ALTER TABLE `order_logistics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_status`
--

DROP TABLE IF EXISTS `order_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_status` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` int DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `order_id` (`order_id`),
  CONSTRAINT `order_status_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_status`
--

LOCK TABLES `order_status` WRITE;
/*!40000 ALTER TABLE `order_status` DISABLE KEYS */;
INSERT INTO `order_status` VALUES (31,3,'pending','2024-05-03 06:27:27'),(32,4,'pending','2024-05-03 06:29:32'),(33,5,'pending','2024-05-03 06:29:32'),(34,6,'pending','2024-05-03 06:29:32'),(35,7,'pending','2024-05-03 06:29:32'),(36,8,'pending','2024-05-03 06:29:32'),(37,9,'pending','2024-05-03 06:29:32'),(38,10,'pending','2024-05-03 06:29:32'),(39,11,'pending','2024-05-03 06:29:32'),(40,12,'pending','2024-05-03 06:29:32'),(41,13,'pending','2024-05-03 06:29:32'),(42,14,'pending','2024-05-03 06:29:32'),(43,15,'pending','2024-05-03 06:29:32'),(44,16,'pending','2024-05-03 06:29:32'),(45,17,'pending','2024-05-03 06:29:32'),(46,18,'pending','2024-05-03 06:29:32'),(47,19,'pending','2024-05-03 06:29:32'),(48,20,'pending','2024-05-03 06:29:32'),(49,21,'pending','2024-05-03 06:29:32'),(50,22,'pending','2024-05-03 06:29:32'),(51,23,'pending','2024-05-03 06:29:32'),(52,24,'pending','2024-05-03 06:29:32'),(53,25,'pending','2024-05-03 06:29:32'),(54,26,'pending','2024-05-03 06:29:32'),(55,27,'pending','2024-05-03 06:29:32'),(56,28,'pending','2024-05-03 06:29:32'),(65,22,'shipped','2024-05-03 06:48:05'),(66,22,'intransit','2024-05-03 08:46:27');
/*!40000 ALTER TABLE `order_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `address_id` int DEFAULT NULL,
  `order_note` text,
  `shipping_cost` int DEFAULT NULL,
  `total_price` int DEFAULT NULL,
  `deliver_date` timestamp NULL DEFAULT NULL,
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_delete` tinyint(1) DEFAULT '0',
  `status` varchar(30) DEFAULT 'Delivered',
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `address_id` (`address_id`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`address_id`) REFERENCES `customer_addresses` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (3,4,2,'Bring Carefully....!',90,621695,'2024-04-29 06:52:22','2024-04-22 12:22:22','2024-05-03 06:25:31',0,'pending'),(4,5,4,'Call is not Allowd!',90,49990,'2024-04-29 07:05:05','2024-04-22 12:35:05','2024-05-03 06:25:31',0,'pending'),(5,5,4,'NONE',90,65997,'2024-04-29 07:19:59','2024-04-22 12:49:59','2024-05-03 06:25:31',0,'pending'),(6,5,4,'NONE',90,159999,'2024-04-29 07:20:37','2024-04-22 12:50:37','2024-05-03 06:25:31',0,'pending'),(7,5,4,'NONE',90,159999,'2024-04-29 07:22:16','2024-04-22 12:52:16','2024-05-03 06:25:31',0,'pending'),(8,5,4,'NONE',90,159999,'2024-04-29 07:22:44','2024-04-22 12:52:44','2024-05-03 06:25:31',0,'pending'),(9,5,4,'NONE',90,140,'2024-04-29 07:25:59','2024-04-22 12:55:59','2024-05-03 06:25:31',0,'pending'),(10,16,4,'NONE',90,140,'2024-05-29 07:26:12','2024-03-22 12:56:12','2024-05-03 06:25:31',0,'pending'),(11,5,4,'NONE',90,140,'2024-04-29 07:26:19','2024-04-22 12:56:19','2024-05-03 06:25:31',0,'pending'),(12,5,4,'NONE',90,140,'2024-04-29 07:26:55','2024-04-22 12:56:55','2024-05-03 06:25:31',0,'pending'),(13,5,4,'NONE',90,140,'2024-04-29 07:27:01','2024-04-22 12:57:01','2024-05-03 06:25:31',0,'pending'),(14,16,4,'No calls!',90,139899,'2024-03-29 07:28:10','2024-05-22 12:58:10','2024-05-03 06:25:31',0,'pending'),(15,4,4,'Bring Carefully',90,10280,'2024-04-29 07:32:52','2024-04-22 13:02:52','2024-05-03 06:25:31',0,'pending'),(16,16,4,'NONE',90,70,'2024-04-29 07:35:23','2024-04-22 13:05:23','2024-05-03 06:25:31',0,'pending'),(17,16,5,'NONE',90,58995,'2024-01-30 05:00:22','2024-02-23 10:30:22','2024-05-03 06:25:31',0,'pending'),(18,16,5,'NONE',90,60000,'2024-05-01 06:18:57','2024-04-24 11:48:57','2024-05-03 06:25:31',0,'pending'),(19,17,6,'NONE',90,29994,'2024-05-01 06:58:13','2024-04-24 12:28:13','2024-05-03 06:25:31',0,'pending'),(20,16,5,'NONE',90,10000,'2024-05-01 23:15:02','2024-04-25 04:45:02','2024-05-03 06:25:31',0,'pending'),(21,16,5,'NONE',90,569600,'2024-05-02 01:44:06','2024-04-25 07:14:06','2024-05-03 06:25:31',0,'pending'),(22,16,5,'NONE',90,29994,'2024-05-03 06:42:11','2024-04-26 04:30:32','2024-05-03 08:46:27',0,'intransit'),(23,16,5,'NONE',90,24995,'2024-05-02 23:01:11','2024-04-26 04:31:11','2024-05-03 06:25:31',0,'pending'),(24,16,5,'NONE',90,4999,'2024-05-02 23:02:21','2024-04-26 04:32:21','2024-05-03 06:25:31',0,'pending'),(25,17,6,'NONE',90,159999,'2024-05-02 23:26:36','2024-04-26 04:56:36','2024-05-03 06:25:31',0,'pending'),(26,16,5,'NONE',90,21999,'2024-05-07 03:13:30','2024-04-30 08:43:30','2024-05-03 06:25:31',0,'pending'),(27,16,5,'NONE',90,48000,'2024-05-07 22:29:06','2024-05-01 03:59:06','2024-05-03 06:25:31',0,'pending'),(28,16,5,'NONE',90,12000,'2024-05-08 08:17:51','2024-05-01 13:47:51','2024-05-01 13:47:51',0,'pending');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permissions`
--

DROP TABLE IF EXISTS `permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `permissions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `permission_name` text,
  `api_url` text,
  `method` varchar(10) DEFAULT NULL,
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_delete` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=140 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permissions`
--

LOCK TABLES `permissions` WRITE;
/*!40000 ALTER TABLE `permissions` DISABLE KEYS */;
INSERT INTO `permissions` VALUES (1,'Fetch role permission','/kartezy/rolepermission/getPermissions/:roleName','get','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(2,'Fetch all permission','/kartezy/rolepermission/permissions','get','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(3,'Update permission form','/kartezy/admin/rolepermission/modifypermission','get','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(4,'Update permission','/kartezy/rolepermission/modifypermission','post','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(5,'Add new permission form','/kartezy/rolepermission/Addpermission','get','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(6,'Add new permission','/kartezy/rolepermission/Addpermission','post','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(7,'Pdf genrate','/kartezy/pdf','post','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(8,'Current user','/kartezy/user','post','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(9,'Reset password form','/kartezy/resetPassword','get','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(10,'Reset password','/kartezy/resetPassword','post','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(11,'Saved product fetch','/kartezy/savedProduct','post','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(12,'Saved product','/kartezy/savedProduct/:productId','post','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(13,'Remove saved product','/kartezy/removeSavedProduct/:productId','post','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(14,'Display saved product','/kartezy/savedProduct','get','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(15,'Add new product review','/kartezy/reivew','post','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(16,'Order history','/kartezy/orders','get','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(17,'Particular one order','/kartezy/order','get','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(18,'Fetch particular order by id','/kartezy/orders/:id','get','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(19,'Insert particular order by id','/kartezy/orders/:id','post','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(20,'Update order form','/kartezy/orders/update','get','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(21,'Update order','/kartezy/orders/update','post','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(22,'Update order item form','/kartezy/orders/update/item','get','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(23,'Update order item','/kartezy/orders/update/item','post','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(24,'Fetch all order','/kartezy/order/adminside','get','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(25,'Ftech order status','/kartezy/order/orderstatus','get','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(26,'Update order status','/kartezy/order/orderstatus','post','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(27,'Add order','/kartezy/order/Insert','post','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(28,'Add order items','/kartezy/orderItems/Insert','post','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(29,'User cart','/kartezy/userCartRender','get','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(30,'User cart data fetch','/kartezy/userCartfetch','post','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(31,'User cart update','/kartezy/userCartupdate','post','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(32,'User cart create','/kartezy/userCartinsert','post','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(33,'Display single product','/kartezy/product/:id','get','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(34,'Fetch single product','/kartezy/fetchproduct/:id','get','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(35,'Total vendor fetch','/kartezy/admin/getTotalVendors','get','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(36,'Total customer fetch','/kartezy/admin/getTotalCustomers','get','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(37,'Total product fetch','/kartezy/admin/getTotalProducts','get','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(38,'Order history admin','/kartezy/admin/getCustomerOrderHistory','get','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(39,'Display vendor list','/kartezy/admin/displayVendorsList','get','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(40,'Delete vendor','/kartezy/admin/deleteVendor','get','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(41,'Total customer report','/kartezy/admin/getTotalCustomerReport','get','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(42,'Get customer order history report','/kartezy/admin/getCustomerOrderHistoryReport','get','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(43,'Get total product report','/kartezy/admin/getTotalProductReport','get','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(44,'Get total vendor report','/kartezy/admin/getTotalVendorReport','get','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(45,'Admin report panel','/kartezy/admin/Report','get','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(46,'Admin dashboard','/kartezy/admin','get','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(47,'Recent order admin side','/kartezy/admin/getRecentOrders','get','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(48,'Fetch all categories','/kartezy/admin/Categories','get','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(49,'Add category','/kartezy/admin/addCategory','get','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(50,'Get product quantity','/kartezy/admin/getproductQty','get','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(51,'Add vendor form','/kartezy/vendor/insert','get','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(52,'Insert vendor','/kartezy/vendor/insert','post','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(53,'Fetch vendor data','/kartezy/vendor/getdata','get','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(54,'Display vendor form update','/kartezy/vendor/update','get','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(55,'Vendor data update','/kartezy/vendor/update/:id','post','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(56,'Vendor profile page','/kartezy/vendor/profile','get','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(57,'Vendor dashboard','/kartezy/vendorAdmin/dashboard','get','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(58,'Vendor dashboard meta data','/kartezy/vendorAdmin/api/dashboardcount','post','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(59,'Display product page','/kartezy/vendorAdmin/products','get','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(60,'Product data','/kartezy/vendorAdmin/products','post','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(61,'Update product form display','/kartezy/vendorAdmin/products/addProduct/:productId','get','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(62,'Add product','/kartezy/vendorAdmin/products/addProduct/upload','post','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(63,'Add product form display','/kartezy/vendorAdmin/products/addProduct','get','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(64,'Delete product','/kartezy/vendorAdmin/products/deleteProduct','post','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(65,'Update product','/kartezy/vendorAdmin/products/updateProduct','post','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(66,'Fetch product details','/kartezy/vendorAdmin/products/fetchFormData','post','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(67,'Vendor order display','/kartezy/vendorAdmin/orders','get','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(68,'Vendor order fetch data','/kartezy/vendorAdmin/orders','post','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(69,'Vendor single order details','/kartezy/vendorAdmin/singleOrderDetail','post','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(70,'Vendor chart data','/kartezy/vendorAdmin/chartData','get','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(71,'Checkout display form','/kartezy/checkOutFrom','get','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(72,'Address checkout form','/kartezy/renderCheckoutAddform','get','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(73,'Payment checout form','/kartezy/renderCheckoutPaymentform','get','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(74,'Single product checkout form','/kartezy/renderSingleProductCheckout/:pid','get','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(75,'Display single product checkout fetch','/kartezy/fetchSingleProductCheckout/:pid','post','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(76,'User address details','/kartezy/userAddrfetch','post','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(77,'User payment details','/kartezy/userPaymentfetch','post','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(78,'Delete user checkout','/kartezy/deleteUserCheckoutDetail','post','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(79,'Submit checkout address','/kartezy/submitCheckoutAddressform','post','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(80,'Submit checkout payment details','/kartezy/submitCheckoutPaymentform','post','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(81,'Singler product order','/kartezy/singleProductOrder','post','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(82,'Order from cart','/kartezy/orderFromCart','post','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(83,'Add category form','/kartezy/categoryForm/','get','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(84,'Update category form','/kartezy/categoryForm/edit/:id','get','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(85,'Insert category','/kartezy/categoryForm/submit','post','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(86,'Fetch category name','/kartezy/SelectCategory','get','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(87,'Display all cateogry','/kartezy/categoryList','get','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(88,'Fetch category details','/kartezy/categoryList/data','get','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(89,'Fetch single category details','/kartezy/categoryList/edit/:id','get','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(90,'Update category','/kartezy/categoryList/edit/submit/:id','post','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(91,'Delete categories','/kartezy/categoryList/delete/:id','post','2024-04-25 08:36:00','2024-05-01 13:11:00',0),(93,'Fetch user wise order history','/kartezy/orders/:orderId','get','2024-04-26 04:38:47','2024-05-01 13:11:00',0),(94,'Fetch user wise order history','/kartezy/orders/:orderId','post','2024-04-26 04:38:47','2024-05-01 13:11:00',0),(95,'Fetchall order history in customer side','/kartezy/orders','post','2024-04-26 05:01:19','2024-05-01 13:11:00',0),(96,'User logout','/kartezy/logout','get','2024-05-01 12:00:39','2024-05-01 13:11:00',0),(97,'Fetch notifications','/kartezy/notifications','post','2024-05-01 12:00:39','2024-05-01 13:11:00',0),(98,'Update user','/kartezy/user/update','post','2024-05-01 12:29:07','2024-05-01 13:11:00',0),(99,'Display all query page admin side','/kartezy/admin/query','get','2024-05-01 12:29:07','2024-05-01 13:11:00',0),(100,'Add answer','/kartezy/admin/addanswer','post','2024-05-01 12:29:07','2024-05-01 13:11:00',0),(101,'Remove in query','/kartezy/admin/removeQuery','post','2024-05-01 12:29:07','2024-05-01 13:11:00',0),(102,'Fetch all logistics','/kartezy/admin/getAllLogistics','get','2024-05-01 12:35:39','2024-05-01 13:11:00',0),(103,'Display all logistics and orders','/kartezy/admin/assignedNewOrder','get','2024-05-01 12:35:39','2024-05-01 13:11:00',0),(104,'Assigned oreders to particular logistics ','/kartezy/admin/assignedNewOrder','post','2024-05-01 12:35:39','2024-05-01 13:11:00',0),(105,'Display all logistics','/kartezy/admin/logistics','get','2024-05-01 12:35:39','2024-05-01 13:11:00',0),(106,'Add new all logistics','/kartezy/admin/addLogistics','post','2024-05-01 12:35:39','2024-05-01 13:11:00',0),(110,'Add review','/kartezy/reivew','post','2024-05-01 12:47:31','2024-05-01 13:11:00',0),(111,'Fetch sepcific vendor products admin side','/kartezy/admin/vendorProducts','get','2024-05-01 12:47:31','2024-05-01 13:11:00',0),(112,'Specific vendor product view ','/kartezy/admin/vendorProductsView','get','2024-05-01 12:47:31','2024-05-01 13:11:00',0),(113,'Admin send not in vender','/kartezy/admin/vendorNote','post','2024-05-01 12:47:31','2024-05-01 13:11:00',0),(114,'Asign order','/kartezy/admin/assignOrders','get','2024-05-01 12:57:11','2024-05-01 13:11:00',0),(115,'Fetch alsign order data','/kartezy/admin/assignOrdersData','post','2024-05-01 12:57:11','2024-05-01 13:11:00',0),(116,'Display asign order data','/kartezy/admin/assignOrdersData','get','2024-05-01 12:57:11','2024-05-01 13:11:00',0),(117,'Remove product in admin side','/kartezy/admin/removeProducts','get','2024-05-01 12:57:11','2024-05-01 13:11:00',0),(118,'Display all products in admin side','/kartezy/admin/allProducts','get','2024-05-01 12:57:11','2024-05-01 13:11:00',0),(119,'Display logistics dashboard','/kartezy/logistic/dashboard','get','2024-05-01 13:04:29','2024-05-01 13:11:00',0),(120,'Fetch dashboard details fetch','/kartezy/logistic/dashboardDetailFetch','post','2024-05-01 13:04:29','2024-05-01 13:11:00',0),(121,'Dashboard city order fetch','/kartezy/logistic/dashboardCityOrderFetch','post','2024-05-01 13:04:29','2024-05-01 13:11:00',0),(122,'Dashboard month order fetch','/kartezy/logistic/dashboardMonthOrderFetch','post','2024-05-01 13:04:29','2024-05-01 13:11:00',0),(123,'Display and add form service cities','/kartezy/logistic/serviceCities','get','2024-05-01 13:04:29','2024-05-01 13:11:00',0),(124,'Fetch service cities','/kartezy/logistic/serviceCitiesfetch','post','2024-05-01 13:04:29','2024-05-01 13:11:00',0),(125,'Service cities add in logistics','/kartezy/logistic/serviceCitiesinsert','post','2024-05-01 13:04:29','2024-05-01 13:11:00',0),(126,'Fetch select cities in logistics','/kartezy/logistic/selectedServiceCitiesfetch','post','2024-05-01 13:04:29','2024-05-01 13:11:00',0),(127,'Delete fetch services in cities ','/kartezy/logistic/deleteServiceCities','post','2024-05-01 13:04:29','2024-05-01 13:11:00',0),(128,'Display orders page in logistics','/kartezy/logistic/orders','get','2024-05-01 13:04:29','2024-05-01 13:11:00',0),(129,'Fetch order list in logistics','/kartezy/logistic/orderslists','post','2024-05-01 13:04:29','2024-05-01 13:11:00',0),(130,'Update order status in logistics side ','/kartezy/logistic/updateOrder','post','2024-05-01 13:04:29','2024-05-01 13:11:00',0),(131,'Get order details api logistics side ','/kartezy/logistic/api/getOrderDetails','post','2024-05-01 13:04:29','2024-05-01 13:11:00',0),(132,'Admin Calendar','/kartezy/admin/calendar','get','2024-05-02 11:21:50','2024-05-02 11:21:50',0),(133,'Vendor Admin Calendar','/kartezy/vendorAdmin/calendar','get','2024-05-02 11:21:50','2024-05-02 11:21:50',0),(134,'Logistic Calendar','/kartezy/logistic/calendar','get','2024-05-02 11:21:50','2024-05-02 11:21:50',0),(135,'Customer Calendar','/kartezy/calendar','get','2024-05-02 11:21:50','2024-05-02 11:21:50',0),(136,'add event','/kartezy/event/add','post','2024-05-03 06:52:36','2024-05-03 06:52:36',0),(137,'update event','/kartezy/event/update/:eventId','post','2024-05-03 06:52:36','2024-05-03 06:52:36',0),(138,'delete event','/kartezy/event/delete/:eventId','get','2024-05-03 06:52:36','2024-05-03 06:52:36',0),(139,'fetch events','/kartezy/events','get','2024-05-03 06:52:36','2024-05-03 06:52:36',0);
/*!40000 ALTER TABLE `permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_attechments`
--

DROP TABLE IF EXISTS `product_attechments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_attechments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int DEFAULT NULL,
  `attechment_path` text,
  `error_message` text,
  `file_type` varchar(30) DEFAULT NULL,
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `is_delete` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `product_attechments_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_attechments`
--

LOCK TABLES `product_attechments` WRITE;
/*!40000 ALTER TABLE `product_attechments` DISABLE KEYS */;
INSERT INTO `product_attechments` VALUES (1,1,'1713778105275-s24-sub-1.jpeg','product second img','image/jpeg','2024-04-22 09:28:25',0),(2,1,'1713778105275-s24-sub-2.jpeg','product second img','image/jpeg','2024-04-22 09:28:25',0),(3,1,'1713778105275-s24-sub-3.jpeg','product second img','image/jpeg','2024-04-22 09:28:25',0),(4,2,'1713781047725-Screenshot from 2024-04-22 15-44-59.png','product second img','image/png','2024-04-22 10:17:27',0),(5,2,'1713781047725-Screenshot from 2024-04-22 15-45-31.png','product second img','image/png','2024-04-22 10:17:27',0),(6,2,'1713781047729-Screenshot from 2024-04-22 15-47-04.png','product second img','image/png','2024-04-22 10:17:27',0),(7,3,'1713781483543-vivo-y200-sub-1.jpeg','product second img','image/jpeg','2024-04-22 10:24:43',0),(8,3,'1713781483544-vivo-y200-sub-2.jpeg','product second img','image/jpeg','2024-04-22 10:24:43',0),(9,3,'1713781483544-vivo-y200-sub-3.jpeg','product second img','image/jpeg','2024-04-22 10:24:43',0),(10,4,'1713781844215-mac-sub-1.jpeg','product second img','image/jpeg','2024-04-22 10:30:44',0),(11,4,'1713781844215-mac-sub-2.jpeg','product second img','image/jpeg','2024-04-22 10:30:44',0),(12,4,'1713781844216-mac-sub-3.jpeg','product second img','image/jpeg','2024-04-22 10:30:44',0),(13,5,'1713782237443-air-jordan-1-sub-1.jpeg','product second img','image/jpeg','2024-04-22 10:37:17',0),(14,5,'1713782237443-air-jordan-1-sub-2.jpeg','product second img','image/jpeg','2024-04-22 10:37:17',0),(15,5,'1713782237444-air-jordan-1-sub-3.jpeg','product second img','image/jpeg','2024-04-22 10:37:17',0),(16,6,'1713782958702-india-tshirt-sub-1.jpeg','product second img','image/jpeg','2024-04-22 10:49:18',0),(17,6,'1713782958703-india-tshirt-sub-2.jpeg','product second img','image/jpeg','2024-04-22 10:49:18',0),(18,6,'1713782958703-india-tshirt-sub-3.jpeg','product second img','image/jpeg','2024-04-22 10:49:18',0),(19,7,'1713783210080-ironmain-sub-1.jpeg','product second img','image/jpeg','2024-04-22 10:53:30',0),(20,7,'1713783210081-ironmain-sub-2.jpeg','product second img','image/jpeg','2024-04-22 10:53:30',0),(21,7,'1713783210082-ironmain-sub-3.jpeg','product second img','image/jpeg','2024-04-22 10:53:30',0),(22,8,'1713783421259-thor-strom-sub-1.jpeg','product second img','image/jpeg','2024-04-22 10:57:01',0),(23,8,'1713783421260-thor-strom-sub-2.jpeg','product second img','image/jpeg','2024-04-22 10:57:01',0),(24,8,'1713783421260-thor-strom-sub-3.jpeg','product second img','image/jpeg','2024-04-22 10:57:01',0),(25,9,'1713783777283-book-sub-1.jpeg','product second img','image/jpeg','2024-04-22 11:02:57',0),(26,9,'1713783777283-book-sub-2.jpeg','product second img','image/jpeg','2024-04-22 11:02:57',0),(27,9,'1713783777283-book-main.jpeg','product second img','image/jpeg','2024-04-22 11:02:57',0),(28,10,'1713784098425-cycle-sub-2.jpeg','product second img','image/jpeg','2024-04-22 11:08:18',0),(29,10,'1713784098426-cycle-sub-1.jpeg','product second img','image/jpeg','2024-04-22 11:08:18',0),(30,10,'1713784098426-cycle-sub-3.jpeg','product second img','image/jpeg','2024-04-22 11:08:18',0),(31,11,'1713872222680-logo-white-bg.png','product second img','image/png','2024-04-23 11:37:02',0),(32,11,'1713872222681-logo-transparent-red.png','product second img','image/png','2024-04-23 11:37:02',0),(33,11,'1713872222682-logo-transparent.png','product second img','image/png','2024-04-23 11:37:02',0),(34,11,'1713872222682-background1.jpg','product second img','image/jpeg','2024-04-23 11:37:02',0),(35,12,'1713962025657-1713783210082-ironmain-sub-3.jpeg','product second img','image/jpeg','2024-04-24 12:33:45',0),(36,12,'1713962025657-1713783210081-ironmain-sub-2.jpeg','product second img','image/jpeg','2024-04-24 12:33:45',0),(37,13,'1713963970027-Screenshot from 2024-04-24 17-54-32.png','product second img','image/png','2024-04-24 13:06:10',0),(38,13,'1713963970029-1713783421259-thor-strom-main.jpeg','product second img','image/jpeg','2024-04-24 13:06:10',0);
/*!40000 ALTER TABLE `product_attechments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_comment_attechments`
--

DROP TABLE IF EXISTS `product_comment_attechments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_comment_attechments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `comment_id` int DEFAULT NULL,
  `attechment_path` text,
  `error_message` text,
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `is_delete` tinyint(1) DEFAULT '0',
  `type` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `comment_id` (`comment_id`),
  CONSTRAINT `product_comment_attechments_ibfk_1` FOREIGN KEY (`comment_id`) REFERENCES `product_comments` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_comment_attechments`
--

LOCK TABLES `product_comment_attechments` WRITE;
/*!40000 ALTER TABLE `product_comment_attechments` DISABLE KEYS */;
INSERT INTO `product_comment_attechments` VALUES (11,49,'1714213711098_website-animation-3580563-3056468.mp4','Attchement is not found...','2024-04-27 10:28:31',0,'video/mp4'),(12,49,'1714213711101_pN4tnrld.jpg','Attchement is not found...','2024-04-27 10:28:31',0,'image/jpeg'),(13,49,'1714213711101_intex-computer-cabinet-500x500.jpg','Attchement is not found...','2024-04-27 10:28:31',0,'image/jpeg'),(14,49,'1714213711101_images (1).jpeg','Attchement is not found...','2024-04-27 10:28:31',0,'image/jpeg'),(15,49,'1714213711102_images.jpeg','Attchement is not found...','2024-04-27 10:28:31',0,'image/jpeg'),(16,50,'1714213730746_website-animation-3580563-3056468.mp4','Attchement is not found...','2024-04-27 10:28:50',0,'video/mp4'),(17,52,'1714215457443_website-animation-3580563-3056468.mp4','Attchement is not found...','2024-04-27 10:57:37',0,'video/mp4'),(18,52,'1714215457446_miniature-3365503_640.jpg','Attchement is not found...','2024-04-27 10:57:37',0,'image/jpeg'),(19,52,'1714215457447_pN4tnrld.jpg','Attchement is not found...','2024-04-27 10:57:37',0,'image/jpeg'),(20,52,'1714215457448_intex-computer-cabinet-500x500.jpg','Attchement is not found...','2024-04-27 10:57:37',0,'image/jpeg'),(21,52,'1714215457448_images (1).jpeg','Attchement is not found...','2024-04-27 10:57:37',0,'image/jpeg'),(22,52,'1714215457448_images.jpeg','Attchement is not found...','2024-04-27 10:57:37',0,'image/jpeg'),(23,52,'1714215457448_toys-hero.jpg','Attchement is not found...','2024-04-27 10:57:37',0,'image/jpeg'),(24,52,'1714215457448_1713783247231-Screenshot from 2024-04-11 16-02-27.png','Attchement is not found...','2024-04-27 10:57:37',0,'image/png'),(25,52,'1714215457449_1713783247231-Screenshot from 2024-04-10 16-30-58.png','Attchement is not found...','2024-04-27 10:57:37',0,'image/png'),(26,52,'1714215457449_1713783247231-Screenshot from 2024-04-04 15-47-10.png','Attchement is not found...','2024-04-27 10:57:37',0,'image/png'),(27,52,'1714215457450_Screenshot from 2024-04-24 17-54-32.png','Attchement is not found...','2024-04-27 10:57:37',0,'image/png'),(28,52,'1714215457451_1713783421259-thor-strom-main.jpeg','Attchement is not found...','2024-04-27 10:57:37',0,'image/jpeg'),(29,52,'1714215457451_1713783210081-ironmain-sub-2.jpeg','Attchement is not found...','2024-04-27 10:57:37',0,'image/jpeg'),(30,52,'1714215457452_1713783210082-ironmain-sub-3.jpeg','Attchement is not found...','2024-04-27 10:57:37',0,'image/jpeg'),(31,53,'1714215578968_website-animation-3580563-3056468.mp4','Attchement is not found...','2024-04-27 10:59:39',0,'video/mp4'),(32,53,'1714215578971_miniature-3365503_640.jpg','Attchement is not found...','2024-04-27 10:59:39',0,'image/jpeg'),(33,53,'1714215578972_pN4tnrld.jpg','Attchement is not found...','2024-04-27 10:59:39',0,'image/jpeg'),(34,53,'1714215578972_intex-computer-cabinet-500x500.jpg','Attchement is not found...','2024-04-27 10:59:39',0,'image/jpeg'),(35,53,'1714215578972_images (1).jpeg','Attchement is not found...','2024-04-27 10:59:39',0,'image/jpeg'),(36,53,'1714215578972_images.jpeg','Attchement is not found...','2024-04-27 10:59:39',0,'image/jpeg'),(37,53,'1714215578973_toys-hero.jpg','Attchement is not found...','2024-04-27 10:59:39',0,'image/jpeg'),(38,53,'1714215578973_sold.webp','Attchement is not found...','2024-04-27 10:59:39',0,'image/webp'),(39,53,'1714215578975_background1.gif','Attchement is not found...','2024-04-27 10:59:39',0,'image/gif'),(40,53,'1714215578984_1713783247231-Screenshot from 2024-04-11 16-02-27.png','Attchement is not found...','2024-04-27 10:59:39',0,'image/png'),(41,53,'1714215578984_1713783247231-Screenshot from 2024-04-10 16-30-58.png','Attchement is not found...','2024-04-27 10:59:39',0,'image/png'),(42,53,'1714215578985_1713783247231-Screenshot from 2024-04-04 15-47-10.png','Attchement is not found...','2024-04-27 10:59:39',0,'image/png'),(43,53,'1714215578986_Screenshot from 2024-04-24 17-54-32.png','Attchement is not found...','2024-04-27 10:59:39',0,'image/png'),(44,53,'1714215578987_Screencast from 24-04-24 05:56:53 PM IST.webm','Attchement is not found...','2024-04-27 10:59:39',0,'video/webm'),(45,53,'1714215579083_1713783421259-thor-strom-main.jpeg','Attchement is not found...','2024-04-27 10:59:39',0,'image/jpeg'),(46,53,'1714215579084_1713783210081-ironmain-sub-2.jpeg','Attchement is not found...','2024-04-27 10:59:39',0,'image/jpeg'),(47,53,'1714215579084_1713783210082-ironmain-sub-3.jpeg','Attchement is not found...','2024-04-27 10:59:39',0,'image/jpeg'),(48,54,'1714216073098_miniature-3365503_640.jpg','Attchement is not found...','2024-04-27 11:07:53',0,'image/jpeg'),(49,54,'1714216073100_pN4tnrld.jpg','Attchement is not found...','2024-04-27 11:07:53',0,'image/jpeg'),(50,54,'1714216073102_intex-computer-cabinet-500x500.jpg','Attchement is not found...','2024-04-27 11:07:53',0,'image/jpeg'),(51,55,'1714217900308_images (1).jpeg','Attchement is not found...','2024-04-27 11:38:20',0,'image/jpeg'),(52,55,'1714217900310_images.jpeg','Attchement is not found...','2024-04-27 11:38:20',0,'image/jpeg'),(53,55,'1714217900310_toys-hero.jpg','Attchement is not found...','2024-04-27 11:38:20',0,'image/jpeg'),(54,56,'1714218906525_pN4tnrld.jpg','Attchement is not found...','2024-04-27 11:55:06',0,'image/jpeg'),(55,57,'1714220165095_pN4tnrld.jpg','Attchement is not found...','2024-04-27 12:16:05',0,'image/jpeg'),(56,57,'1714220165097_intex-computer-cabinet-500x500.jpg','Attchement is not found...','2024-04-27 12:16:05',0,'image/jpeg'),(57,57,'1714220165097_images (1).jpeg','Attchement is not found...','2024-04-27 12:16:05',0,'image/jpeg'),(58,57,'1714220165097_images.jpeg','Attchement is not found...','2024-04-27 12:16:05',0,'image/jpeg'),(59,58,'1714364679204_pN4tnrld.jpg','Attchement is not found...','2024-04-29 04:24:39',0,'image/jpeg'),(60,58,'1714364679206_miniature-3365503_640.jpg','Attchement is not found...','2024-04-29 04:24:39',0,'image/jpeg'),(61,58,'1714364679206_intex-computer-cabinet-500x500.jpg','Attchement is not found...','2024-04-29 04:24:39',0,'image/jpeg'),(62,58,'1714364679207_images (1).jpeg','Attchement is not found...','2024-04-29 04:24:39',0,'image/jpeg'),(63,59,'1714364736340_intex-computer-cabinet-500x500.jpg','Attchement is not found...','2024-04-29 04:25:36',0,'image/jpeg'),(64,60,'1714364745918_miniature-3365503_640.jpg','Attchement is not found...','2024-04-29 04:25:45',0,'image/jpeg'),(65,61,'1714364852654_images.jpeg','Attchement is not found...','2024-04-29 04:27:32',0,'image/jpeg'),(66,62,'1714466537476_toys-hero.jpg','Attchement is not found...','2024-04-30 08:42:17',0,'image/jpeg'),(67,63,'1714476846980_toys-hero.jpg','Attchement is not found...','2024-04-30 11:34:06',0,'image/jpeg'),(68,64,'1714477470539_background1.gif','Attchement is not found...','2024-04-30 11:44:30',0,'image/gif');
/*!40000 ALTER TABLE `product_comment_attechments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_comments`
--

DROP TABLE IF EXISTS `product_comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `review` text,
  `ratting` int DEFAULT NULL,
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `is_delete` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `product_comments_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `product_comments_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_comments`
--

LOCK TABLES `product_comments` WRITE;
/*!40000 ALTER TABLE `product_comments` DISABLE KEYS */;
INSERT INTO `product_comments` VALUES (40,5,16,'good product',4,'2024-04-27 10:14:18',0),(41,5,16,'excellent',5,'2024-04-27 10:14:29',0),(42,5,16,'',2,'2024-04-27 10:14:36',0),(43,5,16,'',0,'2024-04-27 10:19:14',0),(44,5,16,'a',0,'2024-04-27 10:19:58',0),(45,5,16,'',0,'2024-04-27 10:20:33',0),(46,5,16,'',0,'2024-04-27 10:22:34',0),(47,5,16,'',0,'2024-04-27 10:25:12',0),(48,5,16,'',0,'2024-04-27 10:26:33',0),(49,4,16,'dfg',0,'2024-04-27 10:28:31',0),(50,4,16,'',0,'2024-04-27 10:28:50',0),(51,4,16,'good product',5,'2024-04-27 10:53:47',0),(52,4,16,'images',5,'2024-04-27 10:57:37',0),(53,4,16,'',0,'2024-04-27 10:59:39',0),(54,4,16,'qwe',4,'2024-04-27 11:07:53',0),(55,10,16,'good product',4,'2024-04-27 11:38:20',0),(56,4,16,'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum vitae odio impedit iste perferendis sit consequatur nobis. Exercitationem officiis minus repellendus rerum a molestiae molestias, vitae laudantium, nobis atque ea.\r\nLorem ipsum dolor sit, amet consectetur adipisicing elit. Earum vitae odio impedit iste perferendis sit consequatur nobis. Exercitationem officiis minus repellendus rerum a molestiae molestias, vitae laudantium, nobis atque ea.\r\nLorem ipsum dolor sit, amet consectetur adipisicing elit. Earum vitae odio impedit iste perferendis sit consequatur nobis. Exercitationem officiis minus repellendus rerum a molestiae molestias, vitae laudantium, nobis atque ea.\r\nLorem ipsum dolor sit, amet consectetur adipisicing elit. Earum vitae odio impedit iste perferendis sit consequatur nobis. Exercitationem officiis minus repellendus rerum a molestiae molestias, vitae laudantium, nobis atque ea.',4,'2024-04-27 11:55:06',0),(57,13,16,'',0,'2024-04-27 12:16:05',0),(58,2,16,'a',4,'2024-04-29 04:24:39',0),(59,2,16,'as',0,'2024-04-29 04:25:36',0),(60,2,16,'as',4,'2024-04-29 04:25:45',0),(61,2,16,'89',4,'2024-04-29 04:27:32',0),(62,3,16,'xzg',3,'2024-04-30 08:42:17',0),(63,10,16,'vchfggh',1,'2024-04-30 11:34:06',0),(64,14,16,'dret',3,'2024-04-30 11:44:30',0),(65,14,16,'sdetrete',4,'2024-04-30 11:45:12',0);
/*!40000 ALTER TABLE `product_comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_specifications`
--

DROP TABLE IF EXISTS `product_specifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_specifications` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int DEFAULT NULL,
  `sepcificaton_key` text,
  `specification_value` text,
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `is_delete` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `product_specifications_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_specifications`
--

LOCK TABLES `product_specifications` WRITE;
/*!40000 ALTER TABLE `product_specifications` DISABLE KEYS */;
INSERT INTO `product_specifications` VALUES (1,1,'Ram','12 GB','2024-04-22 09:28:25',0),(2,1,'Rom','512 GB','2024-04-22 09:28:25',0),(3,1,'Display Size','6.7 inch','2024-04-22 09:28:25',0),(4,2,'Ram','4 GB','2024-04-22 10:17:27',0),(5,2,'Rom','512 GB','2024-04-22 10:17:27',0),(6,2,'Battery','3850 maH','2024-04-22 10:17:27',0),(7,2,'Chip','A15 Bionic','2024-04-22 10:17:27',0),(8,3,'Ram','8 GB','2024-04-22 10:24:43',0),(9,3,'Rom','512 GB','2024-04-22 10:24:43',0),(10,3,'Display','6.7 inch','2024-04-22 10:24:43',0),(11,4,'Ram','8 GB','2024-04-22 10:30:44',0),(12,4,'Rom','512 GB','2024-04-22 10:30:44',0),(13,4,'Display','15 inch','2024-04-22 10:30:44',0),(14,5,'Size','8 UK','2024-04-22 10:37:17',0),(15,5,'Brand','Jordan','2024-04-22 10:37:17',0),(16,5,'Material','leather','2024-04-22 10:37:17',0),(17,6,'Size','46','2024-04-22 10:49:18',0),(18,6,'Brand','Adidas','2024-04-22 10:49:18',0),(19,6,'Material','cotton','2024-04-22 10:49:18',0),(20,7,'Size','Small','2024-04-22 10:53:30',0),(21,7,'Brand','Disney','2024-04-22 10:53:30',0),(22,7,'Material','Plastic','2024-04-22 10:53:30',0),(23,8,'Size','Small','2024-04-22 10:57:01',0),(24,8,'Brand','Disney','2024-04-22 10:57:01',0),(25,8,'Material','Plastic','2024-04-22 10:57:01',0),(26,9,'Pages','140','2024-04-22 11:02:57',0),(27,9,'Size','Long','2024-04-22 11:02:57',0),(28,10,'Gears','no','2024-04-22 11:08:18',0),(29,10,'Size','for kids','2024-04-22 11:08:18',0),(30,11,'a','a','2024-04-23 11:37:02',0),(31,12,'a','a','2024-04-24 12:33:45',0),(32,13,'ram','8gb','2024-04-24 13:06:10',0),(33,14,'12','12','2024-04-25 09:50:36',0);
/*!40000 ALTER TABLE `product_specifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_name` text,
  `product_description` text,
  `category_id` int DEFAULT NULL,
  `price` int DEFAULT NULL,
  `vender_id` int DEFAULT NULL,
  `quanitiy` int DEFAULT NULL,
  `main_image_path` text,
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_delete` tinyint(1) DEFAULT '0',
  `is_active` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `vender_id` (`vender_id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`vender_id`) REFERENCES `users` (`id`),
  CONSTRAINT `products_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'S24 Ultra','\r\n\r\n    Meet Galaxy S24 Ultra, the ultimate form of Galaxy Ultra with a new titanium exterior and a 17.25cm (6.8\") flat display. It\'s an absolute marvel of design.\r\n    The legacy of Galaxy Note is alive and well. Write, tap and navigate with precision your fingers wish they had on the new, flat display. ',21,139000,2,50,'1713778105274-s24.jpeg','2024-04-22 09:28:25','2024-04-22 11:42:04',0,1),(2,'iPhone 15 pro max','iPhone 15 Pro 128GB Natural Titanium',21,134900,1,42,'1713781047724-iPhone-Main.png','2024-04-22 10:17:27','2024-04-25 07:14:06',0,1),(3,'Vivo Y200','vivo Y200 5G 128GB 8GB RAM Gsm Unlocked Phone Qualcomm SM4375 Snapdragon 4 Gen 1 64MP',21,21999,1,45,'1713781483542-vivo-y200-main.jpeg','2024-04-22 10:24:43','2024-04-30 08:43:30',0,1),(4,'Mac-Book Air','Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver ',22,15999,18,95,'1713781844215-mac-main.jpeg','2024-04-22 10:30:44','2024-05-01 13:49:49',0,1),(5,'Air Jordan 1','Nike.com is your destination for the best selection of innovative, must-have Jordan products.',26,69999,1,0,'1713782237442-air-jordan-1-main.jpeg','2024-04-22 10:37:17','2024-04-22 11:37:15',0,1),(6,'India Cricket Team T-Shirt','Experience the thrill of cricket with the Indian Cricket Team New Jersey -Player Edition from JARSEYS EMPORIA.',24,4999,18,659,'1713782958702-india-tshirt-main.jpeg','2024-04-22 10:49:18','2024-04-26 12:21:28',0,1),(7,'Iron Man','New Iron Super Man Stark MCU Hero Suit Battle Fight ZD Non Branded Action Figure 7 inch Collectible Movie Model with Accessories High Details Moving Joints.',33,4999,1,979,'1713783210080-ironmain-main.jpeg','2024-04-22 10:53:30','2024-04-26 04:32:21',0,1),(8,'Stom breaker','Stormbreaker was used by Thor to summon the Bifrost Bridge to Wakanda. ',33,120,1,1000,'1713783421259-thor-strom-main.jpeg','2024-04-22 10:57:01','2024-04-22 10:57:01',0,0),(9,'Classmate Book','Nice Smooth Pages enjoy writting...',31,70,18,485,'1713783777281-book-main.jpeg','2024-04-22 11:02:57','2024-04-24 12:34:00',1,0),(10,'A1 Cycle','Lifelong 20T Cycle for Kids 5 to 8 Years - Bike for Boys and Girls ',35,10000,2,487,'1713784098425-cycle-main.jpeg','2024-04-22 11:08:18','2024-04-25 07:14:06',0,1),(11,'as','hgtfu',28,50,18,60,'1713872222680-background1.jpg','2024-04-23 11:37:02','2024-04-24 13:05:24',1,0),(12,'za','as',25,1200,18,1,'1713962025657-1713783210081-ironmain-sub-2.jpeg','2024-04-24 12:33:45','2024-04-24 12:33:54',1,0),(13,'cpu','cpu',22,12000,18,7,'1713963970027-1713783421259-thor-strom-main.jpeg','2024-04-24 13:06:10','2024-05-01 13:47:51',0,1),(14,'a','12',25,12,18,2,'1714038636472-1713783247231-Screenshot from 2024-04-11 16-02-27.png','2024-04-25 09:50:36','2024-04-25 09:50:36',0,1);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role_permissions`
--

DROP TABLE IF EXISTS `role_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role_permissions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `role_id` int DEFAULT NULL,
  `permission_id` int DEFAULT NULL,
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `is_delete` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `role_id` (`role_id`,`permission_id`),
  KEY `permission_id` (`permission_id`),
  CONSTRAINT `role_permissions_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`),
  CONSTRAINT `role_permissions_ibfk_2` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=205 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role_permissions`
--

LOCK TABLES `role_permissions` WRITE;
/*!40000 ALTER TABLE `role_permissions` DISABLE KEYS */;
INSERT INTO `role_permissions` VALUES (1,3,7,'2024-05-01 13:18:40',0),(2,3,8,'2024-05-01 13:18:40',0),(3,3,9,'2024-05-01 13:18:40',0),(4,3,10,'2024-05-01 13:18:40',0),(5,3,11,'2024-05-01 13:18:40',0),(6,3,12,'2024-05-01 13:18:40',0),(7,3,13,'2024-05-01 13:18:40',0),(8,3,14,'2024-05-01 13:18:40',0),(9,3,15,'2024-05-01 13:18:40',0),(10,3,16,'2024-05-01 13:18:40',0),(11,3,17,'2024-05-01 13:18:40',0),(12,3,18,'2024-05-01 13:18:40',0),(13,3,19,'2024-05-01 13:18:40',0),(14,3,20,'2024-05-01 13:18:40',0),(15,3,21,'2024-05-01 13:18:40',0),(16,3,22,'2024-05-01 13:18:40',0),(17,3,23,'2024-05-01 13:18:40',0),(18,3,24,'2024-05-01 13:18:40',0),(19,3,25,'2024-05-01 13:18:40',0),(20,3,26,'2024-05-01 13:18:40',0),(21,3,27,'2024-05-01 13:18:40',0),(22,3,28,'2024-05-01 13:18:40',0),(23,3,29,'2024-05-01 13:18:40',0),(24,3,30,'2024-05-01 13:18:40',0),(25,3,31,'2024-05-01 13:18:40',0),(26,3,32,'2024-05-01 13:18:40',0),(27,3,33,'2024-05-01 13:18:40',0),(28,3,34,'2024-05-01 13:18:40',0),(29,3,71,'2024-05-01 13:18:40',0),(30,3,72,'2024-05-01 13:18:40',0),(31,3,73,'2024-05-01 13:18:40',0),(32,3,74,'2024-05-01 13:18:40',0),(33,3,75,'2024-05-01 13:18:40',0),(34,3,76,'2024-05-01 13:18:40',0),(35,3,77,'2024-05-01 13:18:40',0),(36,3,78,'2024-05-01 13:18:40',0),(37,3,79,'2024-05-01 13:18:40',0),(38,3,80,'2024-05-01 13:18:40',0),(39,3,81,'2024-05-01 13:18:40',0),(40,3,82,'2024-05-01 13:18:40',0),(41,3,93,'2024-05-01 13:18:40',0),(42,3,94,'2024-05-01 13:18:40',0),(43,3,95,'2024-05-01 13:18:40',0),(44,3,96,'2024-05-01 13:18:40',0),(45,3,97,'2024-05-01 13:18:40',0),(46,3,98,'2024-05-01 13:18:40',0),(47,3,110,'2024-05-01 13:18:40',0),(48,4,96,'2024-05-01 13:20:32',0),(49,4,97,'2024-05-01 13:20:32',0),(50,4,98,'2024-05-01 13:20:32',0),(51,4,119,'2024-05-01 13:20:32',0),(52,4,120,'2024-05-01 13:20:32',0),(53,4,121,'2024-05-01 13:20:32',0),(54,4,122,'2024-05-01 13:20:32',0),(55,4,123,'2024-05-01 13:20:32',0),(56,4,124,'2024-05-01 13:20:32',0),(57,4,125,'2024-05-01 13:20:32',0),(58,4,126,'2024-05-01 13:20:32',0),(59,4,127,'2024-05-01 13:20:32',0),(60,4,128,'2024-05-01 13:20:32',0),(61,4,129,'2024-05-01 13:20:32',0),(62,4,130,'2024-05-01 13:20:32',0),(63,4,131,'2024-05-01 13:20:32',0),(64,4,7,'2024-05-01 13:20:55',0),(65,4,8,'2024-05-01 13:20:55',0),(66,4,9,'2024-05-01 13:21:33',0),(67,4,10,'2024-05-01 13:21:33',0),(68,3,53,'2024-05-01 13:25:18',0),(69,3,54,'2024-05-01 13:25:18',0),(70,3,55,'2024-05-01 13:25:18',0),(71,3,56,'2024-05-01 13:25:18',0),(72,3,57,'2024-05-01 13:25:18',0),(73,3,58,'2024-05-01 13:25:18',0),(74,3,59,'2024-05-01 13:25:18',0),(75,3,60,'2024-05-01 13:25:18',0),(76,3,61,'2024-05-01 13:25:18',0),(77,3,62,'2024-05-01 13:25:18',0),(78,3,63,'2024-05-01 13:25:18',0),(79,3,64,'2024-05-01 13:25:18',0),(80,3,65,'2024-05-01 13:25:18',0),(81,3,66,'2024-05-01 13:25:18',0),(82,3,67,'2024-05-01 13:25:18',0),(83,3,68,'2024-05-01 13:25:18',0),(84,3,69,'2024-05-01 13:25:18',0),(85,3,70,'2024-05-01 13:25:18',0),(86,1,1,'2024-05-01 13:29:12',0),(87,1,2,'2024-05-01 13:29:12',0),(88,1,3,'2024-05-01 13:29:12',0),(89,1,4,'2024-05-01 13:29:12',0),(90,1,5,'2024-05-01 13:29:12',0),(91,1,6,'2024-05-01 13:29:12',0),(92,1,7,'2024-05-01 13:29:12',0),(93,1,8,'2024-05-01 13:29:12',0),(94,1,9,'2024-05-01 13:29:12',0),(95,1,10,'2024-05-01 13:29:12',0),(96,1,33,'2024-05-01 13:29:12',0),(97,1,34,'2024-05-01 13:29:12',0),(98,1,35,'2024-05-01 13:29:12',0),(99,1,36,'2024-05-01 13:29:12',0),(100,1,37,'2024-05-01 13:29:12',0),(101,1,38,'2024-05-01 13:29:12',0),(102,1,39,'2024-05-01 13:29:12',0),(103,1,40,'2024-05-01 13:29:12',0),(104,1,41,'2024-05-01 13:29:12',0),(105,1,42,'2024-05-01 13:29:12',0),(106,1,43,'2024-05-01 13:29:12',0),(107,1,44,'2024-05-01 13:29:12',0),(108,1,45,'2024-05-01 13:29:12',0),(109,1,46,'2024-05-01 13:29:12',0),(110,1,47,'2024-05-01 13:29:12',0),(111,1,48,'2024-05-01 13:29:12',0),(112,1,49,'2024-05-01 13:29:12',0),(113,1,50,'2024-05-01 13:29:12',0),(114,1,96,'2024-05-01 13:29:12',0),(115,1,97,'2024-05-01 13:29:12',0),(116,1,98,'2024-05-01 13:29:12',0),(117,1,99,'2024-05-01 13:29:12',0),(118,1,100,'2024-05-01 13:29:12',0),(119,1,101,'2024-05-01 13:29:12',0),(120,1,102,'2024-05-01 13:29:12',0),(121,1,103,'2024-05-01 13:29:12',0),(122,1,104,'2024-05-01 13:29:12',0),(123,1,105,'2024-05-01 13:29:12',0),(124,1,106,'2024-05-01 13:29:12',0),(125,1,111,'2024-05-01 13:29:12',0),(126,1,112,'2024-05-01 13:29:12',0),(127,1,113,'2024-05-01 13:29:12',0),(128,1,114,'2024-05-01 13:29:12',0),(129,1,115,'2024-05-01 13:29:12',0),(130,1,116,'2024-05-01 13:29:12',0),(131,1,117,'2024-05-01 13:29:12',0),(132,1,118,'2024-05-01 13:29:12',0),(133,2,7,'2024-05-01 13:30:14',0),(134,2,8,'2024-05-01 13:30:14',0),(135,2,9,'2024-05-01 13:34:26',0),(136,2,10,'2024-05-01 13:34:26',0),(137,2,33,'2024-05-01 13:34:26',0),(138,2,34,'2024-05-01 13:34:26',0),(139,2,53,'2024-05-01 13:34:26',0),(140,2,54,'2024-05-01 13:34:26',0),(141,2,55,'2024-05-01 13:34:26',0),(142,2,56,'2024-05-01 13:34:26',0),(143,2,57,'2024-05-01 13:34:26',0),(144,2,58,'2024-05-01 13:34:26',0),(145,2,59,'2024-05-01 13:34:26',0),(146,2,60,'2024-05-01 13:34:26',0),(147,2,61,'2024-05-01 13:34:26',0),(148,2,62,'2024-05-01 13:34:26',0),(149,2,63,'2024-05-01 13:34:26',0),(150,2,64,'2024-05-01 13:34:26',0),(151,2,65,'2024-05-01 13:34:26',0),(152,2,66,'2024-05-01 13:34:26',0),(153,2,67,'2024-05-01 13:34:26',0),(154,2,68,'2024-05-01 13:34:26',0),(155,2,69,'2024-05-01 13:34:26',0),(156,2,70,'2024-05-01 13:34:26',0),(157,2,96,'2024-05-01 13:34:26',0),(158,2,97,'2024-05-01 13:34:26',0),(159,2,98,'2024-05-01 13:34:26',0),(160,3,45,'2024-05-01 13:53:08',0),(161,3,46,'2024-05-01 13:53:08',0),(162,3,47,'2024-05-01 13:53:08',0),(163,3,48,'2024-05-01 13:53:08',0),(164,3,49,'2024-05-01 13:53:08',0),(165,3,50,'2024-05-01 13:53:08',0),(166,3,51,'2024-05-01 13:53:08',1),(167,3,52,'2024-05-01 13:53:08',1),(168,3,83,'2024-05-01 13:53:08',0),(169,3,84,'2024-05-01 13:53:08',0),(170,3,85,'2024-05-01 13:53:08',0),(171,3,86,'2024-05-01 13:53:08',0),(172,3,87,'2024-05-01 13:53:08',0),(173,3,88,'2024-05-01 13:53:08',0),(174,3,89,'2024-05-01 13:53:08',0),(175,3,90,'2024-05-01 13:53:08',0),(176,3,91,'2024-05-01 13:53:08',0),(177,3,102,'2024-05-01 13:56:25',0),(178,1,83,'2024-05-01 14:30:18',0),(179,1,84,'2024-05-01 14:30:18',0),(180,1,85,'2024-05-01 14:30:18',0),(181,1,86,'2024-05-01 14:30:18',0),(182,1,87,'2024-05-01 14:30:18',0),(183,1,88,'2024-05-01 14:30:18',0),(184,1,89,'2024-05-01 14:30:18',0),(185,1,90,'2024-05-01 14:30:18',0),(186,1,51,'2024-05-02 05:07:32',0),(187,1,52,'2024-05-02 05:07:32',0),(188,3,135,'2024-05-02 11:22:39',0),(189,4,134,'2024-05-02 11:22:47',0),(190,3,133,'2024-05-02 11:22:54',0),(191,1,132,'2024-05-02 11:23:02',0),(192,2,133,'2024-05-02 12:28:27',0),(193,3,136,'2024-05-03 06:53:18',0),(194,3,137,'2024-05-03 06:53:18',0),(195,3,138,'2024-05-03 06:53:18',0),(196,3,139,'2024-05-03 06:53:18',0),(197,4,136,'2024-05-03 06:53:22',0),(198,4,137,'2024-05-03 06:53:22',0),(199,4,138,'2024-05-03 06:53:22',0),(200,4,139,'2024-05-03 06:53:22',0),(201,1,136,'2024-05-03 06:53:29',0),(202,1,137,'2024-05-03 06:53:29',0),(203,1,138,'2024-05-03 06:53:29',0),(204,1,139,'2024-05-03 06:53:29',0);
/*!40000 ALTER TABLE `role_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `role_name` varchar(20) DEFAULT NULL,
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `is_delete` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'admin','2024-04-09 02:12:47',0),(2,'vendor','2024-04-09 03:06:52',0),(3,'user','2024-04-09 03:06:52',0),(4,'logistic','2024-04-30 05:40:42',0);
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `saved_product`
--

DROP TABLE IF EXISTS `saved_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `saved_product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `is_delete` tinyint(1) DEFAULT '0',
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `saved_product_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `saved_product_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `saved_product`
--

LOCK TABLES `saved_product` WRITE;
/*!40000 ALTER TABLE `saved_product` DISABLE KEYS */;
INSERT INTO `saved_product` VALUES (1,1,1,0,'2024-04-23 12:08:38'),(2,1,2,0,'2024-04-23 12:08:38'),(3,16,5,1,'2024-04-23 12:08:38'),(4,16,1,1,'2024-04-23 12:08:38'),(5,2,1,1,'2024-04-24 05:30:59'),(8,16,11,1,'2024-04-24 05:56:59'),(9,16,10,0,'2024-04-24 05:57:26'),(10,16,9,0,'2024-04-24 05:57:32'),(11,16,2,0,'2024-04-24 05:57:55'),(12,16,4,1,'2024-04-24 05:58:29'),(13,16,3,1,'2024-04-24 05:58:38'),(14,17,9,1,'2024-04-24 06:45:14'),(15,17,7,0,'2024-04-24 06:45:29'),(16,17,3,0,'2024-04-24 06:45:32'),(17,17,10,0,'2024-04-24 06:45:37'),(18,17,6,0,'2024-04-24 06:45:40'),(19,17,11,1,'2024-04-24 06:49:38'),(20,16,6,1,'2024-04-24 11:49:59'),(21,16,13,0,'2024-04-25 04:45:14');
/*!40000 ALTER TABLE `saved_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transection`
--

DROP TABLE IF EXISTS `transection`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transection` (
  `id` int NOT NULL AUTO_INCREMENT,
  `payment_id` int DEFAULT NULL,
  `order_id` int DEFAULT NULL,
  `type_of_transection` varchar(20) DEFAULT NULL,
  `mode_of_transection` varchar(20) DEFAULT 'Online',
  `status` tinyint(1) DEFAULT NULL,
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `payment_id` (`payment_id`),
  KEY `order_id` (`order_id`),
  CONSTRAINT `transection_ibfk_1` FOREIGN KEY (`payment_id`) REFERENCES `customer_payment_detail` (`id`),
  CONSTRAINT `transection_ibfk_2` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transection`
--

LOCK TABLES `transection` WRITE;
/*!40000 ALTER TABLE `transection` DISABLE KEYS */;
INSERT INTO `transection` VALUES (3,2,3,'Debit card','Online',1,'2024-04-22 12:22:22'),(4,4,4,'Credit card','Online',1,'2024-04-22 12:35:05'),(5,4,5,'Credit card','Online',1,'2024-04-22 12:49:59'),(6,4,6,'Credit card','Online',1,'2024-04-22 12:50:37'),(7,4,7,'Credit card','Online',1,'2024-04-22 12:52:16'),(8,4,8,'Credit card','Online',1,'2024-04-22 12:52:44'),(9,4,9,'Credit card','Online',1,'2024-04-22 12:55:59'),(10,4,10,'Credit card','Online',1,'2024-04-22 12:56:12'),(11,4,11,'Credit card','Online',1,'2024-04-22 12:56:19'),(12,4,12,'Credit card','Online',1,'2024-04-22 12:56:55'),(13,4,13,'Credit card','Online',1,'2024-04-22 12:57:01'),(14,4,14,'Credit card','Online',1,'2024-04-22 12:58:10'),(15,4,15,'Credit card','Online',1,'2024-04-22 13:02:52'),(16,4,16,'Credit card','Online',1,'2024-04-22 13:05:23'),(17,5,17,'Credit card','Online',1,'2024-04-23 10:30:22'),(18,5,18,'Credit card','Online',1,'2024-04-24 11:48:57'),(19,6,19,'Credit card','Online',1,'2024-04-24 12:28:13'),(20,5,20,'Credit card','Online',1,'2024-04-25 04:45:02'),(21,5,21,'Credit card','Online',1,'2024-04-25 07:14:06'),(22,5,22,'Credit card','Online',1,'2024-04-26 04:30:32'),(23,5,23,'Credit card','Online',1,'2024-04-26 04:31:11'),(24,5,24,'Credit card','Online',1,'2024-04-26 04:32:21'),(25,6,25,'Credit card','Online',1,'2024-04-26 04:56:36'),(26,5,26,'Credit card','Online',1,'2024-04-30 08:43:30'),(27,5,27,'Credit card','Online',1,'2024-05-01 03:59:06'),(28,5,28,'Credit card','Online',1,'2024-05-01 13:47:51');
/*!40000 ALTER TABLE `transection` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_events`
--

DROP TABLE IF EXISTS `user_events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_events` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `title` text,
  `note` text,
  `event_date` datetime DEFAULT NULL,
  `color` text,
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_delete` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `user_events_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_events`
--

LOCK TABLES `user_events` WRITE;
/*!40000 ALTER TABLE `user_events` DISABLE KEYS */;
INSERT INTO `user_events` VALUES (1,16,'Event 1','add new order','2024-05-03 00:00:00','#7040f2','2024-05-02 13:46:51','2024-05-03 05:49:16',0),(2,16,'Event 1','event 2 ','2024-05-03 00:00:00','#00fa3e','2024-05-02 13:47:56','2024-05-03 05:52:50',0),(3,16,'Event 1','saf','2024-05-03 00:00:00','#f2406d','2024-05-02 13:48:16','2024-05-03 05:58:37',0),(4,16,'Event 1','asdf','2024-04-13 00:00:00','#5540f2','2024-05-02 13:48:51','2024-05-03 05:00:53',0),(5,16,'Event 1','bhhjghjasdde','2024-04-02 00:00:00','#7040f2','2024-05-02 13:49:19','2024-05-03 04:53:35',0),(6,16,'Event 1','fgh','2024-04-12 00:00:00','#7040f2','2024-05-02 13:49:26','2024-05-02 13:49:26',0),(7,16,'Event 1','cvbnfghjh','2024-08-17 00:00:00','#7040f2','2024-05-02 13:50:02','2024-05-02 13:50:02',0),(8,16,'Event 1','Pencil order','2024-08-01 00:00:00','#db7500','2024-05-02 13:50:25','2024-05-03 05:23:29',0),(9,16,'Event 2','asff','2024-05-04 00:00:00','#0629b7','2024-05-02 13:50:43','2024-05-03 04:54:57',0),(10,19,'Event 1','yyy','2024-04-02 00:00:00','#ff0059','2024-05-03 03:48:12','2024-05-03 04:10:32',1),(11,19,'Event 1','create one vendor','2024-04-02 00:00:00','#c2f240','2024-05-03 04:11:05','2024-05-03 04:11:05',0),(12,19,'Event 2','Add one logistics','2024-04-02 00:00:00','#f240e3','2024-05-03 04:11:52','2024-05-03 04:11:52',0),(13,19,'Event 3','Assign logistics to pending orders','2024-04-02 00:00:00','#000000','2024-05-03 04:12:37','2024-05-03 04:12:37',0),(14,16,'Event 1','Event 1 occur',NULL,'#00ff33','2024-05-03 04:53:58','2024-05-03 05:19:32',0),(15,16,'Event 1','as1','2024-05-31 00:00:00','#40f2d4','2024-05-03 05:04:37','2024-05-03 05:20:17',0),(16,23,'Event 1','Event 1 occur','2024-05-03 00:00:00','#0029a3','2024-05-03 05:25:24','2024-05-03 05:25:24',0),(17,19,'Event 1','Event 1 occur','2024-05-03 00:00:00','#00bd16','2024-05-03 06:54:41','2024-05-03 06:54:41',0);
/*!40000 ALTER TABLE `user_events` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_login_logs`
--

DROP TABLE IF EXISTS `user_login_logs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_login_logs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `is_success` tinyint(1) DEFAULT '0',
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `is_delete` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `user_login_logs_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=449 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_login_logs`
--

LOCK TABLES `user_login_logs` WRITE;
/*!40000 ALTER TABLE `user_login_logs` DISABLE KEYS */;
INSERT INTO `user_login_logs` VALUES (1,7,1,'2024-04-22 14:21:47',0),(2,19,1,'2024-04-22 14:56:17',0),(3,18,1,'2024-04-22 14:57:15',0),(4,19,1,'2024-04-22 14:57:47',0),(5,19,1,'2024-04-23 05:54:41',0),(6,19,1,'2024-04-23 06:04:58',0),(7,19,1,'2024-04-23 06:23:09',0),(8,19,1,'2024-04-23 07:09:56',0),(9,19,1,'2024-04-23 07:20:42',0),(10,19,1,'2024-04-23 07:34:15',0),(11,19,1,'2024-04-23 07:34:37',0),(12,19,1,'2024-04-23 07:35:00',0),(13,19,1,'2024-04-23 07:35:36',0),(14,19,1,'2024-04-23 07:36:17',0),(15,19,1,'2024-04-23 07:40:34',0),(16,18,1,'2024-04-23 07:51:49',0),(17,19,1,'2024-04-23 07:52:07',0),(18,19,1,'2024-04-23 07:52:19',0),(19,18,1,'2024-04-23 07:52:50',0),(20,19,1,'2024-04-23 07:55:29',0),(21,18,1,'2024-04-23 08:01:58',0),(22,19,1,'2024-04-23 08:04:36',0),(23,19,1,'2024-04-23 08:10:01',0),(24,19,1,'2024-04-23 09:04:53',0),(25,16,1,'2024-04-23 09:24:16',0),(26,16,1,'2024-04-23 09:56:29',0),(27,16,1,'2024-04-23 10:00:21',0),(28,16,1,'2024-04-23 10:27:53',0),(29,19,1,'2024-04-23 11:11:36',0),(30,19,1,'2024-04-23 11:25:28',0),(31,18,1,'2024-04-23 11:33:26',0),(32,19,1,'2024-04-23 12:15:11',0),(33,18,1,'2024-04-23 13:21:04',0),(34,18,1,'2024-04-23 13:24:39',0),(35,16,1,'2024-04-24 04:22:41',0),(36,18,1,'2024-04-24 04:31:40',0),(37,2,1,'2024-04-24 04:38:02',0),(38,16,1,'2024-04-24 05:56:57',0),(39,17,1,'2024-04-24 06:45:09',0),(40,18,1,'2024-04-24 07:32:58',0),(41,19,1,'2024-04-24 07:33:54',0),(42,16,1,'2024-04-24 07:35:36',0),(43,16,1,'2024-04-24 09:07:17',0),(44,17,1,'2024-04-24 09:09:23',0),(45,16,1,'2024-04-24 09:38:01',0),(46,16,1,'2024-04-24 10:38:49',0),(47,18,1,'2024-04-24 10:47:09',0),(48,19,1,'2024-04-24 10:48:48',0),(49,19,1,'2024-04-24 11:21:12',0),(50,16,1,'2024-04-24 11:41:46',0),(51,16,1,'2024-04-24 11:48:23',0),(52,19,1,'2024-04-24 11:50:36',0),(53,19,1,'2024-04-24 11:50:47',0),(54,19,1,'2024-04-24 11:50:57',0),(55,18,1,'2024-04-24 11:52:04',0),(56,19,1,'2024-04-24 11:53:35',0),(57,16,1,'2024-04-24 12:25:10',0),(58,17,1,'2024-04-24 12:27:05',0),(59,19,1,'2024-04-24 12:28:44',0),(60,18,1,'2024-04-24 12:29:53',0),(61,19,1,'2024-04-24 12:45:16',0),(62,18,1,'2024-04-24 12:52:16',0),(63,18,1,'2024-04-24 13:04:51',0),(64,18,1,'2024-04-24 13:11:24',0),(65,19,1,'2024-04-24 13:57:12',0),(66,18,1,'2024-04-24 13:57:38',0),(67,18,1,'2024-04-24 14:09:50',0),(68,18,1,'2024-04-25 04:20:53',0),(69,19,1,'2024-04-25 04:21:07',0),(70,16,1,'2024-04-25 04:39:41',0),(71,16,1,'2024-04-25 04:42:30',0),(72,16,1,'2024-04-25 04:44:34',0),(73,19,1,'2024-04-25 05:36:28',0),(74,19,1,'2024-04-25 05:47:09',0),(75,19,1,'2024-04-25 06:29:54',0),(76,19,1,'2024-04-25 06:45:04',0),(77,19,1,'2024-04-25 06:45:05',0),(78,19,1,'2024-04-25 06:45:07',0),(79,19,1,'2024-04-25 06:45:10',0),(80,19,1,'2024-04-25 06:45:11',0),(81,19,1,'2024-04-25 06:45:11',0),(82,19,1,'2024-04-25 06:45:12',0),(83,19,1,'2024-04-25 06:45:13',0),(84,19,1,'2024-04-25 06:45:14',0),(85,19,1,'2024-04-25 06:45:21',0),(86,19,1,'2024-04-25 06:59:52',0),(87,19,1,'2024-04-25 06:59:53',0),(88,19,1,'2024-04-25 06:59:53',0),(89,19,1,'2024-04-25 07:00:20',0),(90,19,1,'2024-04-25 07:01:21',0),(91,19,1,'2024-04-25 07:01:21',0),(92,19,1,'2024-04-25 07:01:22',0),(93,19,1,'2024-04-25 07:01:22',0),(94,19,1,'2024-04-25 07:01:23',0),(95,19,1,'2024-04-25 07:01:23',0),(96,19,1,'2024-04-25 07:02:08',0),(97,19,1,'2024-04-25 07:03:10',0),(98,19,1,'2024-04-25 07:03:11',0),(99,19,1,'2024-04-25 07:04:06',0),(100,19,1,'2024-04-25 07:04:07',0),(101,19,1,'2024-04-25 07:04:08',0),(102,19,1,'2024-04-25 07:04:08',0),(103,19,1,'2024-04-25 07:04:09',0),(104,19,1,'2024-04-25 07:04:09',0),(105,19,1,'2024-04-25 07:04:09',0),(106,19,1,'2024-04-25 07:04:10',0),(107,19,1,'2024-04-25 07:04:10',0),(108,19,1,'2024-04-25 07:04:51',0),(109,19,1,'2024-04-25 07:04:52',0),(110,19,1,'2024-04-25 07:04:52',0),(111,19,1,'2024-04-25 07:04:53',0),(112,19,1,'2024-04-25 07:04:54',0),(113,19,1,'2024-04-25 07:04:54',0),(114,19,1,'2024-04-25 07:04:55',0),(115,19,1,'2024-04-25 07:04:55',0),(116,19,1,'2024-04-25 07:04:56',0),(117,19,1,'2024-04-25 07:06:09',0),(118,19,1,'2024-04-25 07:06:36',0),(119,19,1,'2024-04-25 07:07:03',0),(120,16,1,'2024-04-25 07:12:44',0),(121,16,1,'2024-04-25 07:13:00',0),(122,16,1,'2024-04-25 07:30:21',0),(123,16,1,'2024-04-25 07:30:27',0),(124,16,1,'2024-04-25 07:31:06',0),(125,16,1,'2024-04-25 07:35:32',0),(126,16,1,'2024-04-25 07:35:40',0),(127,16,1,'2024-04-25 07:35:45',0),(128,16,1,'2024-04-25 07:38:07',0),(129,16,1,'2024-04-25 07:41:24',0),(130,16,1,'2024-04-25 07:41:50',0),(131,19,1,'2024-04-25 07:47:23',0),(132,16,1,'2024-04-25 07:47:26',0),(133,19,1,'2024-04-25 07:47:36',0),(134,16,1,'2024-04-25 07:47:37',0),(135,19,1,'2024-04-25 07:47:46',0),(136,19,1,'2024-04-25 07:47:49',0),(137,19,1,'2024-04-25 07:47:53',0),(138,19,1,'2024-04-25 07:48:02',0),(139,19,1,'2024-04-25 07:48:08',0),(140,19,1,'2024-04-25 07:49:13',0),(141,16,1,'2024-04-25 07:49:20',0),(142,16,1,'2024-04-25 08:01:09',0),(143,19,1,'2024-04-25 08:01:41',0),(144,16,1,'2024-04-25 08:02:52',0),(145,16,1,'2024-04-25 08:03:30',0),(146,16,1,'2024-04-25 08:04:08',0),(147,19,1,'2024-04-25 08:04:28',0),(148,19,1,'2024-04-25 08:05:43',0),(149,16,1,'2024-04-25 08:05:54',0),(150,16,1,'2024-04-25 08:07:49',0),(151,16,1,'2024-04-25 08:18:55',0),(152,19,1,'2024-04-25 08:20:55',0),(153,16,1,'2024-04-25 08:22:33',0),(154,19,1,'2024-04-25 08:23:00',0),(155,19,1,'2024-04-25 08:23:20',0),(156,19,1,'2024-04-25 08:24:05',0),(157,19,1,'2024-04-25 08:29:30',0),(158,19,1,'2024-04-25 08:29:54',0),(159,19,1,'2024-04-25 08:30:29',0),(160,19,1,'2024-04-25 08:31:44',0),(161,19,1,'2024-04-25 08:32:16',0),(162,16,1,'2024-04-25 08:32:26',0),(163,16,1,'2024-04-25 09:10:16',0),(164,16,1,'2024-04-25 09:10:22',0),(165,19,1,'2024-04-25 09:10:48',0),(166,19,1,'2024-04-25 09:33:37',0),(167,19,1,'2024-04-25 09:34:00',0),(168,19,1,'2024-04-25 09:45:10',0),(169,19,1,'2024-04-25 09:46:04',0),(170,16,1,'2024-04-25 09:46:28',0),(171,18,1,'2024-04-25 09:49:57',0),(172,16,1,'2024-04-25 10:00:34',0),(173,16,1,'2024-04-25 10:10:53',0),(174,19,1,'2024-04-25 10:11:44',0),(175,16,1,'2024-04-25 10:16:12',0),(176,16,1,'2024-04-25 11:17:53',0),(177,16,1,'2024-04-25 12:24:21',0),(178,19,1,'2024-04-25 12:29:03',0),(179,19,1,'2024-04-25 12:29:15',0),(180,18,1,'2024-04-25 12:35:21',0),(181,18,1,'2024-04-25 12:45:31',0),(182,19,1,'2024-04-25 12:45:47',0),(183,19,1,'2024-04-25 12:48:26',0),(184,19,1,'2024-04-25 12:48:37',0),(185,19,1,'2024-04-25 13:04:59',0),(186,19,1,'2024-04-25 13:05:17',0),(187,19,1,'2024-04-25 13:10:00',0),(188,18,1,'2024-04-25 13:14:25',0),(189,18,1,'2024-04-25 13:15:56',0),(190,16,1,'2024-04-25 14:00:00',0),(191,16,1,'2024-04-26 04:30:11',0),(192,17,1,'2024-04-26 04:34:00',0),(193,19,1,'2024-04-26 04:39:29',0),(194,16,1,'2024-04-26 04:40:19',0),(195,19,1,'2024-04-26 04:43:14',0),(196,19,1,'2024-04-26 04:43:25',0),(197,17,1,'2024-04-26 04:53:27',0),(198,19,1,'2024-04-26 04:58:34',0),(199,16,1,'2024-04-26 04:59:32',0),(200,19,1,'2024-04-26 05:00:25',0),(201,16,1,'2024-04-26 05:02:21',0),(202,16,1,'2024-04-26 05:26:40',0),(203,16,1,'2024-04-26 05:29:58',0),(204,19,1,'2024-04-26 05:50:06',0),(205,18,1,'2024-04-26 05:52:45',0),(206,19,1,'2024-04-26 06:25:30',0),(207,18,1,'2024-04-26 06:25:42',0),(208,18,1,'2024-04-26 07:09:10',0),(209,18,1,'2024-04-26 07:10:18',0),(210,16,1,'2024-04-26 08:11:05',0),(211,19,1,'2024-04-26 09:06:02',0),(212,19,1,'2024-04-26 09:35:13',0),(213,19,1,'2024-04-26 09:35:34',0),(214,19,1,'2024-04-26 09:36:57',0),(215,18,1,'2024-04-26 09:42:12',0),(216,18,1,'2024-04-26 09:43:08',0),(217,19,1,'2024-04-26 09:49:01',0),(218,19,1,'2024-04-26 09:49:24',0),(219,19,1,'2024-04-26 09:49:45',0),(220,19,1,'2024-04-26 09:50:53',0),(221,19,1,'2024-04-26 09:51:41',0),(222,16,1,'2024-04-26 10:07:17',0),(223,16,1,'2024-04-26 10:10:18',0),(224,16,1,'2024-04-26 11:13:47',0),(225,19,1,'2024-04-26 11:25:00',0),(226,18,1,'2024-04-26 11:26:18',0),(227,19,1,'2024-04-26 11:29:19',0),(228,16,1,'2024-04-26 11:30:03',0),(229,19,1,'2024-04-26 11:30:44',0),(230,18,1,'2024-04-26 11:38:26',0),(231,16,1,'2024-04-26 11:38:41',0),(232,19,1,'2024-04-26 11:39:49',0),(233,18,1,'2024-04-26 11:40:06',0),(234,19,1,'2024-04-26 11:41:00',0),(235,19,1,'2024-04-26 11:42:22',0),(236,16,1,'2024-04-26 11:43:48',0),(237,16,1,'2024-04-26 12:00:37',0),(238,19,1,'2024-04-26 12:08:31',0),(239,18,1,'2024-04-26 12:20:15',0),(240,16,1,'2024-04-26 12:23:24',0),(241,16,1,'2024-04-26 13:29:15',0),(242,18,1,'2024-04-26 13:30:32',0),(243,19,1,'2024-04-26 13:33:47',0),(244,18,1,'2024-04-26 13:53:16',0),(245,16,1,'2024-04-26 13:54:27',0),(246,19,1,'2024-04-26 14:00:33',0),(247,18,1,'2024-04-26 14:00:44',0),(248,19,1,'2024-04-27 04:04:38',0),(249,16,1,'2024-04-27 04:04:50',0),(250,16,1,'2024-04-27 04:07:03',0),(251,16,1,'2024-04-27 05:20:32',0),(252,16,1,'2024-04-27 06:54:01',0),(253,16,1,'2024-04-27 06:54:41',0),(254,16,1,'2024-04-27 09:04:17',0),(255,19,1,'2024-04-27 10:07:48',0),(256,16,1,'2024-04-27 10:09:14',0),(257,16,1,'2024-04-27 10:28:17',0),(258,16,1,'2024-04-27 11:37:58',0),(259,19,1,'2024-04-27 11:59:07',0),(260,18,1,'2024-04-27 11:59:33',0),(261,16,1,'2024-04-27 12:15:54',0),(262,16,1,'2024-04-29 04:21:19',0),(263,19,1,'2024-04-29 06:28:50',0),(264,19,1,'2024-04-29 07:30:36',0),(265,19,1,'2024-04-29 08:09:13',0),(266,19,1,'2024-04-29 09:12:07',0),(267,19,1,'2024-04-29 10:04:08',0),(268,19,1,'2024-04-29 10:37:14',0),(269,19,1,'2024-04-29 12:05:06',0),(270,19,1,'2024-04-29 13:56:23',0),(271,16,1,'2024-04-30 03:55:52',0),(272,19,0,'2024-04-30 04:00:05',0),(273,19,1,'2024-04-30 04:00:25',0),(274,19,1,'2024-04-30 04:04:43',0),(275,19,1,'2024-04-30 04:09:45',0),(276,19,0,'2024-04-30 04:10:45',0),(277,19,1,'2024-04-30 04:10:55',0),(278,18,1,'2024-04-30 04:27:11',0),(279,19,1,'2024-04-30 04:31:09',0),(280,21,1,'2024-04-30 04:45:05',0),(281,19,1,'2024-04-30 04:45:37',0),(282,18,1,'2024-04-30 06:04:27',0),(283,19,1,'2024-04-30 06:05:55',0),(284,19,1,'2024-04-30 07:42:44',0),(285,16,1,'2024-04-30 08:42:07',0),(286,19,1,'2024-04-30 08:44:05',0),(287,19,1,'2024-04-30 10:12:25',0),(288,19,1,'2024-04-30 11:13:16',0),(289,16,1,'2024-04-30 11:33:50',0),(290,19,1,'2024-04-30 11:34:23',0),(291,16,1,'2024-04-30 11:37:07',0),(292,19,1,'2024-04-30 11:39:50',0),(293,16,1,'2024-04-30 11:44:18',0),(294,19,0,'2024-04-30 11:46:34',0),(295,16,1,'2024-04-30 12:44:38',0),(296,19,1,'2024-04-30 13:58:22',0),(297,16,1,'2024-04-30 14:01:09',0),(298,19,1,'2024-04-30 14:45:13',0),(299,16,1,'2024-04-30 14:46:40',0),(300,19,1,'2024-05-01 03:58:29',0),(301,16,1,'2024-05-01 03:58:53',0),(302,19,1,'2024-05-01 04:00:05',0),(303,16,1,'2024-05-01 04:04:27',0),(304,19,1,'2024-05-01 04:06:14',0),(305,16,1,'2024-05-01 04:08:00',0),(306,19,1,'2024-05-01 04:21:46',0),(307,19,1,'2024-05-01 04:23:05',0),(308,19,1,'2024-05-01 04:29:01',0),(309,18,1,'2024-05-01 05:28:38',0),(310,19,1,'2024-05-01 05:33:51',0),(311,24,1,'2024-05-01 06:32:57',0),(312,24,1,'2024-05-01 06:39:05',0),(313,24,1,'2024-05-01 06:39:18',0),(314,24,1,'2024-05-01 06:39:49',0),(315,24,1,'2024-05-01 06:42:36',0),(316,23,1,'2024-05-01 06:45:07',0),(317,23,1,'2024-05-01 06:45:50',0),(318,19,1,'2024-05-01 06:46:04',0),(319,19,1,'2024-05-01 07:43:36',0),(320,19,1,'2024-05-01 07:47:12',0),(321,19,1,'2024-05-01 07:51:34',0),(322,19,1,'2024-05-01 07:57:25',0),(323,19,1,'2024-05-01 09:49:30',0),(324,19,1,'2024-05-01 12:39:36',0),(325,19,1,'2024-05-01 12:39:38',0),(326,19,1,'2024-05-01 12:39:39',0),(327,19,1,'2024-05-01 12:39:39',0),(328,19,1,'2024-05-01 12:39:39',0),(329,19,1,'2024-05-01 12:39:40',0),(330,19,1,'2024-05-01 12:39:40',0),(331,19,1,'2024-05-01 12:39:41',0),(332,19,1,'2024-05-01 12:40:11',0),(333,19,1,'2024-05-01 12:40:12',0),(334,19,1,'2024-05-01 12:40:13',0),(335,19,1,'2024-05-01 12:40:34',0),(336,19,1,'2024-05-01 12:40:35',0),(337,19,1,'2024-05-01 12:40:35',0),(338,19,1,'2024-05-01 12:40:36',0),(339,19,1,'2024-05-01 12:40:37',0),(340,19,1,'2024-05-01 12:40:38',0),(341,19,1,'2024-05-01 12:40:39',0),(342,19,1,'2024-05-01 12:40:39',0),(343,19,1,'2024-05-01 12:40:40',0),(344,19,1,'2024-05-01 12:40:40',0),(345,19,1,'2024-05-01 12:40:41',0),(346,19,1,'2024-05-01 12:40:42',0),(347,19,1,'2024-05-01 12:40:42',0),(348,19,1,'2024-05-01 12:40:43',0),(349,19,1,'2024-05-01 12:40:44',0),(350,19,1,'2024-05-01 12:40:45',0),(351,19,1,'2024-05-01 12:40:45',0),(352,19,1,'2024-05-01 12:40:46',0),(353,19,1,'2024-05-01 12:40:47',0),(354,19,1,'2024-05-01 12:40:47',0),(355,19,1,'2024-05-01 12:41:01',0),(356,19,1,'2024-05-01 12:41:03',0),(357,19,1,'2024-05-01 12:41:04',0),(358,19,1,'2024-05-01 12:41:06',0),(359,23,1,'2024-05-01 12:41:11',0),(360,23,1,'2024-05-01 12:42:51',0),(361,19,1,'2024-05-01 12:49:17',0),(362,19,1,'2024-05-01 13:11:23',0),(363,19,1,'2024-05-01 13:45:29',0),(364,16,1,'2024-05-01 13:47:44',0),(365,19,1,'2024-05-01 13:48:07',0),(366,18,1,'2024-05-01 13:49:34',0),(367,18,1,'2024-05-01 13:50:33',0),(368,23,1,'2024-05-01 13:50:53',0),(369,19,1,'2024-05-01 13:51:31',0),(370,19,1,'2024-05-01 13:53:42',0),(371,19,1,'2024-05-01 14:17:21',0),(372,19,1,'2024-05-01 14:22:10',0),(373,23,1,'2024-05-01 14:31:11',0),(374,19,1,'2024-05-02 03:58:39',0),(375,19,1,'2024-05-02 04:08:21',0),(376,23,1,'2024-05-02 04:13:18',0),(377,19,1,'2024-05-02 04:32:15',0),(378,19,1,'2024-05-02 04:36:07',0),(379,19,1,'2024-05-02 04:37:35',0),(380,21,1,'2024-05-02 04:37:57',0),(381,18,1,'2024-05-02 04:38:14',0),(382,18,1,'2024-05-02 04:45:28',0),(383,16,1,'2024-05-02 04:48:22',0),(384,19,1,'2024-05-02 05:06:02',0),(385,16,1,'2024-05-02 05:52:04',0),(386,19,1,'2024-05-02 06:30:41',0),(387,19,1,'2024-05-02 07:21:52',0),(388,19,1,'2024-05-02 07:41:13',0),(389,16,1,'2024-05-02 07:42:14',0),(390,16,1,'2024-05-02 07:47:55',0),(391,19,0,'2024-05-02 08:19:31',0),(392,19,0,'2024-05-02 08:19:40',0),(393,19,0,'2024-05-02 08:19:43',0),(394,16,1,'2024-05-02 08:19:53',0),(395,19,1,'2024-05-02 09:19:45',0),(396,16,1,'2024-05-02 09:32:33',0),(397,16,1,'2024-05-02 09:33:14',0),(398,19,0,'2024-05-02 10:41:10',0),(399,19,0,'2024-05-02 10:41:22',0),(400,16,1,'2024-05-02 10:41:33',0),(401,19,0,'2024-05-02 11:12:09',0),(402,19,1,'2024-05-02 11:12:31',0),(403,18,1,'2024-05-02 11:14:50',0),(404,23,1,'2024-05-02 11:15:24',0),(405,16,1,'2024-05-02 11:15:47',0),(406,19,1,'2024-05-02 11:22:28',0),(407,19,1,'2024-05-02 11:30:48',0),(408,23,1,'2024-05-02 11:34:20',0),(409,23,1,'2024-05-02 11:35:21',0),(410,19,1,'2024-05-02 11:35:52',0),(411,16,1,'2024-05-02 11:39:28',0),(412,16,1,'2024-05-02 11:45:16',0),(413,19,1,'2024-05-02 12:00:34',0),(414,16,1,'2024-05-02 12:04:48',0),(415,19,1,'2024-05-02 12:12:17',0),(416,19,1,'2024-05-02 12:16:02',0),(417,16,1,'2024-05-02 12:20:50',0),(418,18,1,'2024-05-02 12:24:58',0),(419,19,1,'2024-05-02 12:25:14',0),(420,18,1,'2024-05-02 12:25:41',0),(421,19,1,'2024-05-02 12:26:04',0),(422,18,1,'2024-05-02 12:28:42',0),(423,16,1,'2024-05-02 12:47:21',0),(424,16,1,'2024-05-02 13:47:41',0),(425,16,1,'2024-05-02 13:56:56',0),(426,16,1,'2024-05-03 03:06:03',0),(427,16,1,'2024-05-03 03:11:50',0),(428,19,1,'2024-05-03 03:47:50',0),(429,19,1,'2024-05-03 04:27:21',0),(430,19,1,'2024-05-03 04:39:41',0),(431,19,1,'2024-05-03 04:41:33',0),(432,16,1,'2024-05-03 04:47:27',0),(433,23,1,'2024-05-03 05:24:40',0),(434,16,1,'2024-05-03 05:48:33',0),(435,19,1,'2024-05-03 06:00:33',0),(436,16,1,'2024-05-03 06:13:52',0),(437,23,1,'2024-05-03 06:14:02',0),(438,16,1,'2024-05-03 06:23:20',0),(439,19,1,'2024-05-03 06:33:44',0),(440,23,1,'2024-05-03 06:35:30',0),(441,23,1,'2024-05-03 06:35:56',0),(442,19,0,'2024-05-03 06:36:33',0),(443,19,0,'2024-05-03 06:36:39',0),(444,19,1,'2024-05-03 06:36:55',0),(445,23,1,'2024-05-03 06:37:07',0),(446,19,0,'2024-05-03 06:47:42',0),(447,23,1,'2024-05-03 08:31:18',0),(448,23,1,'2024-05-03 08:48:55',0);
/*!40000 ALTER TABLE `user_login_logs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_old_passwords`
--

DROP TABLE IF EXISTS `user_old_passwords`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_old_passwords` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `old_password` text,
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `is_delete` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `user_old_passwords_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_old_passwords`
--

LOCK TABLES `user_old_passwords` WRITE;
/*!40000 ALTER TABLE `user_old_passwords` DISABLE KEYS */;
INSERT INTO `user_old_passwords` VALUES (1,16,'$2b$05$zrLc31BDsuzTLdJ1Sl.VoukJbSp3YH6XROp4LGGJTGVeBhgPD5tZC','2024-04-26 05:17:15',0),(2,19,'$2b$05$NUZf9kjG2H47CWyh2pf8teUxKjw2QmoinR6XUtlO4kaowABGAHJa.','2024-04-26 12:14:51',0),(3,19,'$2b$05$w.lFObrwrQ752y78riaiLer6m30d/GlCr4IGflxkvkga63y2cs.1q','2024-04-26 12:15:08',0),(4,19,'$2b$05$w.lFObrwrQ752y78riaiLer6m30d/GlCr4IGflxkvkga63y2cs.1q','2024-04-26 12:16:08',0),(5,19,'$2b$05$moJT/6ShP8gfeLlnvFXgs.E2fFTtm.hj38fp/1I.SvJc35VU91Vr2','2024-04-26 12:16:26',0),(6,19,'$2b$05$g.xt0sVAmOP9sp72qng4Tu9pLm6QkJGTPQf8WNLRq618bXtK6S.yO','2024-05-01 12:40:20',0),(7,18,'$2b$05$oekqZb62j.CvMjAzxBroY.nQpVW4Nqpb3HwBSr3DAsUIjOfZK33hq','2024-05-01 13:50:25',0);
/*!40000 ALTER TABLE `user_old_passwords` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `role_id` int DEFAULT NULL,
  `first_name` varchar(30) DEFAULT NULL,
  `last_name` varchar(30) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `mobile_no` char(10) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `activation_code` varchar(20) DEFAULT NULL,
  `password` text,
  `status` tinyint(1) DEFAULT '0',
  `is_active` tinyint(1) DEFAULT '0',
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_delete` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `role_id` (`role_id`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,1,'Gulshan','Pandey','81gulshan@gmail.com','8787878787','2002-03-12',NULL,NULL,0,0,'2024-04-09 03:12:35','2024-04-22 11:17:48',0),(2,3,'Shivam','Limbachiya','81shivam@gmail.com','7687878787','2024-04-03','U7t5luqobFFz','$2b$05$vLJvTTxV3oVTl2ExqI3yPeEN0t/4vG14wq/Lg4kUns0z6pbTzm.YS',1,0,'2024-04-09 03:12:35','2024-04-24 04:37:43',0),(3,2,'Rijavan','Juneja','81rijavan@gmail.com','9898989898','2002-04-16',NULL,NULL,0,0,'2024-04-09 03:12:35','2024-04-30 04:25:02',1),(4,3,'Mohit','Moradiya','81mohit@gmail.com','7676767623','2002-05-19',NULL,NULL,0,0,'2024-04-09 03:12:35','2024-04-22 11:17:48',0),(5,3,'Dharm','Patel','81dharm@gmail.com','9876543456','2002-06-21',NULL,NULL,0,0,'2024-04-09 03:12:35','2024-04-22 11:17:48',0),(6,3,'Nimmii','Mishra','81nimmii@gmail.com','9876567876','2002-07-23',NULL,NULL,0,0,'2024-04-09 03:12:35','2024-04-22 11:17:48',0),(7,3,'abc','abc@gmail.com','abc@gmail.com','1234567890','2002-04-22','wlevPXjzOfOA','$2b$05$3RQp/PUdLQMPJI1Lwudhq.rSZTLotmSmfEcWOqJYJEi1ab/Jn3X4C',1,0,'2024-04-22 14:21:30','2024-04-22 14:21:36',0),(16,3,'Mohit','Moradiya','mohit@gmail.com','9874563210','2024-04-03','k5jKos41RBZv','$2b$05$mItxDzkK.avwISfJghkWyeZrhau7U4h2XoXVVARuwPYhufRhLISLe',1,0,'2024-04-15 06:09:00','2024-04-26 11:14:00',0),(17,3,'yash','vachhani','yash@gmail.com','7894563210','2001-05-01','txsiIWthgEvV','$2b$05$QOGDaOGM72CRNlg.oCBxQuctJmoTmYsLa8WETp1VtQe.66MCeWUXq',1,0,'2024-04-15 06:30:35','2024-04-22 14:56:49',0),(18,2,'pal','patel','pal@gmail.com','7814523690','2024-04-02','CUYCvviIMnVN','$2b$05$N.2xuqlcfQ/5kdJghTDX2OyZZuixFWLMOzPVnKyq2R5H2KbbLFPoa',1,0,'2024-04-15 07:21:51','2024-05-01 13:50:42',0),(19,1,'Admin','Power','admin@gmail.com','9999999999','2000-01-01','ooTm2Ev1dac7','$2b$05$AdOTadkJZAhh/C0VcD6bGOPePHii27Edajdb8QbGokkv/KKh5GPcy',1,0,'2024-04-15 07:35:12','2024-05-01 12:40:29',0),(20,4,'abc','abc','abc1@gmail.com','7896541230','5212-02-12',NULL,NULL,0,0,'2024-04-23 12:16:07','2024-04-30 05:41:57',0),(21,4,'mihir','rajpopat','mihir@gmail.com','8974563214','2002-08-10','pxtapjlXpawc','$2b$05$/wQbDU4SkIHqXrsqsllVDOKB7.uJ/Th1bRV/gtAxIFyBjkIGKeZ2.',1,0,'2024-04-30 04:43:37','2024-04-30 05:41:57',0),(22,4,'sdfg','dave','asdfasd@gmail.com','1231231231',NULL,'9hJffSraBhYX',NULL,0,0,'2024-05-01 06:17:56','2024-05-01 06:17:56',0),(23,4,'dev','dave','dev@gmail.com','7896541230','2023-10-18','IR9SAk2UDkNq','$2b$05$un0eHu8KaruwY1wllyh8UOF50oQL3AXGT59m81O9FrCEt1JjlLUTC',1,0,'2024-05-01 06:21:21','2024-05-01 06:44:55',0),(24,4,'samir','patel','samir@gmail.com','7896547896','2014-09-02','11hjZi2ttFn6','$2b$05$1Dh.Qg1HQlb8TxO.xUKAKeO6GZkM4z3XfXoC6w06xm7EN7KOX72Ta',1,0,'2024-05-01 06:24:50','2024-05-01 06:44:17',0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_cart`
--

DROP TABLE IF EXISTS `users_cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_cart` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `title` varchar(30) DEFAULT NULL,
  `total_price` bigint DEFAULT NULL,
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `is_delete` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `users_cart_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_cart`
--

LOCK TABLES `users_cart` WRITE;
/*!40000 ALTER TABLE `users_cart` DISABLE KEYS */;
INSERT INTO `users_cart` VALUES (2,4,'My Cart',621695,'2024-04-22 12:03:29',1),(3,4,'My Cart',139899,'2024-04-22 12:57:49',1),(4,4,'My Cart',10280,'2024-04-22 12:59:43',1),(5,4,'My Cart',70,'2024-04-22 13:05:15',0),(6,7,'My Cart',20000,'2024-04-22 14:21:52',0),(7,16,'My Cart',58995,'2024-04-23 10:00:26',1),(8,19,'My Cart',NULL,'2024-04-23 12:25:28',1),(9,19,'My Cart',9380,'2024-04-23 12:27:49',0),(10,17,'My Cart',NULL,'2024-04-24 07:01:03',1),(11,16,'My Cart',NULL,'2024-04-24 11:48:51',1),(12,16,'My Cart',569600,'2024-04-24 11:50:10',1),(13,16,'My Cart',649595,'2024-04-27 04:20:53',0);
/*!40000 ALTER TABLE `users_cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_cart_products`
--

DROP TABLE IF EXISTS `users_cart_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_cart_products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cart_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `qty` int DEFAULT NULL,
  `price` bigint DEFAULT NULL,
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `is_delete` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `cart_id` (`cart_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `users_cart_products_ibfk_1` FOREIGN KEY (`cart_id`) REFERENCES `users_cart` (`id`),
  CONSTRAINT `users_cart_products_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_cart_products`
--

LOCK TABLES `users_cart_products` WRITE;
/*!40000 ALTER TABLE `users_cart_products` DISABLE KEYS */;
INSERT INTO `users_cart_products` VALUES (3,2,4,1,159999,'2024-04-22 12:03:29',1),(4,2,3,1,21999,'2024-04-22 12:03:31',1),(5,2,2,3,404700,'2024-04-22 12:03:34',1),(6,2,10,2,20000,'2024-04-22 12:03:42',1),(7,2,6,3,14997,'2024-04-22 12:03:45',1),(8,3,6,1,4999,'2024-04-22 12:57:49',1),(9,3,2,1,134900,'2024-04-22 12:57:53',1),(10,4,9,4,280,'2024-04-22 12:59:43',1),(11,4,10,1,10000,'2024-04-22 13:02:36',1),(12,5,9,1,70,'2024-04-22 13:05:15',0),(13,6,10,2,20000,'2024-04-22 14:21:52',0),(14,7,7,3,14997,'2024-04-23 10:00:26',1),(15,7,3,2,43998,'2024-04-23 10:28:38',1),(16,8,5,0,0,'2024-04-23 12:25:28',1),(17,9,9,134,9380,'2024-04-23 12:27:49',0),(18,9,11,0,0,'2024-04-23 12:29:34',1),(19,10,7,0,0,'2024-04-24 07:01:03',1),(20,10,3,0,0,'2024-04-24 07:03:36',1),(21,10,10,0,0,'2024-04-24 07:03:39',1),(22,10,11,0,0,'2024-04-24 07:04:39',1),(23,11,10,0,0,'2024-04-24 11:48:51',1),(24,12,2,4,539600,'2024-04-24 11:50:10',1),(25,12,10,3,30000,'2024-04-24 12:25:24',1),(26,10,7,0,0,'2024-04-24 12:27:11',1),(27,10,13,0,0,'2024-04-26 04:55:59',1),(28,13,3,5,109995,'2024-04-27 04:20:53',0),(29,13,2,4,539600,'2024-04-30 11:47:26',0);
/*!40000 ALTER TABLE `users_cart_products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-03 14:23:28
