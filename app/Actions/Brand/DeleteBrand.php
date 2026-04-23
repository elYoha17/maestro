<?php

namespace App\Actions\Brand;

use App\Models\Brand;

class DeleteBrand
{
    public function __invoke(int|Brand $id): bool
    {
        $brand = $id instanceof Brand ? $id : Brand::findOrFail($id);

        return $brand->delete();
    }
}
