<?php

namespace common\components;

class Request extends \yii\web\Request
{
    public $web;
    public $serviceUrl;

    public function getBaseUrl()
    {
        return str_replace($this->web, "", parent::getBaseUrl()) . $this->serviceUrl;
    }

    public function resolvePathInfo()
    {
        if ($this->getUrl() === $this->serviceUrl) {
            return "";
        } else {
            return parent::resolvePathInfo();
        }
    }
}

?>