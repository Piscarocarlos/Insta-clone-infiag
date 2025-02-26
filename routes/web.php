<?php

use App\Http\Controllers\AppController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\SettingController;
use Illuminate\Support\Facades\Route;

// auth : permet de vérifier si la personne est authentifé
// guest : contraire de auth

Route::middleware("guest")->group(function () {
    Route::get('/login', [AuthController::class, 'show_login_form'])->name("login");
    Route::post('/login', [AuthController::class, 'login'])->name("login");
});

Route::middleware("auth")->group(function () {
    Route::get('/', [AppController::class, 'index'])->name("home");
    Route::get('/settings', [SettingController::class, 'index'])->name("settings.index");

});
