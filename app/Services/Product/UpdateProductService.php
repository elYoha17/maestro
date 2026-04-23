<?php

namespace App\Services\Product;

use App\Actions\Product\UpdateProduct;
use App\Contracts\Product\UpdateProductInterface;
use App\Models\Product;

class UpdateProductService implements UpdateProductInterface
{
    public function __construct(
        protected UpdateProduct $updateAction,
    ) {}

    public function update(int|Product $id, array $data): Product
    {
        $product = $id instanceof Product ? $id : Product::findOrFail($id);

        return $this->updateAction->execute($product, $data);
    }
}
