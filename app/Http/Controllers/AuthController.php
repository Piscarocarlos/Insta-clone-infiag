<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function show_login_form()
    {
        return inertia("auth/login");
    }

    public function login(LoginRequest $request) {

    }
}
