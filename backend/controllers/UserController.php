<?php
namespace backend\controllers;

use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\filters\VerbFilter;
use backend\models\User;
use traits\Sender;

/**
 * Site controller
 */
class UserController extends Controller
{
    use \traits\Message\Sender;

    public function behaviors()
    {
        return [
            'slug' => [
                'class' => 'common\behaviors\Slug',
                'in_attribute' => 'name',
                'out_attribute' => 'slug',
                'translit' => true
            ]
        ];
    }

    /**
     * @inheritdoc
     */
    public function actions()
    {
        return [
            'error' => [
                'class' => 'yii\web\ErrorAction',
            ],
        ];
    }

    public function actionIndex()
    {
        echo 111;
    }

    public function actionLogin()
    {
        if (!\Yii::$app->user->isGuest) {
            return $this->goHome();
        }

        $model = new User();
        if ($model->load(Yii::$app->request->post()) && $model->login()) {
            return $this->goBack();
        } else {
            return $this->render('login', [
                'model' => $model,
            ]);
        }
    }

    public function actionLogout()
    {
        Yii::$app->user->logout();

        return $this->goHome();
    }

    public function actionUsernameIsDuplicate($username)
    {
        $model = new User();

        echo $model->usernameIsDuplicate($username);
    }

    public function actionAuth()
    {
        $model = new User();

        if ($model->load(Yii::$app->request->post()) && $model->login())
        {
            $authToken = $model->getAuthKey();

            $sender = new Sender(true, "Авторизация успешна", ['authToken' => $authToken]);
            $sender->send();
        }

    }

    public function actionRegister()
    {
        $model = new User();

        if ($model->load(Yii::$app->request->post()) && $model->validate())
        {
            if($model->save())
            {
                $sender = new Sender(true, "Регистрация прошла успешно");
                $sender->send();
            }

        }
    }
}
