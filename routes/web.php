<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::inertia('/', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::middleware(['auth', 'verified', 'check.exercise'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
    Route::group([
        'prefix' => 'initialization',
        'as' =>'initialization.',
    ], function () {
        Route::inertia('/initialization/welcome', 'initialization/welcome')->name('welcome');
    });
});

require __DIR__.'/settings.php';
