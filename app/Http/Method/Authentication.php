<?php

//认证类
class Authentication extends Controllers
{
    /**
     * 后台验证
     * @param bool $redirect 是否跳转
     */
    public static function AdminAuth($redirect = true, $updata = true)
    {
        //填充数据
        $info = [
            $_SESSION['info']['a_name'], $_SESSION['info']['a_passwd']
        ];
        //判断参数是否为空
        if (empty($info)) {
            //清除Session
            unset($_SESSION[api_admin_auth]);
            unset($_SESSION['info']);
            if ($redirect === true) {
                return redirect('/../'. ADMIN_PATH .'/login.html');
            } else {
                response_tips(["code" => "401", "msg" => "非法操作"]);
                exit();
            }
        }
        //查询信息
        $data = self::$db->fetchRow(ADMIN_LOGIN, $info);
        //判断信息是否为空
        if (!$data) {
            //清除Session
            unset($_SESSION[api_admin_auth]);
            unset($_SESSION['info']);
            if ($redirect === true) {
                return redirect('/../'. ADMIN_PATH .'/login.html');
            } else {
                response_tips(["code" => "401", "msg" => "非法操作"]);
                exit();
            }
        }
        if ($updata === true) {
            $_SESSION['info'] = $data;
        }
        //返沪数据
        return $data;
    }

    //用户验证
    public static function UserAuth($redirect = true, $updata = true)
    {
        //填充数据
        $info = [
            $_SESSION['userinfo']['u_name']
        ];
        //判断参数是否为空
        if (empty($info)) {
            //清除Session
            unset($_SESSION[api_user_auth]);
            unset($_SESSION['userinfo']);
            if ($redirect === true) {
                return redirect('/../user/login.html');
            } else {
                response_tips(["code" => "401", "msg" => "非法操作"]);
                exit();
            }
        }
        //查询信息
        $data = self::$db->fetchRow(USER_LOGIN, $info);
        //判断信息是否为空
        if (!$data) {
            //清除Session
            unset($_SESSION[api_user_auth]);
            unset($_SESSION['userinfo']);
            if ($redirect === true) {
                return redirect('/../user/login.html');
            } else {
                response_tips(["code" => "401", "msg" => "非法操作"]);
                exit();
            }
        }
        if ($updata === true) {
            $_SESSION['userinfo'] = $data;
        }
        //返沪数据
        return $data;
    }
}
