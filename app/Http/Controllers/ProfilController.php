<?php

namespace App\Http\Controllers;

use App\Models\Profil;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProfilController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Profil/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
{
    // Validation des données
    $validated = $request->validate([
        'name' => 'required|max:20',
        'surname' => 'required|max:20',
        'bio' => 'nullable|max:500',
        'email' => 'required|email|max:50',
        'photo' => 'nullable|image|max:2048', // 2MB max
    ]);
    
    // Gestion de l'upload de photo
    $photoPath = null;
    if ($request->hasFile('photo') && $request->file('photo')->isValid()) {
        $photoPath = $request->file('photo')->store('profile-photos', 'public');
    }
    
    // Création du profil
    Profil::create([
        'name' => $validated['name'],
        'surname' => $validated['surname'],
        'bio' => $validated['bio'],
        'photo' => $photoPath,
        'email' => $validated['email'],
    ]);
    
    return redirect()->route('dashboard')->with('success', 'Profil créé avec succès');
}

    /**
     * Display the specified resource.
     */
    public function show(Profil $profil)
    {
        return Inertia::render('show');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Profil $profil)
    {
        return Inertia::render('edit');
        
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Profil $profil)
    {
        $profil->update([
            'name' => $request->name,
            'surname' => $request->surname,
            'bio' => $request->bio,
            'photo' => $request->photo,
            'email' => $request->email,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Profil $profil)
    {
        $profil->delete();
    }
}
