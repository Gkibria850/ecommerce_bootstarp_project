<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
  public function authenticate(Request $request)
  {
    // Authentication logic here
    $validator = Validator::make($request->all(),[
        'email' => 'required|email',
        'password' => 'required|min:8|confirmed'
    ])
    if($validator->fails()){
        return response()->json([
            'status' => '400',
            'errors'=>$validator->errors()
        ],400);
    }
    if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){

        $user = User::find(Auth::user()->id);
        if($user->role == 'admin'){
            $token = $user->createToken('token')->plainTextToken;
            return response()->json([
               'status' => '200',
               'token' => $token,
               'id' => $user->id,
               'name' => $user->name,
            ],200);

        }else{
            return response()->json([
               'status' => '403',
               'message' => 'You are not authorized to access this resource'
            ],403);
        }
    }else{
        return response()->json([
           'status' => '401',
           'message' => 'Either email or password is incorrect'
        ],401);
    }
    // Return JWT token or redirect to login page
  }
}
