<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreInventoryItemRequest;
use App\Http\Requests\UpdateInventoryItemRequest;
use App\Models\InventoryItem;
use Illuminate\Http\Request;
use Inertia\Inertia;

class InventoryItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = InventoryItem::query();

        // Search functionality
        if ($request->filled('search')) {
            $searchTerm = $request->get('search');
            $query->where(function ($q) use ($searchTerm) {
                $q->where('name', 'LIKE', "%{$searchTerm}%")
                  ->orWhere('code', 'LIKE', "%{$searchTerm}%");
            });
        }

        // Filter by storage location
        if ($request->filled('location')) {
            $query->where('storage_location', $request->get('location'));
        }

        $items = $query->latest()->paginate(10);

        // Get unique storage locations for filter dropdown
        $locations = InventoryItem::distinct()
            ->orderBy('storage_location')
            ->pluck('storage_location');

        return Inertia::render('inventory/index', [
            'items' => $items,
            'locations' => $locations,
            'filters' => [
                'search' => $request->get('search'),
                'location' => $request->get('location'),
            ],
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('inventory/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreInventoryItemRequest $request)
    {
        $item = InventoryItem::create($request->validated());

        return redirect()->route('inventory.show', $item)
            ->with('success', 'Item inventaris berhasil ditambahkan.');
    }

    /**
     * Display the specified resource.
     */
    public function show(InventoryItem $inventoryItem)
    {
        return Inertia::render('inventory/show', [
            'item' => $inventoryItem
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(InventoryItem $inventoryItem)
    {
        return Inertia::render('inventory/edit', [
            'item' => $inventoryItem
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateInventoryItemRequest $request, InventoryItem $inventoryItem)
    {
        $inventoryItem->update($request->validated());

        return redirect()->route('inventory.show', $inventoryItem)
            ->with('success', 'Item inventaris berhasil diperbarui.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(InventoryItem $inventoryItem)
    {
        $inventoryItem->delete();

        return redirect()->route('inventory.index')
            ->with('success', 'Item inventaris berhasil dihapus.');
    }
}