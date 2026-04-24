<?php

namespace App\Actions\Brand;

use App\Models\Brand;

class DeleteBrand
{
    public function delete(Brand $brand): bool
    {
        return $brand->delete();
    }
}
