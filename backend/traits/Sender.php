<?php

namespace traits\Message;

use backend\models\Message;

//Отправка сообщений через контроллеры
trait Sender
{
    private $message;

    public function __construct($status, $message, $data = [])
    {
        $this->message = new Message($status, $message, $data);
    }

    public static function sendDefault()
    {
        self::$message = Message::defaultMessage();
        self::renderAjax(['status' => self::$message->status, 'message' => self::$message->message, 'data' => self::$message->data]);
    }

    public function send()
    {
        self::renderAjax(['status' => $this->$message->status, 'message' => $this->$message->message, 'data' => $this->$message->data]);
    }
}