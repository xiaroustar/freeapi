<?php

/**
 *	Entry name：项目名称
 *	Description：起始文件
 *	Author：ZERO-ART
 *	Author Url：http://www.lykep.com
 * 	Contact：708298599  656001878
 *	2019-12-25 17:16:22
 */
//引入全局控制常量
require __DIR__ . '/env.php';
//引入全局自定义常量
require __DIR__ . '/default.php';
//引入路由注册功能
require __DIR__ . '/route/Route.php';
//引入参数接收处理功能
require __DIR__ . '/route/Request.php';
//引入mysql操作功能
require __DIR__ . '/database/mysql_db.php';
//引入方法库
require __DIR__ . '/method/app.php';
//引入数据语句
require __DIR__ . '/../Http/Model/app.php';
//公共控制器
require __DIR__ . '/../Http/Controller/Controller.php';
//引入自定义方法库
require __DIR__ . '/../Http/Method/app.php';
// 版本控制器
require __DIR__ . '/../../version.php';
