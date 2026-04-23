<?php

namespace App\Contracts\Brand;

use App\Models\Brand;

interface UpdateBrandInterface
{
    public function update(int|Brand $id, array $data): Brand;
}
