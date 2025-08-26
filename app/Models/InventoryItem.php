<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\InventoryItem
 *
 * @property int $id
 * @property string $name
 * @property string $code
 * @property string|null $description
 * @property int $quantity
 * @property float $unit_price
 * @property string $storage_location
 * @property string $entry_date
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|InventoryItem newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|InventoryItem newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|InventoryItem query()
 * @method static \Illuminate\Database\Eloquent\Builder|InventoryItem whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|InventoryItem whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|InventoryItem whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|InventoryItem whereEntryDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|InventoryItem whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|InventoryItem whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|InventoryItem whereQuantity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|InventoryItem whereStorageLocation($value)
 * @method static \Illuminate\Database\Eloquent\Builder|InventoryItem whereUnitPrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|InventoryItem whereUpdatedAt($value)
 * @method static \Database\Factories\InventoryItemFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class InventoryItem extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'code',
        'description',
        'quantity',
        'unit_price',
        'storage_location',
        'entry_date',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'quantity' => 'integer',
        'unit_price' => 'decimal:2',
        'entry_date' => 'date',
    ];
}