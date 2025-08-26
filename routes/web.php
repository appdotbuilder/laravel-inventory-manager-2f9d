<?php

use App\Http\Controllers\InventoryItemController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/health-check', function () {
    return response()->json([
        'status' => 'ok',
        'timestamp' => now()->toISOString(),
    ]);
})->name('health-check');

// Home page shows inventory for authenticated users, welcome page for guests
Route::get('/', function () {
    if (auth()->check()) {
        return app(InventoryItemController::class)->index(request());
    }
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    // Inventory management routes
    Route::resource('inventory', InventoryItemController::class, [
        'parameters' => ['inventory' => 'inventoryItem']
    ]);
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
