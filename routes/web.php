<?php

use App\Http\Controllers\BrandController;
use App\Http\Controllers\ExerciseController;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::inertia('/', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::middleware(['auth', 'verified', 'check.exercise'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');

    Route::resource('brands', BrandController::class)->only(['store', 'update', 'destroy']);

    Route::resource('exercises', ExerciseController::class)->only(['store'])->withoutMiddleware('check.exercise');

    Route::group([
        'prefix' => 'initialization',
        'as' =>'initialization.',
    ], function () {
        Route::inertia('/welcome', 'initialization/welcome')->name('welcome');
        Route::inertia('/create', 'initialization/create')->name('create');
        Route::redirect('/', 'initialization/welcome')->name('index');
    });
});

require __DIR__.'/settings.php';
