<?php
$mailpz = require_once APP_CONFIG . "email.php";
require_once __DIR__ . "/functions.php";
if (!empty($mailpz) && !empty($mailpz['mail_pwd'])) {
	if (@$info['to'] && @$info['title'] && @$info['content']) {
		$to = $info['to'];
		$title = $info['title'];
		$content = $info['content'];
		$sendMail = sendMail($to, $title, $content);
		if ($sendMail) {
			if ($ts) {
				return response_tips(['code' => '200', 'msg' => '邮件发送成功,请注意查收！']);
			}
		} else {
			if ($ts) {
				return response_tips(['code' => '203', 'msg' => '邮件发送失败']);
			}
		}
	} else {
		if ($ts) {
			return response_tips(['code' => '204', 'msg' => '邮件发送失败,错误的内容格式']);
		}
	}
} else {
	if ($ts) {
		return response_tips(['code' => '412', 'msg' => '管理员未开启邮箱服务']);
	}
}
