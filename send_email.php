<?php
if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $gender = $_POST['gender'];
    // Retrieve other form data
    
    // Format the email body
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $emailBody = "Name: $name\n";
    $emailBody .= "Email: $email\n";
    $emailBody .= "Gender: $gender\n";
    // Include other form data in the email body
    
    // Send the email
    $to = 'boyinakavya@gmail.com';
    $headers = "From: $email\r\n";
    if (mail($to, $subject, $emailBody, $headers)) {
        echo "Email sent successfully";
    } else {
        echo "Failed to send email";
    }
}
?>
