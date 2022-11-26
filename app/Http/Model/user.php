<?php

//用户注册
define('USER_REGISTER', "INSERT INTO api_user (a_u_name,a_u_passwd,a_u_email,a_u_balance) VALUES (?,?,?,?);");

//用户查询
define('USER_LOGIN', "SELECT a_u_id AS u_id,a_u_name AS u_name,a_u_passwd AS u_passwd,a_u_email AS u_email,a_u_balance AS u_balance,a_u_found_time AS u_found_time FROM api_user WHERE a_u_name= ?");

//邮箱查询
define('USER_LOGIN_EMAIL', "SELECT a_u_id AS u_id,a_u_name AS u_name,a_u_passwd AS u_passwd,a_u_email AS u_email,a_u_balance AS u_balance,a_u_found_time AS u_found_time FROM api_user WHERE a_u_email= ?");

//密码找回验证
define('USER_FORGET', "SELECT a_u_id AS u_id,a_u_name AS u_name,a_u_passwd AS u_passwd,a_u_email AS u_email,a_u_balance AS u_balance,a_u_found_time AS u_found_time FROM api_user WHERE a_u_name= ? AND a_u_email= ?");

//用户查询 id
define('USER_LOGIN_ID', "SELECT a_u_id AS u_id,a_u_name AS u_name,a_u_passwd AS u_passwd,a_u_email AS u_email,a_u_balance AS u_balance,a_u_found_time AS u_found_time FROM api_user WHERE a_u_id= ?");


//充值记录查询
define('PAY_BILL', "SELECT * FROM codepay_order WHERE pay_id = ? ORDER BY id DESC");

//修改密码
define("USER_PASSWD_EDIT", "UPDATE api_user SET a_u_passwd=? WHERE a_u_name= ?;");

//订单记录 
define("Pay_shopp", "INSERT INTO api_order (o_u_id, o_l_id, o_title, o_pay_no,o_type, o_price,o_expire) VALUES (?,?,?,?,?,?,?); ");

//接口分配
define("Pay_api", "INSERT INTO api_owned (ow_u_id, ow_l_id, ow_md5, ow_start_time, ow_end_time) VALUES (?,?,?,?,?);");

//查询接口分配
define("Pay_API_RPW", "SELECT * FROM api_owned WHERE ow_l_id = ? AND ow_u_id=?;");

//接口分配更新
define("Pay_api_edit", "UPDATE api_owned SET ow_end_time =? WHERE ow_l_id = ?;");

//用户余额更新
define("Pay_user_up", "UPDATE api_user SET a_u_balance = ? WHERE a_u_id = ?;");

//购买记录
define("USER_gRecord", "SELECT * FROM api_order WHERE o_u_id = ? ORDER BY o_id DESC");

//已购接口数量
define('USER_API_N', "SELECT * FROM api_owned WHERE ow_u_id = ?");

//用户已购接口
define('USER_API', "SELECT api_owned.*,api_info.a_l_id AS l_id,api_info.a_l_title AS l_title,api_info.a_l_desc AS l_desc,api_info.a_l_alias AS l_alias,api_info.a_l_address AS l_address,api_info.a_l_format AS l_format,api_info.a_l_mode AS l_mode,api_info.a_l_ask AS l_ask,api_info.a_l_demo AS l_demo,api_info.a_l_example AS l_example,api_info.a_l_data AS l_data ,api_info.a_l_show AS l_show ,api_info.a_l_found_time AS l_found_time,api_info.a_l_pay AS l_pay ,    FROM api_owned INNER JOIN api_info ON api_owned.ow_l_id = api_info.a_l_id WHERE ow_u_id = ?");

//修改密钥 UPDATE `napi`.`api_owned` SET `ow_md5` = 'de1204b2b49e97a6963a0bf415d746b8' WHERE `ow_id` = '5'
define('USER_API_MD5', "UPDATE api_owned SET ow_md5 = ? WHERE ow_id = ?;");

//api通道信息
define('API_INFO', "SELECT a_l_id AS l_id,a_l_title AS l_title,a_l_desc AS l_desc,a_l_alias AS l_alias,a_l_address AS l_address,a_l_format AS l_format,a_l_mode AS l_mode,a_l_ask AS l_ask,a_l_demo AS l_demo,a_l_example AS l_example,a_l_data AS l_data ,a_l_show AS l_show ,a_l_found_time AS l_found_time,a_l_count AS l_count,a_l_pay AS l_pay,a_l_tuimg AS l_tuimg,    api_owned.* FROM api_info INNER JOIN api_owned ON api_info.a_l_id = api_owned.ow_l_id WHERE api_info.a_l_alias = ? AND api_owned.ow_md5=?;"); //LIMIT 0, 10000;

//api通道信息2
define('API_INFO2', "SELECT a_l_id AS l_id,a_l_title AS l_title,a_l_desc AS l_desc,a_l_alias AS l_alias,a_l_address AS l_address,a_l_format AS l_format,a_l_mode AS l_mode,a_l_ask AS l_ask,a_l_demo AS l_demo,a_l_example AS l_example,a_l_data AS l_data ,a_l_show AS l_show ,a_l_found_time AS l_found_time,a_l_count AS l_count,a_l_pay AS l_pay ,a_l_tuimg AS l_tuimg      FROM api_info WHERE a_l_alias = ?;"); //LIMIT 0, 10000;

//重置密码
define("USER_Reset_pass", "UPDATE api_user SET a_u_passwd = ? WHERE a_u_name = ?; ");

//添加白名单
define("API_IP", "UPDATE api_owned SET ow_ip = ? WHERE ow_id = ?");

//获取白名单
define("APP_IP_LIST", "SELECT * FROM api_owned WHERE ow_md5 = ?");

//接口计数
define("API_COUNT", "UPDATE api_info SET a_l_count=? WHERE a_l_id= ?;");

// 单独统计 
define("API_PCOUNT", "UPDATE api_owned SET ow_count = ? WHERE ow_id = ?;");


//模式二

//重置白名单
define("API_DEL_IP", "DELETE FROM api_whitelist WHERE w_u_id = ?");

//添加白名单
define("API_IPs", "INSERT INTO api_whitelist (w_u_id,w_ip) VALUES (?,?)");

//获取白名单
define("APP_IP_LISTs", "SELECT * FROM api_whitelist WHERE w_u_id = ?");
