<?php

use App\Models\Brand;
use App\Models\Exercise;
use App\Models\User;

test('a brand can be created', function () {
    $this->actingAs(User::factory()->administrator()->create());
    Exercise::factory()->create();

    $brand = Brand::factory()->make();
    
    $response = $this->post(route('brands.store'), [
        'name' => $brand->name,
    ]);

    $response->assertStatus(302);
    $this->assertDatabaseHas('brands', ['name' => $brand->name]);
});

test('a brand can be updated', function () {
    $this->actingAs(User::factory()->administrator()->create());
    Exercise::factory()->create();
    
    $createdBrand = Brand::factory()->create();
    do {
        $updatedBrand = Brand::factory()->make();
    } while(Brand::where('name', $updatedBrand->name)->exists());

    $response = $this->put(route('brands.update', $createdBrand), [
        'name' => $updatedBrand->name,
    ]);

    $response->assertStatus(302);
    $this->assertDatabaseHas('brands', ['name' => $updatedBrand->name]);
});

test('a brand can be deleted', function () {
    $this->actingAs(User::factory()->administrator()->create());
    Exercise::factory()->create();
    $brand = Brand::factory()->create();

    $response = $this->delete(route('brands.destroy', $brand));

    $response->assertStatus(302);
    $this->assertDatabaseMissing('brands', ['id' => $brand->id]);
});