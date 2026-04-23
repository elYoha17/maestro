<?php

namespace App\Contracts;

use App\Models\Brand;
use Illuminate\Database\Eloquent\Collection;

interface BrandServiceInterface
{
    public function getAll(): Collection;

    public function create(array $data): Brand;

    public function update(int|Brand $id, array $data): Brand;

    public function delete(int|Brand $id): bool;
}
