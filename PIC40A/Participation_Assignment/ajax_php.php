#!/usr/local/bin/php
<?php
if(isset($_POST['send'])){
    $file = fopen('comments.txt', 'a'); // open file to read
    fwrite($file, "${_POST['message']}\n");
 }


?>
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <title>Ajax</title>
</head>
<body>
<form method = "post" action ="<?php echo $_SERVER['PHP_SELF']; ?>">
      <label for='message' >Message:</label>
      <input type='text' name='message' id='message' required/>
      <br>
      <input type='submit' name='send' value='submit'/>
</form>
<p>
<?php
while(true){
    sleep(10);
    $file2 = fopen('comments.txt', 'r'); // open file to read
    while(!feof($file2)) { // while still more to read
       $line = fgets($file2);
       echo $line;
   }
   
}

?>
</p>

</body>
</html>