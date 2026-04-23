<?php

namespace App\Actions\Product;

use App\Contracts\Product\CreateProductInterface;
use App\Models\Product;

class CreateProduct implements CreateProductInterface
{
    public function create(array $data): Product
    {
        return Product::create($data);
    }
}
