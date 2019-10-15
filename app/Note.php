<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Note extends Model
{
    //protect fields
    protected $fillable = ['title', 'copy'];
}
