<?php

namespace App\Actions\Brand;

use App\Models\Brand;

class CreateBrand
{
    public function create(array $data): Brand
    {
        return Brand::create($data);
    }
}
