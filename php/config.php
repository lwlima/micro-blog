<?php
$host = "localhost";
$user = "root";
$password = "";
$dbname = "micro_blog";

$connect = mysqli_connect($host, $user, $password, $dbname);

if ($connect === false) {
  die("Connection failed: " . mysqli_connect_error());
}
