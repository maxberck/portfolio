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
        return Inertia::render('create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Project::create([
            'title' => $request->title,
            'description' => $request->description,
            'linkGithub' => $request->linkGithub,
            'linkDemo' => $request->linkDemo,
        ]);

        return redirect()->route('dashboard')->with('success', 'Skill created successfully');

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
