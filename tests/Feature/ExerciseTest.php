<?php

use App\Models\Exercise;
use App\Models\User;

test('an exercise can be created', function () {
    $this->actingAs(User::factory()->administrator()->create());

    $exercise = Exercise::factory()->make();

    $response = $this->post(route('exercises.store', $exercise->only([
        'start_date',
        'fund',
        'receivable',
        'payable',
    ])));

    $response->assertStatus(302);
    $this->assertDatabaseHas('exercises', $exercise->only([
        'start_date',
        'fund',
        'receivable',
        'payable',
    ]));
});
