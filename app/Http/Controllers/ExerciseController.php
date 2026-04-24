<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreExerciseRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class ExerciseController extends Controller
{
    public function __construct(
        protected \App\Actions\Exercise\CreateExercise $createExercise,
    )
    {}
    
    /**
     * Store a newly created exercise in storage.
     *
     * @param StoreExerciseRequest $request
     * @return RedirectResponse
     */
    public function store(StoreExerciseRequest $request): RedirectResponse
    {
        $this->createExercise->create($request->validated());

        return to_route('dashboard');
    }
}
