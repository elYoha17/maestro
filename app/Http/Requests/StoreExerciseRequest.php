<?php

namespace App\Http\Requests;

use App\Models\Exercise;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreExerciseRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $rules = [
            'start_date' => [
                'required',
                'date',
                'unique:exercises',
            ],
            'fund' => ['required', 'numeric', 'min:0'],
            'receivable' => ['required', 'numeric', 'min:0'],
            'payable' => ['required', 'numeric', 'min:0'],
        ];

        // $date = Exercise::latest('start_date')->value('start_date');
        // if ($date) {
        //     $rules['start_date'][] = Rule::date()->after($date);
        // }

        return $rules;
    }
}
