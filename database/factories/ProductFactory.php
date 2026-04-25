<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'brand_id' => null,
            'name' => $this->faker->word(),
            'sku' => $this->faker->unique()->bothify('???-########'),
            'price' => $this->faker->randomFloat(2, 0, 1000) * 5000,
            'description' => $this->faker->boolean() ? $this->faker->sentence() : null,
        ];
    }

    public function withBrand(int $brandId): static
    {
        return $this->state(fn() => ['brand_id' => $brandId]);
    }
}
