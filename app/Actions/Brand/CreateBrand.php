<?php

namespace App\Actions\Brand;

use App\Contracts\Brand\CreateBrandInterface;
use App\Models\Brand;

class CreateBrand implements CreateBrandInterface
{
    public function create(array $data): Brand
    {
        return Brand::create($data);
    }
}
