<?php

namespace App\Actions\Product;

use App\Models\Product;

class DeleteProduct
{
    public function delete(Product $product): bool
    {
        return $product->delete();
    }
}
