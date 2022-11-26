<?php

class indexController extends Controllers
{

    // 非预设页面
    public function miss()
    {

        $web = config('webset');

        $template = isset($web['template']) ? $web['template'] : "default";

        return view(optTen($template, "404"), []);
    }

    //前台首页
    public function index()
    {
        //接口数据查询
        $sql = "SELECT a_l_id AS l_id,a_l_title AS l_title,a_l_desc AS l_desc,a_l_tuimg AS l_tuimg,a_l_alias AS l_alias,a_l_address AS l_address,a_l_format AS l_format,a_l_mode AS l_mode,a_l_ask AS l_ask,a_l_demo AS l_demo,a_l_example AS l_example,a_l_data AS l_data ,a_l_show AS l_show ,a_l_found_time AS l_found_time,a_l_count AS l_count,a_l_pay AS l_pay FROM api_info ORDER BY a_l_count DESC"; //降序排行 将DESC 改为 ASC 则变成升序
        $count = 0;
        $apilist = self::$db->fetchAll($sql);
        foreach ($apilist as $key => $value) {
            $count = $count + $value['l_count'];
        }
        // 网站配置
        $web = config('webset');
        // 每日调用数
        $dayCount = config(date("Y-m-d"), null, WWW_CACHE_PATH);
        $dayCount['count'] = isset($dayCount['count'])  ?  $dayCount['count'] : 0;
        $template = isset($web['template']) ? $web['template'] : "default";
        return  view(optTen($template, "index"), ['web' => $web, 'list' => $apilist, 'count' => $count, 'dayCount' => $dayCount]);
    }

    //详情页面
    public function doc()
    {
        $id = Request::get('id');
        //接口数据查询
        $data['info'] = self::$db->fetchRow(ADMIN_APIDOC, [$id]); //基本信息
        $data['val'] = self::$db->fetchAll(ADMIN_VALDOC, [$data['info']['l_id']]); //参数
        $web = config('webset');
        $count = config('count')['count'];
        // 每日调用数
        $dayCount = config(date("Y-m-d"), null, WWW_CACHE_PATH);
        $dayCount['count'] = isset($dayCount['count'])  ? $dayCount['count'] : 0;
        $template = isset($web['template']) ? $web['template'] : "default";
        view(optTen($template, "doc"), ['web' => $web, 'data' => $data, 'count' => $count, 'dayCount' => $dayCount]);
    }

    // 接口列表
    public function getapilist()
    {
        if (isset($_REQUEST['search']) && !empty($_REQUEST['search'])) {
            $sql = "SELECT * FROM api_info WHERE a_l_title  LIKE '%" . $_REQUEST['search'] . "%' ORDER BY a_l_count DESC"; //降序排行 将DESC 改为 ASC 则变成升序
        } else {
            $sql = "SELECT * FROM api_info ORDER BY a_l_count DESC"; //降序排行 将DESC 改为 ASC 则变成升序
        }
        //接口数据查询
        $apilist = self::$db->fetchAll($sql);
        $html = '';
        foreach ($apilist as $key => $v) {
            if ($v['a_l_show'] == 1) {
                $diaoyong = '调用：' . $v['a_l_count'];
                $sign = 'success';
            } else {
                $diaoyong = '已停用';
                $sign = 'danger';
            }
            $html .= '<div class="col-sm-4">
            <a target="_blank" class="block block-link-hover2 ribbon ribbon-modern ribbon-' . $sign . '"
                href="/doc/' . $v['a_l_alias'] . '.html">
                <div class="ribbon-box font-w600">' . $diaoyong . '</div>
                <div class="block-content">
                    <div class="h4 push-5">' . $v['a_l_title'] . '</div>
                    <p class="text-muted">' . $v['a_l_desc'] . '</p>
                </div>
            </a>
        </div>';
        }
        echo $html;
    }

    //接口通道
    public function api()
    {
        // ajax 请求的处理方式 
        if (isset($_SERVER["HTTP_X_REQUESTED_WITH"]) && strtolower($_SERVER["HTTP_X_REQUESTED_WITH"]) == "xmlhttprequest") {
            // 跨域设置
            header('Access-Control-Allow-Origin:*');
            // 响应类型  
            header('Access-Control-Allow-Methods:*');
            // 响应头设置  
            header('Access-Control-Allow-Headers:*');
            if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
                header("HTTP/1.0 200 OK");
                exit;
            }
            // 数据返回格式
            header('Content-Type: application/json');
        }

        $cof = config('redis');
        $key = get_real_ip();
        //判断是否开启redis
        if (isset($cof['redis_on']) && $cof['redis_on'] == 1) {
            //引入redis控制
            require APP_METHOD . "Redis.php";
        }

