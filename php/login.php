<?php
include("config.php");
session_start();

if ($_POST['email'] && $_POST['password']) {

  $email = $_POST['email'];
  $password = md5($_POST['password']);

  $seleciona = $connect->query("SELECT * FROM user WHERE email = '$email' AND password = '$password'");
  $conta = $seleciona->num_rows;

  if ($conta > 0) {
    $dados = $seleciona->fetch_assoc();
    $_SESSION['nick'] = $dados['nick'];
    $_SESSION['login'] = $dados['email'];
    $_SESSION['password'] = $dados['password'];
    echo "/";
  } else {
    unset ($_SESSION['nick']);
    unset ($_SESSION['email']);
    unset ($_SESSION['password']);

    echo "Error ao realizar login.";
  }
}
// if ($_SERVER["REQUEST_METHOD"] == "POST") {
//   $email = mysqli_real_escape_string($connect, $_POST['email']);
//   $password = mysqli_real_escape_string($connect, $_POST['password']);
//   $password = md5($password);

//   $sql = "SELECT * FROM user WHERE email = '$email' AND password = '$password'";
//   $result = mysqli_query($connect, $sql);
//   $row = mysqli_fetch_array($result);
//   $count = mysqli_num_rows($result);

//   if ($count == 1) {
//     session_register("email");
//     $_SESSION['user'] = $email;
//     echo "logado com sucesso";
//     header("location: localhost:3000/");
//   } else {
//     echo "Email ou senha inválido.";
//     header("location: localhost:3000/register");
//   }
// }

$connect->close();
