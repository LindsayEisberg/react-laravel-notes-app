<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/notes', 'NoteController@index');
Route::post('/notes', 'NoteController@store');
Route::get('/notes/create', 'NoteController@create');
Route::get('/notes/{note}', 'NoteController@show');
Route::get('/notes/{note}/edit', 'NoteController@edit');
Route::put('/notes/{note}', 'NoteController@update');
Route::delete('/notes/{note}', 'NoteController@destroy');

