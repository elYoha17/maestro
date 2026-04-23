<?php

namespace App\Services\Product;

use App\Actions\Product\DeleteProduct;
use App\Contracts\Product\DeleteProductInterface;
use App\Models\Product;

class DeleteProductService implements DeleteProductInterface
{
    public function __construct(
        protected DeleteProduct $deleteAction,
    ) {}

    public function delete(int|Product $id): bool
    {
        $product = $id instanceof Product ? $id : Product::findOrFail($id);

        return $this->deleteAction->execute($product);
    }
}
