<?php
// данные
$phone = $_POST['phone'];
$social = $_POST['social'];
$material = $_POST['material'];

$question_1 = $_POST['title-1'];
$answer_1 = $_POST['quiz1[]'];

$question_2 = $_POST['title-2'];
$answer_2 = $_POST['quiz2[]'];

$question_3 = $_POST['title-3'];
$answer_3 = $_POST['quiz3[]'];
$answer_3_all = implode(", ", $answer_3);

$question_4 = $_POST['title-4'];
$answer_4 = $_POST['quiz4[]'];
$answer_4_all = implode(", ", $answer_4);

$question_5 = $_POST['title-5'];
$answer_5 = $_POST['quiz5[]'];

$question_6 = $_POST['title-6'];
$answer_6 = $_POST['quiz6[]'];

$question_7 = $_POST['title-7'];
$answer_7 = $_POST['quiz7[]'];

// Файлы phpmailer
require 'class.phpmailer.php';
require 'class.smtp.php';

// Настройки
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';
//$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'formsajt987@gmail.com'; // Ваш логин в Яндексе. Именно логин, без @yandex.ru
$mail->Password = '473-Ghd-%sasd121'; // Ваш пароль
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;
$mail->setFrom('formsajt987@gmail.com', 'Форма с сайта'); // Ваш Email
$mail->addAddress('apkby@tut.by'); // Email получателя
//$mail->addAddress('dlemeshko04@gmail.com'); // Email получателя
//$mail->addAddress('example@gmail.com'); // Еще один email, если нужно.


// Письмо
$mail->isHTML(true);
$mail->Subject = 'Форма с сайта '; // Заголовок письма
if ($_POST['formname'] == 'quiz') {
	$mail->Body    = '
	Пользователь прошёл тест: <br>
	1. ' . $question_1 . ':  ' . $answer_1 . ' <br>
	2. ' . $question_2 . ':  ' . $answer_2 . ' <br>
	3. ' . $question_3 . ':  ' . $answer_3_all . ' <br>
	4. ' . $question_4 . ':  ' . $answer_4_all . ' <br>
	5. ' . $question_5 . ':  ' . $answer_5 . ' <br>
	6. ' . $question_6 . ':  ' . $answer_6 . ' <br>
	7. ' . $question_7 . ':  ' . $answer_7 . ' <br>
	
	Телефон: ' . $phone .' <br>
	Способ связи: ' . $social . ' 
	';

} else if ($_POST['formname'] == 'getcatalog') {
	$mail->Body    = '
	Пользователь просит прислать каталог с ' . $material .'. <br>
	Телефон: ' . $phone .' <br>
	Способ связи: ' . $social . '
	';

} else if ($_POST['formname'] == 'callback') {
	$mail->Body    = '
	Пользователь заказал обратный звонок. <br>
	Телефон: ' . $phone .' <br>
	';

} else if ($_POST['formname'] == 'how') {
	$mail->Body    = '
	Пользователь просит прислать каталог "Как правильно выбрать памятник" <br>
	Телефон: ' . $phone .' <br>
	Способ связи: ' . $social . '
	';
} 

// Результат
if(!$mail->send()) {
	echo 'Message could not be sent.';
	echo 'Mailer Error: ' . $mail->ErrorInfo;
	header('Location: ../404.html');
} else {
	echo 'ok';
	header('Location: ../thanks.html');
}
?>