<?php

namespace App\Contracts\Exercise;

use App\Models\Exercise;

interface GetLatestExerciseInterface
{
    public function get(): ?Exercise;
}
