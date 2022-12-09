<?php

class HandleController extends Controllers
{
    //后台登录
    public function login()
    {
        $val = Request::post();
        if (is_empty(['username', 'password'], $val)) {
            $info = [
                $val['username'], api_md5($val['password'])
            ];
            //信息查询语句
            // $sql = "SELECT '' FROM api_admin WHERE a_a_name= ? and a_a_passwd = ?";
            //查询信息
            $data = self::$db->fetchRow(ADMIN_LOGIN, $info);
            //判断信息是否为空
            if (!$data) {
                //记录登录状态
                $_SESSION[api_admin_auth] = false;
                //响应信息
                return response_tips(["code" => "203", 'msg' => "账号密码错误"]);
            } else {
                //记录登录状态
                $_SESSION[api_admin_auth] = true;
                //记录用户信息
                $_SESSION['info'] = $data;
                //响应信息
                return response_tips(["code" => "200", 'msg' => "登录成功"]);
            }
        } else {
            //响应信息
            return response_tips(["code" => "412", 'msg' => "账号密码不能为空"]);
        }
    }

    //添加接口
    public function addapi()
    {
        Authentication::AdminAuth(false);
        $val = Request::post();
        //判断参数是否存在
        if (!isset($val['datatype'])) {
            $val['datatype'] = null;
        }
        if (!isset($val['pay'])) {
            $val['pay'] = 0;
        }
        if (!isset($val['show'])) {
            $val['show'] = 0;
        }
        //关键参数
        $val_name = ['title', 'address', 'format', 'mode', 'ask', 'alias', 'target','tuimg'];
        //判断关键参数是否为空
        if (is_empty($val_name, $val)) {
            //数据打包
            $info = [$val['title'], $val['desc'], $val['alias'], $val['address'], $val['format'], $val['mode'], $val['ask'], $val['demo'], $val['example'],  $val['datatype'], $val['show'], $val['tuimg'],$val['pay']];
            //执行插入
            $data = self::$db->exec(ADMIN_ADDAPI, $info);
            //判断插入是否成功
            if ($data >= 1) {
                $l_id =  self::$db->lastInsertId();
                self::$db->exec(ADMIN_API_PRICE, [$l_id]);
                //响应信息
                return response_tips(["code" => "200", 'msg' => "添加成功"]);
            } else {
                //响应信息
                return response_tips(["code" => "203", 'msg' => "添加失败"]);
            }
        } else {
            //响应信息
            return response_tips(["code" => "412", 'msg' => "信息请填写完整"]);
        }
    }

    //接口参数数据写入
    public function exe_apiinfo($val)
    {
        //循环添加
        foreach ($val['data'] as $key => $value) {
            //执行插入
            $info = [$val['optApi'], $val['optType'], $value['name'], $value['type'], $value['desc'], $value['crux']];
            $data = self::$db->exec(ADMIN_IAPINFO, $info);
        }
        return $data;
    }

    //参数设置
    public function apiinfo()
    {
        Authentication::AdminAuth(false);
        $val = Request::post();
        $optType = Request::post('optType');
        $state = false;
        //判断类型
        if ($optType == 0) { //请求参数
            //循环验证参数
            foreach ($val['data'] as $key => $value) {
                if (!is_empty(['name', 'crux', 'type', 'desc'], $value)) {
                    return response_tips(["code" => "412", 'msg' => "信息请填写完整"]);
                }
            }
            $data = self::exe_apiinfo($val);
            $state = true;
        } else if ($optType == 1) { //返回参数
            //循环验证参数
            foreach ($val['data'] as $key => $value) {
                if (!is_empty(['name', 'type', 'desc'], $value)) {
                    return response_tips(["code" => "412", 'msg' => "信息请填写完整"]);
                }
            }
            $data = self::exe_apiinfo($val);
            $state = true;
        } else if ($optType == 2) { //错误参数
            //循环验证参数
            foreach ($val['data'] as $key => $value) {
                if (!is_empty(['name', 'type', 'desc'], $value)) {
                    return response_tips(["code" => "412", 'msg' => "信息请填写完整"]);
                }
            }
            $data = self::exe_apiinfo($val);
            $state = true;
        } else {
            return response_tips(["code" => "412", 'msg' => "不存在的类型"]);
        }

        if ($state === true) {
            if ($data > 0) {
                return response_tips(["code" => "200", 'msg' => "添加成功"]);
            } else {
                return response_tips(["code" => "203", 'msg' => "添加失败"]);
            }
        }
    }

    //网站设置修改
    public function webset()
    {
        Authentication::AdminAuth(false);
        $val = Request::post();
        if (Storage::hold_all(APP_CONFIG . 'webset.php', $val) > 0) {
            return response_tips(['code' => '200', 'msg' => '保存成功']);
        } else {
            return response_tips(['code' => '204', 'msg' => '保存失败']);
        }
    }


