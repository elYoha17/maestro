<?php

namespace App\Http\Middleware;

use App\Contracts\ExerciseServiceInterface;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckExerciseExists
{
    public function __construct(
        protected ExerciseServiceInterface $exerciseService
    )
    { }
    
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $currentExercise = $this->exerciseService->getCurrent();
        if (!$currentExercise && !$request->routeIs('initialization.*')) {
            return to_route('initialization.welcome');
        }
        else if ($currentExercise && $request->routeIs('initialization.*')) {
            return to_route('dashboard');
        }

        return $next($request);
    }
}
