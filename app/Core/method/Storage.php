<?php

/**
 * 文件保存类
 */
class Storage
{
    /**
     * 批量保存
     * @param string $file 文件路径名
     * @param array $data 保存数据
     */
    public static function hold_all($file, $data)
    {
        //初始化
        $row = '';
        //循环遍历对象
        foreach ($data as $k => $v) {
            // 累计
            $row .= '   "' . $k . '" => ' . var_export($v, true) . ',
';
        }
        // 拼接字符串
        $_data = '<?php
return [
' . $row .
            '];
?>';
        // 写出文件
        return file_put_contents($file, $_data);
    }

    /**
     * 指定保存
     * @param string $file 文件路径名
     * @param array $data 保存数据
     */
    public static function hold_row($file, $data)
    {
        //获取源数据
        $dat = require $file;
        //新旧数据合并
        $da = array_merge($dat, $data);
        //初始化
        $row = '';
        //循环遍历对象
        foreach ($da as $k => $v) {
            // 累计
            $row .= '   "' . $k . '" => ' . var_export($v, true) . ',
';
        }
        // 拼接字符串
        $_data = '<?php
return [
' . $row .
            '];
?>';
        // 写出文件
        return file_put_contents($file, $_data);
    }
}
