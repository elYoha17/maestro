<?php

namespace App\Contracts;

use App\Models\Product;
use Illuminate\Database\Eloquent\Collection;

interface ProductServiceInterface
{
    /**
     * Retrieves all products.
     *
     * @return Collection The collection of products.
     */
    public function getAll(): Collection;

    /**
     * Creates a new product with the provided data.
     *
     * @param array $data The data for creating the product.
     * @return Product The created product instance.
     */
    public function create(array $data): Product;

    /**
     * Updates an existing product with the provided data.
     *
     * @param int|Product $id The ID or instance of the product to update.
     * @param array $data The data for updating the product.
     * @return Product The updated product instance.
     */
    public function update(int|Product $id, array $data): Product;

    /**
     * Deletes a product by its ID or instance.
     *
     * @param int|Product $id The ID or instance of the product to delete.
     * @return bool True if the product was deleted, false otherwise.
     */
    public function delete(int|Product $id): bool;

}
