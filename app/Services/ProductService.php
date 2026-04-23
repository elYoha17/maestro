<?php

namespace App\Services;

use App\Actions\Product\CreateProduct;
use App\Actions\Product\DeleteProduct;
use App\Actions\Product\UpdateProduct;
use App\Contracts\ProductServiceInterface;
use App\Models\Product;
use Illuminate\Database\Eloquent\Collection;

class ProductService implements ProductServiceInterface
{
    public function getAll(): Collection
    {
        return Product::orderBy(['name', 'sku'])->get();
    }

    public function create(array $data): Product
    {
        return (new CreateProduct)($data);
    }

    public function update(int|Product $id, array $data): Product
    {
        $product = $id instanceof Product ? $id : Product::findOrFail($id);

        return (new UpdateProduct)($product, $data);
    }

    public function delete(int|Product $id): bool
    {
        $product = $id instanceof Product ? $id : Product::findOrFail($id);
        
        return (new DeleteProduct)($product);
    }
}
