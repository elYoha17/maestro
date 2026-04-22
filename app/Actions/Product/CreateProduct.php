<?php

namespace App\Actions\Product;

use App\Models\Product;

class CreateProduct
{
    public function __invoke(array $data): Product
    {
        return Product::create($data);
    }
}
