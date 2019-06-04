<?php
$name    = $_POST['name'];
$email   = $_POST['email'];
$message   = $_POST['message'];

$to = "arinov.e@yandex.ru";
$subject = "Заявка на обратный звонок";
$message = '
	Пользователь оставил свои данные <br>
 <b>Имя:</b> ' . $name . ' <br>
 <b>E-mail:</b> ' . $email  . ' <br>
 <b>Сообщение:</b> ' . $message  . '';
$headers = "From: arinov.e@yandex.ru" . "\r\n" .
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
mail($to,$subject,$message,$headers);






