<?php
namespace frontend\controllers;

use Yii;
use yii\web\Controller;

/**
 * Site controller
 */
class SiteController extends Controller
{
    public function actionIndex()
    {
        //Просто отдаем frontend
        return $this->renderFile('../../site/views/index.html');
    }
}
