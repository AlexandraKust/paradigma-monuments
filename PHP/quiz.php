<?php

require 'settings.php';

use PHPMailer\PHPMailer\PHPMailer;

require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/Exception.php';

$phone = $_POST['phone'];
$social = $_POST['social'];

$question_1 = $_POST['title-1'];
$answer_1 = $_POST['quiz1[]'];

$question_2 = $_POST['title-2'];
$answer_2 = $_POST['quiz2[]'];

$question_3 = $_POST['title-3'];
$array_of_answer_3 = $_POST['quiz3[]'];
$answer_3 = '';

$question_4 = $_POST['title-4'];
$array_of_answer_4 = $_POST['quiz4[]'];
$answer_4 = '';

$question_5 = $_POST['title-5'];
$answer_5 = $_POST['quiz5[]'];

$question_6 = $_POST['title-6'];
$answer_6 = $_POST['quiz6[]'];

$question_7 = $_POST['title-7'];
$answer_7 = $_POST['quiz7[]'];


$mail = new PHPMailer();

$mail->setFrom($sender, $site_name);
$mail->addAddress($recipient, '');
$mail->CharSet = "utf-8";

foreach($array_of_answer_3 as $answer) {
    $answer_3 = $answer_3 . $answer . ', ';
}

$answer_3 = rtrim($answer_3, ', ');

foreach($array_of_answer_4 as $answer) {
    $answer_4 = $answer_4 . $answer . ', ';
}

$answer_4 = rtrim($answer_4, ', ');

$mail->Subject = 'Квиз опрос пройден';
$mail->msgHTML('Пользователь с номером ' . $phone . ' прошел квиз-опрос.<br/><br/>' .
'Его ответы:<br/><br/>' .
'Вопрос №1: ' . $question_1 . '<br/>' .
'Ответ: '     . $answer_1   . '<br/><br/>' .
'Вопрос №2: ' . $question_2 . '<br/>' .
'Ответ: '     . $answer_2   . '<br/><br/>' .
'Вопрос №3: ' . $question_3 . '<br/>' .
'Ответ: '     . $answer_3   . '<br/><br/>' .
'Вопрос №4: ' . $question_4 . '<br/>' .
'Ответ: '     . $answer_4   . '<br/><br/>' .
'Вопрос №5: ' . $question_5 . '<br/>' .
'Ответ: '     . $answer_5   . '<br/><br/>' .
'Вопрос №6: ' . $question_6 . '<br/>' .
'Ответ: '     . $answer_6   . '<br/><br/>' .
'Вопрос №7: ' . $question_7 . '<br/>' .
'Ответ: '     . $answer_7   . '<br/><br/>' .
'Способ связи: ' . $social . '.');

$result = $mail->send();

if (!$result) {
    header('location: ../404.html');
} else {
    header('location: ../thanks.html');
}