<?php

//后台登录
define('ADMIN_LOGIN', "SELECT a_a_id AS a_id,a_a_name AS a_name,a_a_passwd AS a_passwd,a_a_time AS a_time  FROM api_admin WHERE a_a_name= ? and a_a_passwd = ?");

//接口添加
define('ADMIN_ADDAPI', "INSERT INTO api_info (a_l_title,a_l_desc,a_l_tuimg,a_l_alias,a_l_address,a_l_format,a_l_mode,a_l_ask,a_l_demo,a_l_example,a_l_data,a_l_show,a_l_pay) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?);");

//接口列表
define('ADMIN_ADDLIST', "SELECT a_l_id AS l_id,a_l_title AS l_title,a_l_desc AS l_desc, a_l_tuimg AS l_tuimg, a_l_alias AS l_alias,a_l_address AS l_address,a_l_format AS l_format,a_l_mode AS l_mode,a_l_ask AS l_ask,a_l_demo AS l_demo,a_l_example AS l_example,a_l_data AS l_data ,a_l_show AS l_show ,a_l_found_time AS l_found_time,a_l_count AS l_count,a_l_pay AS l_pay FROM api_info;"); //LIMIT 0, 10000;

//接口上架列表
define('ADMIN_ADDLIST2', "SELECT a_l_id AS l_id,a_l_title AS l_title,a_l_desc AS l_desc, a_l_tuimg AS l_tuimg,a_l_alias AS l_alias,a_l_address AS l_address,a_l_format AS l_format,a_l_mode AS l_mode,a_l_ask AS l_ask,a_l_demo AS l_demo,a_l_example AS l_example,a_l_data AS l_data ,a_l_show AS l_show ,a_l_found_time AS l_found_time,a_l_count AS l_count,a_l_pay AS l_pay,api_price.* FROM api_info INNER JOIN api_price ON api_info.a_l_id = api_price.p_l_id WHERE a_l_show = ?;"); //LIMIT 0, 10000;

//接口详情信息
define('ADMIN_APIDOC', "SELECT a_l_id AS l_id,a_l_title AS l_title,a_l_desc AS l_desc, a_l_tuimg AS l_tuimg,a_l_alias AS l_alias,a_l_address AS l_address,a_l_format AS l_format,a_l_mode AS l_mode,a_l_ask AS l_ask,a_l_demo AS l_demo,a_l_example AS l_example,a_l_data AS l_data ,a_l_show AS l_show ,a_l_found_time AS l_found_time,a_l_pay AS l_pay FROM api_info WHERE a_l_alias = ?;"); //LIMIT 0, 10000;

//接口详情信息
define('ADMIN_APIINFO', "SELECT a_l_id AS l_id,a_l_title AS l_title,a_l_desc AS l_desc, a_l_tuimg AS l_tuimg,a_l_alias AS l_alias,a_l_address AS l_address,a_l_format AS l_format,a_l_mode AS l_mode,a_l_ask AS l_ask,a_l_demo AS l_demo,a_l_example AS l_example,a_l_data AS l_data ,a_l_show AS l_show ,a_l_found_time AS l_found_time,a_l_pay AS l_pay FROM api_info WHERE a_l_id = ?;"); //LIMIT 0, 10000;

//修改接口 
define('ADMIN_EDITAPIINFO', "UPDATE api_info SET a_l_title= ?,a_l_desc=? ,a_l_tuimg=? ,a_l_alias=? ,a_l_address=? ,a_l_format=?, a_l_mode=?,a_l_ask=? ,a_l_demo=? ,a_l_example=? ,a_l_data=? ,a_l_show=?,a_l_pay=? WHERE a_l_id= ?;");

//数据库所有表 SHOW TABLES
define('ADMIN_TABLESALL', "SHOW TABLES");

//数据库所有表字段名
define("ADMIN_FIELD", "SHOW FULL COLUMNS FROM ");

//数据绑定添加
define('ADMIN_DATAINFO', "INSERT INTO api_binding (a_b_api_id,a_b_table,a_b_field,a_b_where,a_b_sort,a_b_sort_field,a_b_val,a_b_list) VALUES (?,?,?,?,?,?,?,?);");

