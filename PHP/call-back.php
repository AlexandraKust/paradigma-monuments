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


$mail->Subject = 'Обратный звонок';
$mail->msgHTML('Пользователь с номером ' . $phone . ' хочет чтобы ему перезвонили.');

$result = $mail->send();

if (!$result) {
	header('location: ../404.html');
} else {
	header('location: ../thanks.html');
}

?>