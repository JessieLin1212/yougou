/*
Navicat MySQL Data Transfer

Source Server         : root
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : yougou

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-04-13 10:59:34
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `sale_price` decimal(10,2) NOT NULL,
  `goods_price` decimal(10,2) NOT NULL,
  `color` varchar(255) NOT NULL DEFAULT '米白/深兰/红色',
  `size` varchar(255) NOT NULL DEFAULT 'F',
  `img` varchar(255) NOT NULL DEFAULT '../picture/null.jpg',
  `img1` varchar(255) NOT NULL DEFAULT '../picture/null.jpg',
  `img2` varchar(255) NOT NULL DEFAULT '../picture/null.jpg',
  `img3` varchar(255) NOT NULL DEFAULT '../picture/null.jpg',
  `add_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', 'Teenmix/天美意秋专柜同款米白/深兰/红色时尚金属扣斜挎包女包X1322CX7', '259.00', '599.00', '米白/深兰/红色', 'F', '../picture/goodslist01.jpg', '../picture/goodslist01_1.jpg', '../picture/goodslist01_2.jpg', '../picture/goodslist01_3.jpg', '2018-04-12 19:50:57');
INSERT INTO `goods` VALUES ('2', 'Tata/他她夏季专柜同款米白色光面PU水钻花朵精致镂花纹时尚女包X1832BX7', '699.00', '699.00', '米白色', 'F', '../picture/goodslist02.jpg', '../picture/goodslist02_1.jpg', '../picture/goodslist02_2.jpg', '../picture/goodslist02_3.jpg', '2018-04-12 19:53:10');
INSERT INTO `goods` VALUES ('3', 'Tata/他她秋粉色PU通勤拼色饰扣时尚女包7057DCN7', '899.00', '899.00', '粉色', 'F', '../picture/goodslist03.jpg', '../picture/goodslist03_1.jpg', '../picture/goodslist03_2.jpg', '../picture/goodslist03_3.jpg', '2018-04-12 19:56:19');
INSERT INTO `goods` VALUES ('4', 'BASTO/百思图冬季粉杏色牛剖层皮革简约通勤女斜挎包X1274DX7', '385.00', '1099.00', '粉杏色', 'F', '../picture/goodslist04.jpg', '../picture/goodslist04_1.jpg', '../picture/goodslist04_2.jpg', '../picture/goodslist04_3.jpg', '2018-04-12 19:59:12');
INSERT INTO `goods` VALUES ('5', 'BASTO/百思图2018春季专柜同款浅灰色人造革简约休闲女单肩包X1388AN8', '398.00', '799.00', '浅灰色', 'F', '../picture/goodslist05.jpg', '../picture/goodslist05_1.jpg', '../picture/goodslist05_2.jpg', '../picture/goodslist05_3.jpg', '2018-04-12 20:02:37');
INSERT INTO `goods` VALUES ('6', 'Ist belle/百丽箱包夏季白色细纹牛剖层皮革女包11586BX6', '428.00', '898.00', '白色', 'F', '../picture/goodslist06.jpg', '../picture/goodslist06_1.jpg', '../picture/goodslist06_2.jpg', '../picture/goodslist06_3.jpg', '2018-04-12 20:05:42');
INSERT INTO `goods` VALUES ('7', 'Tata/他她秋白色PU绣花时尚女包DF694CX7', '699.00', '699.00', '白色(铆钉)', 'F', '../picture/goodslist07.jpg', '../picture/goodslist07_1.jpg', '../picture/goodslist07_2.jpg', '../picture/goodslist07_3.jpg', '2018-04-12 20:07:44');
INSERT INTO `goods` VALUES ('8', 'Teenmix/天美意2018春专柜同款深兰/红色简约单肩翅膀包女包X1463AX8', '499.00', '599.00', '深兰/红色', 'F', '../picture/goodslist08.jpg', '../picture/goodslist08_1.jpg', '../picture/goodslist08_2.jpg', '../picture/goodslist08_3.jpg', '2018-04-12 20:10:23');
INSERT INTO `goods` VALUES ('9', 'Ist belle/百丽箱包2018春新品大英联名款专柜同款浅兰人造革时尚背提包X3962AN8', '528.00', '998.00', '浅兰', 'F', '../picture/goodslist09.jpg', '../picture/goodslist09_1.jpg', '../picture/goodslist09_2.jpg', '../picture/goodslist09_3.jpg', '2018-04-12 22:07:30');
INSERT INTO `goods` VALUES ('10', 'BASTO/百思图冬季绿色人造革时尚女单肩包X1268DN7', '358.00', '999.00', '绿色', 'F', '../picture/goodslist10.jpg', '../picture/goodslist10_1.jpg', '../picture/goodslist10_2.jpg', '../picture/goodslist10_3.jpg', '2018-04-12 22:11:37');
INSERT INTO `goods` VALUES ('11', 'BASTO/百思图秋季墨绿色牛剖层皮革时尚休闲女单肩包X1151CX7', '331.00', '1098.00', '墨绿', 'F', '../picture/goodslist11.jpg', '../picture/goodslist11_1.jpg', '../picture/goodslist11_2.jpg', '../picture/goodslist11_3.jpg', '2018-04-12 22:14:14');
INSERT INTO `goods` VALUES ('12', 'BASTO/百思图冬季专柜同款黑色人造革简约通勤女单肩包X1312DX7', '899.00', '899.00', '黑色', 'F', '../picture/goodslist12.jpg', '../picture/goodslist12_1.jpg', '../picture/goodslist12_2.jpg', '../picture/goodslist12_3.jpg', '2018-04-12 22:26:32');
INSERT INTO `goods` VALUES ('13', 'BASTO/百思图夏季浅灰色人造革铆钉条带时尚女包X1049BX7', '398.00', '698.00', '浅灰色', 'F', '../picture/goodslist13.jpg', '../picture/goodslist13_1.jpg', '../picture/goodslist13_2.jpg', '../picture/goodslist13_3.jpg', '2018-04-12 22:29:00');
INSERT INTO `goods` VALUES ('14', 'BASTO/百思图2018春季专柜同款黑色牛剖层皮革/人造革简约时尚单肩手提女包X1325AN8', '518.00', '999.00', '黑色', 'F', '../picture/goodslist14.jpg', '../picture/goodslist14_1.jpg', '../picture/goodslist14_2.jpg', '../picture/goodslist14_3.jpg', '2018-04-12 22:31:41');
INSERT INTO `goods` VALUES ('15', 'Tata/他她夏季绿色PU潮流金属风精致铆钉链条时尚女包2DT47BX7', '599.00', '599.00', '绿色', 'F', '../picture/goodslist15.jpg', '../picture/goodslist15_1.jpg', '../picture/goodslist15_2.jpg', '../picture/goodslist15_3.jpg', '2018-04-12 22:34:07');
INSERT INTO `goods` VALUES ('16', 'Ist belle/百丽箱包秋季喵星人黑人造革背提包X3804CX7', '298.00', '898.00', '黑色', 'F', '../picture/goodslist16.jpg', '../picture/goodslist16_1.jpg', '../picture/goodslist16_2.jpg', '../picture/goodslist16_3.jpg', '2018-04-12 22:36:26');
INSERT INTO `goods` VALUES ('17', 'STACCATO/思加图冬季专柜同款黑白格子布面女双肩包X1724DX7', '498.00', '1099.00', '黑白', 'F', '../picture/goodslist17.jpg', '../picture/goodslist17_1.jpg', '../picture/goodslist17_2.jpg', '../picture/goodslist17_3.jpg', '2018-04-12 22:46:02');
INSERT INTO `goods` VALUES ('18', 'STACCATO/思加图2018春专柜同款黄色牛皮平安虎头装饰女皮包X1781AN8', '1128.00', '1590.00', '黄色', 'F', '../picture/goodslist18.jpg', '../picture/goodslist18_1.jpg', '../picture/goodslist18_2.jpg', '../picture/goodslist18_3.jpg', '2018-04-13 09:35:38');
INSERT INTO `goods` VALUES ('19', 'BASTO/百思图冬季灰色人造革金属环手提女单肩包X1233DX7', '232.00', '599.00', '灰色', 'F', '../picture/goodslist19.jpg', '../picture/goodslist19_1.jpg', '../picture/goodslist19_2.jpg', '../picture/goodslist19_3.jpg', '2018-04-13 09:38:16');
INSERT INTO `goods` VALUES ('20', 'Tata/他她2018春专柜同款黑/白/深兰PU拼色金属圆环时尚单肩女包X1988AX8', '699.00', '699.00', '黑/白/深兰', 'F', '../picture/goodslist20.jpg', '../picture/goodslist20_1.jpg', '../picture/goodslist29_2.jpg', '../picture/goodslist29_3.jpg', '2018-04-13 09:40:44');
INSERT INTO `goods` VALUES ('21', 'Teenmix/天美意2018夏专柜同款棕色复古风单肩邮差包女包AA072BN8', '329.00', '399.00', '棕色', 'F', '../picture/goodslist21.jpg', '../picture/goodslist21_1.jpg', '../picture/goodslist21_2.jpg', '../picture/goodslist21_3.jpg', '2018-04-13 09:43:55');
INSERT INTO `goods` VALUES ('22', 'Teenmix/天美意冬专柜同款白色铆钉珠饰织带单肩斜跨两用女包X1386DN7', '339.00', '599.00', '白色', 'F', '../picture/goodslist22.jpg', '../picture/goodslist22_1.jpg', '../picture/goodslist22_2.jpg', '../picture/goodslist22_3.jpg', '2018-04-13 10:30:23');
INSERT INTO `goods` VALUES ('23', 'Ist belle2018春新品专柜同款荔纹牛剖层皮革时尚背提包C1286AN8', '458.00', '799.00', '绿色', 'F', '../picture/goodslist23.jpg', '../picture/goodslist23_1.jpg', '../picture/goodslist23_2.jpg', '../picture/goodslist23_3.jpg', '2018-04-13 10:28:04');
INSERT INTO `goods` VALUES ('24', 'millie\'s/妙丽2018夏专柜同款人造革时尚女单肩斜挎包X0541BX8', '1199.00', '1199.00', '白色', 'F', '../picture/goodslist24.jpg', '../picture/goodslist24_1.jpg', '../picture/goodslist24_2.jpg', '../picture/goodslist24_3.jpg', '2018-04-13 10:24:21');
INSERT INTO `goods` VALUES ('25', 'Ist belle/百丽冬季专柜同款绿色牛剖层皮革配绒布时尚背提包X3947DN7', '999.00', '999.00', '绿色', 'F', '../picture/goodslist25.jpg', '../picture/goodslist25_1.jpg', '../picture/goodslist25_2.jpg', '../picture/goodslist25_3.jpg', '2018-04-13 10:34:10');
INSERT INTO `goods` VALUES ('26', 'Ist belle/百丽箱包秋季大英联名款专柜同款黑人造革印花铆钉宽肩带小方包X3833CX7', '998.00', '998.00', '黑色', 'F', '../picture/goodslist26.jpg', '../picture/goodslist26_1.jpg', '../picture/goodslist26_2.jpg', '../picture/goodslist26_3.jpg', '2018-04-13 10:34:59');
INSERT INTO `goods` VALUES ('27', 'BASTO/百思图秋季专柜同款白色牛剖层皮革/人造革条纹女单肩包C1211CX7', '999.00', '999.00', '白色', 'F', '../picture/goodslist27.jpg', '../picture/goodslist27_1.jpg', '../picture/goodslist27_2.jpg', '../picture/goodslist27_3.jpg', '2018-04-13 10:37:08');
INSERT INTO `goods` VALUES ('28', 'Tata/他她春季浅兰色压花牛剖层皮时尚女包X1841AX7', '899.00', '899.00', '浅兰色', 'F', '../picture/goodslist28.jpg', '../picture/goodslist28_1.jpg', '../picture/goodslist28_2.jpg', '../picture/goodslist28_3.jpg', '2018-04-13 10:36:37');
INSERT INTO `goods` VALUES ('29', 'Ist belle秋季专柜同款兰色人造革背提包X1802CX7', '899.00', '899.00', '兰色', 'F', '../picture/goodslist29.jpg', '../picture/goodslist29_1.jpg', '../picture/goodslist29_2.jpg', '../picture/goodslist29_3.jpg', '2018-04-13 10:38:26');
INSERT INTO `goods` VALUES ('30', 'BASTO/百思图秋季专柜同款灰/黑人造革/化纤布毛球简约休闲女单肩包X1018CX7', '899.00', '899.00', '灰/黑', 'F', '../picture/goodslist30.jpg', '../picture/goodslist30_1.jpg', '../picture/goodslist30_2.jpg', '../picture/goodslist30_3.jpg', '2018-04-13 10:39:03');
INSERT INTO `goods` VALUES ('31', 'Teenmix/天美意冬黑色时尚小巧精美刺绣单肩斜挎两用女包X1367DN7', '568.00', '568.00', '黑色', 'F', '../picture/goodslist31.jpg', '../picture/goodslist31_1.jpg', '../picture/goodslist31_2.jpg', '../picture/goodslist31_3.jpg', '2018-04-13 10:40:08');
INSERT INTO `goods` VALUES ('32', 'Ist belle/百丽箱包秋黑色人造革宽肩带斜跨包12542CX7', '199.00', '668.00', '黑色', 'F', '../picture/goodslist32.jpg', '../picture/goodslist32_1.jpg', '../picture/goodslist32_2.jpg', '../picture/goodslist32_3.jpg', '2018-04-13 10:41:48');
INSERT INTO `goods` VALUES ('33', 'millie\'s/妙丽2018夏专柜同款人造革时尚女手提单肩包X0542BX8', '868.00', '1299.00', '黑色', 'F', '../picture/goodslist33.jpg', '../picture/goodslist33_1.jpg', '../picture/goodslist33_2.jpg', '../picture/goodslist33_3.jpg', '2018-04-13 10:44:40');
INSERT INTO `goods` VALUES ('34', 'millie\'s/妙丽2018春专柜同款人造革时尚单肩斜挎包X0517AN8', '829.00', '1099.00', '兰/黄', 'F', '../picture/goodslist34.jpg', '../picture/goodslist34_1.jpg', '../picture/goodslist34_2.jpg', '../picture/goodslist34_3.jpg', '2018-04-13 10:48:48');
INSERT INTO `goods` VALUES ('35', 'Ist belle冬季专柜同款墨绿人造革时尚包X3889DN7', '799.00', '799.00', '墨绿', 'F', '../picture/goodslist35.jpg', '../picture/goodslist35_1.jpg', '../picture/goodslist35_2.jpg', '../picture/goodslist35_3.jpg', '2018-04-13 10:53:50');
INSERT INTO `goods` VALUES ('36', 'BASTO/百思图2018夏季专柜同款棕色牛剖层皮革毛球休闲女单肩包X1484BN8', '568.00', '999.00', '棕色', 'F', '../picture/goodslist36.jpg', '../picture/goodslist36_1.jpg', '../picture/goodslist36_2.jpg', '../picture/goodslist36_3.jpg', '2018-04-13 10:56:35');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `reg_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'Jessie', '79efe4fa574c77f0cba56f0e421ae4b5', '2018-04-11 19:49:33');
INSERT INTO `user` VALUES ('2', '18219116666', '71b596cb42ee254f7416043d184fc970', '2018-04-11 19:50:14');
INSERT INTO `user` VALUES ('3', '18219116668', '7fe6fdf7bcef97ba5894da8c33c3f2a7', '2018-04-11 19:51:02');
INSERT INTO `user` VALUES ('4', '18219116688', 'cfc8f9956500ff6bddc783357f120232', '2018-04-11 19:57:08');
INSERT INTO `user` VALUES ('5', '18219118888', '60694241c9657d0cae2b734e315280fe', '2018-04-11 19:57:54');
INSERT INTO `user` VALUES ('6', '18219118868', 'ca80927d1e679e2b4de97c6474a5df56', '2018-04-11 19:58:19');
INSERT INTO `user` VALUES ('7', '18219118869', 'ca80927d1e679e2b4de97c6474a5df56', '2018-04-11 20:49:40');
INSERT INTO `user` VALUES ('8', '18219118898', '48e1680d7a356395838dc1f0f1070fc0', '2018-04-11 20:50:41');
SET FOREIGN_KEY_CHECKS=1;
