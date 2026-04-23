<?php

namespace App\Actions\Brand;

use App\Contracts\Brand\UpdateBrandInterface;
use App\Models\Brand;

class UpdateBrand implements UpdateBrandInterface
{
    public function update(Brand $brand, array $data): Brand
    {
        $brand->update($data);

        return $brand->fresh();
    }
}
