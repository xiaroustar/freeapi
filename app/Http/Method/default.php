<?php

/**
 * 获取指定目录下所有目录名
 * @param string $path 目录路径
 * @return return 返回目录下所有目录名
 */
function getCatalog($path)
{
    //路径地址
    $dir = $path;
    //判断路径是否存在
    if (is_dir($dir)) {
        //打开目录句柄
        if ($dh = opendir($dir)) {
            $i = 0;
            while (($file = readdir($dh)) !== false) {
                //判断目录或文件
                if (strstr($file, '.') == '') {
                    $tem[$i] = $file;
                    $i++;
                }
            }
            //关闭目录句柄
            closedir($dh);
        }
    }
    return $tem;
}

/**
 * 获取指定目录下所有文件名
 * @param string $path 目录路径
 * @param string $suffix 文件后缀
 * @return return 返回目录下所有文件名
 */
function getfilename($path, $suffix = '.html')
{
    //指定文件夹路径
    $handler = opendir($path);
    $i = 0;
    //遍历文件名
    while (($filename = readdir($handler)) !== false) {
        //略过目录下的名字为'.'和'..'的文件
        if ($filename != '.' && $filename != '..') {
            //获取'.'最后出现的位置
            $d = strrpos($filename, '.');
            //筛选掉文件夹
            if ($d > 0) {
                //获取文件名
                $fname = substr($filename, 0, $d);
                //获取文件后缀
                $suffix = substr($filename, $d);
                //判断是否为指定文件后缀
                if ($suffix == $suffix) {
                    //文件名
                    $data[$i]['val'] = iconv("GB2312", "UTF-8", $fname);
                    //文件名带后缀
                    $data[$i]['title'] = iconv("GB2312", "UTF-8", $filename);
                    $i++;
                }
            }
        }
    }
    //关闭目录句柄
    closedir($handler);
    return $data;
}

/**
 * 断点调适
 * @param mixed $data 断点数据
 * @param string $type 输出类型
 */

function dd($data = null, $type = "pre")
{
    if ($type == "pre") {
        echo '<pre>';
        var_dump($data);
        echo '</pre>';
    } else {
        echo json_encode($data);
    }
    exit();
}

/**
 * 提示方法
 * @param array $val 返回数据
 * @param mixed $ret 显示方式
 * @return return json
 */
function response_tips($val, $ret = 0)
{
    //判断是否是数据数据
    if (is_array($val)) {
        //遍历数据
        foreach ($val as $key => $value) {
            $data[$key] = $value;
        }
    } else {
        //文本数据
        $data = $val;
    }
    //判断显示方式
    if ($ret == 0) {
        echo json_encode($data);
    } else {
        return json_encode($data);
    }
}

/**
 * 参数不为空判断
 * @param array $name 参数名
 * @param array $val 参数原型(数组)
 * @return return true 或 false
 */
function is_empty($name = [], $val = [])
{
    //遍历参数
    foreach ($name as $k => $v) {
        //判断参数是否为空
        if (empty($val[$v])) {
            $state = false;
            break;
        } else {
            $state = true;
        }
    }
    return $state;
}

/**
 * 文件上传
 * @param mixed $file 文件 $_FILES
 * @param string $path 文件保存地址
 * @param string $name 文件名
 * @param array $filter 允许类型
 * @param string $size 文件大小
 * @return return 0上传错误 1上传成功 2类型错误 3请求错误 4大小错误
 */
function upload_file($file, $path, $name, $filter = [], $size = 1024)
{
    //判断上传是否出错
    if ($file["error"] > 0) {
        return ['code' => 0, "response" => $file['error']];
    } else {
        //获取文件类型
        $file_type = strtolower(substr($file['name'], strrpos($file['name'], '.') + 1));
        if ($filter[0] != '*') {
            //判断文件类型
            if (!in_array($file_type, $filter)) {
                return ['code' => 2, "response" => '不支持的文件类型'];
            }
        }

        //判断文件是临时副本是否存在
        if (!is_uploaded_file($file['tmp_name'])) {
            return ['code' => 3, "response" => '请通过HTTP POST上传文件'];
        }
        //判断文件上传大小
        if ($size < ($file['size'] / 1024)) {
            return ['code' => 4, "response" => '文件大小超过上传上限'];
        }
        //文件地址拼接
        $upload_path = $path . '/' . $name;
        //文件保存到服务器
        move_uploaded_file($file['tmp_name'], $upload_path);
        //图片地址
        $file_url = substr($upload_path, strlen(WWW_PATH));
        //成功返回
        return ['code' => 1, "response" => $file_url];
    }
}

/**
 * 验证码函数
 * @param string $obj 存储session里的对象名
 */
