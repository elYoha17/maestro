<?php

namespace App\Services\Brand;

use App\Actions\Brand\DeleteBrand;
use App\Contracts\Brand\DeleteBrandInterface;
use App\Models\Brand;

class DeleteBrandService implements DeleteBrandInterface
{
    public function __construct(
        protected DeleteBrand $deleteBrand
    ) {}

    public function delete(int|Brand $id): bool
    {
        $brand = $id instanceof Brand ? $id : Brand::findOrFail($id);

        return $this->deleteBrand->execute($brand);
    }
}
