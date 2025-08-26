<?php

use App\Models\InventoryItem;
use App\Models\User;

beforeEach(function () {
    $this->user = User::factory()->create();
    $this->actingAs($this->user);
});

it('allows authenticated user to view inventory index', function () {
    InventoryItem::factory()->count(5)->create();

    $response = $this->get(route('inventory.index'));

    $response->assertStatus(200);
    $response->assertInertia(fn ($page) => 
        $page->component('inventory/index')
             ->has('items.data', 5)
    );
});

it('allows user to create inventory item', function () {
    $itemData = [
        'name' => 'Test Item',
        'code' => 'TEST-001',
        'description' => 'Test description',
        'quantity' => 10,
        'unit_price' => 150000,
        'storage_location' => 'Test Location',
        'entry_date' => '2024-01-01',
    ];

    $response = $this->post(route('inventory.store'), $itemData);

    $response->assertRedirect();
    $this->assertDatabaseHas('inventory_items', [
        'name' => $itemData['name'],
        'code' => $itemData['code'],
        'description' => $itemData['description'],
        'quantity' => $itemData['quantity'],
        'unit_price' => $itemData['unit_price'],
        'storage_location' => $itemData['storage_location'],
    ]);
});

it('allows user to view inventory item', function () {
    $item = InventoryItem::factory()->create();

    $response = $this->get(route('inventory.show', $item));

    $response->assertStatus(200);
    $response->assertInertia(fn ($page) => 
        $page->component('inventory/show')
             ->where('item.id', $item->id)
    );
});

it('allows user to update inventory item', function () {
    $item = InventoryItem::factory()->create();
    
    $updateData = [
        'name' => 'Updated Item',
        'code' => $item->code,
        'description' => 'Updated description',
        'quantity' => 20,
        'unit_price' => 200000,
        'storage_location' => 'Updated Location',
        'entry_date' => '2024-01-01',
    ];

    $response = $this->put(route('inventory.update', $item), $updateData);

    $response->assertRedirect();
    $this->assertDatabaseHas('inventory_items', [
        'id' => $item->id,
        'name' => $updateData['name'],
        'code' => $updateData['code'],
        'description' => $updateData['description'],
        'quantity' => $updateData['quantity'],
        'unit_price' => $updateData['unit_price'],
        'storage_location' => $updateData['storage_location'],
    ]);
});

it('allows user to delete inventory item', function () {
    $item = InventoryItem::factory()->create();

    $response = $this->delete(route('inventory.destroy', $item));

    $response->assertRedirect();
    $this->assertDatabaseMissing('inventory_items', ['id' => $item->id]);
});

it('validates inventory code uniqueness', function () {
    InventoryItem::factory()->create(['code' => 'UNIQUE-001']);

    $itemData = [
        'name' => 'Test Item',
        'code' => 'UNIQUE-001',
        'description' => 'Test description',
        'quantity' => 10,
        'unit_price' => 150000,
        'storage_location' => 'Test Location',
        'entry_date' => '2024-01-01',
    ];

    $response = $this->post(route('inventory.store'), $itemData);

    $response->assertSessionHasErrors(['code']);
});

it('supports inventory search functionality', function () {
    InventoryItem::factory()->create(['name' => 'Laptop ASUS', 'code' => 'LTP-001']);
    InventoryItem::factory()->create(['name' => 'Mouse Logitech', 'code' => 'MSE-002']);

    $response = $this->get(route('inventory.index', ['search' => 'Laptop']));

    $response->assertStatus(200);
    $response->assertInertia(fn ($page) => 
        $page->component('inventory/index')
             ->has('items.data', 1)
    );
});

it('supports inventory location filter', function () {
    InventoryItem::factory()->create(['storage_location' => 'Gudang A']);
    InventoryItem::factory()->create(['storage_location' => 'Gudang B']);
    InventoryItem::factory()->create(['storage_location' => 'Gudang A']);

    $response = $this->get(route('inventory.index', ['location' => 'Gudang A']));

    $response->assertStatus(200);
    $response->assertInertia(fn ($page) => 
        $page->component('inventory/index')
             ->has('items.data', 2)
    );
});

it('redirects guests from inventory routes', function () {
    auth()->logout();

    $this->get(route('inventory.index'))->assertRedirect(route('login'));
    $this->get(route('inventory.create'))->assertRedirect(route('login'));
    $this->post(route('inventory.store'), [])->assertRedirect(route('login'));
});

it('shows inventory on home page for authenticated users', function () {
    InventoryItem::factory()->count(3)->create();

    $response = $this->get(route('home'));

    $response->assertStatus(200);
    $response->assertInertia(fn ($page) => 
        $page->component('inventory/index')
             ->has('items.data', 3)
    );
});

it('shows welcome page for guests', function () {
    auth()->logout();

    $response = $this->get(route('home'));

    $response->assertStatus(200);
    $response->assertInertia(fn ($page) => 
        $page->component('welcome')
    );
});