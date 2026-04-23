<?php

namespace App\Actions\Product;

use App\Contracts\Product\DeleteProductInterface;
use App\Models\Product;

class DeleteProduct implements DeleteProductInterface
{
    public function delete(Product $product): bool
    {
        return $product->delete();
    }
}
