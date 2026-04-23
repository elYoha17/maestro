<?php

namespace App\Contracts\Exercise;

use App\Models\Exercise;

interface CreateExerciseInterface
{
    public function create(array $data): Exercise;
}
