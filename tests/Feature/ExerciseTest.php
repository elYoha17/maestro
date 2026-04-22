<?php

use App\Models\User;

test('an authenticated user can create an exercise', function () {
    $user = User::factory()->create();
    $this->actingAs($user);

    $response = $this->post(route('exercises.store', [
        'start_date' => $date = now()->toDateString(),
        'fund' => 100000,
        'receivable' => 50000,
        'payable' => 30000,
    ]));

    $response->assertRedirect(route('dashboard'));

    $this->assertDatabaseHas('exercises', [
        'start_date' => $date,
        'fund' => 100000,
        'receivable' => 50000,
        'payable' => 30000,
    ]);
});
