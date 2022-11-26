<?php 
// 对接免费api api.aa1.cn 无需修改
// 输出的接口不会显示api.aa1.cn 
// 接口 2022/11/12
$bzurl = $_GET['url'];
// 无需带https
$url = 'https://v.api.aa1.cn/api/api-bz/temp.php?url='.$bzurl.'';

$result = file_get_contents("$url");

echo $result;
?>