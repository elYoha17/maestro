<?php

use App\Models\Activity;
use App\Models\Purchase;
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
        Schema::create('purchase_payment', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Activity::class)->constrained()->cascadeOnDelete();
            $table->foreignIdFor(Purchase::class)->constrained()->cascadeOnDelete();
            $table->decimal('amount', 15, 0);
            $table->decimal('charge', 15, 0);
            $table->decimal('cash_out', 15, 0)->default(0);
            $table->timestamps();

            $table->unique(['activity_id', 'purchase_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('purchase_payment');
    }
};
