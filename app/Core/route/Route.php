<?php

/**
 *	路由类
 */
class  Route
{
  /**
   * 匿名函数
   */
  public static $events = [];
  public static $middleware = false;

  /**
   * 控制器路径
   * @val $Controllerpath
   */
  public static $Controllerpath = __DIR__ . '/../../Http/Controller/';

  /**
   *  未命中处理
   */
  public static function miss($method, $action = null)
  {
    //获取参数原型
    $req = self::valarr();
    //设置地址参数
    Request::$request = $req;
    //执行函数还是控制器方法
    self::ifimp("", $method, $action);
    exit();
  }

  /**
   * any请求方法
   * @param string $rule 地址规则
   * @param mixed $method 方法/控制器
   * @param mixed $action 行动
   */
  public static function any($rule, $method, $action = null)
  {
    switch ($_SERVER['REQUEST_METHOD']) {
      case 'GET':
        self::get($rule, $method, $action);
        break;
      case 'POST':
        self::post($rule, $method, $action);
        break;
      case 'PUT':
        self::all($rule, $method, $action);
        break;
      case 'OPTIONS':
        self::all($rule, $method, $action);
        break;
      case 'HEAD':
        self::all($rule, $method, $action);
        break;
      case "DELETE":
        self::all($rule, $method, $action);
        break;
      case 'FILES':
        self::post($rule, $method, $action);
        break;
      default:
        exit("不支持的请求类型：" . $_SERVER['REQUEST_METHOD']);
        break;
    }
  }

  /**
   * 任意请求
   * @param string $rule 地址规则
   * @param mixed $method 方法/控制器
   * @param mixed $action 行动
   */
  public static function all($rule, $method, $action = null)
  {
    //获取参数原型
    $req = self::valarr();
    //如果是带参数地址则往下执行，否者执行其他
    if (self::getmatch($rule, $req)) {
      //设置地址参数
      Request::$request = $req;
      //设置地址规则
      Request::$rule = $rule;
      //执行函数还是控制器方法
      self::ifimp($rule, $method, $action);
      exit();
    } else {
      //判断路由是否一致
      if ($rule == $req) {
        //设置地址参数
        Request::$request = $req;
        //设置地址规则
        Request::$rule = $rule;
        //执行函数还是控制器方法
        self::ifimp($rule, $method, $action);
        exit();
      }
    }
  }


  /**
   * get请求方法
   * @param string $rule 地址规则
   * @param mixed $method 方法/控制器
   * @param mixed $action 行动
   */
  public static function get($rule, $method, $action = null)
  {
    // echo $rule;
    //获取参数原型
    $req = self::valarr();
    //判断请求类型是否是GET
    if ($_SERVER['REQUEST_METHOD'] == 'GET') {
      //如果是带参数地址则往下执行，否者执行其他
      if (self::getmatch($rule, $req)) {
        //设置地址参数
        Request::$request = $req;
        //设置地址规则
        Request::$rule = $rule;
        //执行函数还是控制器方法
        self::ifimp($rule, $method, $action);
        exit();
      } else {
        //清除浏览地址自带参数
        if (strpos($req, "?") > 0) {
          $reqs = substr($req, 0, strpos($req, "?"));
        } else {
          $reqs = substr($req, 0);
        }
        //判断路由是否一致
        if ($rule == $reqs) {
          //设置地址参数
          Request::$request = $req;
          //设置地址规则
          Request::$rule = $rule;
          //执行函数还是控制器方法
          self::ifimp($rule, $method, $action);
          exit();
        }
      }
    }
  }

  /**
   * 地址参数原型
   * @return string 除域名外的地址部分
   */
  public static function valarr()
  {
    // //传值格式  apache
    if (isset($_SERVER['REDIRECT_URL'])) {
      //nginx
      if (isset($_SERVER['REQUEST_URI'])) {
        $request = $_SERVER['REQUEST_URI'];
      } {
        $request = $_SERVER['REQUEST_URI'];
      }
    } else {
      if (isset($_SERVER['REQUEST_URI'])) {
        $request = $_SERVER['REQUEST_URI'];
      } else {
        $request = '/';
      }
    }
    return $request;
  }

