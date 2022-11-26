# 夏柔免费API管理系统

#### 介绍
基于ZeroArt二开美化
页面方式仿的ApiFox，严禁商用，仅供学习测试交流

🔥 内置100+免费接口（远程），部署即用，内置的远程接口可持续提供调用服务！

#### 首页
![image.png](https://cdnjson.com/images/2022/11/26/image.png)#### 文档页
![截屏2022-11-26 20.22.46.png](https://tucdn.wpon.cn/2022/11/26/1ebb36a1ba015.png)

#### 安装教程

1.  将源代码 **Clone** 到本地
2.  修改  **/config/database.php**  配置数据库项
3.  导入数据库，访问前台

#### 网站相关配置

后台地址： **http(s)://domain.com/admin** 
后台账户： **admin** 
登录密码： **123456** 

用户中心：**http(s)://domain.com/user** 


#### 更新介绍

2022/11/26
1.  修改首页、文章样式
2.  添加自定义接口图片功能

#### 使用说明

1.  严禁使用本程序进行部署色情、反政府等违法接口
2.  严禁商用，仅供学习测试交流

#### 参与贡献

1.  Fork 本仓库
2.  ZeroArt（原作者）
3.  夏柔

Better because of focus

## 一、路由

## 1.GET请求

> GET请求直接写函数示例
```php
//GET请求直接写函数示例
Route::get("/", function () {
	echo 'GET请求直接写函数方法';
});
```

> GET请求使用控制器示例
```php
//GET请求使用控制器示例
Route::get("/", "indexController@index");
```

> GET请求带地址参数示例
```php
//GET请求带地址参数示例
Route::get("/del/{id}", function () {
    //获取get请求所有参数方法
	var_dump(Request::get());
    //获取get请求指定参数方法
    echo Request::get('id');
});
```

## 2.POST请求

> POST请求直接写函数示例
```php
//POST请求直接写函数示例
Route::post("/", function () {
	echo 'POST请求直接写函数方法';
});
```

> POST请求使用控制器示例
```php
//POST请求使用控制器示例
Route::post("/", "indexController@index");
```

> POST和GET请求混合带地址参数示例
```php
//POST和GET请求混合带地址参数示例
Route::post("/del/{id}", function () {
    //获取get请求指定参数方法
    echo Request::get('id');
    //获取post请求指定参数方法
    echo Request::post('key');
});
```

## 3.miss未预设请求处理

> POST请求直接写函数示例
```php
//非预设请求直接写函数示例
Route::miss(function () {
	echo '非预设请求直接写函数示例';
});
```

> POST请求使用控制器示例
```php
//POST请求使用控制器示例
Route::post("indexController@miss");
```

## 二、请求

> get()

```php
//获取所有GET请求参数的值
$get = Request::get();
```

```php
//获取GET请求a参数的值
$get = Request::get('a');
```

> post()

```php
//获取所有POST请求参数的值
$get = Request::post();
```

```php
//获取POST请求a参数的值
$get = Request::post('a');
```

> file()

```php
//获取所有FILES请求参数的值
$get = Request::file();
```

```php
//获取FILES请求a参数的值
$get = Request::file('a');
```

## 三、视图

> 1.视图使用

- 视图方法 `view($file,$data)` 第一个参数为`文件名`（不带后缀，默认后缀为.html） 第二个参数为传到页面上的数据,即`页面参数`为数组型
`["name"=>"张三","info"=>{"age":18,sex:"男"}]`

```php
//载入视图
view('index', ['name' => 'Hello world']);
```

> 2.视图中使用变量 输出name中的值,即 `张三` 
```php
<?php echo $name;?>

//输出：张三
```

> 3.视图中使用变量 输出info中age的值,即 `18` 调用与原生php一样
```php
<?php echo $info['age'];?>

//输出：18
```

> 3.其他封装方法

## 四、文件

> upload_file()

```php
//图片上传
$res = upload_file(Request::file('file'), WWW_PATH . '/upload', time(), ["jpg", "jpeg"]);
echo response_tips($res);

输出：{"code":1,"response":"\/upload\/1580709038.jpg"}
```

## 五、数据库

1.开启数据库 路径【app/Core/switch.php】文件中 把 APP_MYSQL 常量值改为 true 不使用改为false

2.数据库信息配置 路径【config/database.php】文件中

## 六、目录结构

初始的目录结构如下：

~~~
www  WEB部署目录（或者子目录）
├─app                   应用目录
│  ├─Cache              默认缓存目录
│  ├─Core               基础核心模块目录
│  │  ├─database        数据库操作类库目录
│  │  ├─method          框架方法库目录
│  │  ├─route           框架路由目录
│  │  │
│  │  ├─app.php         初始化入库文件
│  │  └─env.php         基础定义文件
│  │
│  ├─Http               命令行工具配置文件
│  │  ├─Controller      控制器目录
│  │  ├─Method          公共方法目录
│  │  └─Model           数据库模型目录
│  │
│  ├─Plugin             第三方插件目录
│  │  ├─smtp            smtp邮件扩展
│  │  ├─default         默认扩展（空）
│  │  └─app.php         扩展初始化文件（暂时废弃）
│  │
│  ├─default.php        公共函数文件
│  └─init.php           系统初始化加载文件
│
├─public                WEB目录（对外访问目录）
│  ├─index.php          入口文件
│  ├─.nginx.htaccess     用于nginx的重写(部分机器可能无法生效)
│  └─.htaccess          用于apache的重写
│
├─route                 系统路由目录
│  └─web.php            路由配置文件
│
├─config                系统配置文件目录
|  ├─app.php            系统自定义配置加载文件
│  └─database.php       数据库配置文件
│
├─view                  框架视图目录
│  └─...                视图模板文件
│
├─LICENSE               授权说明文件
├─README.md             README 文件
~~~