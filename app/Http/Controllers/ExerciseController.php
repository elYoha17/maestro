<?php

namespace App\Http\Controllers;

use App\Contracts\ExerciseServiceInterface;
use App\Http\Requests\StoreExerciseRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class ExerciseController extends Controller
{
    public function __construct(
        protected ExerciseServiceInterface $exerciseService,
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
        $this->exerciseService->create($request->validated());

        return back();
    }
}
