<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfilController;
use App\Http\Controllers\SkillController;
use App\Http\Controllers\ExperienceController;
use App\Http\Controllers\ProjectController;
use App\Models\Profil;
use App\Models\Skill;
use App\Models\Experience;
use Inertia\Inertia;

Route::get('/', function () {
    $profils = Profil::all();
    $skills = Skill::all();
    $experiences = Experience::all();
    return Inertia::render('welcome', [
        'profils' => $profils,
        'skills' => $skills,
        'experiences' => $experiences,
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::resource('profil', ProfilController::class);
Route::resource('skill', SkillController::class);
Route::resource('experience', ExperienceController::class);
Route::resource('project', ProjectController::class);

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
