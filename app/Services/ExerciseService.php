<?php

namespace App\Services;

use App\Contracts\ExerciseServiceInterface;
use App\Models\Exercise;

class ExerciseService implements ExerciseServiceInterface
{
    public function getCurrent(): ?Exercise
    {
        return Exercise::orderBy('start_date', 'desc')->first();
    }
}
