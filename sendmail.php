<?php
ob_start();
// Multiple recipients
$to = 'durgayedidi111@gmail.com'; // note the comma

// Subject
$subject = 'Promea';

// Message
$message = "
<html>
<head>
  <link rel="icon" type="image/x-icon" href="images/fevicon.png">
  <title>Promea</title>
  <style>
    table th, table td{border:1px solid #f0f0f0; padding:10px;box-shadow:2px 4px 8px 0px rgba(46,61,73,0.2);}
  </style>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-125033198-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-125033198-1');
</script>
</head>
<body>
  <table>
  <tr>
    <th>Name :</th>
    <td>".$_POST['name']."</td>
  </tr>
  <tr>
    <th>Email :</th>
    <td>".$_POST['email']."</td>
  </tr>
  <tr>
    <th>Phone :</th>
    <td>".$_POST['phone']."</td>
  </tr>

  <tr>
	  <th>message :</th>
    <td>".$_POST['message']."</td> 
  </tr>

  </table>
</body>
</html>
";

// To send HTML mail, the Content-type header must be set
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=iso-8859-1';

// Additional headers

$headers[] = 'From: '.$_POST['email'].'';


// Mail it
mail($to, $subject, $message, implode("\r\n", $headers));
header("location:index.html")
?>