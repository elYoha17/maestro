<?php

namespace App\Actions\Brand;

use App\Models\Brand;

class DeleteBrand
{
    public function execute(Brand $brand): bool
    {
        return $brand->delete();
    }
}
