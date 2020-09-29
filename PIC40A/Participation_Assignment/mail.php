#!/usr/local/bin/php
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <title>Email</title>
</head>
<body>
<form method = "post" action ="<?php echo $_SERVER['PHP_SELF']; ?>">
      <label for='sl' >Subject line:</label>
      <input type='text' name='SL' id='sl'/>
      <br>
      <label for='message' >Message:</label>
      <input type='text' name='message' id='message'/>
      <br>
      <label for='email' >Email:</label>
      <input type='email' name='add' id='email'/>
      <br>
      <input type='submit' name='send' value='submit'/>
</form>
</body>
</html>
<?php
 if(isset($_POST['send'])){
     mail($_POST['add'],$_POST['SL'],$_POST['message']);
 }
?>