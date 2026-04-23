<?php

namespace App\Actions\Brand;

use App\Models\Brand;

class UpdateBrand
{
    public function execute(Brand $brand, array $data): Brand
    {
        $brand->update($data);

        return $brand->fresh();
    }
}
