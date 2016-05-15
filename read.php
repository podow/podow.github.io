<?php
$buffer = file_get_contents("data.json");

$data = json_decode($buffer);

$jsononerror = 'Неизвестная ошибка';

switch (json_last_error()) {
	case JSON_ERROR_NONE:
		$jsononerror = '';
		break;
	case JSON_ERROR_DEPTH:
		$jsononerror = 'Достигнута максимальная длинна стека';
		break;
	case JSON_ERROR_STATE_MISMATCH:
		$jsononerror = 'Некорректные разряды или не совпадение режимов';
		break;
	case JSON_ERROR_CTRL_CHAR:
		$jsononerror = 'Некорректный управляющий символ';
		break;
	case JSON_ERROR_SYNTAX:
		$jsononerror = 'Синтаксическая ошибка, не корректный JSON';
		break;
	case JSON_ERROR_UTF8:
		$jsononerror = 'Некорректные символы UTF-8, возможно неверная кодировка';
		break;
	default:
		$jsononerror = 'Неизвестная ошибка';
		break;
}

if ($jsononerror != '') {
	echo $jsononerror;
} else {
	echo "<pre>";
	print_r($data);
	echo "</pre>";
}