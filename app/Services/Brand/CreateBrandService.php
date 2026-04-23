<?php

namespace App\Services\Brand;

use App\Actions\Brand\CreateBrand;
use App\Contracts\Brand\CreateBrandInterface;
use App\Models\Brand;

class CreateBrandService implements CreateBrandInterface
{
    public function __construct(
        protected CreateBrand $createAction,
    ) {}

    public function create(array $data): Brand
    {
        return $this->createAction->execute($data);
    }
}