//数据绑定查询
define('ADMIN_DATACHA', "SELECT a_b_id AS b_id,a_b_api_id AS b_api_id,a_b_table AS b_table,a_b_field AS b_field,a_b_where AS b_where,a_b_sort AS b_sort,a_b_sort_field AS b_sort_field,a_b_val AS b_val,a_b_list AS b_list,a_b_time AS b_time FROM api_binding WHERE a_b_api_id = ?;");

//删除接口 
define('ADMIN_DELAPI', "DELETE FROM api_info WHERE a_l_id= ?");

//删除参数
define('ADMIN_DELVAL', "DELETE FROM api_parameter WHERE a_p_id= ?");

//参数添加
define('ADMIN_IAPINFO', "INSERT INTO api_parameter (a_p_api_id,a_p_api_type,a_p_name,a_p_type,a_p_desc,a_p_crux) VALUES (?,?,?,?,?,?);");

//参数查询
define('ADMIN_VALDOC', "SELECT a_p_id AS p_id,a_p_api_id AS p_api_id,a_p_api_type AS p_api_type,a_p_name AS p_name,a_p_type AS p_type,a_p_desc AS p_desc,a_p_crux AS p_crux,a_p_time AS p_time FROM api_parameter WHERE a_p_api_id = ?;"); //LIMIT 0, 10000;

//绑定数据删除
define('ADMIN_DELDATA', "DELETE FROM api_binding WHERE a_b_api_id= ?");

//用户列表
define("ADMIN_USER", "SELECT a_u_id AS u_id,a_u_name AS u_name,a_u_passwd AS u_passwd,a_u_email AS u_email,a_u_balance AS u_balance,a_u_found_time AS u_found_time FROM api_user");

//用户详情
define("ADMIN_USER_ROW", "SELECT a_u_id AS u_id,a_u_name AS u_name,a_u_passwd AS u_passwd,a_u_email AS u_email,a_u_balance AS u_balance,a_u_found_time AS u_found_time FROM api_user WHERE a_u_id = ?");

//用户修改
define("ADMIN_USER_EDIT", "UPDATE api_user SET a_u_name= ?,a_u_email=? ,a_u_balance=? WHERE a_u_id= ?;");

//用户删除
define("ADMIN_USER_DEL", "DELETE FROM api_user WHERE a_u_id= ?;");

//修改密码
define("ADMIN_PASSWD_EDIT", "UPDATE api_admin SET a_a_name=?,a_a_passwd=? WHERE a_a_name= ?;");

//会员人数
define('WEB_USER', "SELECT * FROM api_user");

//当天注册人数
define('WEB_USER_DAY', "SELECT * FROM api_user WHERE a_u_found_time > ?");

//充值金额
define('WEB_USER_PAY', "SELECT * FROM codepay_order");

//用户消费
define('USER_xPAY', "SELECT * FROM api_order WHERE o_u_id=?");

//接口数量
define('WEB_USER_API', "SELECT * FROM api_info");

//手动加款 
define('WEB_USER_ADDFUNDS', "INSERT INTO codepay_order (pay_id, money, price,type,pay_no, param,pay_time,status,creat_time) VALUES (?,?,?,?,?,?,?,?,?)");

//创建接口价格
define("ADMIN_API_PRICE", "INSERT INTO api_price (p_l_id) VALUES (?)");

//价格查询
define("ADMIN_Price", "SELECT * FROM api_price WHERE p_l_id = ?");

//价格修改
define("ADMIN_Price_edit", "UPDATE api_price SET p_month = ? , p_season = ? , p_year = ? WHERE p_l_id = ?");

//接口购买详情
define("GOODS_DESC", "SELECT api_info.a_l_id AS l_id,api_info.a_l_title AS l_title,api_info.a_l_desc AS l_desc,api_price.* FROM api_info INNER JOIN api_price ON api_info.a_l_id = api_price.p_l_id  WHERE a_l_id = ?");
