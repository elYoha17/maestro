<?php

namespace App\Services\Product;

use App\Actions\Product\CreateProduct;
use App\Contracts\Product\CreateProductInterface;
use App\Models\Product;

class CreateProductService implements CreateProductInterface
{
    public function __construct(
        protected CreateProduct $createAction,
    ) {}

    public function create(array $data): Product
    {
        return $this->createAction->execute($data);
    }
}
