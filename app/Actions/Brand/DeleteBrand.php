<?php

namespace App\Actions\Brand;

use App\Contracts\Brand\DeleteBrandInterface;
use App\Models\Brand;

class DeleteBrand implements DeleteBrandInterface
{
    public function delete(Brand $brand): bool
    {
        return $brand->delete();
    }
}
