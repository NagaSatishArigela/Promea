<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $filename = $_FILES['filename']['name'];
    $fileName = $_FILES['filename']['tmp_name'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $subject = "Contact form submission";
    $fromName = $name;
    $fromEmail = $email;
    $toEmail = 'naga081995@gmail.com';

    $content = file_get_contents($fileName);
    $content = chunk_split(base64_encode($content));
    $separator = md5(time());
    $eol = "\r\n";

    $headers = "From: $fromName <$fromEmail>" . $eol;
    $headers .= "Reply-To: $fromEmail" . $eol;
    $headers .= "MIME-Version: 1.0" . $eol;
    $headers .= "Content-Type: multipart/mixed; boundary=\"" . $separator . "\"" . $eol;
    $headers .= "Content-Transfer-Encoding: 7bit" . $eol;
    $headers .= "This is a MIME encoded message." . $eol;

    $body = "--" . $separator . $eol;
    $body .= "Content-Type: text/plain; charset=\"iso-8859-1\"" . $eol;
    $body .= "Content-Transfer-Encoding: 8bit" . $eol;
    $body .= "Name: " . $name . $eol;
    $body .= "Email: " . $email . $eol;
    $body .= "Message: " . $message . $eol;
    $body .= "--" . $separator . $eol;
    $body .= "Content-Type: application/octet-stream; name=\"" . $filename . "\"" . $eol;
    $body .= "Content-Transfer-Encoding: base64" . $eol;
    $body .= "Content-Disposition: attachment" . $eol;
    $body .= $content . $eol;
    $body .= "--" . $separator . "--";

    if (mail($toEmail, $subject, $body, $headers)) {
        echo "mail send ... OK"; // do what you want after sending the email
    } else {
        echo "mail send ... ERROR!";
        print_r(error_get_last());
    }
}
?>

<?php
$postData = $uploadedFile = $statusMsg = '';
$msgClass = 'errordiv';
if(isset($_POST['submit'])){
    // Get the submitted form data
    $postData = $_POST;
    $email = $_POST['email'];
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
     
    // Check whether submitted data is not empty
    if(!empty($email) && !empty($name) && !empty($subject) && !empty($message)){
         
        // Validate email
        if(filter_var($email, FILTER_VALIDATE_EMAIL) === false){
            $statusMsg = 'Please enter your valid email.';
        }else{
            $uploadStatus = 1;
             
            // Upload attachment file
            if(!empty($_FILES["myFile"]["name"])){
                 
                // File path config
                $targetDir = "uploads/";
                $fileName = basename($_FILES["myFile"]["name"]);
                $targetFilePath = $targetDir . $fileName;
                $fileType = pathinfo($targetFilePath,PATHINFO_EXTENSION);
                 
                // Allow certain file formats
                $allowTypes = array('pdf', 'doc', 'docx', 'jpg', 'png', 'jpeg');
                if(in_array($fileType, $allowTypes)){
                    // Upload file to the server
                    if(move_uploaded_file($_FILES["myFile"]["tmp_name"], $targetFilePath)){
                        $uploadedFile = $targetFilePath;
                    }else{
                        $uploadStatus = 0;
                        $statusMsg = "Sorry, there was an error uploading your file.";
                    }
                }else{
                    $uploadStatus = 0;
                    $statusMsg = 'Sorry, only PDF, DOC, JPG, JPEG, & PNG files are allowed to upload.';
                }
            }
             
            if($uploadStatus == 1){
                 
                // Recipient Email, write your email here
                $toEmail = 'nagasatisharigela@email.com';
 
                // Sender Data
                $from = $email;
                $fromName = $name;
                 
                // Subject
                $emailSubject = 'Contact Request Submitted by '.$name;
                 
                // Message 
                $htmlContent = '<h2>Customer Contact Detail!</h2>
                    <p><b>Name:</b> '.$name.'</p>
                    <p><b>Email:</b> '.$email.'</p>
                    <p><b>Subject:</b> '.$subject.'</p>
                    <p><b>Message:</b> '.$message.'</p>';
                 
                // Header for sender info
                $headers = "From:". $fromName." <".$from.">";
 
                if(!empty($uploadedFile) && file_exists($uploadedFile)){
                     
                    // Boundary 
                    $semi_rand = md5(time()); 
                    $mime_boundary = "==Multipart_Boundary_x{$semi_rand}x"; 
                     
                    // Headers for attachment 
                    $headers .= "\nMIME-Version: 1.0\n" . "Content-Type: multipart/mixed;\n" . " boundary=\"{$mime_boundary}\""; 
                     
                    // Multipart boundary 
                    $message = "--{$mime_boundary}\n" . "Content-Type: text/html; charset=\"UTF-8\"\n" .
                    "Content-Transfer-Encoding: 7bit\n\n" . $htmlContent . "\n\n"; 
                     
                    // Preparing attachment
                    if(is_file($uploadedFile)){
                        $message .= "--{$mime_boundary}\n";
                        $fp =    @fopen($uploadedFile,"rb");
                        $data =  @fread($fp,filesize($uploadedFile));
                        @fclose($fp);
                        $data = chunk_split(base64_encode($data));
                        $message .= "Content-Type: application/octet-stream; name=\"".basename($uploadedFile)."\"\n" . 
                        "Content-Description: ".basename($uploadedFile)."\n" .
                        "Content-Disposition: attachment;\n" . " filename=\"".basename($uploadedFile)."\"; size=".filesize($uploadedFile).";\n" . 
                        "Content-Transfer-Encoding: base64\n\n" . $data . "\n\n";
                    }
                     
                    $message .= "--{$mime_boundary}--";
                    $returnpath = "-f" . $email;
                     
                    // Send email
                    $mail = mail($toEmail, $emailSubject, $message, $headers, $returnpath);
                     
                    // Delete attachment file from the server
                    @unlink($uploadedFile);
                }else{
                     // Set content-type header for sending HTML email
                    $headers .= "\r\n". "MIME-Version: 1.0";
                    $headers .= "\r\n". "Content-type:text/html;charset=UTF-8";
                     
                    // Send email
                    $mail = mail($toEmail, $emailSubject, $htmlContent, $headers); 
                }
                 
                // If mail sent
                if($mail){
                    $statusMsg = 'Your Message was submitted successfully!';
                    $msgClass = 'succdiv';
                     
                    $postData = '';
                }else{
                    $statusMsg = 'Your contact request submission failed, please try again.';
                }
            }
        }
    }else{
        $statusMsg = 'Please fill all the fields.';
    }
}
?>
