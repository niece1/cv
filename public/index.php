<?php

ini_set('display_errors', 1);
error_reporting(E_ALL);

//session_start();

require __DIR__ . '/../vendor/autoload.php';
require  __DIR__ . '/../core/config/bootstrap.php';

$routes_file = __DIR__ . '/../core/config/routes.php';

Router::load($routes_file)->match(Request::uri(), Request::method());
