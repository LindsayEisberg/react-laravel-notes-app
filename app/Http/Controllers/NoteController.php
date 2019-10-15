<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Note;

class NoteController extends Controller
{

    public function index()
    {
        //Get all tasks
        $notes = Note::orderBy('created_at', 'desc')->get();

        // return json response
        return response()->json($notes);

    }


    public function create()
    {
        //
    }


    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|min:3',
            'copy' => 'required'
        ]);

        //Return Note
        $note = Note::create([
            'title' => $validatedData['title'],
            'copy' => $validatedData['copy'],
        ]);

        return response()->json($note);
    }

 
    public function show($id)
    {
        $note = Note::findOrFail($id);
        return response()->json([
            'note' => $note,
        ]);
  
    }

  
    public function edit($id)
    {
        $note = Note::findOrFail($id);
        return response()->json([
            'note' => $note,
        ]);


    }

    
    public function update(Request $request, $id)
    {
        $allInputs = $request->validate([
            'title' => 'required|min:3',
            'copy' => 'required'
        ]);
        $note = Note::findOrFail($id);
        $note->update($allInputs);
        return response()->json($note);
    }


    public function destroy($id)
    {
        Note::findOrFail($id)->delete();
    }
}
