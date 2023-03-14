<?php

require 'settings.php';

use PHPMailer\PHPMailer\PHPMailer;

require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/Exception.php';

$phone = $_POST['phone'];
$material = $_POST['material'];
$social = $_POST['social'];

$attachment = $_FILES['file'];

$mail = new PHPMailer();

$mail->setFrom($sender, $site_name);
$mail->addAddress($recipient, '');
$mail->CharSet = "utf-8";


$mail->Subject = 'Получить каталог';
$mail->msgHTML('Пользователь с номером ' . $phone . ' хочет получить каталог с ' . $material . '. Способ связи: ' . $social . '.');

if (isset($attachment) && $attachment['error'] == UPLOAD_ERR_OK) {
    $mail->addAttachment($attachment['tmp_name'], $attachment['name']);
}

$result = $mail->send();

if (!$result) {
    header('location: ../404.html');
} else {
    header('location: ../thanks.html');
}