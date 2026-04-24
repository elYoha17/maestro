<?php

namespace App\Actions\Product;

use App\Models\Product;

class UpdateProduct
{
    public function update(Product $product, array $data): Product
    {
        $product->update($data);

        return $product->fresh();
    }
}
