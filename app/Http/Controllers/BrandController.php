<?php
namespace App\Http\Controllers;

use App\Models\Brand;
use App\Http\Requests\StoreBrandRequest;
use App\Http\Requests\UpdateBrandRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;

class BrandController extends Controller
{
    public function __construct(
        protected \App\Actions\Brand\CreateBrand $createBrand,
        protected \App\Actions\Brand\UpdateBrand $updateBrand,
        protected \App\Actions\Brand\DeleteBrand $deleteBrand,
    ) {}

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBrandRequest $request): RedirectResponse
    {
        $this->createBrand->create($request->validated());

        return back();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBrandRequest $request, Brand $brand): RedirectResponse
    {
        $this->updateBrand->update($brand, $request->validated());

        return back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Brand $brand): RedirectResponse
    {
        $this->deleteBrand->delete($brand);

        return back();
    }
}
