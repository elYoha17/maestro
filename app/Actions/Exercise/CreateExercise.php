<?php

namespace App\Actions\Exercise;

use App\Contracts\Exercise\CreateExerciseInterface;
use App\Models\Exercise;

class CreateExercise implements CreateExerciseInterface
{
    public function create(array $data): Exercise
    {
        return Exercise::create($data);
    }
}
