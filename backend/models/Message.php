<?php
namespace backend\models;

//Модель для унификации отправки сообщений
class Message
{

    public $status; //bool
    public $message; //string
    public $data; //array

    public function __construct($status, $message, $data = [])
    {
        $this->status = $status;
        $this->message = $message;
        $this->data = $data;
    }

    public static function defaultMessage()
    {
        return new Message(0, "Произошла неизвестная ошибка", []);
    }


}