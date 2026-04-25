<?php

namespace App\Models;

use App\Actions\Product\GenerateProductCode;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'brand_id',
        'name',
        'sku',
        'price',
        'description',
    ];

    protected static function booted(): void
    {
        static::creating(function (Product $product) {
            $product->code = app(GenerateProductCode::class)->generate();
        });
    }
}
