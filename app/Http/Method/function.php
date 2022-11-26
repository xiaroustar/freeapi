<?php


//自定义md5
function api_md5($text, $salt = 'api')
{
    //123456 ba05b7be8feba6afd70a8785e7c10757
    $data = md5(md5($text) . $salt);
    return $data;
}


//判断付款方式
function payType($i)
{
    $res = '未知';
    switch ($i) {
        case '0':
            $res = '管理员加款';
            break;
        case '1':
            $res = '支付宝';
            break;
        case '2':
            $res = '财付通';
            break;
        case '3':
            $res = '微信钱包';
            break;
        default:
            break;
    }
    return $res;
}


//套餐类型
function SetMealType($i)
{
    switch ($i) {
        case '1':
            return "p_month";
            break;
        case '2':
            return "p_season";
            break;
        case '3':
            return "p_year";
            break;
        default:
            return;
            break;
    }
}


//套餐时间
function SetMealTiime($i, $t = null)
{
    $time = time();
    switch ($i) {
        case '1':
            //判断是更新还是生成
            if ($t === null) {
                $time = strtotime("+31 day");
            } else {
                $time = strtotime(date("Y-m-d", $t) . "+31 day");
            }
            break;
        case '2':
            if ($t === null) {
                $time = strtotime("+93 day");
            } else {
                $time = strtotime(date("Y-m-d", $t) . "+93 day");
            }
            break;
        case '3':
            if ($t === null) {
                $time = strtotime("+1 year");
            } else {
                $time = strtotime(date("Y-m-d", $t) . "+1 year");
            }
            break;
        default:
            return;
            break;
    }
    return $time;
}


/**
 * 获得随机字符串
 * @param $len             需要的长度
 * @param $special        是否需要特殊符号
 * @return string       返回随机字符串
 */
function getRandomStr($len, $special = false)
{
    $chars = array(
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
        "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
        "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G",
        "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
        "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2",
        "3", "4", "5", "6", "7", "8", "9"
    );
    if ($special) {
        $chars = array_merge($chars, array(
            "!", "@", "#", "$", "?", "|", "{", "/", ":", ";",
            "%", "^", "&", "*", "(", ")", "-", "_", "[", "]",
            "}", "<", ">", "~", "+", "=", ",", "."
        ));
    }
    $charsLen = count($chars) - 1;
    shuffle($chars);                            //打乱数组顺序
    $str = '';
    for ($i = 0; $i < $len; $i++) {
        $str .= $chars[mt_rand(0, $charsLen)];    //随机取出一位
    }
    return $str;
}

//获取客户端真实ip地址
function get_real_ip()
{
    static $realip;
    if (isset($_SERVER)) {
        if (isset($_SERVER['HTTP_X_FORWARDED_FOR'])) {
            $realip = $_SERVER['HTTP_X_FORWARDED_FOR'];
        } else if (isset($_SERVER['HTTP_CLIENT_IP'])) {
            $realip = $_SERVER['HTTP_CLIENT_IP'];
        } else {
            $realip = $_SERVER['REMOTE_ADDR'];
        }
    } else {
        if (getenv('HTTP_X_FORWARDED_FOR')) {
            $realip = getenv('HTTP_X_FORWARDED_FOR');
        } else if (getenv('HTTP_CLIENT_IP')) {
            $realip = getenv('HTTP_CLIENT_IP');
        } else {
            $realip = getenv('REMOTE_ADDR');
        }
    }
    return $realip;
}
