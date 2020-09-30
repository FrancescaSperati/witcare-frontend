<?php

// You can access the values posted by jQuery.ajax
// through the global variable $_POST, like this:
$txtName = isset($_POST['txtName']) ? $_POST['txtName'] : null;
$txtEmail = isset($_POST['txtEmail']) ? $_POST['txtEmail'] : null;
$txtPhone = isset($_POST['txtPhone']) ? $_POST['txtPhone'] : null;
$txtMsg = isset($_POST['txtMsg']) ? $_POST['txtMsg'] : null;

$message = "
<html>
<head>
<title>Witcare - $txtName</title>
</head>
<body>
<h3>L' utente $txtName ti ha inviato un messaggio:</h3>
<p>Name: $txtName</p>
<p>Email: $txtEmail</p>
<p>Phone: $txtPhone</p>
<p>Messaggio: </p>
<p>$txtMsg</p>
</body>
</html>
";

// It is mandatory to set the content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers. From is required, rest other headers are optional
$headers .= 'From: <info@witcare.com>' . "\r\n";

$to = "sperati.francesca.it@gmail.com; venturini.fab@gmail.com";
$subject = "Witcare - Contact form - $txtName";

mail($to,$subject,$message,$headers);

?>