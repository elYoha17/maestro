<?php

namespace App\Contracts\Brand;

use App\Models\Brand;

interface UpdateBrandInterface
{
    public function update(Brand $brand, array $data): Brand;
}
