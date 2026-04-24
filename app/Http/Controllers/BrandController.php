<?php
namespace App\Http\Controllers;

use App\Actions\Brand\CreateBrand;
use App\Actions\Brand\DeleteBrand;
use App\Actions\Brand\UpdateBrand;
use App\Models\Brand;
use App\Http\Requests\StoreBrandRequest;
use App\Http\Requests\UpdateBrandRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;

class BrandController extends Controller
{
    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBrandRequest $request, CreateBrand $createBrand): RedirectResponse
    {
        $createBrand->create($request->validated());

        return back();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBrandRequest $request, Brand $brand, UpdateBrand $updateBrand): RedirectResponse
    {
        $updateBrand->update($brand, $request->validated());

        return back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Brand $brand, DeleteBrand $deleteBrand): RedirectResponse
    {
        $deleteBrand->delete($brand);

        return back();
    }
}
