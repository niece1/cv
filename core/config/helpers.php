<?php

/**
 * Require a view.
 *
 * @param  string $name
 * @param  array  $data
 */
function view($name, $data = [])
{
    extract($data);

    return require __DIR__ . "/../../views/{$name}.blade.php";
}

/**
 * Redirect to the specified path.
 *
 * @param  string $path
 */
function redirect($path)
{
    header("Location: /{$path}");
}
