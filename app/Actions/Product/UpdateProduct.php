<?php

namespace App\Actions\Product;

use App\Contracts\Product\UpdateProductInterface;
use App\Models\Product;

class UpdateProduct implements UpdateProductInterface
{
    public function update(Product $product, array $data): Product
    {
        $product->update($data);

        return $product->fresh();
    }
}
