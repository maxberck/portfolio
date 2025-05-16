<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
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
        return Inertia::render('Project/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $picturePath = null;
        if ($request->hasFile('picture') && $request->file('picture')->isValid()) {
            $picturePath = $request->file('picture')->store('project-pictures', 'public');
        }

        Project::create([
            'title' => $request->title,
            'description' => $request->description,
            'linkGithub' => $request->linkGithub,
            'linkDemo' => $request->linkDemo,
            'picture' => $picturePath
        ]);

        
        return redirect()->route('dashboard')->with('success', 'Projet créé avec succès');

    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        return Inertia::render('show');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project)
    {
        return Inertia::render('edit');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Project $project)
    {
        $project->update([
            'title' => $request->title,
            'description' => $request->description,
            'linkGithub' => $request->linkGithub,
            'linkDemo' => $request->linkDemo,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        $project->delete();
    }
}
