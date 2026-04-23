<?php

namespace App\Actions\Exercise;

use App\Contracts\Exercise\GetLatestExerciseInterface;
use App\Models\Exercise;

class GetLatestExercise implements GetLatestExerciseInterface
{
    public function get(): ?Exercise
    {
        return Exercise::orderBy('start_date', 'desc')->first();
    }
}
