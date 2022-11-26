<?php
//实例化一个Redis
$redis = new Redis();
//Redis 连接
$redis->connect('127.0.0.1', $cof['redis_port']);
$redis->auth($cof['redis_pass']); //密码验证
if ($redis->ping() != '+PONG') {
  exit("Redis异常");
}
if (!isset($key)) {
  //获取客户端IP
  $key = get_real_ip();
}

//限制次数访问次数
$limit =  $cof['redis_next'];
//获取一个key
$check = $redis->exists($key);
//判断key是否存在
if ($check) {
  //将key中储存的数字值增一。如果key不存在，以0为key的初始值
  $redis->incr($key);
  //返回key所关联的字符串值。如果key不存在，返回nil。
  $count = $redis->get($key);
  //判断周期内的执行次数
  if ($count > $limit) {
    exit($cof['redis_msg']);
  }
} else {
  //将key中储存的数字值增一。如果key不存在，以0为key的初始值
  $redis->incr($key);
  //设置生命周期为x秒
  $redis->expire($key, $cof['redis_period']);
}

//返回key所关联的字符串值。如果key不存在，返回nil。
$count = $redis->get($key);
