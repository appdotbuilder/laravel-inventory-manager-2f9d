<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\InventoryItem>
 */
class InventoryItemFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->words(2, true),
            'code' => 'ITM-' . strtoupper(fake()->bothify('??###')),
            'description' => fake()->sentence(),
            'quantity' => fake()->numberBetween(1, 100),
            'unit_price' => fake()->randomFloat(2, 10, 1000),
            'storage_location' => fake()->randomElement(['Gudang A', 'Gudang B', 'Gudang C', 'Rak 1', 'Rak 2', 'Lantai 1', 'Lantai 2']),
            'entry_date' => fake()->dateTimeBetween('-1 year', 'now')->format('Y-m-d'),
        ];
    }
}