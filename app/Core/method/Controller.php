<?php

/**
 * 视图方法
 * @param string $filename 文件名
 * @param array $data 页面数据
 * @require 载入视图页面
 */
function view($filename, $data = [], $Suffix = APP_VIEW_FILE)
{
    //页面数据处理
    foreach ($data as $key => $value) {
        $$key = $value;
    }
    //获取常规模板地址
    $file_name = APP_VIEW_PATH . $filename . $Suffix;
    //判断请求文件是否存在
    if (is_file($file_name)) {
        //载入视图
        require $file_name;
    } else {
        //判断是否开启调试模式
        if (APP_DEBUG) {
            echo '请求文件不存在';
        }
        exit();
    }
}

/**
 * 重定向方法
 * @param string $to 重定向地址
 */
function redirect($to = '/')
{
    header('Location: ' . $to);
}



/**
 * 视图方法2
 * @param string $filename 文件名
 * @param array $data 页面数据
 * @require 载入视图页面
 */
function views($filename, $data = [])
{
    foreach ($data as $key => $value) {
        $$key = $value;
    }
    $file_name = APP_VIEW_PATH . $filename . APP_VIEW_FILE;
    if (is_file($file_name)) {
        //载入视图
        // require $file_name;
        require $file_name;
    } else {
        if (APP_DEBUG) {
            echo '模板文件不存在';
        }
        exit();
    }
}


/**
 * 导入配置文件
 * $filename        配置文件名
 * $val             配置文件中对象
 */
/**
 * 导入配置文件
 * @param string $filename 配置文件名
 * @param array $val 获取指定对象，留空获取全部
 * @param string $path 定义配置文件目录路径
 * @return 返回数据
 */
function config($filename, $val = null, $path = APP_CONFIG)
{
    //获取配置文件路径
    $_path =  $path . $filename . '.php';
    //判断配置文件是否存在
    if (file_exists($_path)) {
        //导入配置文件
        $con = require $_path;
        //判断是否指定对象
        if ($val == null) {
            //返回配置文件所有数据
            $data = $con;
        } else {
            //返回指定对象数据
            $data = $con[$val];
        }
        //返回数据
        return $data;
    } else {
        return null;
    }
}
