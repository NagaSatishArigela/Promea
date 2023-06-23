<?php
$postData = $uploadedFile = $statusMsg = '';
$msgClass = 'errordiv';
if (isset($_POST['submit'])) {
    // Get the submitted form data
    $postData = $_POST;
    $email = $_POST['email'];
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Check whether submitted data is not empty
    if (!empty($email) && !empty($name) && !empty($subject) && !empty($message)) {

        // Validate email
        if (filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
            $statusMsg = 'Please enter a valid email.';
        } else {
            $uploadStatus = 1;

            // Upload attachment file
            if (!empty($_FILES["attachment"]["name"])) {

                // File path config
                $targetDir = "uploads/";
                $fileName = basename($_FILES["attachment"]["name"]);
                $targetFilePath = $targetDir . $fileName;
                $fileType = pathinfo($targetFilePath, PATHINFO_EXTENSION);

                // Allow certain file formats
                $allowTypes = array('pdf', 'doc', 'docx', 'jpg', 'png', 'jpeg');
                if (in_array($fileType, $allowTypes)) {
                    // Upload file to the server
                    if (move_uploaded_file($_FILES["attachment"]["tmp_name"], $targetFilePath)) {
                        $uploadedFile = $targetFilePath;
                    } else {
                        $uploadStatus = 0;
                        $statusMsg = "Sorry, there was an error uploading your file.";
                    }
                } else {
                    $uploadStatus = 0;
                    $statusMsg = 'Sorry, only PDF, DOC, JPG, JPEG, and PNG files are allowed to upload.';
                }
            }

            if ($uploadStatus == 1) {

                // Recipient Email, write your email here
                $toEmail = 'naga081995@gmail.com';

                // Sender Data
                $from = $email;
                $fromName = $name;

                // Subject
                $emailSubject = 'Contact Request Submitted by ' . $name;

                // Message
                $htmlContent = '<h2>Customer Contact Detail!</h2>
                    <p><b>Name:</b> ' . $name . '</p>
                    <p><b>Email:</b> ' . $email . '</p>
                    <p><b>Subject:</b> ' . $subject . '</p>
                    <p><b>Message:</b> ' . $message . '</p>';

                // Header for sender info
                $headers = "From: $fromName <$from>" . "\r\n";

                if (!empty($uploadedFile) && file_exists($uploadedFile)) {

                    // Boundary
                    $semi_rand = md5(time());
                    $mime_boundary = "==Multipart_Boundary_x{$semi_rand}x";

                    // Headers for attachment
                    $headers .= "MIME-Version: 1.0\r\n";
                    $headers .= "Content-Type: multipart/mixed;\r\n";
                    $headers .= " boundary=\"{$mime_boundary}\"";

                    // Multipart boundary
                    $message = "--{$mime_boundary}\r\n" .
                        "Content-Type: text/html; charset=\"UTF-8\"\r\n" .
                        "Content-Transfer-Encoding: 7bit\r\n\r\n" .
                        $htmlContent . "\r\n\r\n";

                    // Preparing attachment
                    if (is_file($uploadedFile)) {
                        $message .= "--{$mime_boundary}\r\n";
                        $fp = @fopen($uploadedFile, "rb");
                        $data = @fread($fp, filesize($uploadedFile));
                        @fclose($fp);
                        $data = chunk_split(base64_encode($data));
                        $message .= "Content-Type: application/octet-stream; name=\"" . basename($uploadedFile) . "\"\r\n" .
                            "Content-Description: " . basename($uploadedFile) . "\r\n" .
                            "Content-Disposition: attachment;\r\n" . " filename=\"" . basename($uploadedFile) . "\"; size=" . filesize($uploadedFile) . ";\r\n" .
                            "Content-Transfer-Encoding: base64\r\n\r\n" . $data . "\r\n\r\n";
                    }

                    $message .= "--{$mime_boundary}--";
                    $returnpath = "-f" . $email;

                    // Send email
                    $mail = mail($toEmail, $emailSubject, $message, $headers, $returnpath);

                    // Delete attachment file from the server
                    @unlink($uploadedFile);
                } else {
                    // Set content-type header for sending HTML email
                    $headers .= "\r\n" . "MIME-Version: 1.0";
                    $headers .= "\r\n" . "Content-type:text/html;charset=UTF-8";

                    // Send email
                    $mail = mail($toEmail, $emailSubject, $htmlContent, $headers);
                }

                // If mail sent
                if ($mail) {
                    $statusMsg = 'Your message was submitted successfully!';
                    $msgClass = 'succdiv';

                    $postData = '';
                } else {
                    $statusMsg = 'Your contact request submission failed, please try again.';
                }
            }
        }
    } else {
        $statusMsg = 'Please fill in all the fields.';
    }
}
?>