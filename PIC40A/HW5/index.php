#!/usr/local/bin/php
<?php
 session_save_path(dirname(realpath(__FILE__)) . '/sessions/');
 session_name('Login_System'); // name the session
 session_start(); // start a session
 $_SESSION['loggedin'] = false; // have not logged in
 $_SESSION['register'] = false;
 if(isset($_POST['password'])){
    $_SESSION['password'] = $_POST['password'];
 }
 if(isset($_POST['email'])){
    $_SESSION['email'] = $_POST['email'];
 }

//validate the login
function validate(&$email_exist,&$password_correct){
    $_SESSION['email'] = $_POST['email'];
    $_SESSION['password'] = $_POST['password'];
     $validate_file = fopen('validate.txt', 'r'); // open file to read
     while(!feof($validate_file)) { // while still more to read
        $validate_line = fgets($validate_file);
        $validate_fields = explode(" ",  $validate_line);
        if($validate_fields[0]===$_POST['email']){
            $email_exist=true;
            if(trim($validate_fields[1])===trim(hash('md2', trim($_POST['password'])))){
            $password_correct=true;  
            break;
            }
        }
    }
    if($password_correct){ // if they match, great
       $_SESSION['loggedin'] = true;
       
       header('Location: welcome.php');
    }
}
//validate the register
function register(&$registered){
    $_SESSION['email'] = $_POST['email'];
    $_SESSION['password'] = $_POST['password'];
    $register_file = fopen('unvalidate.txt','r') or die('could not open file');
    while(!feof($register_file)) { // while still more to read
        $register_line = fgets( $register_file);
        $register_fields = explode(" ",  $register_line);
        if($register_fields[0]===$_POST['email']){
            $registered=true;
            break;
        }
    }
    if(!$registered){// if not registered ,record it and send email
        $register_file1=fopen('unvalidate.txt', 'a');
        $hashed_password2 = hash('md2', trim($_POST['password']));
        fwrite($register_file1, "${_POST['email']} $hashed_password2 unvalidate\n");
        $random=rand(100,50000);
        $tmp = "www.pic.ucla.edu/~nimbusxue1015/HW5/validate.php?email=${_POST['email']}&token=$random";
        mail($_POST['email'],"validation","Validate by clicking here: $tmp");
        $_SESSION['password'] = $_POST['password'];
    }
}

$registered=false;
$email_exist=false;
$password_correct=false;
if(isset($_POST['register'])){ // if something was posted
    register($registered); // check it
}
if(isset($_POST['login'])){ // if something was posted
    validate($email_exist,$password_correct); // check it
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <title>Email</title>
</head>
<body>
<form method = "post" action ="<?php echo $_SERVER['PHP_SELF']; ?>">
    <fieldset id="info">
      <label for='email' >email address:</label>
      <input type='email' name='email' id='email'/>
      <br>
      <label for='password' >password(&#8805; 6 characters letters or digits):</label>
      <input type='password' pattern="[A-Za-z\d]{6,}" name='password' id='password'/>
    </fieldset>
      <input type='submit' name='register' value='Register'/>
      <input type='submit' name='login' value='Log in'/>
</form>
<?php if(isset($_POST['register']) && $registered) { ?>
    <p>Already registered. Please log in/validate.</p> <?php
} ?>
<?php if(isset($_POST['register']) && !$registered) { ?>
    <p>
   <?php
      echo "A validation email has been sent to: ", $_POST['email'], ". Please follow the link.";
   ?>
   </p>
   <?php
} ?>
<?php if(isset($_POST['login']) && !$email_exist) { ?>
    <p>No such email address. Please register or validate.</p> <?php
} ?>
<?php if(isset($_POST['login']) && $email_exist && !$password_correct) { ?>
    <p>Your password is invalid.</p> <?php
} ?>

</body>
</html>
