#!/usr/local/bin/php
<?php
 class Animal{
 var $name;
 public function __construct($name){
          $this->name = $name;
     }
 }
 class Lion extends Animal{
    public function __construct($_name){
         parent::__construct($_name);
     }
 }
 $lion = new Lion('Simba'); // make PHP object
 $php_json_string = json_encode($lion); // turn to JSON string
 ?>
 <!DOCTYPE html>
 <html lang="en">
 <head>
    <title>Object oriented programming</title>
</head>
</body>
<input type="button" value="Show Info" onclick="alert('The name of the lion is: '+lion.name);" />
<script> <!-- direct JS -->
 // Parse the output as a string
let lion = JSON.parse('<?php echo $php_json_string; ?>');

</script>
</body>
</html>