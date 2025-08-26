<?php

namespace Database\Seeders;

use App\Models\InventoryItem;
use Illuminate\Database\Seeder;

class InventoryItemSeeder extends Seeder
{
    /**
     * Run the database seeder.
     */
    public function run(): void
    {
        $items = [
            [
                'name' => 'Laptop ASUS VivoBook',
                'code' => 'LTP-001',
                'description' => 'Laptop ASUS VivoBook 14 inch dengan prosesor Intel Core i5, RAM 8GB, SSD 256GB',
                'quantity' => 15,
                'unit_price' => 8500000,
                'storage_location' => 'Gudang A',
                'entry_date' => '2024-01-15',
            ],
            [
                'name' => 'Printer Canon Pixma',
                'code' => 'PRT-002',
                'description' => 'Printer Canon Pixma G3020 dengan sistem tinta kontinyu',
                'quantity' => 8,
                'unit_price' => 2750000,
                'storage_location' => 'Rak 1',
                'entry_date' => '2024-01-20',
            ],
            [
                'name' => 'Mouse Logitech M100',
                'code' => 'MSE-003',
                'description' => 'Mouse kabel Logitech M100 dengan sensor optik',
                'quantity' => 25,
                'unit_price' => 150000,
                'storage_location' => 'Lantai 2',
                'entry_date' => '2024-02-01',
            ],
            [
                'name' => 'Keyboard Mechanical',
                'code' => 'KBD-004',
                'description' => 'Keyboard mechanical dengan switch blue, backlight RGB',
                'quantity' => 12,
                'unit_price' => 450000,
                'storage_location' => 'Lantai 2',
                'entry_date' => '2024-02-05',
            ],
            [
                'name' => 'Monitor LG 24 inch',
                'code' => 'MON-005',
                'description' => 'Monitor LG 24MK430H-B IPS 24 inch Full HD',
                'quantity' => 6,
                'unit_price' => 1850000,
                'storage_location' => 'Gudang B',
                'entry_date' => '2024-02-10',
            ],
            [
                'name' => 'Webcam Logitech C270',
                'code' => 'WBC-006',
                'description' => 'Webcam HD 720p dengan mikrofon built-in',
                'quantity' => 20,
                'unit_price' => 350000,
                'storage_location' => 'Rak 2',
                'entry_date' => '2024-02-12',
            ],
            [
                'name' => 'Hard Disk External 1TB',
                'code' => 'HDD-007',
                'description' => 'Hard disk external Seagate Backup Plus Slim 1TB USB 3.0',
                'quantity' => 18,
                'unit_price' => 750000,
                'storage_location' => 'Rak 1',
                'entry_date' => '2024-02-15',
            ],
            [
                'name' => 'Speaker Bluetooth JBL',
                'code' => 'SPK-008',
                'description' => 'Speaker portable JBL Go 3 dengan koneksi Bluetooth 5.1',
                'quantity' => 10,
                'unit_price' => 550000,
                'storage_location' => 'Gudang C',
                'entry_date' => '2024-02-18',
            ],
            [
                'name' => 'Flash Drive USB 32GB',
                'code' => 'USB-009',
                'description' => 'USB Flash Drive SanDisk Cruzer Blade 32GB USB 2.0',
                'quantity' => 50,
                'unit_price' => 85000,
                'storage_location' => 'Lantai 1',
                'entry_date' => '2024-02-20',
            ],
            [
                'name' => 'Router WiFi TP-Link',
                'code' => 'RTR-010',
                'description' => 'Router wireless TP-Link Archer C6 AC1200 dual band',
                'quantity' => 4,
                'unit_price' => 650000,
                'storage_location' => 'Gudang A',
                'entry_date' => '2024-02-22',
            ],
        ];

        foreach ($items as $item) {
            InventoryItem::create($item);
        }

        // Create additional random items
        InventoryItem::factory()->count(20)->create();
    }
}