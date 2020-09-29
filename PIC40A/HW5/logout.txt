#!/usr/local/bin/php
<?php
 session_save_path(dirname(realpath(__FILE__)) . '/sessions/');
 session_name('Login_System'); // name the session
 session_start(); // start a session
 session_unset();// clear a session
 header('Location: index.php');

?>
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
</head>
<body>


</body>
</html>
