<?php

namespace App\Contracts\Brand;

use App\Models\Brand;

interface DeleteBrandInterface
{
    public function delete(int|Brand $id): bool;
}
