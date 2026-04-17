<?php

namespace App\Contracts;

use App\Models\Exercise;
use Illuminate\Database\Eloquent\Collection;

interface ExerciseServiceInterface
{
    /**
     * Retrieves the most recent exercise.
     *
     * @return Exercise|null The most recent exercise, or null if no exercises exist.
     */
    public function getCurrent(): ?Exercise;
}
