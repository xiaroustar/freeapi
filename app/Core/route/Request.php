<?php
class Request
{
    /**
     * 地址规则
     */
    public static $rule;
    /**
     * 地址参数
     */
    public static $request;

    /**
     * FILES获取参数
     * @param string $name 对象名
     */
    public static function file($name = null)
    {
        if (isset($_FILES)) {
            $dat = null;
            //循环FILES数据
            foreach ($_FILES as $key => $value) {
                //判断是否为空，输出全部数据
                if ($name == null) {
                    $dat[$key] = $value;
                } else {
                    //输出指定FILES对象
                    if ($name == $key) {
                        $dat = $value;
                    }
                }
            }
            return $dat;
        } else {
            return;
        }
    }

    /**
     * POST获取参数
     * @param string $name 对象名
     */
    public static function post($name = null)
    {
        // json类型处理
        $headers = self::getallheaders();
        $isJson = isset($headers['Content-Type']) ? $headers['Content-Type'] : "";
        if (strtolower($isJson) != "application/json" && !strstr($isJson, "application/json")) {
            $post = $_POST;
        } else {
            $post = json_decode((file_get_contents("php://input")), true);
            $_POST = $post;
        }
        //判断POST书否存在
        if (isset($post)) {
            $dat = null;
            //循环POST数据
            foreach ($post as $key => $value) {
                //判断是否为空，输出全部数据
                // echo $key;
                if ($name == null) {
                    $dat[$key] = $value;
                } else {
                    //输出指定POST对象
                    if ($name == $key) {
                        $dat = $value;
                    }
                }
            }
            return $dat;
        } else {
            return;
        }
    }

    /**
     * GET获取参数
     * @param string $name 对象名
     */
    public static function get($name = null)
    {
        //正则匹配所有地址参数
        preg_match_all('/{(.*)}/U', self::$rule, $data);
        // dd($data);
        //如果地址参数存在
        if (isset($data[1][0])) {
            //地址原型
            $match = self::$rule;
            //循环地址参数
            foreach ($data[1] as $key => $value) {
                $objname[$key] = $value;
                //循环替换形成正则规则 
                $match = str_replace('{' . $value . '}', '(.*)', $match);
            }

            //为正则规则特殊字符进行处理
            $match = str_replace('/', '/', $match);

            // 是否存在问号
            $inw = strstr(self::$request, '?');
            // dd($inw);
            if ($inw) {
                //合并正则规则
                $match = '#' . $match . '\?#';
            } else {
                //合并正则规则
                $match = '#' . $match . '#';
            }


            //判断匹配是否正确
            if (preg_match($match, self::$request, $data2)) {
                //判断地址栏参数
                if (isset($data[1])) {
                    $dat = null;
                    //循环地址参数
                    foreach ($data2 as $key => $value) {
                        if ($key > 0) {
                            //处理输出对象名
                            $obj = isset($objname[$key - 1]) ? $objname[$key - 1] : '';
                            //如果为空输出全部 否则按指定输出
                            if ($name == null) {
                                $dats[$obj] = $value;
                            } else {
                                //判断数据是否为输出对象
                                if ($name == $obj) {
                                    // 获取参数格式化条件
                                    $val_len = strpos($value, '?');
                                    if ($val_len) {
                                        // 参数格式化
                                        $dat = substr($value, 0, $val_len);
                                    } else {
                                        $dat = $value;
                                    }
                                }
                            }
                        }
                    }
                    if ($name == null) {
                        $dat = array_merge($dats, $_GET);
                    }
                }
                return $dat;
            } else {
                return;
            }
        } else {
            return;
        }
    }

    /**
     * 获取请求头方法兼容
     */
    public static function getallheaders()
    {
        $headers = array();
        foreach ($_SERVER as $name => $value) {
            if (substr($name, 0, 5) == 'HTTP_') {
                $headers[str_replace(' ', '-', ucwords(strtolower(str_replace('_', ' ', substr($name, 5)))))] = $value;
            }
        }
        return $headers;
    }
}
