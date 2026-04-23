<?php

namespace App\Services;

use App\Actions\Brand\CreateBrand;
use App\Actions\Brand\DeleteBrand;
use App\Actions\Brand\UpdateBrand;
use App\Contracts\BrandServiceInterface;
use App\Models\Brand;
use Illuminate\Database\Eloquent\Collection;

class BrandService implements BrandServiceInterface
{
    public function getAll(): Collection
    {
        return Brand::orderBy('name')->get();
    }

    public function create(array $data): Brand
    {
        return (new CreateBrand)($data);
    }

    public function update(int|Brand $id, array $data): Brand
    {
        return (new UpdateBrand)($id, $data);
    }

    public function delete(int|Brand $id): bool
    {
        return (new DeleteBrand)($id);
    }
}
