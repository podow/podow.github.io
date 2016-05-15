<?php
$image = $_POST['image'];
$title = $_POST['title'];
$desc = $_POST['desc'];
$link = $_POST['link'];

$data = array(array(
		"img" => "$image",
		"title" => "$title",
		"desc" => "$desc",
		"link" => "$link"
	));
$json = json_encode($data);
$file = fopen("data.json", "a+");
fwrite($file, $json . "\r\n");
fclose($file);