<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    protected $fillable = [
        'name',
        'level',
    ];

    public function profil()
    {
        return $this->belongsTo(Profil::class);
    }
}
