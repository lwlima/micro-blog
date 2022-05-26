<?php
include_once("config.php");

$nick = $_POST['nick'];
$email = $_POST['email'];
$password = MD5($_POST['password']);

$query = "INSERT INTO user (nick,email,password) VALUES ('$nick','$email','$password')";
if($insert = mysqli_query($connect, $query))
  echo "Registrado com sucesso em php.";

$connect->close();
