<?php

/**
 * 框架版本
 */
define('APP_Edition', '1.0');

/**开启调试模式
 * 
 */
define('APP_DEBUG', true);

/**
 * 开启数据库
 */
define('APP_MYSQL', true);

/**
 * 视图文件后缀名
 */
define('APP_VIEW_FILE', '.html');

/**
 * 视图文件路径
 */
define('APP_VIEW_PATH', __DIR__ . '/../../view/');

/**
 * 配置文件路径
 */
define('APP_CONFIG', __DIR__ . '/../../config/');

/**
 * 程序根目录路径
 */
define('APP_WWW', __DIR__ . '/../../');

/**
 * 插件目录路径
 */
define('APP_PLUGIN_PATH', __DIR__ . '/../Plugin/');

/**
 * 网站根目录
 */
define('WWW_PATH', __DIR__ . '/../../public/');


/**
 * 静态文件路径2
 */
define('WWW_ASSET', '/public/assets');

/**
 * 缓存路径
 */
define('WWW_CACHE_PATH', __DIR__ . '/../Cache/view/');

/**
 * 开启缓存
 */
define('WWW_CACHE_ON', true);

/**
 * 默认缓存时间 30分钟（时间单位：分）
 */
define('WWW_CACHE_TIME', 30);


/**
 * 方法库路口
 */
define("APP_METHOD", __DIR__ . "/../Http/Method/");
