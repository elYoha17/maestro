<?php

namespace App\Actions\Product;

use App\Models\Product;

class CreateProduct
{
    public function create(array $data): Product
    {
        return Product::create($data);
    }
}
