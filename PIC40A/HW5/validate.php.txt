#!/usr/local/bin/php
<?php
 session_save_path(dirname(realpath(__FILE__)) . '/sessions/');
 session_name('Login_System'); // name the session
 session_start(); // start a session
if(isset($_GET['email'])){ // check if set
    $validate_file1=fopen('validate.txt', 'a');
    $hashed_password = hash('md2', trim($_SESSION['password']));
    fwrite($validate_file1, "${_SESSION['email']} $hashed_password\n");   
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
</head>
<body>
   <form method = "get" action ="<?php echo $_SERVER['PHP_SELF']; ?>">  
   </form>
   <p>You are registered!</p>

</body>
</html>
