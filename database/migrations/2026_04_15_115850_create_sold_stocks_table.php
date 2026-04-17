<?php

use App\Models\Product;
use App\Models\Receivable;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('sold_stocks', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Product::class)->constrained();
            $table->foreignIdFor(Receivable::class)->constrained()->cascadeOnDelete();
            $table->integer('quantity', unsigned: true);
            $table->decimal('price', 15, 0);
            $table->timestamps();

            $table->unique(['receivable_id', 'product_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sold_stocks');
    }
};
