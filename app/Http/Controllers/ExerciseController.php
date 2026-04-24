<?php

namespace App\Http\Controllers;

use App\Actions\Exercise\CreateExercise;
use App\Http\Requests\StoreExerciseRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class ExerciseController extends Controller
{
    /**
     * Store a newly created exercise in storage.
     *
     * @param StoreExerciseRequest $request
     * @return RedirectResponse
     */
    public function store(StoreExerciseRequest $request, CreateExercise $createExercise): RedirectResponse
    {
        $createExercise->create($request->validated());

        return to_route('dashboard');
    }
}
