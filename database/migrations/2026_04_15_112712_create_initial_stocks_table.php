<?php

use App\Models\Exercise;
use App\Models\Product;
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
        Schema::create('initial_stocks', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Exercise::class)->constrained()->cascadeOnDelete();
            $table->foreignIdFor(Product::class)->constrained();
            $table->integer('quantity', unsigned: true);
            $table->decimal('cost', 15, 0);
            $table->decimal('price', 15, 0);
            $table->timestamps();

            $table->unique(['exercise_id', 'product_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('initial_stocks');
    }
};
