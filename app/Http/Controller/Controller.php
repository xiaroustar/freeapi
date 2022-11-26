<?php
class Controllers
{
    //文件储存
    public static $Storage;
    //
    public static $Fcache;

    public static $db;
    //初始化
    public function __construct()
    {
        //实例化一个文件储存类
        self::$Storage = new Storage();
        self::$Fcache = new CFileCache(WWW_CACHE_PATH);
        //数据库功能打开
        if (APP_MYSQL) {
            //实例化数据库操作类
            self::$db = new MySQLPDO();
        }
    }
}
