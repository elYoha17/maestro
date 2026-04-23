<?php

namespace App\Contracts\Product;

use App\Models\Product;

interface CreateProductInterface
{
    public function create(array $data): Product;
}
