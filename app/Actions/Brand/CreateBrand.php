<?php

namespace App\Actions\Brand;

use App\Models\Brand;

class CreateBrand
{
    public function __invoke(array $data): Brand
    {
        return Brand::create($data);
    }
}
