<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $filename = $_FILES['filename']['name'];
    $fileName = $_FILES['filename']['tmp_name'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    $subject = "Contact from";
    $fromname = "Promea";
    $fromemail = $_POST['email'];;
    $mailto = 'nagasatisharigela@gmail.com';
    
    $content = file_get_contents($fileName);
    $content = chunk_split(base64_encode($content));
    $separator = md5(time());
    $eol = "\r\n";
    $headers = "From: ".$fromname." <".$fromemail.">" . $eol;
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
    print_r($_POST)
    if (mail($mailto, $subject, $body, $headers)) {
        echo "mail send ... OK"; // do what you want after sending the email
    } else {
        echo "mail send ... ERROR!";
        print_r(error_get_last());
    }
}
?>
