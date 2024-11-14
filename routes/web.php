<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\File;

Route::get('/{any?}', function () {
    $path = resource_path('src/index.html');

    if (File::exists($path)) {
        return File::get($path);
    }

    abort(404);
})->where('any', '.*');
