<?php

/**
 *	Entry name：项目名称
 *	Description：初始化
 *	Author：ZERO-ART
 *	Author Url：http://www.lykep.com
 * 	Contact：708298599  656001878
 *	2019-12-26 19:28:12
 */

ini_set('session.cookie_httponly', 1); //设置防止xss攻击
session_start(); //开启session

date_default_timezone_set("Asia/Shanghai"); //校准时间
$start_record = time(); //开始时间，放在页面头部
// ob_start(); //开启缓存

// 第三方扩展库
if (file_exists(__DIR__ . "/../vendor/autoload.php")) {
    // 第三方扩展自动加载
    require __DIR__ . "/../vendor/autoload.php";
}

//初始化核心
require __DIR__ . '/Core/app.php';
//引入插件模块
require __DIR__ . '/Plugin/app.php';
//导入路由规则
require __DIR__ . '/../route/web.php';
