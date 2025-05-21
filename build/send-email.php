<?php

$name = $_POST["formName"];
$email = $_POST["formEmail"];
$phone = $_POST["formPhone"];
$details = $_POST["formDetails"];
$message = $_POST["formMessage"];

require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);

$mail->SMTPDebug = SMTP::DEBUG_SERVER;

$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Host = "smtp.ionos.com";
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;

$mail->Username = "contact@themanagementinc.com";
$mail->Password = "C0ntact@Beronica2!30";

$mail->setFrom("contact@themanagementinc.com", $name);
$mail->addAddress("test@themanagementinc.com", "Info");

$mail->Subject = "Message from " . $name;
$mail->isHTML(true);
$mail->Body = "<p><strong>Name:</strong> " . $name . "</p>
    <p><strong>Email:</strong> " . $email . "</p>
    <p><strong>Phone:</strong> " . $phone . "</p>
    <p><strong>Details:</strong> " . $details . "</p>
    <p><strong>Message:</strong><br>" . nl2br($message) . "</p>
";$message;

$mail->send();
echo "email sent";
header("Location: " . $_SERVER["HTTP_REFERER"]);
exit();
?>