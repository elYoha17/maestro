<?php

namespace App\Contracts\Product;

use App\Models\Product;

interface UpdateProductInterface
{
    public function update(Product $product, array $data): Product;
}
