<?php

namespace App\Services\Brand;

use App\Actions\Brand\UpdateBrand;
use App\Contracts\Brand\UpdateBrandInterface;
use App\Models\Brand;

class UpdateBrandService implements UpdateBrandInterface
{
    public function __construct(
        protected UpdateBrand $updateBrand
    ) {}

    public function update(int|Brand $id, array $data): Brand
    {
        $brand = $id instanceof Brand ? $id : Brand::findOrFail($id);

        return $this->updateBrand->execute($brand, $data);
    }
}
