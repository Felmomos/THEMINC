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
$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Host = "smtp.ionos.com";
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;

$mail->Username = "contact@themanagementinc.com";
$mail->Password = "C0ntact@Beronica2!30";

$mail->setFrom($email, $name);
$mail->addAddress("balyitortiz0408@gmail.com", "name");

$mail->Subject = "Message from " . $name;
$mail->Body = $message;

$mail->send();
