<?php

namespace App\Actions\Product;

use App\Models\Product;
use Illuminate\Database\Eloquent\Collection;

class GetProducts
{
    public function get(): Collection
    {
        return Product::orderBy('name')->orderBy('sku')->get();
    }
}
