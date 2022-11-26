<?php

class indexController extends Controllers
{

    //用户登录页
    public function login()
    {
        $id = Request::get('id');
        view("user/login");
    }

    //用户注册页
    public function register()
    {
        $web = config('webset');
        $emailRegister = isset($web['emailRegister']) ? $web['emailRegister'] : "";
        view("user/register", ['emailRegister' => $emailRegister]);
    }

    //密码找回页
    public function forget()
    {
        view("user/forget");
    }

    //登录验证码
    public function logincode()
    {
        return captcha("code");
        // view("user/code", [], ".php");
    }

    //用户首页
    public function index()
    {
        Authentication::UserAuth();
        //api动态
        $data['api'] = self::$db->fetchAll(ADMIN_ADDLIST);
        //用户已购api
        $data['u_api'] = self::$db->fetchAll(USER_API_N, [$_SESSION['userinfo']['u_id']]);
        //累计收益
        $mn = self::$db->fetchAll(USER_xPAY, [$_SESSION['userinfo']['u_id']]);
        $m = 0;
        foreach ($mn as $key => $value) {
            $m = $m + $value['o_price'];
        }
        $data['profit'] = $m;
        view("user/index", ['data' => $data]);
    }

    //订单页面
    public function order()
    {
        Authentication::UserAuth();
        $id = Request::get('id');
        $data = self::$db->fetchRow(GOODS_DESC, [$id]);
        view("user/order", ["data" => $data]);
    }

    //商品列表
    public function goods()
    {
        Authentication::UserAuth();
        $data = self::$db->fetchAll(ADMIN_ADDLIST2, [1]);
        view("user/goods", ['data' => $data]);
    }

    //购买记录
    public function buyapi()
    {
        Authentication::UserAuth();
        $data = self::$db->fetchAll(USER_gRecord, [$_SESSION['userinfo']['u_id']]);
        view("user/buyapi", ['data' => $data]);
    }

    //充值记录
    public function buypay()
    {
        Authentication::UserAuth();
        //账单数据查询
        $data = self::$db->fetchAll(PAY_BILL, [$_SESSION['userinfo']['u_name']]);
        view("user/buypay", ['data' => $data]);
    }

    //修改密码
    public function passwd()
    {
        Authentication::UserAuth();
        view("user/passwd");
    }

    //我的接口
    public function owned()
    {
        Authentication::UserAuth();
        $data = self::$db->fetchAll(USER_API, [$_SESSION['userinfo']['u_id']]);
        // dd($data);
        view("user/owned", ['data' => $data]);
    }

    //接口配置
    public function apiedit()
    {
        Authentication::UserAuth();
        $id = Request::get('id');
        //接口数据查询
        $data = self::$db->fetchRow("SELECT * FROM api_owned WHERE ow_id = ?", [$id]);
        // dd($data);
        view("user/apiedit", ['data' => $data]);
    }
}
