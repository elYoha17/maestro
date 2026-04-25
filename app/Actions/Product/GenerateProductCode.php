<?php

namespace App\Actions\Product;

use App\Models\Product;
use Illuminate\Support\Str;

class GenerateProductCode
{
    protected const int CODE_LENGTH = 16;

    public function generate(): string
    {
        do {
            $code = Str::random(self::CODE_LENGTH);
        } while(Product::where('code', $code)->exists());

        return $code;
    }
}
