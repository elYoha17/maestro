<?php

use App\Models\Product;
use App\Models\User;

test('a product can be created', function () {
    $this->actingAs(User::factory()->administrator()->create());

    $productData = Product::factory()->make()->toArray();

    $response = $this->post(route('products.store'), $productData);

    $response->assertStatus(302);
    $this->assertDatabaseHas('products', $productData);
});

test('a product can be updated', function () {
    $this->actingAs(User::factory()->administrator()->create());
    
    $createdProduct = Product::factory()->create();

    $updatedData = Product::factory()->make()->except(['code', 'sku']);

    $response = $this->put(route('products.update', $createdProduct), $updatedData);

    $response->assertStatus(302);
    $this->assertDatabaseHas('products', [...$updatedData, 'id' => $createdProduct->id]);
});

test('a product can be deleted', function () {
    $this->actingAs(User::factory()->administrator()->create());

    $product = Product::factory()->create();

    $response = $this->delete(route('products.destroy', $product));

    $response->assertStatus(302);
    $this->assertDatabaseMissing('products', ['id' => $product->id]);
});