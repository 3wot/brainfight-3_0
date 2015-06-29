<?php
namespace traits\Message;

trait Message
{
    public $status;
    public $message;
    public $data;

    public function __construct($status, $message, $data)
    {
        $this->status = $status;
        $this->message = $message;
        $this->data = $data;
    }

    public function send()
    {
        $this->renderAjax(['status' => $this->status, 'message' => $this->message, 'data' => $this->data]);
    }

    public static function defaultMessage()
    {
        return new Message(0, "Произошла неизвестная ошибка", []);
    }
}