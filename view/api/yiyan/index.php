<?php 
// 对接免费api api.aa1.cn 无需修改
// 输出的接口不会显示api.aa1.cn 
// 接口
$url = 'https://v.api.aa1.cn/api/yiyan/index.php';
$result = file_get_contents("$url");
echo $result;
?>