    //修改密码
    public function passwd()
    {
        Authentication::AdminAuth(false);
        $val = Request::post();
        $val_name = ['name', "old_passwd", 'new_passwd', 'news_passwd'];
        if (is_empty($val_name, $val)) {
            if (api_md5($val['old_passwd']) == $_SESSION['info']['a_passwd']) {
                if ($val['new_passwd'] == $val['news_passwd']) {
                    $info = [$val['name'], api_md5($val['new_passwd']), $val['name']];
                    $res = self::$db->exec(ADMIN_PASSWD_EDIT, $info); //修改接口
                    if ($res > 0) {
                        return response_tips(["code" => "200", 'msg' => "修改成功"]);
                    } else {
                        return response_tips(["code" => "200", 'msg' => "无数据修改"]);
                    }
                } else {
                    return response_tips(['code' => '203', 'msg' => '两次密码不一致']);
                }
            } else {
                return response_tips(['code' => '203', 'msg' => '原密码输入错误']);
            }
        } else {
            return response_tips(['code' => '412', 'msg' => '传递参数错误']);
        }
    }
    //退出登录
    public function logout()
    {
        unset($_SESSION[api_admin_auth]);
        unset($_SESSION['info']);
        redirect("/admin/login.html");
    }

    //获取表字段
    public function getField()
    {
        Authentication::AdminAuth(false);
        //SHOW FULL COLUMNS FROM api_admin
        $val = Request::post('field');
        if (!empty($val)) {
            $data = self::$db->fetchAll(ADMIN_FIELD . $val);
            foreach ($data as $key => $value) {
                $d[$key] = $value['Field'];
            }
            return response_tips(['code' => '200', 'msg' => '获取成功', 'data' => $d]);
        } else {
            return response_tips(['code' => '412', 'msg' => '信息请填写完整']);
        }
    }

    //添加数据绑定
    public function datainfo()
    {
        Authentication::AdminAuth(false);
        $val = Request::post();
        //数组参数转字符串
        $field = @implode(',', $val['field']);
        //关键参数
        $info = ['optApi', 'table', 'target', 'sort'];
        //验证关键参数
        if (!empty($field) && is_empty($info, $val)) {
            // dd($val);
            //删除原有数据
            $res = self::$db->exec(ADMIN_DELDATA, [$val['optApi']]);
            //添加新数据
            $sql = [$val['optApi'], $val['table'], $field, $val['where'], $val['sort'], $val['sort_field'], $val['val'], $val['item']];
            $data = self::$db->exec(ADMIN_DATAINFO, $sql);
            //判断添加状态
            if ($data >= 0) {
                return response_tips(["code" => "200", 'msg' => "添加成功"]);
            } else {
                return response_tips(["code" => "203", 'msg' => "添加失败"]);
            }
        } else {
            return response_tips(['code' => '412', 'msg' => '信息请填写完整']);
        }
    }

    //删除接口
    public function delapi()
    {
        Authentication::AdminAuth(false);
        $val = Request::post("id");
        if (!empty($val)) {
            //删除数据
            $data = self::$db->exec(ADMIN_DELAPI, [$val]);
            if ($data > 0) {
                return response_tips(["code" => "200", 'msg' => "删除成功"]);
            } else {
                return response_tips(["code" => "203", 'msg' => "删除错误"]);
            }
        } else {
            return response_tips(['code' => '412', 'msg' => '传递参数错误']);
        }
    }

    //删除参数
    public function delval()
    {
        Authentication::AdminAuth(false);
        $val = Request::post("id");
        if (!empty($val)) {
            //删除数据
            $data = self::$db->exec(ADMIN_DELVAL, [$val]);
            if ($data > 0) {
                return response_tips(["code" => "200", 'msg' => "删除成功"]);
            } else {
                return response_tips(["code" => "203", 'msg' => "删除错误"]);
            }
        } else {
            return response_tips(['code' => '412', 'msg' => '传递参数错误']);
        }
    }

    //获取参数
    public function getVal()
    {
        Authentication::AdminAuth(false);
        $id = Request::post("id"); //接口id
        $type = Request::post("type"); //指定类型参数
        if (!empty($id) && !empty($type)) {
            //查询参数数据
            $data = self::$db->fetchAll(ADMIN_VALDOC, [$id]); //参数
            $d = [];
            //数据筛选
            $i = 0;
            foreach ($data as $key => $value) {
                if ($value['p_api_type'] == ($type - 1)) {
                    $d[$i] = $value;
                    $i++;
                }
            }
            //判断数据是否空
            if ($d) {
                return response_tips(["code" => "200", 'msg' => "获取成功", "data" => $d]);
            } else {
                return response_tips(["code" => "203", 'msg' => "无数据", 'data' => []]);
            }
        } else {
            return response_tips(['code' => '412', 'msg' => '传递参数错误']);
        }
    }

