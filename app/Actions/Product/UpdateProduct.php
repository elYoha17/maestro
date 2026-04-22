<?php

namespace App\Actions\Product;

use App\Models\Product;

class UpdateProduct
{
    public function __invoke(int|Product $id, array $data): Product
    {
        $product = $id instanceof Product ? $id : Product::findOrFail($id);
        $product->update($data);

        return $product->fresh();
    }
}
