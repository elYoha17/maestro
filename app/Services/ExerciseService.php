<?php

namespace App\Services;

use App\Actions\Exercise\CreateExercise;
use App\Contracts\ExerciseServiceInterface;
use App\Models\Exercise;

class ExerciseService implements ExerciseServiceInterface
{
    public function getCurrent(): ?Exercise
    {
        return Exercise::orderBy('start_date', 'desc')->first();
    }

    public function create(array $data): Exercise
    {
        return (new CreateExercise)($data);
    }
}
