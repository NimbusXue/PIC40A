#!/usr/local/bin/php
<?php
 session_save_path(dirname(realpath(__FILE__)) . '/sessions/');
 session_name('Login_System'); // name the session
 session_start(); // start a session   
?>
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
</head>
<body>
<?php if( $_SESSION['loggedin']) { ?>
    <p>
   <?php
      echo "Welcome. Your email address is ", $_SESSION['email'],".";
   ?>
   <br>
   <?php
     echo "Here is a list of all registered addresses: ";
     $print_file = fopen('validate.txt', 'r') ; // open file to read
     while(!feof($print_file)) { // while still more to read
        $print_line = fgets($print_file);
        $print_fields = explode(" ",  $print_line);
        echo $print_fields[0]," ";
    }
   ?>
   
   </p>
   <a href="./logout.php" ><input type='submit' name='logout' value='log out'/></a>
   
   <?php
} ?>

</body>
</html>
