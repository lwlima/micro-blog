<?php
include_once("./../php/config.php");

$method = $_SERVER['REQUEST_METHOD'];
$id = '';

switch($method){
case 'GET':
  $sql = "select * from post ORDER BY date DESC"; 
  break;
case 'POST':
    $text = $_POST["text"];
    $author = $_POST["author"];

    $sql = "INSERT INTO post (text, author) VALUES ('$text', '$author')";
}

$result = mysqli_query($connect, $sql);

if (!$result) {
  http_response_code(404);
  die(mysqli_error($connect));
}

if ($method == 'GET') {
  if(!$id) 
    echo '[';
  for ($i = 0; $i < mysqli_num_rows($result); $i++) {
    echo ($i > 0 ? ',' : '') . json_encode(mysqli_fetch_object($result));
  }
  if(!$id) 
    echo ']';
} elseif ($method == 'POST') {
  echo "/";
}

$connect->close();
?>