        $apiVal = Request::get('apiVal'); //接口唯一标识
        $apiKey = isset($_REQUEST['apiKey']) ? $_REQUEST['apiKey'] : ""; //来访者KEY
        // dd(Request::get());
        $get = Request::get(); //get参数
        $post = Request::post(); //post
        $time = time(); //时间
        // echo $apiVal;
        if ($apiKey == "") {
            $data = self::$db->fetchRow(API_INFO2, [$apiVal]); //接口基本信息
        } else {
            $data = self::$db->fetchRow(API_INFO, [$apiVal, $apiKey]); //接口基本信息
        }

        //判断是否为平台用户
        if ($data) {
            //判断接口是否正常开放
            if ($data['l_show'] == 1) {
                // 记入访问数据
                self::statisticsVisitCount();
                self::apiVisitCount($data['l_id'], $data['l_count']);
                if ($apiKey != "") {
                    self::apiPersonalCount($data['ow_id'], $data['ow_count']);
                }
                //判断是否为数据类型接口
                if ($data['l_data']) {
                    //获取数据
                    $da = self::apiDataType($data['l_id']);
                    //以JSON格式返回到页面
                    return response_tips(['code' => '200', "data" => $da]);
                } else {
                    //载入指定的接口文件
                    require self::apiNormalType($apiVal);
                }
            } else {
                echo "已下架";
            }
        } else {
            echo '接口不存在';
        }
        return;
    }

    //常规接口访问
    public function apiNormalType($path, $page = "index.php")
    {
        return APP_VIEW_PATH . "api/" . $path . "/" . $page;
    }

    //数据类型接口
    public function apiDataType($id, $get = null, $post = null)
    {

        $data = self::$db->fetchRow(ADMIN_DATACHA, [$id]); //基本信息
        $sql = self::cksql($data); //生成查询语句
        $val = self::dval($data['b_val']); //封装动态数据
        $cha = self::$db->fetchAll($sql, [$val]); //查询数据
        return $cha; //返回查询数据
    }

    //获取动态参数
    public function dval($val)
    {
        //分割自定义参数
        $arr = explode(",", $val);
        //初始化数据
        $data = [];
        //遍历数据
        foreach ($arr as $key => $value) {
            $data[$key] = isset($_REQUEST[$value]) ? $_REQUEST[$value] : 1;
        }
        return $data;
    }

    //指定数据查询构造器
    public function cksql($info)
    {
        //初始化数量
        $list = isset($_REQUEST['list']) ? $_REQUEST['list'] : 0;
        //初始化页数
        $_page = isset($_REQUEST['page']) ? $_REQUEST['page'] : 0;
        //判断排序字段是否传入
        if (@$info['b_sort'] == 1) {
            $sort = "DESC";
        } else {
            $sort = "ASC";
        }
        //如果不存在排序条件
        if ($info['b_sort_field'] != '') {
            //排序条件
            $_sort = " ORDER BY " . $info['b_sort_field'] . " " . $sort;
        } else {
            $_sort = '';
        }

        //判断是否添加条件
        if ($info['b_where'] == "") {
            $where =  $info['b_where'];
        } else {
            $where = "AND " . $info['b_where'];
        }
        //生成查询条件
        $_where = " WHERE 1=1 " . $where;

        //获取数量
        if ($info['b_list'] == "") {
            $_list = "";
        } else {
            if ($list > 0) {
                //获取用户自定义数量
                $_list = $_REQUEST['list'];
                //如果用户定义超过使用最大数量
                if ($_list > $info['b_list']) {
                    $_list = $info['b_list'];
                }
            } else {
                $_list = $info['b_list'];
            }
            $_list = " LIMIT " . $_page * $_list . ", " .  $_list;
        }
        //语句拼接
        $sql = "SELECT " . $info['b_field'] . " FROM " . $info['b_table'] . $_where . $_sort . $_list;
        return $sql;
    }

    // 单独统计
    public function apiPersonalCount($id, $count)
    {
        $info = [$count + 1, $id];
        $res = self::$db->exec(API_PCOUNT, $info); //修改接口
        if ($res > 0) {
            return true;
        } else {
            return false;
        }
    }

    // 接口计数
    public function apiVisitCount($id, $count)
    {
        $info = [$count + 1, $id];
        $res = self::$db->exec(API_COUNT, $info); //修改接口
        if ($res > 0) {
            return true;
        } else {
            return false;
        }
    }

    // 记数器
    public function statisticsVisitCount()
    {
        // 今日调用多少次
        $one_day = date("Y-m-d");
        // 读取今日调用数
        $online_day_log = config($one_day, 'count', WWW_CACHE_PATH);
        $online_day_log = $online_day_log ? $online_day_log : 0;
        // 今日调用计数
        $one_day_data['count'] = $online_day_log + 1;
        //更新今日计数
        Storage::hold_all(WWW_CACHE_PATH . $one_day . '.php', $one_day_data);
        // 获取总数
        $online_log = config('count', 'count');
        $online_log = $online_log ? $online_log : 0;
        $data['count'] = $online_log + 1;
        if (Storage::hold_all(APP_CONFIG . 'count.php', $data) > 0) {
            return true;
        } else {
            return false;
        }
    }
}
