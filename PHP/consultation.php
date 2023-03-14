<?php

require 'settings.php';

use PHPMailer\PHPMailer\PHPMailer;

require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/Exception.php';

$phone = $_POST['phone'];

$mail = new PHPMailer();

$mail->setFrom($sender, $site_name);
$mail->addAddress($recipient, '');
$mail->CharSet = "utf-8";


$mail->Subject = 'Обсудить задачу';
$mail->msgHTML('Пользователь с номером ' . $phone . ' хочет получить консультацию по подбору памятника.');

$result = $mail->send();