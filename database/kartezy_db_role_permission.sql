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
INSERT INTO `customer_addresses` VALUES (2,4,'Office Address 1','A-109','Sukan Mall','Science City, Sola','Ahmedabad','Gujarat','370140','2024-04-22 12:10:42',0),(3,4,'Home Address','89-D','Kargil Petrol pump','Sola','Ahmedabad','Gujarat','370141','2024-04-22 12:12:15',0),(4,5,'Home','J-10','Navagam road','Navi Bhachau','Bhachau','Gujarat','123456','2024-04-22 12:33:54',0),(5,16,'abc','123','def','ajg','bha','guj','123456','2024-04-23 10:29:17',0),(6,17,'abc','1','def','sola','ahm','guj','370101','2024-04-24 12:27:39',0);
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notifications`
--

LOCK TABLES `notifications` WRITE;
/*!40000 ALTER TABLE `notifications` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_items`
--

LOCK TABLES `order_items` WRITE;
/*!40000 ALTER TABLE `order_items` DISABLE KEYS */;
INSERT INTO `order_items` VALUES (4,3,4,1,159999,159999,'2024-04-22 12:22:22','2024-04-22 12:22:22',0),(5,3,3,1,21999,21999,'2024-04-22 12:22:22','2024-04-22 12:22:22',0),(6,3,2,3,134900,404700,'2024-04-22 12:22:22','2024-04-22 12:22:22',0),(7,3,10,2,10000,20000,'2024-04-22 12:22:22','2024-04-22 12:22:22',0),(8,3,6,3,4999,14997,'2024-04-22 12:22:22','2024-04-22 12:22:22',0),(9,4,6,10,4999,49990,'2024-04-22 12:35:05','2024-04-22 12:35:05',0),(10,5,3,3,21999,65997,'2024-04-22 12:49:59','2024-04-22 12:49:59',0),(11,6,4,1,159999,159999,'2024-04-22 12:50:37','2024-04-22 12:50:37',0),(12,7,4,1,159999,159999,'2024-04-22 12:52:16','2024-04-22 12:52:16',0),(13,8,4,1,159999,159999,'2024-04-22 12:52:44','2024-04-22 12:52:44',0),(14,9,9,2,70,140,'2024-04-22 12:55:59','2024-04-22 12:55:59',0),(15,10,9,2,70,140,'2024-04-22 12:56:12','2024-04-22 12:56:12',0),(16,10,9,2,70,140,'2024-04-22 12:56:19','2024-04-24 09:48:45',0),(17,10,9,2,70,140,'2024-04-22 12:56:55','2024-04-24 09:48:45',0),(18,13,9,2,70,140,'2024-04-22 12:57:01','2024-04-22 12:57:01',0),(19,14,6,1,4999,4999,'2024-04-22 12:58:10','2024-04-22 12:58:10',0),(20,14,2,1,134900,134900,'2024-04-22 12:58:10','2024-04-22 12:58:10',0),(21,15,9,4,70,280,'2024-04-22 13:02:52','2024-04-22 13:02:52',0),(22,15,10,1,10000,10000,'2024-04-22 13:02:52','2024-04-22 13:02:52',0),(23,16,9,1,70,70,'2024-04-22 13:05:23','2024-04-22 13:05:23',0),(24,17,7,3,4999,14997,'2024-04-23 10:30:22','2024-04-23 10:30:22',0),(25,17,3,2,21999,43998,'2024-04-23 10:30:22','2024-04-23 10:30:22',0),(26,18,10,6,10000,60000,'2024-04-24 11:48:57','2024-04-24 11:48:57',0),(27,19,7,6,4999,29994,'2024-04-24 12:28:13','2024-04-24 12:28:13',0),(28,20,10,1,10000,10000,'2024-04-25 04:45:02','2024-04-25 04:45:02',0),(29,21,2,4,134900,539600,'2024-04-25 07:14:06','2024-04-25 07:14:06',0),(30,21,10,3,10000,30000,'2024-04-25 07:14:06','2024-04-25 07:14:06',0);
/*!40000 ALTER TABLE `order_items` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (3,4,2,'Bring Carefully....!',90,621695,'2024-04-29 06:52:22','2024-04-22 12:22:22','2024-04-22 12:22:22',0,'Delivered'),(4,5,4,'Call is not Allowd!',90,49990,'2024-04-29 07:05:05','2024-04-22 12:35:05','2024-04-22 12:35:05',0,'Delivered'),(5,5,4,'NONE',90,65997,'2024-04-29 07:19:59','2024-04-22 12:49:59','2024-04-22 12:49:59',0,'Delivered'),(6,5,4,'NONE',90,159999,'2024-04-29 07:20:37','2024-04-22 12:50:37','2024-04-22 12:50:37',0,'Delivered'),(7,5,4,'NONE',90,159999,'2024-04-29 07:22:16','2024-04-22 12:52:16','2024-04-22 12:52:16',0,'Delivered'),(8,5,4,'NONE',90,159999,'2024-04-29 07:22:44','2024-04-22 12:52:44','2024-04-22 12:52:44',0,'Delivered'),(9,5,4,'NONE',90,140,'2024-04-29 07:25:59','2024-04-22 12:55:59','2024-04-22 12:55:59',0,'Delivered'),(10,16,4,'NONE',90,140,'2024-05-29 07:26:12','2024-03-22 12:56:12','2024-04-24 04:33:57',0,'Delivered'),(11,5,4,'NONE',90,140,'2024-04-29 07:26:19','2024-04-22 12:56:19','2024-04-22 12:56:19',0,'Delivered'),(12,5,4,'NONE',90,140,'2024-04-29 07:26:55','2024-04-22 12:56:55','2024-04-22 12:56:55',0,'Delivered'),(13,5,4,'NONE',90,140,'2024-04-29 07:27:01','2024-04-22 12:57:01','2024-04-22 12:57:01',0,'Delivered'),(14,16,4,'No calls!',90,139899,'2024-03-29 07:28:10','2024-05-22 12:58:10','2024-04-24 04:33:57',0,'Delivered'),(15,4,4,'Bring Carefully',90,10280,'2024-04-29 07:32:52','2024-04-22 13:02:52','2024-04-22 13:02:52',0,'Delivered'),(16,16,4,'NONE',90,70,'2024-04-29 07:35:23','2024-04-22 13:05:23','2024-04-24 04:32:39',0,'Delivered'),(17,16,5,'NONE',90,58995,'2024-01-30 05:00:22','2024-02-23 10:30:22','2024-04-24 04:33:57',0,'Delivered'),(18,16,5,'NONE',90,60000,'2024-05-01 06:18:57','2024-04-24 11:48:57','2024-04-24 11:48:57',0,'Pending!'),(19,17,6,'NONE',90,29994,'2024-05-01 06:58:13','2024-04-24 12:28:13','2024-04-24 12:28:13',0,'Pending!'),(20,16,5,'NONE',90,10000,'2024-05-01 23:15:02','2024-04-25 04:45:02','2024-04-25 04:45:02',0,'Pending!'),(21,16,5,'NONE',90,569600,'2024-05-02 01:44:06','2024-04-25 07:14:06','2024-04-25 07:14:06',0,'Pending!');
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
) ENGINE=InnoDB AUTO_INCREMENT=93 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permissions`
--

LOCK TABLES `permissions` WRITE;
/*!40000 ALTER TABLE `permissions` DISABLE KEYS */;
INSERT INTO `permissions` VALUES (1,'Fetch Role Permission','/kartezy/rolepermission/getPermissions/:roleName','get','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(2,'Fetch All Permission','/kartezy/rolepermission/permissions','get','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(3,'Update Permission Form','/kartezy/rolepermission/modifypermission','get','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(4,'Update Permission','/kartezy/rolepermission/modifypermission','post','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(5,'Add New Permission Form','/kartezy/rolepermission/Addpermission','get','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(6,'Add New Permission','/kartezy/rolepermission/Addpermission','post','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(7,'Pdf Genrate','/kartezy/pdf','post','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(8,'Current user','/kartezy/user','post','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(9,'Reset Password Form','/kartezy/resetPassword','get','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(10,'Reset password','/kartezy/resetPassword','post','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(11,'Saved Product Fetch','/kartezy/savedProduct','post','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(12,'Saved Product','/kartezy/savedProduct/:productId','post','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(13,'Remove Saved Product','/kartezy/removeSavedProduct/:productId','post','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(14,'Display Saved Product','/kartezy/savedProduct','get','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(15,'Add New Product Review','/kartezy/reivew','post','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(16,'Order History','/kartezy/orders','get','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(17,'Particular one order','/kartezy/order','get','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(18,'Fetch Particular order By ID','/kartezy/orders/:id','get','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(19,'Insert Particular order By ID','/kartezy/orders/:id','post','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(20,'Update Order Form','/kartezy/orders/update','get','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(21,'Update Order','/kartezy/orders/update','post','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(22,'Update Order item form','/kartezy/orders/update/item','get','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(23,'Update Order item','/kartezy/orders/update/item','post','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(24,'Fetch All order','/kartezy/order/adminside','get','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(25,'Ftech order status','/kartezy/order/orderstatus','get','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(26,'Update order status','/kartezy/order/orderstatus','post','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(27,'Add order','/kartezy/order/Insert','post','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(28,'Add order items','/kartezy/orderItems/Insert','post','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(29,'User cart','/kartezy/userCartRender','get','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(30,'User cart data fetch','/kartezy/userCartfetch','post','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(31,'User cart update','/kartezy/userCartupdate','post','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(32,'User cart create','/kartezy/userCartinsert','post','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(33,'Display single product','/kartezy/product/:id','get','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(34,'Fetch single product','/kartezy/fetchproduct/:id','get','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(35,'Total Vendor Fetch','/kartezy/admin/getTotalVendors','get','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(36,'Total Customer Fetch','/kartezy/admin/getTotalCustomers','get','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(37,'Total Product Fetch','/kartezy/admin/getTotalProducts','get','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(38,'Order History Admin','/kartezy/admin/getCustomerOrderHistory','get','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(39,'Display Vendor list','/kartezy/admin/displayVendorsList','get','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(40,'Delete Vendor','/kartezy/admin/deleteVendor','get','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(41,'Total Customer Report','/kartezy/admin/getTotalCustomerReport','get','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(42,'Get Customer Order History Report','/kartezy/admin/getCustomerOrderHistoryReport','get','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(43,'Get Total Product Report','/kartezy/admin/getTotalProductReport','get','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(44,'Get Total Vendor Report','/kartezy/admin/getTotalVendorReport','get','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(45,'Admin Report Panel','/kartezy/admin/Report','get','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(46,'Admin Dashboard','/kartezy/admin','get','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(47,'Recent Order Admin Side','/kartezy/admin/getRecentOrders','get','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(48,'Fetch all categories','/kartezy/admin/Categories','get','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(49,'Add category','/kartezy/admin/addCategory','get','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(50,'Get Product Quantity','/kartezy/admin/getproductQty','get','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(51,'Add Vendor Form','/kartezy/vendor/insert','get','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(52,'Insert Vendor','/kartezy/vendor/insert','post','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(53,'Fetch vendor data','/kartezy/vendor/getdata','get','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(54,'Display Vendor Form Update','/kartezy/vendor/update','get','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(55,'Vendor Data Update','/kartezy/vendor/update/:id','post','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(56,'Vendor Profile Page','/kartezy/vendor/profile','get','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(57,'Vendor Dashboard','/kartezy/vendorAdmin/dashboard','get','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(58,'Vendor Dashboard Meta Data','/kartezy/vendorAdmin/api/dashboardcount','post','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(59,'Display Product Page','/kartezy/vendorAdmin/products','get','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(60,'Product Data','/kartezy/vendorAdmin/products','post','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(61,'Update Product Form Display','/kartezy/vendorAdmin/products/addProduct/:productId','get','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(62,'Add Product','/kartezy/vendorAdmin/products/addProduct/upload','post','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(63,'Add Product Form Display','/kartezy/vendorAdmin/products/addProduct','get','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(64,'Delete Product','/kartezy/vendorAdmin/products/deleteProduct','post','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(65,'Update Product','/kartezy/vendorAdmin/products/updateProduct','post','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(66,'Fetch Product Details','/kartezy/vendorAdmin/products/fetchFormData','post','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(67,'Vendor Order Display','/kartezy/vendorAdmin/orders','get','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(68,'Vendor Order Fetch Data','/kartezy/vendorAdmin/orders','post','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(69,'Vendor Single Order Details','/kartezy/vendorAdmin/singleOrderDetail','post','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(70,'Vendor Chart Data','/kartezy/vendorAdmin/chartData','get','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(71,'Checkout Display Form','/kartezy/checkOutFrom','get','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(72,'Address Checkout Form','/kartezy/renderCheckoutAddform','get','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(73,'Payment Checout Form','/kartezy/renderCheckoutPaymentform','get','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(74,'Single Product Checkout Form','/kartezy/renderSingleProductCheckout/:pid','get','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(75,'Display Single Product Checkout Fetch','/kartezy/fetchSingleProductCheckout/:pid','post','2024-04-25 08:36:00','2024-04-25 09:24:08',0),(76,'User Address Details','/kartezy/userAddrfetch','post','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(77,'User Payment Details','/kartezy/userPaymentfetch','post','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(78,'Delete User Checkout','/kartezy/deleteUserCheckoutDetail','post','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(79,'Submit Checkout Address','/kartezy/submitCheckoutAddressform','post','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(80,'Submit Checkout Payment Details','/kartezy/submitCheckoutPaymentform','post','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(81,'Singler Product Order','/kartezy/singleProductOrder','post','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(82,'Order From Cart','/kartezy/orderFromCart','post','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(83,'Add category Form','/kartezy/categoryForm/','get','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(84,'Update Category Form','/kartezy/categoryForm/edit/:id','get','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(85,'Insert Category','/kartezy/categoryForm/submit','post','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(86,'Fetch Category name','/kartezy/SelectCategory','get','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(87,'Display All Cateogry','/kartezy/categoryList','get','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(88,'Fetch Category Details','/kartezy/categoryList/data','get','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(89,'Fetch Single Category Details','/kartezy/categoryList/edit/:id','get','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(90,'Update Category','/kartezy/categoryList/edit/submit/:id','post','2024-04-25 08:36:00','2024-04-25 08:36:00',0),(91,'Delete Categories','/kartezy/categoryList/delete/:id','post','2024-04-25 08:36:00','2024-04-25 08:36:00',0);
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
  PRIMARY KEY (`id`),
  KEY `comment_id` (`comment_id`),
  CONSTRAINT `product_comment_attechments_ibfk_1` FOREIGN KEY (`comment_id`) REFERENCES `product_comments` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_comment_attechments`
--

LOCK TABLES `product_comment_attechments` WRITE;
/*!40000 ALTER TABLE `product_comment_attechments` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_comments`
--

LOCK TABLES `product_comments` WRITE;
/*!40000 ALTER TABLE `product_comments` DISABLE KEYS */;
INSERT INTO `product_comments` VALUES (3,10,4,'Nice cycle for kids,',4,'2024-04-22 11:14:12',0),(4,10,5,'Kid Loved it...',5,'2024-04-22 11:18:50',0),(5,10,6,'Quality is not impressive!',1,'2024-04-22 11:19:17',0),(6,10,4,'Color options not nice!',3,'2024-04-22 11:19:56',0),(7,9,5,'Good Pages, Loved it!!',4,'2024-04-22 11:43:38',0),(8,9,4,'More costly!',2,'2024-04-22 11:44:56',0),(9,9,6,'Nice cover pages.',4,'2024-04-22 11:48:38',0),(10,9,4,'Great Colors of pages',4,'2024-04-22 11:49:44',0),(11,9,4,'Liked by kids..',4,'2024-04-22 11:51:58',0),(18,6,4,'Nice fabric',4,'2024-04-22 11:54:42',0),(20,6,5,'Nice Colors',5,'2024-04-22 11:56:35',0),(21,6,6,'Good Team!',4,'2024-04-22 11:57:09',0),(22,5,5,'Nice Shoes!',4,'2024-04-22 11:58:12',0),(23,2,4,'Nice color!',4,'2024-04-22 12:01:34',0),(24,5,7,'very costly shoes!',1,'2024-04-22 14:23:30',0),(25,5,19,'',5,'2024-04-23 12:24:40',0),(26,5,19,'ghjjjjjgf',0,'2024-04-23 12:25:01',0),(27,1,19,'',5,'2024-04-23 12:26:54',0),(28,1,19,'',3,'2024-04-23 12:27:01',0),(29,5,16,'abc',4,'2024-04-24 06:43:59',0),(30,10,16,'good',3,'2024-04-24 12:25:32',0);
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
INSERT INTO `products` VALUES (1,'S24 Ultra','\r\n\r\n    Meet Galaxy S24 Ultra, the ultimate form of Galaxy Ultra with a new titanium exterior and a 17.25cm (6.8\") flat display. It\'s an absolute marvel of design.\r\n    The legacy of Galaxy Note is alive and well. Write, tap and navigate with precision your fingers wish they had on the new, flat display. ',21,139000,2,50,'1713778105274-s24.jpeg','2024-04-22 09:28:25','2024-04-22 11:42:04',0,1),(2,'iPhone 15 pro max','iPhone 15 Pro 128GB Natural Titanium',21,134900,1,42,'1713781047724-iPhone-Main.png','2024-04-22 10:17:27','2024-04-25 07:14:06',0,1),(3,'Vivo Y200','vivo Y200 5G 128GB 8GB RAM Gsm Unlocked Phone Qualcomm SM4375 Snapdragon 4 Gen 1 64MP',21,21999,1,46,'1713781483542-vivo-y200-main.jpeg','2024-04-22 10:24:43','2024-04-23 10:30:22',0,1),(4,'Mac-Book Air','Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver ',22,159999,18,96,'1713781844215-mac-main.jpeg','2024-04-22 10:30:44','2024-04-24 04:34:54',0,1),(5,'Air Jordan 1','Nike.com is your destination for the best selection of innovative, must-have Jordan products.',26,69999,1,0,'1713782237442-air-jordan-1-main.jpeg','2024-04-22 10:37:17','2024-04-22 11:37:15',0,1),(6,'India Cricket Team T-Shirt','Experience the thrill of cricket with the Indian Cricket Team New Jersey -Player Edition from JARSEYS EMPORIA.',24,4999,18,986,'1713782958702-india-tshirt-main.jpeg','2024-04-22 10:49:18','2024-04-24 04:34:54',0,1),(7,'Iron Man','New Iron Super Man Stark MCU Hero Suit Battle Fight ZD Non Branded Action Figure 7 inch Collectible Movie Model with Accessories High Details Moving Joints.',33,4999,1,991,'1713783210080-ironmain-main.jpeg','2024-04-22 10:53:30','2024-04-24 12:28:13',0,1),(8,'Stom breaker','Stormbreaker was used by Thor to summon the Bifrost Bridge to Wakanda. ',33,120,1,1000,'1713783421259-thor-strom-main.jpeg','2024-04-22 10:57:01','2024-04-22 10:57:01',0,0),(9,'Classmate Book','Nice Smooth Pages enjoy writting...',31,70,18,485,'1713783777281-book-main.jpeg','2024-04-22 11:02:57','2024-04-24 12:34:00',1,0),(10,'A1 Cycle','Lifelong 20T Cycle for Kids 5 to 8 Years - Bike for Boys and Girls ',35,10000,2,487,'1713784098425-cycle-main.jpeg','2024-04-22 11:08:18','2024-04-25 07:14:06',0,1),(11,'as','hgtfu',28,50,18,60,'1713872222680-background1.jpg','2024-04-23 11:37:02','2024-04-24 13:05:24',1,0),(12,'za','as',25,1200,18,1,'1713962025657-1713783210081-ironmain-sub-2.jpeg','2024-04-24 12:33:45','2024-04-24 12:33:54',1,0),(13,'cpu','cpu',22,12000,18,12,'1713963970027-1713783421259-thor-strom-main.jpeg','2024-04-24 13:06:10','2024-04-24 13:06:10',0,1),(14,'a','12',25,12,18,2,'1714038636472-1713783247231-Screenshot from 2024-04-11 16-02-27.png','2024-04-25 09:50:36','2024-04-25 09:50:36',0,1);
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
) ENGINE=InnoDB AUTO_INCREMENT=110 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role_permissions`
--

LOCK TABLES `role_permissions` WRITE;
/*!40000 ALTER TABLE `role_permissions` DISABLE KEYS */;
INSERT INTO `role_permissions` VALUES (1,1,1,'2024-04-25 09:16:13',0),(2,1,2,'2024-04-25 09:16:13',0),(3,1,3,'2024-04-25 09:16:13',0),(4,1,4,'2024-04-25 09:16:13',0),(5,1,5,'2024-04-25 09:16:13',0),(6,1,6,'2024-04-25 09:16:13',0),(7,1,7,'2024-04-25 09:16:13',0),(8,1,8,'2024-04-25 09:16:13',0),(9,1,9,'2024-04-25 09:16:13',0),(10,1,10,'2024-04-25 09:16:13',0),(11,1,17,'2024-04-25 09:16:13',0),(12,1,18,'2024-04-25 09:16:13',0),(13,1,24,'2024-04-25 09:16:13',0),(14,1,25,'2024-04-25 09:16:13',0),(15,1,26,'2024-04-25 09:16:13',0),(16,1,33,'2024-04-25 09:16:13',0),(17,1,34,'2024-04-25 09:16:13',0),(18,1,35,'2024-04-25 09:16:13',0),(19,1,36,'2024-04-25 09:16:13',0),(20,1,37,'2024-04-25 09:16:13',0),(21,1,38,'2024-04-25 09:16:13',0),(22,1,39,'2024-04-25 09:16:13',0),(23,1,40,'2024-04-25 09:16:13',0),(24,1,41,'2024-04-25 09:16:13',0),(25,1,42,'2024-04-25 09:16:13',0),(26,1,43,'2024-04-25 09:16:13',0),(27,1,44,'2024-04-25 09:16:13',0),(28,1,45,'2024-04-25 09:16:13',0),(29,1,46,'2024-04-25 09:16:13',0),(30,1,47,'2024-04-25 09:16:13',0),(31,1,48,'2024-04-25 09:16:13',0),(32,1,49,'2024-04-25 09:16:13',0),(33,1,50,'2024-04-25 09:16:13',0),(34,1,51,'2024-04-25 09:16:13',0),(35,1,52,'2024-04-25 09:16:13',0),(36,1,53,'2024-04-25 09:16:13',0),(37,1,59,'2024-04-25 09:16:13',0),(38,1,83,'2024-04-25 09:16:13',0),(39,1,84,'2024-04-25 09:16:13',0),(40,1,85,'2024-04-25 09:16:13',0),(41,1,86,'2024-04-25 09:16:13',0),(42,1,87,'2024-04-25 09:16:13',0),(43,1,88,'2024-04-25 09:16:13',0),(44,1,89,'2024-04-25 09:16:13',0),(45,1,90,'2024-04-25 09:16:13',0),(46,1,91,'2024-04-25 09:16:13',0),(47,3,7,'2024-04-25 09:21:33',0),(48,3,8,'2024-04-25 09:21:33',0),(49,3,9,'2024-04-25 09:21:33',0),(50,3,10,'2024-04-25 09:21:33',0),(51,3,11,'2024-04-25 09:21:33',0),(52,3,12,'2024-04-25 09:21:33',0),(53,3,13,'2024-04-25 09:21:33',0),(54,3,14,'2024-04-25 09:21:33',0),(55,3,15,'2024-04-25 09:21:33',0),(56,3,16,'2024-04-25 09:21:33',0),(57,3,17,'2024-04-25 09:21:33',0),(58,3,18,'2024-04-25 09:21:33',0),(59,3,19,'2024-04-25 09:21:33',0),(60,3,20,'2024-04-25 09:21:33',0),(61,3,21,'2024-04-25 09:21:33',0),(62,3,22,'2024-04-25 09:21:33',0),(63,3,23,'2024-04-25 09:21:33',0),(64,3,24,'2024-04-25 09:21:33',0),(65,3,27,'2024-04-25 09:21:33',0),(66,3,28,'2024-04-25 09:21:33',0),(67,3,29,'2024-04-25 09:21:33',0),(68,3,30,'2024-04-25 09:21:33',0),(69,3,31,'2024-04-25 09:21:33',0),(70,3,32,'2024-04-25 09:21:33',0),(71,3,33,'2024-04-25 09:21:33',0),(72,3,34,'2024-04-25 09:21:33',0),(73,3,60,'2024-04-25 09:21:33',0),(74,3,71,'2024-04-25 09:21:33',0),(75,3,72,'2024-04-25 09:21:33',0),(76,3,73,'2024-04-25 09:21:33',0),(77,3,74,'2024-04-25 09:21:33',0),(78,3,75,'2024-04-25 09:21:33',0),(79,3,76,'2024-04-25 09:21:33',0),(80,3,77,'2024-04-25 09:21:33',0),(81,3,78,'2024-04-25 09:21:33',0),(82,3,79,'2024-04-25 09:21:33',0),(83,3,80,'2024-04-25 09:21:33',0),(84,3,81,'2024-04-25 09:21:33',0),(85,3,82,'2024-04-25 09:21:33',0),(86,2,7,'2024-04-25 09:32:32',0),(87,2,8,'2024-04-25 09:32:32',0),(88,2,9,'2024-04-25 09:32:32',0),(89,2,10,'2024-04-25 09:32:32',0),(90,2,33,'2024-04-25 09:32:32',0),(91,2,34,'2024-04-25 09:32:32',0),(92,2,53,'2024-04-25 09:32:32',0),(93,2,54,'2024-04-25 09:32:32',0),(94,2,55,'2024-04-25 09:32:32',0),(95,2,56,'2024-04-25 09:32:32',0),(96,2,57,'2024-04-25 09:32:32',0),(97,2,58,'2024-04-25 09:32:32',0),(98,2,59,'2024-04-25 09:32:32',0),(99,2,60,'2024-04-25 09:32:32',0),(100,2,61,'2024-04-25 09:32:32',0),(101,2,62,'2024-04-25 09:32:32',0),(102,2,63,'2024-04-25 09:32:32',0),(103,2,64,'2024-04-25 09:32:32',0),(104,2,65,'2024-04-25 09:32:32',0),(105,2,66,'2024-04-25 09:32:32',0),(106,2,67,'2024-04-25 09:32:32',0),(107,2,68,'2024-04-25 09:32:32',0),(108,2,69,'2024-04-25 09:32:32',0),(109,2,70,'2024-04-25 09:32:32',0);
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'admin','2024-04-09 02:12:47',0),(2,'vendor','2024-04-09 03:06:52',0),(3,'user','2024-04-09 03:06:52',0);
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
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transection`
--

LOCK TABLES `transection` WRITE;
/*!40000 ALTER TABLE `transection` DISABLE KEYS */;
INSERT INTO `transection` VALUES (3,2,3,'Debit card','Online',1,'2024-04-22 12:22:22'),(4,4,4,'Credit card','Online',1,'2024-04-22 12:35:05'),(5,4,5,'Credit card','Online',1,'2024-04-22 12:49:59'),(6,4,6,'Credit card','Online',1,'2024-04-22 12:50:37'),(7,4,7,'Credit card','Online',1,'2024-04-22 12:52:16'),(8,4,8,'Credit card','Online',1,'2024-04-22 12:52:44'),(9,4,9,'Credit card','Online',1,'2024-04-22 12:55:59'),(10,4,10,'Credit card','Online',1,'2024-04-22 12:56:12'),(11,4,11,'Credit card','Online',1,'2024-04-22 12:56:19'),(12,4,12,'Credit card','Online',1,'2024-04-22 12:56:55'),(13,4,13,'Credit card','Online',1,'2024-04-22 12:57:01'),(14,4,14,'Credit card','Online',1,'2024-04-22 12:58:10'),(15,4,15,'Credit card','Online',1,'2024-04-22 13:02:52'),(16,4,16,'Credit card','Online',1,'2024-04-22 13:05:23'),(17,5,17,'Credit card','Online',1,'2024-04-23 10:30:22'),(18,5,18,'Credit card','Online',1,'2024-04-24 11:48:57'),(19,6,19,'Credit card','Online',1,'2024-04-24 12:28:13'),(20,5,20,'Credit card','Online',1,'2024-04-25 04:45:02'),(21,5,21,'Credit card','Online',1,'2024-04-25 07:14:06');
/*!40000 ALTER TABLE `transection` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=190 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_login_logs`
--

LOCK TABLES `user_login_logs` WRITE;
/*!40000 ALTER TABLE `user_login_logs` DISABLE KEYS */;
INSERT INTO `user_login_logs` VALUES (1,7,1,'2024-04-22 14:21:47',0),(2,19,1,'2024-04-22 14:56:17',0),(3,18,1,'2024-04-22 14:57:15',0),(4,19,1,'2024-04-22 14:57:47',0),(5,19,1,'2024-04-23 05:54:41',0),(6,19,1,'2024-04-23 06:04:58',0),(7,19,1,'2024-04-23 06:23:09',0),(8,19,1,'2024-04-23 07:09:56',0),(9,19,1,'2024-04-23 07:20:42',0),(10,19,1,'2024-04-23 07:34:15',0),(11,19,1,'2024-04-23 07:34:37',0),(12,19,1,'2024-04-23 07:35:00',0),(13,19,1,'2024-04-23 07:35:36',0),(14,19,1,'2024-04-23 07:36:17',0),(15,19,1,'2024-04-23 07:40:34',0),(16,18,1,'2024-04-23 07:51:49',0),(17,19,1,'2024-04-23 07:52:07',0),(18,19,1,'2024-04-23 07:52:19',0),(19,18,1,'2024-04-23 07:52:50',0),(20,19,1,'2024-04-23 07:55:29',0),(21,18,1,'2024-04-23 08:01:58',0),(22,19,1,'2024-04-23 08:04:36',0),(23,19,1,'2024-04-23 08:10:01',0),(24,19,1,'2024-04-23 09:04:53',0),(25,16,1,'2024-04-23 09:24:16',0),(26,16,1,'2024-04-23 09:56:29',0),(27,16,1,'2024-04-23 10:00:21',0),(28,16,1,'2024-04-23 10:27:53',0),(29,19,1,'2024-04-23 11:11:36',0),(30,19,1,'2024-04-23 11:25:28',0),(31,18,1,'2024-04-23 11:33:26',0),(32,19,1,'2024-04-23 12:15:11',0),(33,18,1,'2024-04-23 13:21:04',0),(34,18,1,'2024-04-23 13:24:39',0),(35,16,1,'2024-04-24 04:22:41',0),(36,18,1,'2024-04-24 04:31:40',0),(37,2,1,'2024-04-24 04:38:02',0),(38,16,1,'2024-04-24 05:56:57',0),(39,17,1,'2024-04-24 06:45:09',0),(40,18,1,'2024-04-24 07:32:58',0),(41,19,1,'2024-04-24 07:33:54',0),(42,16,1,'2024-04-24 07:35:36',0),(43,16,1,'2024-04-24 09:07:17',0),(44,17,1,'2024-04-24 09:09:23',0),(45,16,1,'2024-04-24 09:38:01',0),(46,16,1,'2024-04-24 10:38:49',0),(47,18,1,'2024-04-24 10:47:09',0),(48,19,1,'2024-04-24 10:48:48',0),(49,19,1,'2024-04-24 11:21:12',0),(50,16,1,'2024-04-24 11:41:46',0),(51,16,1,'2024-04-24 11:48:23',0),(52,19,1,'2024-04-24 11:50:36',0),(53,19,1,'2024-04-24 11:50:47',0),(54,19,1,'2024-04-24 11:50:57',0),(55,18,1,'2024-04-24 11:52:04',0),(56,19,1,'2024-04-24 11:53:35',0),(57,16,1,'2024-04-24 12:25:10',0),(58,17,1,'2024-04-24 12:27:05',0),(59,19,1,'2024-04-24 12:28:44',0),(60,18,1,'2024-04-24 12:29:53',0),(61,19,1,'2024-04-24 12:45:16',0),(62,18,1,'2024-04-24 12:52:16',0),(63,18,1,'2024-04-24 13:04:51',0),(64,18,1,'2024-04-24 13:11:24',0),(65,19,1,'2024-04-24 13:57:12',0),(66,18,1,'2024-04-24 13:57:38',0),(67,18,1,'2024-04-24 14:09:50',0),(68,18,1,'2024-04-25 04:20:53',0),(69,19,1,'2024-04-25 04:21:07',0),(70,16,1,'2024-04-25 04:39:41',0),(71,16,1,'2024-04-25 04:42:30',0),(72,16,1,'2024-04-25 04:44:34',0),(73,19,1,'2024-04-25 05:36:28',0),(74,19,1,'2024-04-25 05:47:09',0),(75,19,1,'2024-04-25 06:29:54',0),(76,19,1,'2024-04-25 06:45:04',0),(77,19,1,'2024-04-25 06:45:05',0),(78,19,1,'2024-04-25 06:45:07',0),(79,19,1,'2024-04-25 06:45:10',0),(80,19,1,'2024-04-25 06:45:11',0),(81,19,1,'2024-04-25 06:45:11',0),(82,19,1,'2024-04-25 06:45:12',0),(83,19,1,'2024-04-25 06:45:13',0),(84,19,1,'2024-04-25 06:45:14',0),(85,19,1,'2024-04-25 06:45:21',0),(86,19,1,'2024-04-25 06:59:52',0),(87,19,1,'2024-04-25 06:59:53',0),(88,19,1,'2024-04-25 06:59:53',0),(89,19,1,'2024-04-25 07:00:20',0),(90,19,1,'2024-04-25 07:01:21',0),(91,19,1,'2024-04-25 07:01:21',0),(92,19,1,'2024-04-25 07:01:22',0),(93,19,1,'2024-04-25 07:01:22',0),(94,19,1,'2024-04-25 07:01:23',0),(95,19,1,'2024-04-25 07:01:23',0),(96,19,1,'2024-04-25 07:02:08',0),(97,19,1,'2024-04-25 07:03:10',0),(98,19,1,'2024-04-25 07:03:11',0),(99,19,1,'2024-04-25 07:04:06',0),(100,19,1,'2024-04-25 07:04:07',0),(101,19,1,'2024-04-25 07:04:08',0),(102,19,1,'2024-04-25 07:04:08',0),(103,19,1,'2024-04-25 07:04:09',0),(104,19,1,'2024-04-25 07:04:09',0),(105,19,1,'2024-04-25 07:04:09',0),(106,19,1,'2024-04-25 07:04:10',0),(107,19,1,'2024-04-25 07:04:10',0),(108,19,1,'2024-04-25 07:04:51',0),(109,19,1,'2024-04-25 07:04:52',0),(110,19,1,'2024-04-25 07:04:52',0),(111,19,1,'2024-04-25 07:04:53',0),(112,19,1,'2024-04-25 07:04:54',0),(113,19,1,'2024-04-25 07:04:54',0),(114,19,1,'2024-04-25 07:04:55',0),(115,19,1,'2024-04-25 07:04:55',0),(116,19,1,'2024-04-25 07:04:56',0),(117,19,1,'2024-04-25 07:06:09',0),(118,19,1,'2024-04-25 07:06:36',0),(119,19,1,'2024-04-25 07:07:03',0),(120,16,1,'2024-04-25 07:12:44',0),(121,16,1,'2024-04-25 07:13:00',0),(122,16,1,'2024-04-25 07:30:21',0),(123,16,1,'2024-04-25 07:30:27',0),(124,16,1,'2024-04-25 07:31:06',0),(125,16,1,'2024-04-25 07:35:32',0),(126,16,1,'2024-04-25 07:35:40',0),(127,16,1,'2024-04-25 07:35:45',0),(128,16,1,'2024-04-25 07:38:07',0),(129,16,1,'2024-04-25 07:41:24',0),(130,16,1,'2024-04-25 07:41:50',0),(131,19,1,'2024-04-25 07:47:23',0),(132,16,1,'2024-04-25 07:47:26',0),(133,19,1,'2024-04-25 07:47:36',0),(134,16,1,'2024-04-25 07:47:37',0),(135,19,1,'2024-04-25 07:47:46',0),(136,19,1,'2024-04-25 07:47:49',0),(137,19,1,'2024-04-25 07:47:53',0),(138,19,1,'2024-04-25 07:48:02',0),(139,19,1,'2024-04-25 07:48:08',0),(140,19,1,'2024-04-25 07:49:13',0),(141,16,1,'2024-04-25 07:49:20',0),(142,16,1,'2024-04-25 08:01:09',0),(143,19,1,'2024-04-25 08:01:41',0),(144,16,1,'2024-04-25 08:02:52',0),(145,16,1,'2024-04-25 08:03:30',0),(146,16,1,'2024-04-25 08:04:08',0),(147,19,1,'2024-04-25 08:04:28',0),(148,19,1,'2024-04-25 08:05:43',0),(149,16,1,'2024-04-25 08:05:54',0),(150,16,1,'2024-04-25 08:07:49',0),(151,16,1,'2024-04-25 08:18:55',0),(152,19,1,'2024-04-25 08:20:55',0),(153,16,1,'2024-04-25 08:22:33',0),(154,19,1,'2024-04-25 08:23:00',0),(155,19,1,'2024-04-25 08:23:20',0),(156,19,1,'2024-04-25 08:24:05',0),(157,19,1,'2024-04-25 08:29:30',0),(158,19,1,'2024-04-25 08:29:54',0),(159,19,1,'2024-04-25 08:30:29',0),(160,19,1,'2024-04-25 08:31:44',0),(161,19,1,'2024-04-25 08:32:16',0),(162,16,1,'2024-04-25 08:32:26',0),(163,16,1,'2024-04-25 09:10:16',0),(164,16,1,'2024-04-25 09:10:22',0),(165,19,1,'2024-04-25 09:10:48',0),(166,19,1,'2024-04-25 09:33:37',0),(167,19,1,'2024-04-25 09:34:00',0),(168,19,1,'2024-04-25 09:45:10',0),(169,19,1,'2024-04-25 09:46:04',0),(170,16,1,'2024-04-25 09:46:28',0),(171,18,1,'2024-04-25 09:49:57',0),(172,16,1,'2024-04-25 10:00:34',0),(173,16,1,'2024-04-25 10:10:53',0),(174,19,1,'2024-04-25 10:11:44',0),(175,16,1,'2024-04-25 10:16:12',0),(176,16,1,'2024-04-25 11:17:53',0),(177,16,1,'2024-04-25 12:24:21',0),(178,19,1,'2024-04-25 12:29:03',0),(179,19,1,'2024-04-25 12:29:15',0),(180,18,1,'2024-04-25 12:35:21',0),(181,18,1,'2024-04-25 12:45:31',0),(182,19,1,'2024-04-25 12:45:47',0),(183,19,1,'2024-04-25 12:48:26',0),(184,19,1,'2024-04-25 12:48:37',0),(185,19,1,'2024-04-25 13:04:59',0),(186,19,1,'2024-04-25 13:05:17',0),(187,19,1,'2024-04-25 13:10:00',0),(188,18,1,'2024-04-25 13:14:25',0),(189,18,1,'2024-04-25 13:15:56',0);
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_old_passwords`
--

LOCK TABLES `user_old_passwords` WRITE;
/*!40000 ALTER TABLE `user_old_passwords` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,1,'Gulshan','Pandey','81gulshan@gmail.com','8787878787','2002-03-12',NULL,NULL,0,0,'2024-04-09 03:12:35','2024-04-22 11:17:48',0),(2,3,'Shivam','Limbachiya','81shivam@gmail.com','7687878787','2024-04-03','U7t5luqobFFz','$2b$05$vLJvTTxV3oVTl2ExqI3yPeEN0t/4vG14wq/Lg4kUns0z6pbTzm.YS',1,0,'2024-04-09 03:12:35','2024-04-24 04:37:43',0),(3,2,'Rijavan','Juneja','81rijavan@gmail.com','9898989898','2002-04-16',NULL,NULL,0,0,'2024-04-09 03:12:35','2024-04-22 11:17:48',0),(4,3,'Mohit','Moradiya','81mohit@gmail.com','7676767623','2002-05-19',NULL,NULL,0,0,'2024-04-09 03:12:35','2024-04-22 11:17:48',0),(5,3,'Dharm','Patel','81dharm@gmail.com','9876543456','2002-06-21',NULL,NULL,0,0,'2024-04-09 03:12:35','2024-04-22 11:17:48',0),(6,3,'Nimmii','Mishra','81nimmii@gmail.com','9876567876','2002-07-23',NULL,NULL,0,0,'2024-04-09 03:12:35','2024-04-22 11:17:48',0),(7,3,'abc','abc@gmail.com','abc@gmail.com','1234567890','2002-04-22','wlevPXjzOfOA','$2b$05$3RQp/PUdLQMPJI1Lwudhq.rSZTLotmSmfEcWOqJYJEi1ab/Jn3X4C',1,0,'2024-04-22 14:21:30','2024-04-22 14:21:36',0),(16,3,'Mohit','Mordiya','mohit@gmail.com','9874563210','2024-04-03','k5jKos41RBZv','$2b$05$zrLc31BDsuzTLdJ1Sl.VoukJbSp3YH6XROp4LGGJTGVeBhgPD5tZC',1,0,'2024-04-15 06:09:00','2024-04-25 11:31:45',0),(17,3,'yash','vachhani','yash@gmail.com','7894563210','2001-05-01','txsiIWthgEvV','$2b$05$QOGDaOGM72CRNlg.oCBxQuctJmoTmYsLa8WETp1VtQe.66MCeWUXq',1,0,'2024-04-15 06:30:35','2024-04-22 14:56:49',0),(18,2,'pal','sonali','pal@gmail.com','7814523690','2024-04-02','CUYCvviIMnVN','$2b$05$oekqZb62j.CvMjAzxBroY.nQpVW4Nqpb3HwBSr3DAsUIjOfZK33hq',1,0,'2024-04-15 07:21:51','2024-04-22 14:56:49',0),(19,1,'Admin','Power','admin@gmail.com','9999999999','2000-01-01','0CUYZNmwy8Qj','$2b$05$NUZf9kjG2H47CWyh2pf8teUxKjw2QmoinR6XUtlO4kaowABGAHJa.',1,0,'2024-04-15 07:35:12','2024-04-25 12:34:31',0),(20,NULL,'abc','abc','abc1@gmail.com','7896541230','5212-02-12',NULL,NULL,0,0,'2024-04-23 12:16:07','2024-04-23 12:16:07',0);
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
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_cart`
--

LOCK TABLES `users_cart` WRITE;
/*!40000 ALTER TABLE `users_cart` DISABLE KEYS */;
INSERT INTO `users_cart` VALUES (2,4,'My Cart',621695,'2024-04-22 12:03:29',1),(3,4,'My Cart',139899,'2024-04-22 12:57:49',1),(4,4,'My Cart',10280,'2024-04-22 12:59:43',1),(5,4,'My Cart',70,'2024-04-22 13:05:15',0),(6,7,'My Cart',20000,'2024-04-22 14:21:52',0),(7,16,'My Cart',58995,'2024-04-23 10:00:26',1),(8,19,'My Cart',NULL,'2024-04-23 12:25:28',1),(9,19,'My Cart',9380,'2024-04-23 12:27:49',0),(10,17,'My Cart',115043,'2024-04-24 07:01:03',0),(11,16,'My Cart',NULL,'2024-04-24 11:48:51',1),(12,16,'My Cart',569600,'2024-04-24 11:50:10',1);
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
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_cart_products`
--

LOCK TABLES `users_cart_products` WRITE;
/*!40000 ALTER TABLE `users_cart_products` DISABLE KEYS */;
INSERT INTO `users_cart_products` VALUES (3,2,4,1,159999,'2024-04-22 12:03:29',1),(4,2,3,1,21999,'2024-04-22 12:03:31',1),(5,2,2,3,404700,'2024-04-22 12:03:34',1),(6,2,10,2,20000,'2024-04-22 12:03:42',1),(7,2,6,3,14997,'2024-04-22 12:03:45',1),(8,3,6,1,4999,'2024-04-22 12:57:49',1),(9,3,2,1,134900,'2024-04-22 12:57:53',1),(10,4,9,4,280,'2024-04-22 12:59:43',1),(11,4,10,1,10000,'2024-04-22 13:02:36',1),(12,5,9,1,70,'2024-04-22 13:05:15',0),(13,6,10,2,20000,'2024-04-22 14:21:52',0),(14,7,7,3,14997,'2024-04-23 10:00:26',1),(15,7,3,2,43998,'2024-04-23 10:28:38',1),(16,8,5,0,0,'2024-04-23 12:25:28',1),(17,9,9,134,9380,'2024-04-23 12:27:49',0),(18,9,11,0,0,'2024-04-23 12:29:34',1),(19,10,7,0,0,'2024-04-24 07:01:03',1),(20,10,3,0,0,'2024-04-24 07:03:36',1),(21,10,10,8,80000,'2024-04-24 07:03:39',0),(22,10,11,1,50,'2024-04-24 07:04:39',0),(23,11,10,0,0,'2024-04-24 11:48:51',1),(24,12,2,4,539600,'2024-04-24 11:50:10',1),(25,12,10,3,30000,'2024-04-24 12:25:24',1),(26,10,7,7,34993,'2024-04-24 12:27:11',0);
/*!40000 ALTER TABLE `users_cart_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `venders`
--

DROP TABLE IF EXISTS `venders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `venders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `description` text,
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `is_delete` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `venders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `venders`
--

LOCK TABLES `venders` WRITE;
/*!40000 ALTER TABLE `venders` DISABLE KEYS */;
INSERT INTO `venders` VALUES (1,2,'A Regular vendor','2024-04-22 12:44:42',0),(2,3,'A new vendor','2024-04-22 12:44:42',0);
/*!40000 ALTER TABLE `venders` ENABLE KEYS */;
UNLOCK TABLES;

Create table order_logistics(
id int primary key auto_increment,
order_id int,
logistics_id int ,
foreign key (order_id) references orders(id),
foreign key (logistics_id) references users(id)
);

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-25 19:04:25