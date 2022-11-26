<?php

class CommonController extends Controllers
{
    /**
     * 文件上传
     */
    public function upload()
    {
        $res = upload_file(Request::file('file'), WWW_PATH . '/upload', time(), ["jpg", "jpeg"]);
        echo response_tips($res);
    }
}
