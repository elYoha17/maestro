<?php

namespace App\Actions\Brand;

use App\Models\Brand;

class UpdateBrand
{
    public function __invoke(int|Brand $id, array $data): Brand
    {
        $brand = $id instanceof Brand ? $id : Brand::findOrFail($id);
        $brand->update($data);

        return $brand->fresh();
    }
}