    //修改接口
    public function editapi()
    {
        Authentication::AdminAuth(false);
        $val = Request::post();
        if (!isset($val['datatype'])) {
            $val['datatype'] = '';
        }
        if (!isset($val['pay'])) {
            $val['pay'] = "0";
        }
        if (!isset($val['show'])) {
            $val['show'] = "0";
        }
        //关键数据
        $val_name = [
            'title', 
            'address', 
            'format', 
            'mode', 
            'ask', 
            // 'tuimg', 
            'alias', 
            'id'];
        //判断关键数据是否存在
        if (is_empty($val_name, $val)) {
            //修改数据
            $info = [$val['title'], $val['desc'], $val['alias'], $val['tuimg'], $val['address'], $val['format'], $val['mode'], $val['ask'], $val['demo'], $val['example'], $val['datatype'], $val['show'], $val['pay'], $val['id']];
            $res = self::$db->exec(ADMIN_EDITAPIINFO, $info); //修改接口
            //判断修改是否成功
            if ($res > 0) {
                return response_tips(["code" => "200", 'msg' => "修改成功"]);
            } else {
                return response_tips(["code" => "200", 'msg' => "无数据修改"]);
            }
        } else {
            return response_tips(['code' => '412', 'msg' => '传递参数错误']);
        }
    }

    //会员编辑
    public function useredit()
    {
        Authentication::AdminAuth(false);
        $val = Request::post();
        $val_name = ['user', 'email'];
        if (!is_numeric($val['balance'])) {
            return response_tips(['code' => '412', 'msg' => '传递参数错误']);
        }

        if (is_empty($val_name, $val)) {
            //查询账号
            $data = self::$db->fetchRow(USER_LOGIN, [$val['user']]);
            if ($data > 0) {
                $balance = $val['balance'] + $data['u_balance'];
                //修改数据
                $info = [$val['user'], $val['email'], $balance, $val['id']];
                $res = self::$db->exec(ADMIN_USER_EDIT, $info); //修改余额
                $date = date('YmdHis') . time();
                //判断修改是否成功
                if ($res > 0) {
                    $log = [$val['user'], $val['balance'], $val['balance'], 0,  $date, "人工加款", time(), 2, time()];
                    self::$db->exec(WEB_USER_ADDFUNDS, [$log]); //添加加款记录
                    return response_tips(["code" => "200", 'msg' => "保存成功"]);
                } else {
                    return response_tips(["code" => "200", 'msg' => "保存成功"]);
                }
            } else {
                return response_tips(['code' => '203', 'msg' => '用户不存在']);
            }
        } else {
            return response_tips(['code' => '412', 'msg' => '传递参数错误']);
        }
    }

    //会员删除
    public function deluser()
    {
        Authentication::AdminAuth(false);
        $id = Request::post('id');
        if (!empty($id)) {
            //删除数据
            $data = self::$db->exec(ADMIN_USER_DEL, [$id]);
            if ($data > 0) {
                return response_tips(["code" => "200", 'msg' => "删除成功"]);
            } else {
                return response_tips(["code" => "203", 'msg' => "删除错误"]);
            }
        } else {
            return response_tips(['code' => '412', 'msg' => '传递参数错误']);
        }
    }

    //接口价格修改
    public function charge()
    {
        Authentication::AdminAuth(false);
        $val = Request::post();
        if (!is_numeric($val['month']) || !is_numeric($val['season']) || !is_numeric($val['year'])) {
            return response_tips(['code' => '412', 'msg' => '传递参数错误']);
        }
        //关键数据
        $val_name = ['id'];
        //判断关键数据是否存在
        if (is_empty($val_name, $val)) {
            //修改数据
            $info = [$val['month'], $val['season'], $val['year'], $val['id']];
            $res = self::$db->exec(ADMIN_Price_edit, $info); //修改接口
            //判断修改是否成功
            if ($res > 0) {
                return response_tips(["code" => "200", 'msg' => "修改成功"]);
            } else {
                return response_tips(["code" => "200", 'msg' => "数据未改变"]);
            }
        } else {
            return response_tips(['code' => '412', 'msg' => '传递参数错误']);
        }
    }


    //邮箱配置
    public function email()
    {
        Authentication::AdminAuth(false);
        $val = Request::post();
        if (Storage::hold_all(APP_CONFIG . 'email.php', $val) > 0) {
            return response_tips(['code' => '200', 'msg' => '保存成功']);
        } else {
            return response_tips(['code' => '204', 'msg' => '保存失败']);
        }
    }


