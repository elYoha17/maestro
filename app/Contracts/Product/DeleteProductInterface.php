<?php

namespace App\Contracts\Product;

use App\Models\Product;

interface DeleteProductInterface
{
    public function delete(Product $product): bool;
}
