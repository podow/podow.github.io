<?php
$sendto   = "podowko@gmail.com";
$username = $_POST['name'];
$usermail = $_POST['email'];
$message = $_POST['message'];

$subject  = "Новое сообщение";
$headers  = "From: " . strip_tags($sendto) . "\r\n";
$headers .= "Reply-To: ". strip_tags($usermail) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";

$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Cообщение с сайта</h2>\r\n";
$msg .= "<p><strong>От кого:</strong> ".$username."</p>\r\n";
$msg .= "<p><strong>Почта:</strong> ".$usermail."</p>\r\n";
$msg .= "<p><strong>Сообщение:</strong> ".$message."</p>\r\n";
$msg .= "</body></html>";

if(@mail($sendto, $subject, $msg, $headers)) {
	echo '<div class="message">
			<div class="message_text">
				<h3>Спасибо за сообщение '.$_POST['name'].'</h3>
				<p>Сообщение было успешно отправлено</p>
			</div>
		</div>';
} else {
	echo '<div class="message">
			<div class="message_text">
				<h3>Ошибка отправления</h3>
				<p>Сообщение не было доставлено</p>
			</div>
		</div>';
}
?>