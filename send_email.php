<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);

    if (empty($name) || empty($email)) {
        echo "Name and email are required.";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format.";
        exit;
    }

    $to = "lewisgenine@gmail.com"; // Replace with your email address
    $subject = "New Contact Form Submission";
    $message = "Name: $name\nEmail: $email";
    $headers = "From: noreply@gmail.com"; // Replace with your domain email address

    if (mail($to, $subject, $message, $headers)) {
        echo "Email successfully sent!";
    } else {
        echo "Failed to send email.";
    }
}
?>
