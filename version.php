<?php

// 程序版本
define('APP_VERSION', '2.2');


// 获取版本号
function getVersion($isData = false)
{
    $info = getCurl(base64_decode("aHR0cHM6Ly9hcGkubHlrZXAuY29tL3ZlcnNpb24ucGhw"), ['refer' => $_SERVER['HTTP_HOST']]);
    if ($isData) {
        $data[0] = APP_VERSION;
        $data[1] = $info;
        return $data;
    }
    if (APP_VERSION >= $info) {
        return APP_VERSION;
    }
    return APP_VERSION . base64_decode("PGEgaHJlZj0i") . base64_decode("aHR0cHM6Ly9naXRlZS5jb20vemVyb2FydC9hcGlfc3Btc19vcGVu") . base64_decode("IiAgdGFyZ2V0PSJfYmxhbmsiIHN0eWxlPSJtYXJnaW4tbGVmdDogMTJweDsgY29sb3I6IHJlZDsiPuacgOaWsOeJiOacrO+8mg") . $info . base64_decode("PC9hPg");
}
