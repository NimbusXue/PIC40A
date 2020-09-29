#!/usr/local/bin/php
<?php
try{ // attempt to establish connection
     $mydb = new SQLite3('schedule.db'); // opens or creates the database
   }
catch(Exception $ex){ // may throw
     echo $ex->getMessage();
}
$statement = 'CREATE TABLE IF NOT EXISTS schedule(hour INTEGER, class TEXT, credits INTEGER);';
$run = $mydb->query($statement);
$statement = "INSERT INTO schedule (hour, class, credits) VALUES (10, 'Math',5);";
$run = $mydb->query($statement);
$statement = "INSERT INTO schedule (hour, class, credits) VALUES (9, 'Physics',6);";
$run = $mydb->query($statement);
$statement = "INSERT INTO schedule (hour, class, credits) VALUES (8, 'CS',7);";
$run = $mydb->query($statement);
$statement = "SELECT hour, class,credits FROM schedule ORDER BY hour ASC;";
$run = $mydb->query($statement);
if($run){ // so no errors in the query
 while($row = $run->fetchArray()){ // while still a row to parse
    echo $row['hour'], ':00|', $row['class'], '|', $row['credits'],'<br/>'; // print all the data
    }
 }
 $mydb->close();
?>