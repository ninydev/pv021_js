<?php
//$_SERVER['REQUEST_TIME']
setcookie("LastRequest", date('Y-m-d H:m:s'), time()+3600);  /* срок действия 1 час */
header('Content-Type:  text/plain; charset=utf-8');

echo "\nCOOKIE:\n";
print_r($_COOKIE);
echo "\nPOST:\n";
print_r($_POST);
echo "\nGET:\n";
print_r($_GET);

