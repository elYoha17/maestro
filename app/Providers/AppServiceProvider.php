<?php

namespace App\Providers;

use Carbon\CarbonImmutable;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\ServiceProvider;
use Illuminate\Validation\Rules\Password;
use Inertia\View\Components\App;

class AppServiceProvider extends ServiceProvider
{
    public $bindings = [
        \App\Contracts\Brand\CreateBrandInterface::class => \App\Actions\Brand\CreateBrand::class,
        \App\Contracts\Brand\UpdateBrandInterface::class => \App\Actions\Brand\UpdateBrand::class,
        \App\Contracts\Brand\DeleteBrandInterface::class => \App\Actions\Brand\DeleteBrand::class,

        \App\Contracts\Product\CreateProductInterface::class => \App\Actions\Product\CreateProduct::class,
        \App\Contracts\Product\UpdateProductInterface::class => \App\Actions\Product\UpdateProduct::class,
        \App\Contracts\Product\DeleteProductInterface::class => \App\Actions\Product\DeleteProduct::class,

        \App\Contracts\Exercise\GetLatestExerciseInterface::class => \App\Actions\Exercise\GetLatestExercise::class,
        \App\Contracts\Exercise\CreateExerciseInterface::class => \App\Actions\Exercise\CreateExercise::class,
    ];

    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $this->configureDefaults();
    }

    /**
     * Configure default behaviors for production-ready applications.
     */
    protected function configureDefaults(): void
    {
        Date::use(CarbonImmutable::class);

        DB::prohibitDestructiveCommands(
            app()->isProduction(),
        );

        Password::defaults(fn (): ?Password => app()->isProduction()
            ? Password::min(12)
                ->mixedCase()
                ->letters()
                ->numbers()
                ->symbols()
                ->uncompromised()
            : null,
        );
    }
}
