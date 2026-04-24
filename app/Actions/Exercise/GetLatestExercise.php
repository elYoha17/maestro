<?php

namespace App\Actions\Exercise;

use App\Models\Exercise;

class GetLatestExercise
{
    public function get(): ?Exercise
    {
        return Exercise::orderBy('start_date', 'desc')->first();
    }
}
