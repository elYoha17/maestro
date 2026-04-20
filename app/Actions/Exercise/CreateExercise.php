<?php

namespace App\Actions\Exercise;

use App\Models\Exercise;

class CreateExercise
{
    public function __invoke(array $data): Exercise
    {
        return Exercise::create($data);
    }
}
