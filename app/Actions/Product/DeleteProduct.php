<?php

namespace App\Actions\Product;

use App\Models\Product;

class DeleteProduct
{
    public function __invoke(int|Product $id): bool
    {
        $product = $id instanceof Product ? $id : Product::findOrFail($id);
        return $product->delete();
    }
}
