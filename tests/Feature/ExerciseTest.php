<?php

use App\Models\User;

test('an authenticated user can create an exercise', function () {
    $user = User::factory()->create();
    $this->actingAs($user);

    $this->post(route('exercises.store', [
        'start_date' => $date = now()->toDateString(),
        'fund' => 100000,
        'receivable' => 50000,
        'payable' => 30000,
    ]));

    $this->assertDatabaseHas('exercises', [
        'start_date' => $date,
        'fund' => 100000,
        'receivable' => 50000,
        'payable' => 30000,
    ]);
});
