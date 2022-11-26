<?php

/**
 * FileCache php文件缓存类
 */
final class CFileCache
{
    /**
     * 缓存目录
     * @var string
     */
    private static $msCachePath  = null;
    /**
     * 默认缓存失效时间
     * @var int 
     */
    private static $miEXPIRE  = null;


    /**
     * 构造
     * self::$msCachePath 缓存目录为共享目录
     * @param string $sCachePath
     */
    function __construct($sCachePath = './app/Cache/')
    {
        ob_start(); //开启缓存
        //设置默认缓存时间
        self::$miEXPIRE = WWW_CACHE_TIME;
        if (is_null(self::$msCachePath))
            self::$msCachePath = $sCachePath;
    }

    /**
     * 预处理
     * $sKey        视图路径
     * $fun         方法名
     * $val         方法参数（数组）
     */
    public function pre($fun = '', $val = [])
    {
        //判断是否存在缓存
        if ($res = self::get() == null) {
            if ($fun == '') {
                if ($res != null && $res != false) {
                    return false;
                } else {
                    return true;
                }
            } else {
                //方法参数处理 数组转字符串
                $_val = implode(',', $val);
                $data = $fun($_val);
                //执行方法返回数据
                return $data;
            }
        } else {
            return json_encode([]);
        }
    }

    /**
     * 是否进行缓存
     */
    public static function put()
    {
        $_cache = CFileCache::get();
        //判断缓存文件是否寻要更新
        if ($_cache != null && $_cache != false) {
            return $_cache;
        } else {
            //调用缓存
            self::set(ob_get_contents());
            return true;
        }
    }

    /**
     * 读取缓存
     * 返回: 缓存全地址过期返回false
     * @param string $sKey 缓存键值(无需做md5())
     * @return string | null
     * @access public
     */
    public static function get()
    {
        //是否启用缓存
        if (WWW_CACHE_ON) {
            //获取地址路径
            $sKey = $_SERVER['REQUEST_URI'];
            //缓存文件全路径
            $sFile  = self::getFileName($sKey);
            // $sFile  = self::getFileName($_SERVER['REQUEST_URI']);
            //判断缓存路径是否存在
            if (!file_exists($sFile)) {
                return false;
            } else {
                //获取缓存文件上次更新时间
                $old_time = filemtime($sFile);
                //缓存时间处理
                strtotime('+' . self::$miEXPIRE . 'minute', $old_time);
                //判断缓存更新时间加上等待时间是否大于当前时间
                if (strtotime('+' . self::$miEXPIRE . 'minute', $old_time) > time()) {
                    return $sFile;
                } else {
                    return null;
                }
            }
        } else {
            return null;
        }
    }

    /**
     * 写入缓存
     * @param string $sKey 缓存键值
     * @param mixed $mVal 需要保存的对象
     * @return bool
     * @access public
     */
    public static function set($mVal)
    {
        if (WWW_CACHE_ON) {
            //获取地址路径
            $sKey = $_SERVER['REQUEST_URI'];
            //缓存文件输出路径
            $sFile = self::getFileName($sKey);
            //判断缓存路径是否存在
            if (!file_exists(dirname($sFile)))
                //缓存路径不存在则创建
                if (!self::is_mkdir(dirname($sFile))) {
                    return false;
                }
            /*写入文件操作*/
            $handle = fopen($sFile, 'wb');
            fwrite($handle, $mVal);
            fclose($handle);
            return true;
        } else {
            return null;
        }
    }

    /**
     * 删除指定的缓存
     * @param string $sKey 缓存键值
     * @return bool
     */
    public function del($sKey)
    {
        //判断缓存键值是否存在
        if (empty($sKey)) {
            return false;
        } else {
            //删除指定文件
            @unlink(self::getFileName($sKey));
            return true;
        }
    }

    /**
     * 获取缓存文件全路径
     * 返回: 缓存文件全路径
     * $sKey的值会被转换成md5()
     * @param string $sKey 缓存键
     * @return string
     * @access protected
     */
    private static function getFileName($sKey)
    {
        //判断缓存键值是否存在
        if (empty($sKey)) {
            return false;
        } else {
            //缓存键值转换为MD5字符串
            $key_md5 = md5($sKey);
            $aFileName = array();
            //移除缓存路径空白字符串
            $aFileName[]  = rtrim(self::$msCachePath, '/');
            $aFileName[]  = $key_md5;
            //返回缓存文件全路径
            return implode('/', $aFileName);
        }
    }

    /**
     * 创建目录
     * @param string $sDir
     * @return bool
     */
    private static function is_mkdir($sDir = '')
    {
        //判断地址是否为空
        if (empty($sDir)) {
            return false;
        }
        /*如果无法创建缓存目录，让系统直接抛出错误提示*/
        if (!mkdir($sDir, 0666)) {
            return false;
        } else {
            return true;
        }
    }
}
