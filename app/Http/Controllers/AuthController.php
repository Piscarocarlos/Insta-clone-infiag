<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function show_login_form()
    {
        return inertia("auth/login");
    }

    public function login(LoginRequest $request) {
        $user = User::where("email", $request->email)->first();

        if(Hash::check($request->password, $user->password)) {
            Auth::login($user, true);

            return to_route("home");
        } else {
            return back()->withErrors(['password' => "Le mot de passe est incorrect"]);
        }
    }
}
