<?php

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
        Schema::create('inventory_items', function (Blueprint $table) {
            $table->id();
            $table->string('name')->comment('Nama barang');
            $table->string('code')->unique()->comment('Kode barang yang unik');
            $table->text('description')->nullable()->comment('Deskripsi barang');
            $table->integer('quantity')->default(0)->comment('Jumlah stok');
            $table->decimal('unit_price', 12, 2)->comment('Harga satuan');
            $table->string('storage_location')->comment('Lokasi penyimpanan');
            $table->date('entry_date')->comment('Tanggal masuk');
            $table->timestamps();
            
            // Indexes for performance
            $table->index('name');
            $table->index('code');
            $table->index('storage_location');
            $table->index('entry_date');
            $table->index(['storage_location', 'entry_date']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('inventory_items');
    }
};