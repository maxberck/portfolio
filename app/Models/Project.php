<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'title',
        'description',
        'linkGithub',
        'linkDemo',
        'picture',
    ];

    public function profil()
    {
        return $this->belongsTo(Profil::class);
    }
}
