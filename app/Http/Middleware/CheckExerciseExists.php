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
        if (!$this->exerciseService->getCurrent() && !$request->routeIs('initialize.*')) {
            return to_route('initialize.welcome');
        }

        return $next($request);
    }
}
