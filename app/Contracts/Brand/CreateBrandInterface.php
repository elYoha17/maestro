<?php

namespace App\Contracts\Brand;

use App\Models\Brand;

interface CreateBrandInterface
{
    public function create(array $data): Brand;
}