function captcha($obj)
{
    session_start();
    $image = imagecreatetruecolor(100, 30);
    //背景颜色为白色
    $color = imagecolorallocate($image, 255, 255, 255);
    imagefill($image, 20, 20, $color);

    $code = '';
    for ($i = 0; $i < 4; $i++) {
        $fontSize = 8;
        $x = rand(5, 10) + $i * 100 / 4;
        $y = rand(5, 15);
        $data = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';
        $string = substr($data, rand(0, strlen($data)), 1);
        $code .= $string;
        $color = imagecolorallocate($image, rand(0, 120), rand(0, 120), rand(0, 120));
        imagestring($image, $fontSize, $x, $y, $string, $color);
    }
    $_SESSION[$obj] = $code; //存储在session里

    for ($i = 0; $i < 200; $i++) {
        $pointColor = imagecolorallocate($image, rand(100, 255), rand(100, 255), rand(100, 255));
        imagesetpixel($image, rand(0, 100), rand(0, 30), $pointColor);
    }
    for ($i = 0; $i < 2; $i++) {
        $linePoint = imagecolorallocate($image, rand(150, 255), rand(150, 255), rand(150, 255));
        imageline($image, rand(10, 50), rand(10, 20), rand(80, 90), rand(15, 25), $linePoint);
    }
    ob_clean();
    header("Content-type:image/jpeg");
    imagepng($image);
    imagedestroy($image);
}

/**
 * 获取指定目录下所有文件名（包括二级）
 * @param string $path 目录路径
 * @return 返回目录下所有文件名
 */
function getFileNameAll($path, $dir = false)
{
    if ($dir) {
        $_path = '';
    } else {
        $_path = $path;
    }
    // 初始化文件夹
    $files = array();
    //使用匿名函数获取列表信息
    $dirList = function ($path, &$files) use (&$dirList, &$_path) {
        //如果不是文件，就度是目录了
        if (is_dir($path)) {
            $dp = dir($path);
            while ($file = $dp->read()) {
                if ($file !== "." && $file !== "..") {
                    // 闭包调用自身
                    $dirList($path . '/' . $file, $files);
                }
            }
            $dp->close();
        }
        if (is_file($path)) {
            $_files = iconv("GB2312", "UTF-8", $path);
            $files[] = str_replace($_path . '/', '', $_files);
        }
        return $files;
    };
    // 返回数据
    return  $dirList($path, $files);
}


/**
 * 请求模拟器
 * @param string $url 请求地址
 * @param array $paras 附加参数 
 * @param bool $ssl ssl 
 * @link  https://lykep.com/index.php/archives/659/
 * @return mixed
 */
function getCurl($url, $paras = array(), $ssl = false)
{
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, $ssl);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, $ssl);
    if (@$paras['Header']) {
        $Header = $paras['Header'];
    } else {
        $Header[] = "Accept:*/*";
        $Header[] = "Accept-Encoding:gzip,deflate,sdch";
        $Header[] = "Accept-Language:zh-CN,zh;q=0.8";
        $Header[] = "Connection:close";
    }
    curl_setopt($ch, CURLOPT_HTTPHEADER, $Header);
    if (@$paras['ctime']) { // 连接超时
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $paras['ctime']);
    } else {
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 30);
    }
    if (@$paras['rtime']) { // 读取超时
        curl_setopt($ch, CURLOPT_TIMEOUT, $paras['rtime']);
    }
    if (@$paras['post']) {
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $paras['post']);
    }
    if (@$paras['header']) {
        curl_setopt($ch, CURLOPT_HEADER, true);
    }
    if (@$paras['cookie']) {
        curl_setopt($ch, CURLOPT_COOKIE, $paras['cookie']);
    }
    if (@$paras['refer']) {
        if ($paras['refer'] == 1) {
            curl_setopt($ch, CURLOPT_REFERER, 'https://lykep.com');
        } else {
            curl_setopt($ch, CURLOPT_REFERER, $paras['refer']);
        }
    }
    if (@$paras['ua']) {
        curl_setopt($ch, CURLOPT_USERAGENT, $paras['ua']);
    } else {
        curl_setopt($ch, CURLOPT_USERAGENT, "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36");
    }
    if (@$paras['nobody']) {
        curl_setopt($ch, CURLOPT_NOBODY, 1);
    }
    curl_setopt($ch, CURLOPT_ENCODING, "gzip");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    if (@$paras['GetCookie']) {
        curl_setopt($ch, CURLOPT_HEADER, 1);
        $result = curl_exec($ch);
        preg_match_all("/Set-Cookie: (.*?);/m", $result, $matches);
        $headerSize = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
        $header = substr($result, 0, $headerSize); //状态码
        $body = substr($result, $headerSize);
        $ret = [
            "Cookie" => $matches, "body" => $body, "header" => $header, 'code' => curl_getinfo($ch, CURLINFO_HTTP_CODE)
        ];
        curl_close($ch);
        return $ret;
    }
    $ret = curl_exec($ch);
    if (@$paras['loadurl']) {
        $Headers = curl_getinfo($ch);
        $ret = $Headers['redirect_url'];
    }
    curl_close($ch);
    return $ret;
}



/**
 * 选择模板
 * @param $ten 模板名称
 * @param $filename 文件名称
 * @return string 返回选中模板
 */
function optTen($ten, $filename)
{
    if (!$ten) {
        $ten = "default";
    }
    $path = "tpl/" . $ten . "/" . $filename;
    return $path;
}


// 模板列表
function tenList()
{
    $dir = APP_VIEW_PATH . "tpl/";
    if (is_dir($dir)) {
        if ($dh = opendir($dir)) {
            $i = 0;
            while (($file = readdir($dh)) !== false) {
                if (strstr($file, '.') == '') {
                    $tem[$i] = $file;
                    $i++;
                }
            }
            closedir($dh);
        }
    }
    return $tem;
}
