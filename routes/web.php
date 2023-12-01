<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});

Route::get('/classifieds', function () {
    return view('classified');
});

Route::get('/trigger-show', function () {
    return view('trigger-show');
});

Route::get('/trigger-talk', function () {
    return view('trigger-talk');
});

Route::get('/news', function () {
    return view('news');
});