    //添加会员
    public function adduser()
    {
        Authentication::AdminAuth(false);
        $val = Request::post();
        //关键字段
        $val_name = ['username', 'password', 'email'];
        //判断关键字段是否为空
        if (is_empty($val_name, $val)) {
            //验证邮箱格式
            if (!filter_var($val['email'], FILTER_VALIDATE_EMAIL)) {
                return response_tips(["code" => "204", 'msg' => "邮箱格式不正确"]);
            }
            //查询用户是否存在
            $data = self::$db->fetchRow(USER_LOGIN, [$val['username']]);
            //判断查询结果
            if ($data > 0) {
                return response_tips(["code" => "203", 'msg' => "用户已存在"]);
            }
            $data = self::$db->fetchRow(USER_LOGIN_EMAIL, [$val['email']]);
            //判断邮箱是否已经使用
            if ($data > 0) {
                return response_tips(["code" => "203", 'msg' => "该邮箱已绑定"]);
            }
            //添加新数据
            $sql = [$val['username'], api_md5($val['password']), $val['email'], $val['balance']];
            $res = self::$db->exec(USER_REGISTER, $sql);
            //判断添加状态
            if ($res > 0) {
                return response_tips(["code" => "200", 'msg' => "注册成功"]);
            } else {
                return response_tips(["code" => "203", 'msg' => "注册失败"]);
            }
        } else {
            return response_tips(['code' => '412', 'msg' => '信息请填写完整']);
        }
    }

    //redis保存
    public function redis()
    {
        Authentication::AdminAuth(false);
        $val = Request::post();
        if (Storage::hold_all(APP_CONFIG . 'redis.php', $val) > 0) {
            return response_tips(['code' => '200', 'msg' => '保存成功']);
        } else {
            return response_tips(['code' => '204', 'msg' => '保存失败']);
        }
    }

    // 获取接口文件列表
    public function getApiFile()
    {
        Authentication::AdminAuth(false);
        $val = Request::post();
        // 
        $path = APP_VIEW_PATH . 'api/' . $val['optapi'];
        $data = getFileNameAll($path);
        return response_tips(['code' => '200', 'msg' => '选定成功', 'data' => $data]);
    }

    // 获取接口文件内容
    public function getApiFileC()
    {
        Authentication::AdminAuth(false);
        $val = Request::post();
        $path = APP_VIEW_PATH . 'api/' . $val['optapi'] . '/' . $val['file'];
        if (file_exists($path)) {
            $code = file_get_contents($path);
            return response_tips(['code' => '200', 'msg' => '获取成功', 'content' => $code]);
        } else {
            return response_tips(['code' => '204', 'msg' => '文件不存在', 'content' => '']);
        }
    }

    // 接口文件上传
    public function putApiFile()
    {
        Authentication::AdminAuth(false);
        $val = Request::post();
        $path = APP_VIEW_PATH . 'api/' . $val['op'] . '/';

        $dir = iconv("UTF-8", "GBK", APP_VIEW_PATH . 'api/' . $val['op']); //文件夹路径

        if (!file_exists($path)) {
            mkdir($dir);
        }

        $res = upload_file(Request::file('file'), $path, $_FILES['file']['name'], ["*"]);
        if ($res['code'] == 1) {
            if ($_FILES['file']['type'] == 'application/x-zip-compressed') {
                // 实例化压缩文件类
                $zip = new \ZipArchive;
                if ($zip->open($path . $_FILES['file']['name']) === TRUE) {
                    //中文文件名要使用ANSI编码的文件格式
                    $zip->extractTo($path); //提取全部文件
                    // 关闭操作
                    $zip->close();
                    // 移除安装包
                    unlink($path . $_FILES['file']['name']);
                    echo "<script>alert('上传解压成功');history.go(-1);</script>";
                } else {
                    echo "<script>alert('解压失败');history.go(-1);</script>";
                }
            } else {
                echo "<script>alert('上传成功');history.go(-1);</script>";
            }
        } else {
            echo "<script>alert('上传失败');history.go(-1);</script>";
        }
    }

    // 修改接口文件内容
    public function editFile()
    {
        Authentication::AdminAuth(false);
        $val = Request::post();
        $path = APP_VIEW_PATH . 'api/' . $val['optapi'] . '/' . $val['filename'];


        if ($val['content'] == '') {
            unlink($path);
            return response_tips(['code' => '200', 'msg' => '文件已删除']);
        }

        $res = file_put_contents($path, $val['content']);
        if ($res) {
            return response_tips(['code' => '200', 'msg' => '保存成功']);
        } else {
            return response_tips(['code' => '204', 'msg' => '保存失败']);
        }
    }
}
