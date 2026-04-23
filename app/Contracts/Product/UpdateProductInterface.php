<?php

namespace App\Contracts\Product;

use App\Models\Product;

interface UpdateProductInterface
{
    public function update(int|Product $id, array $data): Product;
}
