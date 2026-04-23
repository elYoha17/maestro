<?php

namespace Database\Factories;

use App\Models\Exercise;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

/**
 * @extends Factory<Exercise>
 */
class ExerciseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'start_date' => Carbon::parse($this->faker->dateTimeBetween('-1 month', 'now'))->toDateString(),
            'fund' => $this->faker->randomFloat(2, 10000, 1000000),
            'receivable' => $this->faker->randomFloat(2, 10000, 1000000),
            'payable' => $this->faker->randomFloat(2, 10000, 1000000),
        ];
    }
}
