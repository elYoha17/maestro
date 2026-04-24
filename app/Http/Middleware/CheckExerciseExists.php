<?php

namespace App\Http\Middleware;

use App\Actions\Exercise\GetLatestExercise;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckExerciseExists
{
    public function __construct(
        protected GetLatestExercise $getLatestExercise,
    ) {}
    
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $latestExercise = $this->getLatestExercise->get();
        if (!$latestExercise && !$request->routeIs('initialization.*')) {
            return to_route('initialization.welcome');
        }
        else if ($latestExercise && $request->routeIs('initialization.*')) {
            return to_route('dashboard');
        }

        return $next($request);
    }
}