  /**
   * post请求
   * @param string $rule 地址规则
   * @param mixed $method 方法/控制器
   * @param mixed $action 行动
   */
  public static function post($rule, $method, $action = null)
  {
    //获取参数原型
    $req = self::valarr();
    //判断请求类型是否是POST
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
      //如果是带参数地址则往下执行，否者执行其他
      if (self::getmatch($rule, $req)) {
        //设置地址参数
        Request::$request = $req;
        //设置地址规则
        Request::$rule = $rule;
        //执行函数还是控制器方法
        self::ifimp($rule, $method, $action);
        exit();
      } else {
        //判断路由是否一致
        if ($rule == $req) {
          //设置地址参数
          Request::$request = $req;
          //设置地址规则
          Request::$rule = $rule;
          //执行函数还是控制器方法
          self::ifimp($rule, $method, $action);
          exit();
        }
      }
    }
  }

  /**
   * 判断执行行为
   * @param string $rule 地址规则
   * @param mixed $method 方法/控制器
   * @param mixed $action 行动
   */
  public static function ifimp($rule, $method, $action)
  {
    //判断变量类型 string使用控制器方法
    if (gettype($method) == 'string') {
      //执行控制器中方法
      self::impController($method);
    } else {
      //直接执行方法
      self::impEvent($rule, $method, $action);
    }
  }

  /**
   * 执行控制器方法
   * @param mixed $method 方法/控制器名
   */
  public static function impController($method)
  {

    //获取控制器文件与方法名
    $contnum = strpos($method, "@");
    if ($contnum > 0) {
      //截取左边控制器
      $contleft = substr($method, 0, $contnum);
      //截取右边方法
      $contright = substr($method, $contnum + 1);
      //二级目录
      $catleft = '';
      //获取是否存在二级目录
      $catalog = strpos($method, "/");
      if ($catalog > 0) {
        //截取二级目录
        $catleft = substr($contleft, 0, $catalog + 1);
        //截取控制器名
        $contleft = substr($contleft, $catalog + 1);
      }
      //控制器文件路径
      $_path = self::$Controllerpath . $catleft . $contleft . '.php';
      //判断控制器文件是否存在
      if (is_file($_path)) {
        //引入控制器文件
        require $_path;
        //判断控制器是否存在
        if (class_exists($contleft)) {
          //判断控制器中的方法名是否存在
          if (method_exists($contleft, $contright)) {
            //实例化用户请求类并调用方法
            (new $contleft())->$contright();
            exit();
          } else {
            if (APP_DEBUG) {
              echo '控制器' . $contleft . '中不存在方法' . $contright;
            }
            exit();
          }
        } else {
          if (APP_DEBUG) {
            echo '不存在控制器' . $contleft;
          }
          exit();
        }
      } else {
        if (APP_DEBUG) {
          echo '不存在控制器文件' . $contleft . '.php';
        }
        exit();
      }
    }
  }

  /**
   * 验证地址
   * @param string $val 路由规则
   * @param string $url 地址原型
   */
  public static function getmatch($val, $url)
  {
    //正则匹配所有地址参数
    preg_match_all('/{(.*)}/U', $val, $data);
    //如果地址参数存在
    if (isset($data[1][0])) {
      //地址原型
      $match = $val;
      //循环地址参数
      foreach ($data[1] as $key => $value) {
        //循环替换形成正则规则 
        $match = str_replace('{' . $value . '}', '(.*)', $match);
      }
      //为正则规则特殊字符进行处理
      $match = str_replace('/', '\/', $match);
      //合并正则规则
      $match = '#' . $match . '#';
      //判断匹配是否正确
      if (preg_match($match, $url, $dat)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  /**
   * 执行方法
   * @param string $event 方法名
   * @param mixed $callback 方法整体
   * @param mixed $obj 附加行动
   */
  private static function impEvent($event, $callback, $obj = null)
  {
    //将匿名函数，或对象与方法存入属性
    self::$events[$event][] = ($obj === null) ? $callback : [$obj, $callback];
    if (!self::$events[$event]) return;
    foreach (self::$events[$event] as $callback) {
      if (call_user_func($callback) === false) break;
    }
  }
}
